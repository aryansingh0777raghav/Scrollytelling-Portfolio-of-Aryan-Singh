"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onEnter: () => void;
}

export default function Preloader({ onEnter }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    // Simulate loading progress
    const duration = 2500; // 2.5 seconds
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setLoaded(true);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    document.body.style.overflow = 'auto';
    setIsVisible(false);
    setTimeout(() => {
      onEnter();
    }, 800); // wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="text-center overflow-hidden">
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase"
              >
                Aryan Singh
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-gray-500 tracking-[0.3em] uppercase text-sm mt-4"
              >
                Director & Software Engineer
              </motion.p>
            </div>

            <div className="h-[2px] w-64 bg-white/10 relative overflow-hidden rounded-full mt-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="h-12 mt-4">
              {!loaded ? (
                <span className="text-gray-400 font-mono tracking-widest">{progress}%</span>
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleEnter}
                  className="px-8 py-3 border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Enter Portfolio
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
