"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';


const testimonials = [
  {
    id: 1,
    quote: "Working with ABC Realty to find my dream home was a breeze!",
    author: "Sarah M.",
    role: "Property Consultation",
    avatar: "/u1.png",
  },
  {
    id: 2,
    quote: "Sarah guided me smoothly through every step of the buying process.",
    author: "Esther Howard",
    role: "Buyer",
    avatar: "/u2.png",
  },
  {
    id: 3,
    quote: "Sarah truly understood my needs and made the process seamless.",
    author: "Michael B.",
    role: "Investor",
    avatar: "/u1.png",
  },
  {
    id: 4,
    quote: "Thanks to Sarah, I found the perfect home at a great price!",
    author: "Linda J.",
    role: "Home Buyer",
    avatar: "/u2.png",
  },
  {
    id: 5,
    quote: "Professional, attentive, and knowledgeable. Highly recommend!",
    author: "Kevin T.",
    role: "Seller",
    avatar: "/u1.png",
  },
];

const CARD_WIDTH = 340; // card width + margin

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = () => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden x-round-card h-container">
      <div className="max-w-7xl mx-auto">
        
          <h2 className="title">
            Our <span className="text-red-600">Customers</span> Think We are the Best
          </h2>
       

        {/* Carousel Viewport */}
        <div className="relative">
          <div className="overflow-hidden py-2">
            <motion.div
              className="flex gap-4"
              animate={{ x: -index * CARD_WIDTH }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) handleNext();
                else if (info.offset.x > 50) handlePrev();
              }}
            >
              {testimonials.concat(testimonials).map((testimonial, i) => (
                <div
                  key={i}
                  style={{ minWidth: CARD_WIDTH }}
                  className="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.02] transition-transform"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl text-red-600 font-serif">&quot;</span>
                    {renderStars()}
                  </div>
                  <p className="text-gray-700 text-sm mb-10">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full mr-3"
                     width={600} height={400}
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-4 gap-4">
          
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-red-600 text-white shadow flex items-center justify-center hover:bg-red-700 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-red-600 text-white shadow flex items-center justify-center hover:bg-red-700 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;