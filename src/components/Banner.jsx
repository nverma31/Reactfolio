import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="h-screen flex flex-col justify-center py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full -mt-[10vh]">
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First line of text */}
          <motion.h2 
            className="text-xl md:text-2xl font-bold leading-tight md:max-w-xl lg:max-w-2xl"
            variants={itemVariants}
          >
            Hi, I'm a senior product designer based in Munich, currently working at&nbsp;
            <a 
              href="https://www.sixt.com/betahome/#/" 
              className="inline-block animate-gradient bg-gradient-to-r from-[#ff5f6d] via-[#ffc371] via-[#c34dbf] via-[#ff4b1f] via-[#ff9068] via-[#16bffd] via-[#a84dc3] via-[#cb3066] via-[#4ca1af] to-[#c4e0e5] bg-[length:2000%_2000%] bg-clip-text text-transparent"
            >
              SIXT.
            </a>
          </motion.h2>
          
          {/* Second line of text */}
          <motion.h2 
            className="text-xl md:text-2xl font-bold leading-tight md:max-w-xl lg:max-w-2xl"
            variants={itemVariants}
          >
            I bridge the gap between product design and tangible business outcomes to create meaningful experiences that enrich people's lives.
          </motion.h2>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/175BR-KYdM6q_lGjCnxNIqBzjSgiioKJ7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            
            <motion.a
              href="/"
              className="px-6 py-3 border border-current rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Case studies
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner; 