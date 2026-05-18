"use client";
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface BentoGridProps {
  activeIndex: number;
  words: string[];
}

export default function BentoGrid({ activeIndex, words }: BentoGridProps) {
  const images = [
    "/wind_turbines.png",
    "/solar_panel.png"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[280px] xl:min-h-[320px] max-w-[1400px] mx-auto w-full px-4 md:px-0">
      {/* Card 1: Green Energy Initiative */}
      <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] relative shadow-sm text-[#0e5a3d] min-h-[320px]">
        <div className="flex justify-between items-start mb-4">
          <span className="border border-[#0e5a3d]/20 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono">VISION 2030</span>
          <span className="text-[10px] font-bold mt-1 font-mono">/LIVE</span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="flex flex-col items-start mb-6 relative z-10">
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex items-center font-fraunces">
                <span className="text-xl sm:text-2xl xl:text-3xl font-semibold tracking-tight text-[#0e5a3d]">GREEN ENERGY</span>
                <span className="ml-2 text-xl sm:text-2xl xl:text-3xl font-light text-[#0e5a3d]">✕</span>
             </div>
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-1 font-fraunces">
                <span className="text-xl sm:text-2xl xl:text-3xl font-light italic tracking-tight text-[#0e5a3d]">INITIATIVE</span>
                <div className="absolute -right-5 -bottom-3 z-20 rotate-12 bg-[#1a8a5e] text-white px-2 py-1 shadow-lg flex flex-col items-center justify-center rounded-sm">
                  <span className="text-[7px] font-bold font-mono">ACT NOW</span>
                </div>
             </div>
          </div>
          <p className="text-[11px] text-[#0e5a3d] uppercase tracking-wide leading-relaxed max-w-[95%] font-bold mb-6">
            Join the movement towards a zero-carbon Haryana. Secure your spot today.
          </p>
          <button className="bg-gradient-to-r from-[#69C242] to-[#50AC26] text-white text-[11px] font-bold px-6 py-4 rounded-xl w-full sm:w-fit hover:from-[#50AC26] hover:to-[#3e9317] transition-all shadow-[0_10px_20px_rgba(105,194,66,0.25)] hover:shadow-[0_12px_25px_rgba(105,194,66,0.35)] uppercase tracking-widest active:scale-[0.98]">
            JOIN THE ROADSHOW →
          </button>
        </div>
      </div>
 
      {/* Card 2: Stats Column */}
      <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-0 lg:space-y-[-30px] py-4 lg:py-0">
        <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm flex-1 lg:w-[85%] z-10 transition-all hover:z-50 hover:-translate-y-2 border border-gray-100 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">10</h3>
          <p className="text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Tier 2/3 Cities</p>
        </div>
        <div className="bg-[#f5f5f5] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-md flex-1 lg:w-[92%] z-20 transition-all hover:z-50 hover:-translate-y-2 border border-gray-200 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">03</h3>
          <p className="text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Months Journey</p>
        </div>
        <div className="bg-[#1a8a5e] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg flex-1 lg:w-full z-30 transition-all hover:z-50 hover:-translate-y-2 border border-[#1a8a5e]/20 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 text-white tracking-tight font-mono">20</h3>
          <p className="text-[8px] text-white/90 font-bold tracking-wider uppercase leading-tight">Sponsor Slots</p>
        </div>
      </div>
 
      {/* Card 3: Dynamic Image Card with 2 images */}
      <div className="bg-gray-200 rounded-3xl lg:col-span-4 relative overflow-hidden min-h-[250px] lg:h-full group shadow-sm">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={images[activeIndex]} 
              alt={words[activeIndex] || "Green Energy"} 
              fill 
              className="object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-105" 
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-[#0a1f1c]/10 z-10 pointer-events-none"></div>
        
        {/* Floating Play Button - ABOUT US */}
        <div className="absolute bottom-5 right-5 z-20">
          <button className="bg-[#fbfdfc] hover:bg-[#f0f7f4] text-[#0a1f1c] text-[9px] font-bold px-4 py-2 rounded-full flex items-center space-x-1.5 transition-colors shadow-lg cursor-pointer">
            <span className="text-[6px]">▶</span> <span>ABOUT US</span>
          </button>
        </div>
      </div>
 
      {/* Card 4: Net Zero Vision */}
      <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm text-[#0a1f1c] min-h-[240px]">
        <div className="flex justify-between items-start mb-6">
          <span className="border border-[rgba(10,31,28,0.15)] rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono uppercase">Mission</span>
          <span className="text-[10px] font-bold mt-1 text-[#2d4a45] font-mono">/2026</span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-start mb-6 font-fraunces">
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 transform -rotate-1 rounded-[4px] shadow-sm flex items-center inline-flex">
                <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase italic mr-2 text-[#0a1f1c]">CITIES</h2>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a8a5e" strokeWidth="2.5" className="mx-0.5"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1a8a5e"/><path d="M2 17L12 22L22 17" stroke="#1a8a5e"/><path d="M2 12L12 17L22 12" stroke="#1a8a5e"/></svg>
                <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase ml-2 text-[#0a1f1c]">UNITED</h2>
             </div>
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 transform rotate-1 rounded-[4px] shadow-sm inline-flex ml-3 mt-2">
                <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase text-[#0a1f1c]">HARYANA VISION</h2>
             </div>
          </div>
        </div>
        <div className="mt-auto">
          <p className="text-[9px] font-bold text-[#2d4a45] uppercase tracking-[0.2em] opacity-60">
            A sustainable roadmap for the next generation.
          </p>
        </div>
      </div>
    </div>
  );
}
