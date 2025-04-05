import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Header from './Header';

export default function PropertyVerificationHero() {
  return (
    <>
     
     
<div className='bg-[#1D234F]'>
<Header />
<motion.section 
        className="flex flex-col w-full bg-[#1D234F]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center h-container mx-auto gap-10 md:gap-0 bg-[#1D234F]">
          {/* Text Content */}
          <div className="flex flex-col max-w-[811px] gap-6 py-20 md:py-16 sm:py-8">
            <motion.h1 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-rubik text-4xl sm:text-[42px] md:text-[51px] font-bold leading-tight tracking-[0.128px]"
            >
              Secure Your Property Investment Today!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white font-poppins text-base sm:text-lg md:text-xl leading-relaxed tracking-[0.053px] max-w-[538px]"
            >
              Avoid legal troubles, hidden disputes, and financial risks with our comprehensive property verification services.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit bg-[#ED1C24] rounded-xl border border-[#ED1C24] shadow-sm px-4 py-2"
            >
              <span className="text-white font-inter text-sm font-medium leading-5">
                Get Your Property Verified Now!
              </span>
            </motion.button>
          </div>

          {/* Image - Using regular img tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="shrink-0 w-full md:w-auto"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84dec67aa8ce1df77fec54ef6a9111576691df50"
              alt="Property buildings illustration"
              className="w-full md:w-[728px] h-auto md:h-[565px] object-contain"
            />
          </motion.div>
        </div>
      </motion.section>
</div>
      
    </>
  );
}