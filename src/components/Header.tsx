import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Update current path when component mounts and when URL changes
  useEffect(() => {
    // Set initial path
    setCurrentPath(window.location.pathname);
    
    // Find the initial active index
    const index = navItems.findIndex(item => 
      currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href))
    );
    if (index !== -1) {
      setActiveIndex(index);
    }

    // Listen for URL changes
    const handleUrlChange = () => {
      const newPath = window.location.pathname;
      setCurrentPath(newPath);
      setMenuOpen(false); // Close mobile menu on navigation
      
      // Update active index
      const newIndex = navItems.findIndex(item => 
        newPath === item.href || (item.href !== "/" && newPath.startsWith(item.href))
      );
      if (newIndex !== -1) {
        setActiveIndex(newIndex);
      }
    };

    // Create a MutationObserver to detect URL changes
    const observer = new MutationObserver(() => {
      if (currentPath !== window.location.pathname) {
        handleUrlChange();
      }
    });

    // Start observing
    observer.observe(document, { subtree: true, childList: true });

    // Add event listener for popstate (back/forward navigation)
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, [currentPath]);

  // Update indicator position whenever activeIndex changes
  useEffect(() => {
    updateIndicatorPosition();
  }, [activeIndex]);

  // Update indicator position on window resize
  useEffect(() => {
    window.addEventListener('resize', updateIndicatorPosition);
    return () => {
      window.removeEventListener('resize', updateIndicatorPosition);
    };
  }, []);

  const updateIndicatorPosition = () => {
    const activeElement = navItemRefs.current[activeIndex];
    const indicator = indicatorRef.current;
    
    if (activeElement && indicator) {
      const rect = activeElement.getBoundingClientRect();
      indicator.style.width = `${rect.width}px`;
      indicator.style.transform = `translateX(${activeElement.offsetLeft}px)`;
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Hot Deals", href: "/hot-deals" },
    { label: "Smart Buyer Desk", href: "/smart-buyer" },
    { label: "Property Verification", href: "/property-verification" },
    { label: "Property Single", href: "/property-single" },
  ];

  // Check if a nav item is active
  const isActive = (href: string) => {
    return currentPath === href || 
           (href !== "/" && currentPath.startsWith(href));
  };

  // Handle manual navigation and animation
  const handleNavClick = (index: number, href: string) => {
    setActiveIndex(index);
    // Don't set current path immediately to allow animation to complete
    setTimeout(() => {
      if (href !== currentPath) {
        window.location.href = href;
      }
    }, 300);
  };

  return (
    <header className="py-4 h-container">
      <nav className="relative flex items-center justify-between flex-wrap bg-[#ffffff1a] rounded-full py-4 px-6 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <a href="/" className="block">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8839cf025d5bc19d61fa9cea2980ebd05485c7fe"
              className="h-10 w-auto"
              alt="Housyy Logo"
            />
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:items-center md:gap-8 relative">
          {navItems.map((item, index) => {
            const active = index === activeIndex;
            return (
              <a
                key={index}
                ref={el => navItemRefs.current[index] = el}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(index, item.href);
                }}
                className={`relative text-white text-lg focus:outline-none  rounded-sm px-2 py-2 transition-all duration-300 ${
                  active ? "font-semibold" : "hover:text-opacity-80"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          {/* Animated indicator */}
          <div 
            ref={indicatorRef}
            className="absolute -bottom-[16px] left-0 h-0.5 bg-red-500 rounded-full transition-all duration-300 ease-in-out"
          />
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#invest"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Invest with Housyy
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none p-2 rounded-full hover:bg-[#ffffff15] transition-colors duration-200"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 w-full bg-blue-950 px-6 py-4 rounded-2xl transition-all duration-300 ease-in-out z-50 shadow-xl ${
            menuOpen ? "opacity-100 max-h-[400px] transform scale-y-100 origin-top" : "opacity-0 max-h-0 overflow-hidden transform scale-y-95 origin-top"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(index, item.href);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center justify-between text-white text-base p-2 rounded transition-all duration-200 ${
                    active ? "bg-[#ffffff15] font-semibold" : "hover:bg-[#ffffff0a]"
                  }`}
                >
                  <span>{item.label}</span>
                  {active ? (
                    <span className="text-red-500">
                      <ChevronRight size={16} />
                    </span>
                  ) : null}
                </a>
              );
            })}
            <a
              href="#invest"
              className="mt-2 inline-block w-full text-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transform transition-all duration-300 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Invest with Housyy
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;