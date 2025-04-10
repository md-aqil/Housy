
import React from 'react';
import { User, Search, Menu } from 'lucide-react';
import Link from 'next/link';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">HomeFind</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/buy" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Buy
            </Link>
            <Link href="/rent" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Rent
            </Link>
            <Link href="/sell" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Sell
            </Link>
            <Link href="/agents" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Agents
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
