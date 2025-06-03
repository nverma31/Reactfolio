import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";
import { AboutPage, footerIcons } from "../assets/assets.js";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
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
    <div id="Contact" className={`${containerStyle} flex justify-center items-center`} style={{ minHeight: '90vh' }}>
      <motion.div 
        className="flex flex-col items-center gap-8 py-12 px-8 text-center font-inter-tight max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-4xl md:text-5xl font-semibold leading-relaxed"
          variants={itemVariants}
        >
          Like what you see<br/>
          <span className="inline-block animate-gradient bg-clip-text text-transparent" style={{
            backgroundImage: "linear-gradient(270deg, #ff5f6d, #ffc371, #c34dbf, #ff4b1f, #ff9068, #16bffd, #a84dc3, #cb3066, #4ca1af, #c4e0e5)",
            backgroundSize: "2000% 2000%"
          }}>
            Reach out and let's chat
          </span>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 mt-8"
          variants={itemVariants}
        >
          <motion.a
            href={`mailto:${AboutPage.authorContactMail}`}
            className="px-8 py-4 rounded-full border border-current hover:bg-black hover:text-white transition-colors duration-300 text-center flex items-center justify-center gap-2 text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email me <MdEmail className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-full border border-current hover:bg-black hover:text-white transition-colors duration-300 text-center flex items-center justify-center gap-2 text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download my resume <FiDownload className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
