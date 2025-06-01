import { motion } from "framer-motion";

const IntroOverlay = ({ animationComplete }) => {
  const overlayVariants = {
    initial: {
      height: "100%",
    },
    animate: {
      height: "0%",
      transition: {
        duration: 1.6,
        ease: [0.87, 0, 0.13, 1],
        staggerChildren: 0.6,
      },
    },
  };

  const overlayChildVariants = {
    initial: {
      height: "100%",
    },
    animate: {
      height: "0%",
      transition: {
        duration: 1.6,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none"
      initial="initial"
      animate={animationComplete ? "animate" : "initial"}
      variants={overlayVariants}
    >
      <div className="absolute inset-0 bg-black flex">
        <motion.div
          className="overlay-top h-screen w-[33.33%] bg-black"
          variants={overlayChildVariants}
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="overlay-top h-screen w-[33.33%] bg-black"
          variants={overlayChildVariants}
          transition={{ delay: 0.8 }}
        />
        <motion.div
          className="overlay-top h-screen w-[33.33%] bg-black"
          variants={overlayChildVariants}
          transition={{ delay: 1.4 }}
        />
      </div>
    </motion.div>
  );
};

export default IntroOverlay; 