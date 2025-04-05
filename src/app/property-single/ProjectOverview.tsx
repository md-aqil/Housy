// components/ProjectOverview.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectOverview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const slideVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">

      


        {/* Details grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Location
              </h3>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                3BHK Apartment in Bangalore – ₹75 Lakhs Below Market!
              </p>
            </div>
          </motion.div>

          {/* RERA Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                <line x1="15" y1="9" x2="9" y2="15"></line>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                RERA Registration No.
              </h3>
              <a 
                href="https://example.com/rera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-blue-600 hover:underline transition-colors duration-300"
              >
                KA-RERA/PRJ/12345
              </a>
            </div>
          </motion.div>

          {/* Developer Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Developer Name & Credibility
              </h3>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                ABC Developers (15+ years experience, 25+ completed projects)
              </p>
            </div>
          </motion.div>

          {/* Status Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Project Status
              </h3>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Ready-to-Move
              </p>
            </div>
          </motion.div>

          {/* Completion Date Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Estimated Completion Date
              </h3>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                January 2026
              </p>
            </div>
          </motion.div>

          {/* Construction Stage Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Current Construction Stage
              </h3>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Finishing Stage (90% completed)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>

    
  );
};

export default ProjectOverview;