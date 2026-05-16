"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Exclusivity() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#f0f7f4] border border-[#1a8a5e]/10 text-[#1a8a5e] font-mono text-[9px] font-bold tracking-widest uppercase mb-6 md:mb-10 shadow-sm"
            >
              Exclusivity Guaranteed
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-[1.1] tracking-tight mb-8 md:mb-10 text-balance"
            >
              A <span className="text-[#1a8a5e] italic font-light">limited</span> circle of partners.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8 text-[#2d4a45]/80 text-sm md:text-[15px] leading-relaxed max-w-xl font-medium"
            >
              <p>
                We are capping each sponsor category to ensure that every partner gets maximum visibility and zero competition within their niche. This isn&apos;t a crowded expo — it&apos;s an exclusive roadshow.
              </p>
              <p>
                HGER is not a crowded expo with hundreds of competing booths. We intentionally cap participation at <span className="text-[#1a8a5e] font-bold">twenty companies</span> across all 10 cities.
              </p>
              <p>
                This guarantees every sponsor real visibility, real leads, and real ROI in front of every visitor that walks in. Once the 20 slots are filled, applications close. Period.
              </p>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 bg-[#0a4d34] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-wide hover:bg-[#1a8a5e] transition-all flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(10,77,52,0.3)] hover:-translate-y-1"
            >
              Claim a Slot <span>→</span>
            </motion.button>
          </div>

          {/* Right - Live Status Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#061412] rounded-[40px] md:rounded-[60px] p-8 md:p-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden border border-white/5"
          >
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-10 md:mb-14 gap-4">
                <div>
                  <span className="text-[8px] font-black tracking-[0.3em] text-[#2cc985]/50 uppercase block mb-3">Sponsor Slots · Live</span>
                  <h3 className="text-2xl md:text-4xl font-sans font-bold text-white">14 of 20 open</h3>
                </div>
                <div className="bg-[#1a8a5e]/20 border border-[#1a8a5e]/30 px-4 py-1.5 rounded-full">
                  <span className="text-[9px] font-bold text-[#2cc985] tracking-widest uppercase">Live Status</span>
                </div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {Array.from({ length: 20 }).map((_, i) => {
                  const isFilled = i < 6;
                  return (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`aspect-square rounded-lg md:rounded-2xl flex items-center justify-center text-[9px] md:text-xs font-bold transition-all duration-500 border ${
                        isFilled 
                          ? 'bg-[#1a8a5e]/20 border-[#1a8a5e]/40 text-[#2cc985] shadow-[0_0_20px_rgba(44,201,133,0.1)]' 
                          : 'bg-white/[0.03] border-white/5 text-white/20 hover:border-white/20'
                      }`}
                    >
                      {(i + 1).toString().padStart(2, '0')}
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 md:gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2cc985] shadow-[0_0_10px_rgba(44,201,133,0.5)]"></div>
                  <span className="text-[8px] sm:text-[9px] font-bold text-white/40 tracking-widest uppercase">Filled</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  <span className="text-[8px] sm:text-[9px] font-bold text-white/40 tracking-widest uppercase">Open Slot</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
