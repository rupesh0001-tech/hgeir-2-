"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PoliciesAndSchemes() {
  const schemesRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: schemesRef,
    offset: ["start start", "end end"]
  });

  const textX = useTransform(scrollYProgress, [0, 0.25], ["0%", "-150%"]);
  const cardsX = useTransform(scrollYProgress, [0.05, 1], ["0%", "-70%"]);

  const schemes = [
    {
      id: "01",
      category: "Central · Active",
      title: "PM Surya Ghar Muft Bijli Yojana",
      desc: "Free electricity up to 300 units/month for 1 crore households across India.",
      img: "/scheme1.png"
    },
    {
      id: "02",
      category: "Most Subsidised",
      title: "PM-KUSUM (Kisan Urja Suraksha)",
      desc: "Solar pumps and grid-connected plants for farmers — stacked subsidies.",
      img: "/city1.png"
    },
    {
      id: "03",
      category: "State · Haryana",
      title: "Haryana Solar Policy 2024",
      desc: "Additional state subsidy for rooftop solar and time-bound DISCOM approvals.",
      img: "/city2.png"
    },
    {
      id: "04",
      category: "EV · Mobility",
      title: "FAME-II + Haryana EV Policy",
      desc: "Subsidies on electric 2/3 wheelers + 100% registration fee waiver.",
      img: "/city1.png"
    },
    {
      id: "05",
      category: "Industrial · 2030",
      title: "National Green Hydrogen Mission",
      desc: "Outlay for green hydrogen production, electrolyzers, and pilot projects.",
      img: "/city2.png"
    },
    {
      id: "06",
      category: "HAREDA · State Nodal",
      title: "HAREDA Outreach Programs",
      desc: "Awareness drives, vendor empanelment, and direct citizen support.",
      img: "/scheme1.png"
    }
  ];

  return (
    <section ref={schemesRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Left Column: Text Content - Will move left */}
        <motion.div 
          style={{ x: textX }}
          className="absolute left-8 lg:left-20 z-20 max-w-xl"
        >
          <h2 className="text-sm font-bold text-[#1a8a5e] font-mono tracking-[0.2em] uppercase mb-4">
            Policies & Schemes
          </h2>
          <h1 className="text-5xl md:text-6xl font-sans font-bold text-[#0a1f1c] mb-8 leading-[1.1] tracking-tight">
            <span className="text-[#1a8a5e]">Government</span><br />Backing.
          </h1>
          <p className="text-[#2d4a45] text-lg md:text-xl leading-relaxed mb-12">
            We bring official enrolment desks for every major central and state scheme directly to the roadshow floor — helping visitors move from awareness to enrolment in minutes.
          </p>
          <button className="bg-[#1a8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase flex items-center self-start shadow-xl transition-all group">
            Live Enrolment Desks <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* Right Side: Horizontal Cards - Will move in from right and across */}
        <motion.div 
          style={{ x: cardsX }}
          className="flex gap-8 pl-[60vw]" // Start cards offset to the right
        >
          {schemes.map((scheme, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] h-[500px] flex-shrink-0 relative rounded-[48px] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <Image 
                src={scheme.img} 
                alt={scheme.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1c]/95 via-[#0a1f1c]/40 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/60 group-hover:bg-[#1a8a5e] group-hover:text-white transition-all shadow-lg">
                <span className="text-sm font-bold">✕</span>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1a8a5e] text-white font-mono text-[8px] font-bold tracking-widest uppercase shadow-sm">
                    {scheme.category}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2cc985] animate-pulse shadow-[0_0_8px_rgba(44,201,133,0.6)]"></div>
                </div>
                
                <h2 className="text-white text-3xl md:text-4xl font-sans font-bold leading-[1.1] mb-6 group-hover:text-[#2cc985] transition-colors duration-500">
                  {scheme.title}
                </h2>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {scheme.desc}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-white/40 font-mono text-[9px] font-bold tracking-widest uppercase">ENROLMENT ACTIVE</span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-[#1a8a5e] transition-colors">
                    <span className="text-lg">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
