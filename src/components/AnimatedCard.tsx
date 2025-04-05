// components/AnimatedCard.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
  title: string;
  number: string;
  children: React.ReactNode;
}

const CardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants: Variants = {
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

const numberVariants: Variants = {
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

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, number, children }) => {
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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={CardVariants}
      className="h-container x-round-card shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Title and Number Header */}
        <div className="flex flex-col md:flex-row justify-between items-start  w-full mb-8 md:mb-12 gap-6">
          <motion.h2
            variants={titleVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={numberVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
          >
            {number}
          </motion.div>
        </div>

        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
