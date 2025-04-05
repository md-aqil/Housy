'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('construction');
  const [hoveredBank, setHoveredBank] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const calculateTimeLeft = () => {
    const difference = +new Date('2025-04-10T00:00:00') - +new Date();
    let timeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const paymentPlans = [
    {
      id: 'construction',
      title: 'Construction-linked Plan',
      description: 'Payment in phases based on construction progress',
      benefits: [
        'Pay only as construction milestones are achieved',
        'Lower initial investment',
        'Transparent progress tracking',
      ],
    },
    {
      id: 'downpayment',
      title: 'Down Payment Plan',
      description: 'Pay upfront and get significant discounts',
      benefits: [
        'Immediate ownership benefits',
        'Best price available',
        'No future payment worries',
      ],
    },
    {
      id: 'loan',
      title: 'Loan EMI Plan',
      description: 'Easy financing through partner banks',
      benefits: [
        'Pre-approved loan options',
        'Flexible tenure up to 30 years',
        'Competitive interest rates',
      ],
    },
  ];

  const charges = [
    { name: 'Base Price', amount: '₹15,00,000' },
    { name: 'GST (5%)', amount: '₹75,000' },
    { name: 'Registration', amount: '₹1,50,000' },
    { name: 'Maintenance (1 year)', amount: '₹30,000' },
    { name: 'Parking', amount: '₹2,50,000' },
  ];

  const partnerBanks = [
    { name: 'HDFC Bank', rate: '8.4%', logo: '/hdfc.png' },
    { name: 'SBI', rate: '8.1%', logo: '/sbi.png' },
    { name: 'ICICI', rate: '8.35%', logo: '/icici.png' },
    { name: 'Axis Bank', rate: '8.5%', logo: '/axis.png' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-8">
        {/* Charges Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-5 bg-gradient-to-r from-[#1D234F] to-[#283891]">
            <h3 className="text-lg font-semibold text-white">Breakdown of Charges</h3>
          </div>
          <div className="px-6 py-4">
            <ul className="-mb-8 divide-y divide-gray-200">
              {charges.map((charge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-4 flex justify-between"
                >
                  <p className="text-sm font-medium text-gray-900">{charge.name}</p>
                  <p className="text-sm font-semibold text-gray-900">{charge.amount}</p>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 border-t border-gray-200 pt-4 flex justify-between">
              <p className="text-base font-medium text-gray-900">Total</p>
              <p className="text-xl font-bold text-[#FF6B6B]">₹19,05,000</p>
            </div>
          </div>
        </motion.div>

        {/* Partner Banks */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-5 bg-gradient-to-r from-[#1D234F] to-[#283891]">
            <h3 className="text-lg font-semibold text-white">Pre-approved Loans Available From</h3>
          </div>
          <div className="px-6 py-4 grid grid-cols-2 gap-4">
            {partnerBanks.map((bank, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredBank(index)}
                onMouseLeave={() => setHoveredBank(null)}
                animate={{
                  scale: hoveredBank === index ? 1.03 : 1,
                  boxShadow: hoveredBank === index ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
                }}
                transition={{ duration: 0.2 }}
                className="p-4 bg-gray-50 rounded-lg border relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D234F] to-[#283891] opacity-0 transition-opacity duration-300"
                  style={{ opacity: hoveredBank === index ? 0.1 : 0 }}></div>
                <div className="relative z-10 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white border flex items-center justify-center font-bold text-[#1D234F]">
                    {bank.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className={`text-sm font-medium ${hoveredBank === index ? 'text-[#1D234F]' : 'text-gray-900'}`}>
                      {bank.name}
                    </p>
                    <p className={`text-sm ${hoveredBank === index ? 'text-[#283891]' : 'text-gray-500'}`}>
                      Rate: {bank.rate} p.a.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="px-6 mt-4 text-sm text-gray-500">
            * Rates subject to change. Actual rates based on credit profile.
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        {/* Payment Plans */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-5 bg-gradient-to-r from-[#1D234F] to-[#283891]">
            <h3 className="text-lg font-semibold text-white">Payment Plan Options</h3>
          </div>

          <div className="px-6 py-4">
            <nav className="flex space-x-8 border-b border-gray-200">
              {paymentPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActiveTab(plan.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === plan.id
                      ? 'border-[#FF6B6B] text-[#FF6B6B]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {plan.title.split(' ')[0]}
                </button>
              ))}
            </nav>
            {paymentPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTab === plan.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`pt-6 ${activeTab === plan.id ? 'block' : 'hidden'}`}
              >
                <h4 className="text-lg font-semibold text-gray-900">{plan.title}</h4>
                <p className="mt-1 text-gray-600">{plan.description}</p>
                <ul className="mt-4 space-y-3">
                  {plan.benefits.map((benefit, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }} className="flex items-start">
                      <div className="h-5 w-5 text-[#FF6B6B] mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-gray-700">{benefit}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Savings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl shadow-xl p-8 bg-gradient-to-br from-[#1D234F] to-[#283891]"
        >
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">🎉 Your Exclusive Savings</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-indigo-400">
                <div>
                  <p className="text-indigo-200 text-sm">Market Price</p>
                  <p className="text-gray-300 line-through text-lg">₹20,00,000</p>
                </div>
                <div className="text-right">
                  <p className="text-indigo-200 text-sm">Housyy Deal Price</p>
                  <p className="text-white text-2xl font-bold">₹15,00,000</p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-white/10 p-4 rounded-lg border border-white/20">
                <div className="flex items-center">
                  <div className="bg-[#FF6B6B] rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-white">You save ₹5,00,000 (25% below market)</p>
                </div>
              </motion.div>

              <div className="pt-4">
                <p className="text-indigo-200 mb-3">⏳ Limited time offer ends in:</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hrs', value: timeLeft.hours },
                    { label: 'Mins', value: timeLeft.minutes },
                    { label: 'Secs', value: timeLeft.seconds },
                  ].map(({ label, value }, i) => (
                    <motion.div
                      key={i}
                      className="bg-[#FF6B6B]/20 p-3 text-center rounded-lg border border-[#FF6B6B]/30 text-white"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <p className="text-xl font-bold">{value}</p>
                      <p className="text-indigo-200 text-xs uppercase">{label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFA726] text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                🚀 Explore Hot Deals Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
