"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const words = [
    "GREENER HARYANA",
    "CLEANER STREETS",
    "SMARTER CITIES",
    "HEALTHIER COMMUNITIES",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2800); // Transitions every 2.8 seconds
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index];
  // Smart check to prevent "SUSTAINABLE FUTURE FUTURE" redundancy
  const showTrailingFuture = !currentWord.endsWith("FUTURE");

  return (
    <section className="text-center max-w-6xl mx-auto relative px-6 py-4 md:py-2">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-tight leading-[1.2] sm:leading-[1.1] mb-6 flex flex-col items-center justify-center uppercase text-[#0a1f1c]">
        <div className="flex items-center justify-center gap-4">
          <span className="opacity-90">TEN CITIES UNITED</span>
          <span className="hidden sm:flex ml-4 md:ml-6 items-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-[#1a8a5e] rounded-full flex items-center justify-center relative overflow-hidden -rotate-45 shadow-xl">
              <div className="absolute top-0 right-0 w-5 h-10 md:w-8 md:h-16 bg-[#0e5a3d] rounded-r-full"></div>
            </div>
          </span>
        </div>
        
        <div className="mt-2 text-center flex flex-col sm:flex-row items-center justify-center min-h-[1.4em] sm:min-h-[1.3em]">
          <div className="flex items-center justify-center">
            <span className="opacity-90">FOR</span>
            <div className="inline-flex justify-center items-center overflow-hidden py-2 px-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="relative italic font-light mx-2 md:mx-4 text-[#1a8a5e] whitespace-nowrap block pb-2 sm:pb-3 cursor-default select-none"
                >
                  {currentWord}
                  {/* Premium absolute custom underline highlight */}
                  <span className="absolute bottom-0 left-2 right-2 h-[4px] sm:h-[8px] bg-[#1a8a5e]/25 rounded-full" />
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="inline-flex items-center justify-center">
            <AnimatePresence mode="wait">
              {showTrailingFuture && (
                <motion.span 
                  initial={{ opacity: 0, width: 0, scale: 0.8 }}
                  animate={{ opacity: 0.9, width: "auto", scale: 1 }}
                  exit={{ opacity: 0, width: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 sm:mt-0 whitespace-nowrap overflow-hidden"
                >
                  FUTURE
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </h1>
      
      <div className="max-w-4xl mx-auto mt-6 md:mt-12">
        <p className="text-[#2d4a45] text-[10px] sm:text-sm md:text-base font-medium uppercase tracking-wide leading-relaxed">
          Together, we can make the world a better place by creating <br className="hidden md:block" />
          a strong and sustainable energy infrastructure for all.
        </p>
      </div>
    </section>
  );
}
