import { About, Projects, Contact } from "../pages/pages.js";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroOverlay from "../components/IntroOverlay";
import Banner from "../components/Banner";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [textColor, setTextColor] = useState("white");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if user has seen animation in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    
    if (hasSeenAnimation) {
      // If user has seen animation in this session, skip it
      setShowIntro(false);
      setAnimationComplete(true);
      setTextColor("black");
    } else {
      // First time in this session - show animation and set sessionStorage
      setShowIntro(true);
      sessionStorage.setItem('hasSeenAnimation', 'true');
      
      // Start with white text on top
      setTextColor("white");
      
      // Change text to black after 2.85 seconds
      const colorTimer = setTimeout(() => {
        setTextColor("black");
      }, 2850);

      // Start overlay animation after 2 seconds
      const overlayTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2000);

      return () => {
        clearTimeout(colorTimer);
        clearTimeout(overlayTimer);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Overlay layer with lower z-index */}
      {showIntro && (
        <div className="absolute inset-0 z-0">
          <IntroOverlay animationComplete={animationComplete} />
        </div>
      )}

      {/* Content layer with higher z-index */}
      <motion.div 
        className="relative z-20 space-y-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        style={{ color: textColor }}
        transition={{ duration: 0.2 }}
      >
        <Banner />
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </motion.div>
    </div>
  );
};

export default Home; 