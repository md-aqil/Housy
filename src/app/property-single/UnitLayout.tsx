import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, FileText, Home, Landmark } from 'lucide-react';

const UnitLayout = () => {
  const cards = [
    {
      title: 'Materials Used',
      icon: <Home className="text-blue-600" size={24} />,
      content: [
        'Brickwork Quality',
        'Flooring Type',
        'Paint Quality',
        'Doors & Windows Details'
      ],
      color: 'bg-blue-50',
      delay: 0.1
    },
    {
      title: 'Title Verification & Legal Status',
      icon: <Landmark className="text-green-600" size={24} />,
      content: [
        'Freehold / Leasehold Property',
        'Land Title Clear (Yes/No)',
        'Approval by Local Authority'
      ],
      highlight: true,
      color: 'bg-green-50',
      delay: 0.2
    },
    {
      title: 'Downloadable Documents',
      icon: <FileText className="text-purple-600" size={24} />,
      content: [
        'RERA Certificate',
        'Sale Agreement Draft',
        'Title Report & EC',
        'NOC from Authorities'
      ],
      color: 'bg-purple-50',
      delay: 0.3
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const hoverEffect = {
    scale: 1.03,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  };

  return (
    <div className="w-full">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={hoverEffect}
            className={`rounded-[28px] bg-white p-8 shadow-lg border ${
              card.highlight ? 'border-green-300 ring-2 ring-green-100' : 'border-gray-100'
            } ${card.color} relative overflow-hidden`}
          >
            {/* Floating decorative element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 bg-gradient-to-br from-current to-transparent"></div>
            
            <div className="relative z-10">
              {/* Icon with micro-interaction */}
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6"
              >
                {card.icon}
              </motion.div>

              {/* Title with animated underline */}
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 pb-2 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: card.delay + 0.2 }}
              >
                {card.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-current"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ delay: card.delay + 0.3, duration: 0.6 }}
                />
              </motion.h3>

              {/* Content list with staggered animation */}
              <ul className="space-y-3">
                {card.content.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: card.delay + 0.1 * i }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="flex-shrink-0 mt-1 text-green-500" size={18} />
                    <span className="text-base md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Animated button - shows only for documents card */}
              {index === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay + 0.5 }}
                  className="mt-8"
                >
                  <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <Download size={18} />
                    <span>Download All</span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UnitLayout;