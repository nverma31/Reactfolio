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
            Hi! I'm Neeraj, a senior product designer based in Munich, currently working at&nbsp;
            <a 
              href="https://www.clark.io/" 
              className="inline-block animate-gradient bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(270deg, #ff5f6d, #ffc371, #c34dbf, #ff4b1f, #ff9068, #16bffd, #a84dc3, #cb3066, #4ca1af, #c4e0e5)",
                backgroundSize: "2000% 2000%"
              }}
            >
              CLARK.
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
            <motion.button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-fit px-6 py-3 border border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Case studies
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 5v14m0 0l-7-7m7 7l7-7" 
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner; 