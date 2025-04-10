import React, { useEffect } from 'react';

import { CheckCircle } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const pricingData = [
  {
    title: 'Basic Verification Package',
    price: '₹5,000',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB data per user',
      'Basic chat and email support',
    ],
    popular: true,
  },
  {
    title: 'Advanced Verification Package',
    price: '₹10,000',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB data per user',
      'Priority chat and email support',
    ],
    popular: false,
  },
  {
    title: 'Custom Package',
    price: 'Get Quote',
    features: [
      'Tailored services for unique properties like agricultural land or large commercial spaces.',
    ],
    popular: false,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};




const PricingSection = () => {

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


  return (
  <motion.div
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={containerVariants}
       className="w-full"
     >

     

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {pricingData.map((plan, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col justify-between rounded-3xl border border-gray-200 bg-white shadow-xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 group hover:shadow-2xl hover:-translate-y-1 ${
              plan.popular ? 'border-red-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-5 right-5 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium animate-bounce">
                Most Popular
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-[#101828] font-inter mb-2 text-center">
                {plan.title}
              </h3>
              <p className="text-center text-[#667085] mb-4">
                {plan.price === 'Get Quote' ? plan.features[0] : 'What’s included'}
              </p>
              {plan.price !== 'Get Quote' && (
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#667085]">
                      <CheckCircle className="text-green-500 mt-1" size={20} />
                      <span className="text-sm leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-8">
              <button className="w-full py-3 px-6 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700 transition duration-300 shadow-md">
                {plan.price}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingSection;


