import { Link } from "react-router-dom";
import { AboutPage } from "../assets/assets";
import { motion } from "framer-motion";

const {
  authorDescription,
  getInTouchUrl,
  authorName,
} = AboutPage;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className={`flex flex-col bedar-sc1:flex-row justify-between items-center gap-6 mt-[.5rem] bedar-sc2:mt-2 min-h-screen`}
        id="About"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full bedar-sc1:w-1/2 flex flex-col gap-5">
          <motion.div 
            className="text-3xl"
            variants={itemVariants}
          >
            Hi, I am <motion.strong 
              className="text-[#fedf89]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >{authorName}</motion.strong>
          </motion.div>
          <motion.div 
            className="leading-7 text-lg"
            variants={itemVariants}
          >
            {authorDescription}
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={getInTouchUrl}
              className="bg-white text-textColor px-4 py-2 rounded-full w-fit hover:bg-[#fedf89] hover:text-textColor font-semibold transition-all ease-linear text-[1rem]"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
