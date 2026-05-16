"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TargetAudience() {
  const segments = [
    { 
      percent: "28%", 
      title: "Schools & Colleges", 
      desc: "1,200+ schools and 80+ colleges across Haryana looking for rooftop solar and clean-tech partnerships.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
    },
    { 
      percent: "22%", 
      title: "Hospitals & Healthcare", 
      desc: "Govt. hospitals, private clinics, and PHCs seeking 24×7 solar backup for critical care infrastructure.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM12 7v10M7 12h10"/></svg>
    },
    { 
      percent: "26%", 
      title: "Govt. Bodies & Panchayats", 
      desc: "6,000+ Gram Panchayats with mandated procurement for solar streetlights and water pumps.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4"/></svg>
    },
    { 
      percent: "24%", 
      title: "Hotels & Commercial", 
      desc: "Hotels, resorts, and malls under ESG pressure — high-ticket buyers for energy storage and EV charging.",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h1m-1 4h1m-1 4h1m4-12h1m-1 4h1m-1 4h1"/></svg>
    }
  ];

  return (
    <section className="space-y-24 md:space-y-40 py-12 md:py-20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1a8a5e]/5 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#2cc985]/5 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
 
      {/* Interactive Who Walks In - Institutional Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#f0f7f4] border border-[#1a8a5e]/10 text-[#1a8a5e] font-mono text-[9px] font-bold tracking-widest uppercase mb-6 md:mb-10 shadow-sm"
            >
              Target Audience
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-[1.1] tracking-tight mb-6 md:mb-8 text-balance"
            >
              Institutional buyers <br />
              <span className="text-[#1a8a5e] italic font-light relative">
                with budgets,
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,10 100,5" stroke="#2cc985" strokeWidth="2" fill="none" opacity="0.3"/></svg>
              </span> not browsers.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#2d4a45]/70 text-base md:text-xl max-w-2xl leading-relaxed font-medium text-balance"
            >
              We&apos;ve designed HGER to attract decision-makers from high-impact institutional segments who are ready to invest in Haryana&apos;s green transition.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white"
          >
            <Image 
              src="/images/audience.png" 
              alt="Decision Makers" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
 
        <div className="bg-white rounded-[32px] md:rounded-[48px] border border-[#1a8a5e]/20 shadow-[0_40px_100px_-20px_rgba(26,138,94,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#1a8a5e]/15">
            {segments.map((segment, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 lg:p-10 group hover:bg-[#f0f7f4] transition-all duration-700 relative cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#1a8a5e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="mb-6 md:mb-8 w-10 h-10 bg-white border border-[#1a8a5e]/10 rounded-lg flex items-center justify-center text-[#1a8a5e] group-hover:bg-[#1a8a5e] group-hover:text-white transition-all duration-500 shadow-sm">
                  {segment.icon}
                </div>
                <div className="mb-3 md:mb-4">
                  <span className="text-[7px] font-black tracking-[0.2em] text-[#1a8a5e] uppercase">
                    {segment.percent} OF FOOTFALL
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-sans font-bold text-[#0a1f1c] mb-3 md:mb-4 leading-tight group-hover:text-[#1a8a5e] transition-colors">
                  {segment.title}
                </h3>
                <p className="text-[#2d4a45]/60 text-[11px] md:text-xs leading-relaxed group-hover:text-[#0a1f1c] transition-colors">
                  {segment.desc}
                </p>
                <div className="mt-6 md:mt-8 flex items-center gap-1.5 text-[8px] font-bold text-[#1a8a5e] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Learn More <span className="text-xs">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
