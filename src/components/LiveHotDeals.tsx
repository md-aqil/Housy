"use client"
import React, { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";

interface PropertyDeal {
  id: number;
  title: string;
  location: string;
  image: string;
  isLimitedTimeOffer: boolean;
  isVerified: boolean;
  isReraRegistered: boolean;
  isPhysicalSurveyDone: boolean;
  isLockDeal: boolean;
  price: string;
  marketPrice: string;
  savings: string;
  savingsPercentage: string;
}

const propertyDeals: PropertyDeal[] = [

  
  {
    id: 1,
    title: "3 BHK Apartment – Zirakpur",
    location: "Sushma Downtown, VIP Road",
    image: "/home-1.png",
    isLimitedTimeOffer: true,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: true,
    isLockDeal: true,
    price: "₹68 Lakhs",
    marketPrice: "₹82 Lakhs",
    savings: "₹14 Lakhs",
    savingsPercentage: "18% below market"
  },



  {
    id: 2,
    title: "4 BHK Villa – Chandigarh",
    location: "Royal Estates, Sector 15",
    image: "/home-1.png",
    isLimitedTimeOffer: true,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: false,
    isLockDeal: true,
    price: "₹1.2 Crore",
    marketPrice: "₹1.35 Crore",
    savings: "₹15 Lakhs",
    savingsPercentage: "11% below market"
  },
  {
    id: 3,
    title: "2 BHK Apartment – Panchkula",
    location: "Green Valley Heights, Sector 20",
    image: "/home-1.png",
    isLimitedTimeOffer: false,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: true,
    isLockDeal: false,
    price: "₹45 Lakhs",
    marketPrice: "₹52 Lakhs",
    savings: "₹7 Lakhs",
    savingsPercentage: "13% below market"
  },
  {
    id: 4,
    title: "3 BHK Penthouse – Mohali",
    location: "Sunshine Towers, Phase 8",
    image: "/home-1.png",
    isLimitedTimeOffer: true,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: true,
    isLockDeal: true,
    price: "₹95 Lakhs",
    marketPrice: "₹1.1 Crore",
    savings: "₹15 Lakhs",
    savingsPercentage: "14% below market"
  }
];

const LiveHotDeals: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardWidth(360);
        setVisibleCount(3);
      } else if (width >= 768) {
        setCardWidth(330);
        setVisibleCount(2);
      } else {
        setCardWidth(width * 0.85);
        setVisibleCount(1);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handleNext = () => {
    if (isDragging) return;
    setCurrentIndex((prev) => 
      prev >= propertyDeals.length - visibleCount ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (isDragging) return;
    setCurrentIndex((prev) => 
      prev <= 0 ? propertyDeals.length - visibleCount : prev - 1
    );
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  return (

      <div className="x-round-card h-container">
        <div className="flex justify-between items-center w-full">
          <h2 className="title">
            Live Hot Deals
          </h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ED1C24] bg-opacity-70 flex items-center justify-center hover:bg-opacity-100 transition-all"
              aria-label="Previous property"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ED1C24] flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="Next property"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden w-full py-2">
          <motion.div
            className="flex"
            style={{
              width: `${cardWidth * propertyDeals.length}px`,
            }}
            animate={{
              x: -currentIndex * cardWidth,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{
              left: -((propertyDeals.length - visibleCount) * cardWidth),
              right: 0,
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {propertyDeals.map((property, i) => (
              <div
                key={property.id}
                style={{ width: `${cardWidth}px` }}
                className="px-2 flex-shrink-0"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full flex flex-col">
                  <div className="relative p-3">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-[180px] sm:h-[200px] object-cover rounded-xl"
                    />
                    {property.isLimitedTimeOffer && (
                      <div className="absolute top-4 left-4 bg-[#00B579] px-2 py-1 rounded-full">
                        <span className="text-white text-xs uppercase tracking-wider font-inter">
                          limited time offer
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col relative">
                    <h3 className="text-black text-lg sm:text-xl font-medium font-inter leading-tight">
                      {property.title}
                    </h3>
                    <p className="text-black text-opacity-40 text-sm font-inter mt-1">
                      {property.location}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {property.isVerified && (
                        <span className="text-black text-opacity-70 text-xs sm:text-sm font-inter">
                          ✅ Title Verified
                        </span>
                      )}
                      {property.isReraRegistered && (
                        <span className="text-black text-opacity-70 text-xs sm:text-sm font-inter">
                          🏛️ RERA Registered
                        </span>
                      )}
                      {property.isPhysicalSurveyDone && (
                        <span className="text-black text-opacity-70 text-xs sm:text-sm font-inter">
                          📸 Physical Survey Done
                        </span>
                      )}
                      {property.isLockDeal && (
                        <span className="text-black text-opacity-70 text-xs sm:text-sm font-inter">
                          🔐 Lock Deal
                        </span>
                      )}
                    </div>
                    <div className="mt-4 pt-3 border-t border-dashed border-[#C7C7C7]">
                      <p className="font-poppins text-sm sm:text-base">Price: {property.price}</p>
                      <p className="font-poppins text-sm sm:text-base mt-1">
                        Market Price: {property.marketPrice}
                      </p>
                      <p className="text-black text-opacity-80 font-poppins text-xs sm:text-sm mt-1">
                        Save {property.savings} ({property.savingsPercentage})
                      </p>
                    </div>
                    <button className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#ED1C24] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.8439 3.65547C19.8439 3.46197 19.7713 3.29265 19.6262 3.14752C19.481 3.00239 19.3117 2.92983 19.1182 2.92983H10.991C10.7975 2.92983 10.6282 3.00239 10.4831 3.14752C10.3379 3.29265 10.2654 3.46197 10.2654 3.65547C10.2654 3.84898 10.3379 4.0062 10.4831 4.12714C10.6282 4.24808 10.7975 4.30855 10.991 4.30855H17.4492L3.66203 18.0958C3.5169 18.2409 3.44434 18.4102 3.44434 18.6037C3.44434 18.7972 3.5169 18.9665 3.66203 19.1117C3.80716 19.2568 3.97647 19.3293 4.16998 19.3293C4.36348 19.3293 4.5328 19.2568 4.67793 19.1117L18.4651 5.32445V11.7827C18.4651 11.9762 18.5256 12.1455 18.6465 12.2906C18.7675 12.4357 18.9247 12.5083 19.1182 12.5083C19.3117 12.5083 19.481 12.4357 19.6262 12.2906C19.7713 12.1455 19.8439 11.9762 19.8439 11.7827V3.65547Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    
  );
};

export default LiveHotDeals;