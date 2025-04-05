"use client";
import { motion } from "framer-motion";
import React from "react";

const FraudReportSection = () => {
  const challenges = [
    {
      id: 1,
      number: "01",
      title: "Misleading Details",
      description: "You don't get the full picture about property conditions or legal status.",
      color: "from-blue-900 to-blue-800"
    },
    {
      id: 2,
      number: "02",
      title: "Overpriced",
      description: "Prices are inflated for extra commission with hidden markups.",
      color: "from-purple-900 to-purple-800"
    },
    {
      id: 3,
      number: "03",
      title: "Legal Risks",
      description: "Fake NOCs, missing approvals, and hidden property disputes.",
      color: "from-amber-900 to-amber-800"
    },
    {
      id: 4,
      number: "04",
      title: "No After-Support",
      description: "Left struggling with paperwork, loans & resale on your own.",
      color: "from-red-900 to-red-800"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br h-container x-round-card">
      {/* Floating background elements */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:max-w-xs"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
              />
              <span className="text-lg font-medium text-gray-700 uppercase tracking-wider">
                Fraud Report
              </span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                3.5M+
              </span> Victims
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              People have fallen victim to real estate scams, losing their hard-earned money to fraudulent companies. Scammers lure buyers with fake property deals and false promises of high returns.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative md:text-left"
            >
            
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4  px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Explore Hot Deals
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="title mb-5"
            >
              Have You Faced These <span className="text-red-600">Challenges</span> With Property Dealers?
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br ${challenge.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all h-full`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-4">
                      <span className="text-2xl font-bold text-white">{challenge.number}</span>
                      <h4 className="text-2xl font-bold text-white">{challenge.title}</h4>
                      <p className="text-gray-200">{challenge.description}</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        className="text-white"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              
              {/* Additional Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className=""
              >
                <h4 className="text-2xl font-bold text-dark mb-4">The List Goes On...</h4>
                
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudReportSection;