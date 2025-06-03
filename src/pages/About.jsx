import { Link } from "react-router-dom";
import { AboutPage } from "../assets/assets";
import { motion } from "framer-motion";

const {
  authorDescription,
  getInTouchUrl,
  authorName,
  profileImgTagLine,
} = AboutPage;

const About = () => {
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
    <section className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name and Title */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm{" "}
              <motion.span 
                className="inline-block animate-gradient bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(270deg, #ff5f6d, #ffc371, #c34dbf, #ff4b1f, #ff9068, #16bffd, #a84dc3, #cb3066, #4ca1af, #c4e0e5)",
                  backgroundSize: "2000% 2000%"
                }}
              >
                {authorName}
              </motion.span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
              {profileImgTagLine}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl"
            variants={itemVariants}
          >
            {authorDescription}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex gap-6"
            variants={itemVariants}
          >
            <motion.a
              href={getInTouchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-current rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
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
                  d="M12 5v14m0 0l-7-7m7 7l7-7" 
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
