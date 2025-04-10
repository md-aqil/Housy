"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      stat: "₹20CR",
      label: "Hot Deals Closed",
      title: "Exclusive Hot Deals",
      description: "Access below-market properties including distressed assets and pre-launch deals.",
      icon: "🔥",
      colorClass: "from-red-50 to-red-100",
      buttonText: "View Deals"
    },
    {
      id: 2,
      stat: "500+",
      label: "Verified Properties",
      title: "Property Verification",
      description: "360° verification covering legal docs and construction quality.",
      icon: "✅",
      colorClass: "from-blue-50 to-blue-100",
      buttonText: "Verify Now"
    },
    {
      id: 3,
      
     
      title: "Smart Buyer Desk",
      description: "Coming Soon",
      icon: "👨‍💼",
      colorClass: "from-green-50 to-green-100",
      buttonText: "Coming Soon"
    },
    
    {
      id: 4,
      title: "Fractional Ownership",
      description: "Coming Soon",
      icon: "🏢",
      colorClass: "from-purple-50 to-purple-100",
      buttonText: "Coming Soon"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardAnimation = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      y: -10,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      ref={ref}
      className="h-container x-round-card overflow-hidden"
    >
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-5 px-2"
      >
        <motion.div 
          className="flex items-center gap-3 mb-2"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
       
        </motion.div>
        <h2 className="title">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Our Services
          </motion.span>
         
        </h2>
      </motion.header>

      {/* Services Grid - Horizontal Scrolling on Mobile */}
      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : {}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardAnimation}
              whileHover="hover"
              className="h-full"
            >
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${service.colorClass} border border-gray-200/50 shadow-sm hover:shadow-lg transition-all h-full flex flex-col`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                      {service.stat}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-600 uppercase tracking-wider">
                      {service.label}
                    </p>
                  </div>
                  <motion.span 
                    className="text-3xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: service.id * 0.2
                    }}
                  >
                    {service.icon}
                  </motion.span>
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  className="mt-auto"
                  whileHover={{ translateY: -3 }}
                >
                  <motion.button
                    variants={buttonAnimation}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className={`w-full px-5 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r ${service.id === 1 ? 'from-red-500 to-red-600' : 
                      service.id === 2 ? 'from-blue-500 to-blue-600' :
                      service.id === 3 ? 'from-green-500 to-green-600' :
                      'from-purple-500 to-purple-600'} shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  >
                    {service.buttonText}
                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity
                        }
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;