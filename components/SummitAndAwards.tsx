"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SummitAndAwards() {
  return (
    <section className="py-12 md:py-16 bg-[#f0f7f4] overflow-hidden relative">
      {/* Animated Mesh Gradients for Color depth */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#1a8a5e]/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#1a8a5e]/10 text-[#1a8a5e] font-mono text-[9px] font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            Exclusive Leadership & Recognition
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight mb-8"
          >
            The HGER <span className="text-[#1a8a5e]">Summit</span> <br />
            <span className="text-[#d4af37]">& Awards Night</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#2d4a45]/60 text-base md:text-lg leading-relaxed font-medium"
          >
            An exclusive summit and awards evening bringing together renewable energy leaders, innovators, policymakers, and clean-tech pioneers under one platform.
          </motion.p>
        </div>

        {/* High-End Visual Break */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden mb-24 shadow-2xl"
        >
          <Image 
            src="/images/summit.png" 
            alt="HGER Summit Visual" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1c]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
            <div className="max-w-md">
              <span className="text-[#d4af37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Event Highlight</span>
              <h3 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">A Night of Sustainable Excellence</h3>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                <span className="text-[10px] font-bold">2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Event Overview Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-12 md:p-16 shadow-[0_20px_50px_-10px_rgba(26,138,94,0.08)] border border-white relative overflow-hidden group hover:border-[#1a8a5e]/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-[#1a8a5e] rounded-full"></div>
              <h3 className="text-2xl font-sans font-bold text-[#0a1f1c]">Event Overview</h3>
            </div>
            <p className="text-[#2d4a45]/70 text-[15px] leading-relaxed font-medium mb-12">
              The event celebrates impactful contributions toward a greener Haryana while creating opportunities for collaboration, networking, recognition, and business growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Premium networking",
                "Live presentations",
                "Awards gala",
                "Media exposure",
                "Industry connections",
                "Exclusive opportunities"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 py-2 border-b border-[#1a8a5e]/5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a8a5e]"></div>
                  <span className="text-[11px] font-bold text-[#2d4a45]/80 uppercase tracking-widest">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Distinguished Leaders Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a1f1c] rounded-[32px] p-12 md:p-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a8a5e]/10 rounded-full blur-[100px] group-hover:bg-[#1a8a5e]/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <span className="text-[9px] font-black tracking-[0.4em] text-[#d4af37] uppercase mb-10 block">Chief Guest Protocol</span>
              <h3 className="text-4xl md:text-5xl font-sans font-bold text-white mb-10 leading-tight">
                Distinguished <br />
                <span className="text-[#d4af37]">Government &</span> <br />
                Industry Leaders
              </h3>
              <p className="text-white/50 text-[15px] leading-relaxed max-w-sm mb-16 font-medium">
                Special participation from senior cabinet officials, renewable energy pioneers, and clean-tech visionaries from across the nation.
              </p>
            </div>

            <div className="relative z-10 pt-12 border-t border-white/5 flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Official Protocol</span>
                <span className="text-sm font-sans font-bold text-white">Edition I · 2026</span>
              </div>
              <div className="px-6 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm">
                <span className="text-[10px] font-black text-[#d4af37] tracking-widest">VIP ACCESS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
