"use client";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  const socialIcons = [
    {
      name: "Facebook",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M22 11C22 4.92486 17.0751 0 11 0C4.92486 0 0 4.92486 0 11C0 16.4903 4.02252 21.0412 9.28125 21.8664V14.1797H6.48828V11H9.28125V8.57656C9.28125 5.81969 10.9235 4.29688 13.4361 4.29688C14.6392 4.29688 15.8984 4.51172 15.8984 4.51172V7.21875H14.5114C13.145 7.21875 12.7188 8.06674 12.7188 8.9375V11H15.7695L15.2818 14.1797H12.7188V21.8664C17.9775 21.0412 22 16.4903 22 11Z" fill="#1877F2"/>
          <path d="M15.2818 14.1797L15.7695 11H12.7188V8.9375C12.7188 8.0676 13.145 7.21875 14.5114 7.21875H15.8984V4.51172C15.8984 4.51172 14.6397 4.29688 13.4361 4.29688C10.9235 4.29688 9.28125 5.81969 9.28125 8.57656V11H6.48828V14.1797H9.28125V21.8664C10.4202 22.0445 11.5798 22.0445 12.7188 21.8664V14.1797H15.2818Z" fill="white"/>
        </svg>
      ),
      color: "#1877F2"
    },
    {
      name: "Twitter",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M6.91856 19.9382C15.2205 19.9382 19.7613 13.0601 19.7613 7.09544C19.7613 6.90008 19.7613 6.7056 19.7481 6.512C20.6315 5.87304 21.394 5.08189 22 4.1756C21.1763 4.5408 20.3024 4.78019 19.4075 4.88576C20.3498 4.32172 21.0551 3.43447 21.3919 2.3892C20.5059 2.915 19.5366 3.28554 18.5258 3.4848C17.8452 2.76116 16.9452 2.28198 15.9648 2.12142C14.9845 1.96086 13.9786 2.12787 13.1028 2.59659C12.227 3.06532 11.53 3.80964 11.1198 4.71437C10.7097 5.61909 10.6091 6.63379 10.8337 7.60144C9.03915 7.51142 7.28361 7.04505 5.681 6.2326C4.07839 5.42015 2.66453 4.27979 1.5312 2.88552C0.954001 3.87918 0.777216 5.05548 1.03684 6.1749C1.29647 7.29433 1.97298 8.27273 2.92864 8.91088C2.2103 8.88983 1.50759 8.69604 0.88 8.34592V8.40312C0.880285 9.44523 1.24103 10.4552 1.90105 11.2616C2.56107 12.0681 3.47972 12.6214 4.5012 12.8278C3.83669 13.009 3.13947 13.0355 2.46312 12.9052C2.75166 13.802 3.31323 14.5862 4.0693 15.1482C4.82538 15.7102 5.73817 16.0219 6.68008 16.0398C5.74424 16.7754 4.67254 17.3192 3.5263 17.6403C2.38006 17.9613 1.18178 18.0532 0 17.9106C2.06418 19.2352 4.46593 19.9379 6.91856 19.9346" fill="#1DA1F2"/>
        </svg>
      ),
      color: "#1DA1F2"
    },
    {
      name: "Instagram",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 1.98086C13.9391 1.98086 14.2871 1.99375 15.443 2.04531C16.5172 2.09258 17.0973 2.27305 17.484 2.42344C17.9953 2.62109 18.3648 2.86172 18.7473 3.24414C19.134 3.63086 19.3703 3.99609 19.568 4.50742C19.7183 4.89414 19.8988 5.47851 19.9461 6.54844C19.9976 7.70859 20.0105 8.05664 20.0105 10.9914C20.0105 13.9305 19.9976 14.2785 19.9461 15.4344C19.8988 16.5086 19.7183 17.0887 19.568 17.4754C19.3703 17.9867 19.1297 18.3562 18.7473 18.7387C18.3605 19.1254 17.9953 19.3617 17.484 19.5594C17.0973 19.7098 16.5129 19.8902 15.443 19.9375C14.2828 19.9891 13.9348 20.0019 11 20.0019C8.06093 20.0019 7.71289 19.9891 6.55703 19.9375C5.48281 19.8902 4.90273 19.7098 4.51601 19.5594C4.00469 19.3617 3.63515 19.1211 3.25273 18.7387C2.86601 18.3519 2.62969 17.9867 2.43203 17.4754C2.28164 17.0887 2.10117 16.5043 2.05391 15.4344C2.00234 14.2742 1.98945 13.9262 1.98945 10.9914C1.98945 8.05234 2.00234 7.70429 2.05391 6.54844C2.10117 5.47422 2.28164 4.89414 2.43203 4.50742C2.62969 3.99609 2.87031 3.62656 3.25273 3.24414C3.63945 2.85742 4.00469 2.62109 4.51601 2.42344C4.90273 2.27305 5.48711 2.09258 6.55703 2.04531C7.71289 1.99375 8.06093 1.98086 11 1.98086ZM11 0C8.01367 0 7.63984 0.0128906 6.46679 0.0644531C5.29804 0.116016 4.49453 0.305078 3.79844 0.575781C3.07226 0.859375 2.45781 1.2332 1.84766 1.84766C1.2332 2.45781 0.859375 3.07227 0.575781 3.79414C0.305078 4.49453 0.116016 5.29375 0.0644531 6.4625C0.0128906 7.63984 0 8.01367 0 11C0 13.9863 0.0128906 14.3602 0.0644531 15.5332C0.116016 16.702 0.305078 17.5055 0.575781 18.2016C0.859375 18.9277 1.2332 19.5422 1.84766 20.1523C2.45781 20.7625 3.07226 21.1406 3.79414 21.4199C4.49453 21.6906 5.29375 21.8797 6.4625 21.9312C7.63554 21.9828 8.00937 21.9957 10.9957 21.9957C13.982 21.9957 14.3559 21.9828 15.5289 21.9312C16.6976 21.8797 17.5012 21.6906 18.1973 21.4199C18.9191 21.1406 19.5336 20.7625 20.1437 20.1523C20.7539 19.5422 21.132 18.9277 21.4113 18.2059C21.682 17.5055 21.8711 16.7062 21.9226 15.5375C21.9742 14.3645 21.9871 13.9906 21.9871 11.0043C21.9871 8.01797 21.9742 7.64414 21.9226 6.47109C21.8711 5.30234 21.682 4.49883 21.4113 3.80273C21.1406 3.07226 20.7668 2.45781 20.1523 1.84766C19.5422 1.2375 18.9277 0.859375 18.2059 0.580078C17.5055 0.309375 16.7062 0.120312 15.5375 0.06875C14.3601 0.0128906 13.9863 0 11 0Z" fill="#EC3397"/>
          <path d="M11 5.34961C7.88047 5.34961 5.34961 7.88047 5.34961 11C5.34961 14.1195 7.88047 16.6504 11 16.6504C14.1195 16.6504 16.6504 14.1195 16.6504 11C16.6504 7.88047 14.1195 5.34961 11 5.34961ZM11 14.6652C8.97617 14.6652 7.33477 13.0238 7.33477 11C7.33477 8.97617 8.97617 7.33477 11 7.33477C13.0238 7.33477 14.6652 8.97617 14.6652 11C14.6652 13.0238 13.0238 14.6652 11 14.6652Z" fill="#EC3397"/>
          <path d="M18.193 5.12627C18.193 5.85674 17.6 6.44542 16.8738 6.44542C16.1434 6.44542 15.5547 5.85245 15.5547 5.12627C15.5547 4.3958 16.1477 3.80713 16.8738 3.80713C17.6 3.80713 18.193 4.4001 18.193 5.12627Z" fill="#EC3397"/>
        </svg>
      ),
      color: "#EC3397"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M20.376 0H1.62403C1.19331 0 0.780231 0.171103 0.475667 0.475667C0.171103 0.780231 0 1.19331 0 1.62403V20.376C0 20.8067 0.171103 21.2198 0.475667 21.5243C0.780231 21.8289 1.19331 22 1.62403 22H20.376C20.8067 22 21.2198 21.8289 21.5243 21.5243C21.8289 21.2198 22 20.8067 22 20.376V1.62403C22 1.19331 21.8289 0.780231 21.5243 0.475667C21.2198 0.171103 20.8067 0 20.376 0ZM6.55722 18.7413H3.24958V8.23472H6.55722V18.7413ZM4.90111 6.77875C4.52592 6.77664 4.15976 6.66343 3.84884 6.45341C3.53792 6.2434 3.29619 5.94599 3.15414 5.59871C3.01209 5.25144 2.97609 4.86988 3.0507 4.50217C3.1253 4.13446 3.30715 3.79709 3.57331 3.53263C3.83947 3.26818 4.178 3.08849 4.54618 3.01626C4.91436 2.94402 5.29569 2.98246 5.64204 3.12674C5.98839 3.27101 6.28424 3.51465 6.49226 3.82691C6.70027 4.13917 6.81113 4.50605 6.81083 4.88125C6.81437 5.13245 6.7673 5.38179 6.67243 5.6144C6.57755 5.84702 6.43682 6.05816 6.25861 6.23523C6.0804 6.4123 5.86836 6.55168 5.63514 6.64505C5.40192 6.73843 5.15228 6.7839 4.90111 6.77875ZM18.7489 18.7504H15.4428V13.0106C15.4428 11.3178 14.7232 10.7953 13.7943 10.7953C12.8135 10.7953 11.851 11.5347 11.851 13.0533V18.7504H8.54333V8.24236H11.7242V9.69833H11.7669C12.0863 9.05208 13.2046 7.9475 14.9111 7.9475C16.7567 7.9475 18.7504 9.04292 18.7504 12.2513L18.7489 18.7504Z" fill="#0A66C2"/>
        </svg>
      ),
      color: "#0A66C2"
    }
  ];

  const links = {
    quickLinks: ["Features", "Partners", "Pricing", "Product", "Support"],
    company: ["About Us", "Agents", "Blog", "Media", "Contact Us"]
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-container">
        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa29aa457043928028bc66e550d27314abfcd1d4" 
              alt="Housyy Logo" 
              className="h-16 w-auto"
            />
            <p className="text-gray-600 leading-relaxed">
              Housyy is an innovative Indian property platform that makes real estate investment simple and transparent, transforming how Indians invest in property.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {links.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Our Company</h3>
            <ul className="space-y-4">
              {links.company.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-gray-900">Subscribe</h3>
            <p className="text-gray-600">
              Subscribe to get latest property, blog news from us
            </p>
            
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 rounded-full p-2 text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
                  whileHover={{ 
                    y: -5,
                    backgroundColor: social.color,
                    color: "#fff"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500"
        >
          © {new Date().getFullYear()} Housyy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;