"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cities = [
  { num: "01", name: "PALWAL", tagline: "KMP Logistics Hub · 4 March 2026", desc: "The gateway to the roadshow — Palwal sits at the southern edge of Haryana on the KMP Expressway, making it a logistics-friendly launch city. Strong transport SME base, agri-belt economy, and the perfect symbolic beginning for a state-wide journey.", stats: [{ val: "~10L", lbl: "Population" }, { val: "300+", lbl: "Panchayats" }, { val: "Transport", lbl: "SME Focus" }], discom: "DHBVN" },
  { num: "02", name: "REWARI", tagline: "Auto-SME Cluster · 11 March 2026", desc: "Heart of the Delhi-Mumbai Industrial Corridor with a dense auto-component SME base. Suzuki, Hero, and dozens of mid-tier suppliers — exactly the high-bill commercial buyers solar & EV brands want in front of.", stats: [{ val: "~9L", lbl: "Population" }, { val: "500+", lbl: "SMEs" }, { val: "DMIC", lbl: "Corridor" }], discom: "DHBVN" },
  { num: "03", name: "CHARKHI DADRI", tagline: "Cement Industry · 18 March 2026", desc: "Haryana's newest district (2016) — home to Vikram, JK Lakshmi, and Jaypee cement plants. Big-ticket commercial buyers, ESG mandates, and zero prior green-energy expo exposure. The single highest deal-size potential city on the route.", stats: [{ val: "~5L", lbl: "Population" }, { val: "5+", lbl: "Cement Plants" }, { val: "First", lbl: "Ever Expo" }], discom: "DHBVN" },
  { num: "04", name: "HISAR", tagline: "Agri University & Industrial · 1 April 2026", desc: "Home to CCS Haryana Agricultural University — bringing together academic credibility, agri-research, and a strong industrial SME base. A regional anchor for the western leg of the roadshow.", stats: [{ val: "~17L", lbl: "Population" }, { val: "CCS HAU", lbl: "University" }, { val: "DHBVN HQ", lbl: "Region" }], discom: "DHBVN" },
  { num: "05", name: "SIRSA", tagline: "Cotton Belt · 8 April 2026", desc: "Western frontier — large farming community with cotton & wheat as primary crops. Massive PM-KUSUM solar pump potential. Farmers with significant landholdings, looking to cut diesel costs and add solar income streams.", stats: [{ val: "~13L", lbl: "Population" }, { val: "Cotton", lbl: "Crop Belt" }, { val: "Farmer", lbl: "Heavy" }], discom: "DHBVN" },
  { num: "06", name: "ROHTAK", tagline: "MDU · IIM · PGIMS · 15 April 2026", desc: "Institutional powerhouse of central Haryana. MDU University (1.5L+ students), IIM Rohtak, PGIMS Medical College, and a strong industrial estate. Multiple buyer profiles in one city — schools, hospitals, MBA networks, factories.", stats: [{ val: "~10L", lbl: "Population" }, { val: "3", lbl: "Major Universities" }, { val: "PGIMS", lbl: "Hospital" }], discom: "UHBVN" },
  { num: "07", name: "SONIPAT", tagline: "Ashoka · Kundli · Murthal · 22 April 2026", desc: "NCR-adjacent powerhouse — home to Ashoka University, OP Jindal Global University, Kundli industrial estate, and the famous Murthal dhaba hospitality cluster. The highest SME and education density on the route.", stats: [{ val: "~15L", lbl: "Population" }, { val: "2", lbl: "Top Universities" }, { val: "Murthal", lbl: "Hospitality" }], discom: "UHBVN" },
  { num: "08", name: "KARNAL", tagline: "Smart City · NDRI Dairy · 29 April 2026", desc: "Smart City Mission member — premium basmati rice exporters with global market access. NDRI (National Dairy Research Institute) brings agri-tech credibility. High-income buyers ready for premium solar, EV, and smart-home tech.", stats: [{ val: "~15L", lbl: "Population" }, { val: "Smart", lbl: "City Status" }, { val: "Basmati", lbl: "Export Hub" }], discom: "UHBVN" },
  { num: "09", name: "YAMUNANAGAR", tagline: "Plywood & Sugar Mills · 6 May 2026", desc: "India's plywood capital + major sugar and paper mills. The highest density of mid-to-large SMEs outside the Delhi NCR — every factory paying ₹5-50 lakh monthly bills, with ESG pressure and zero solar alternatives yet locally available.", stats: [{ val: "~12L", lbl: "Population" }, { val: "1000+", lbl: "SMEs" }, { val: "India's", lbl: "Plywood Capital" }], discom: "UHBVN" },
  { num: "10", name: "CHANDIGARH", tagline: "Summit & Awards Night · 14-15 May 2026", desc: "The grand finale — a 2-day flagship event combining a full-scale activation, the closing Summit, and the Awards Night with Hon'ble Sh. Anil Vij as Chief Guest. Premium buyers, government leadership, national press, and HGER 2027 announcement.", stats: [{ val: "Capital", lbl: "Of Haryana" }, { val: "Summit", lbl: "+ Awards" }, { val: "CM", lbl: "Photo-op" }], discom: "CED" }
];

export default function RoadshowPage() {
  const rotatingWords = [
    "THE HGER ROUTE",
    "10 CITIES",
    "3-DAY STOP OVER",
    "STATE-WIDE IMPACT"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">
      
      {/* Hero Section with Rotating Text */}
      <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1a8a5e] font-mono">Route 2026</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center">
            <div className="opacity-95">TEN CITIES. THREE MONTHS.</div>
            
            <div className="inline-flex justify-center items-center overflow-hidden py-2 px-1 min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="relative italic font-light text-[#1a8a5e] whitespace-nowrap block pb-2 cursor-default select-none uppercase"
                >
                  {rotatingWords[wordIndex]}
                  <span className="absolute bottom-0 left-2 right-2 h-[4px] sm:h-[6px] bg-[#1a8a5e]/25 rounded-full" />
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          
          <p className="text-[#2d4a45]/80 text-[13px] sm:text-base max-w-2xl mx-auto leading-relaxed pt-4 font-medium text-balance">
            Every stop on HGER 2026 is a carefully designed 3-day ground activation — branded stalls, live demos, government enrolment desks, institutional B2B meets, and Haryanvi-language outreach. Here&apos;s the complete route.
          </p>
        </div>
      </section>

      {/* Cities Trail */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">The 10 Cities</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">A city-by-city strategy.</h2>
          <p className="text-[#2d4a45]/60 text-xs sm:text-sm max-w-2xl font-medium">
            Every district selected for its unique buyer profile — from cement plants in Charkhi Dadri to basmati exporters in Karnal. No overlap. No waste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map((city, i) => (
            <div key={i} className="bg-white rounded-[32px] p-8 md:p-10 border border-[#1a8a5e]/10 group hover:bg-[#0a1f1c] transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[#1a8a5e] font-mono text-lg font-light italic">/{city.num}</span>
                <span className="bg-[#1a8a5e]/5 text-[#1a8a5e] text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-white/10 group-hover:text-white transition-colors">
                  {city.discom}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#0a1f1c] group-hover:text-white mb-1 transition-colors uppercase tracking-tight">{city.name}</h3>
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#1a8a5e] mb-6 font-bold">{city.tagline}</div>
              <p className="text-[#2d4a45]/70 group-hover:text-white/60 text-xs sm:text-sm leading-relaxed mb-10 transition-colors font-medium">
                {city.desc}
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#1a8a5e]/10 group-hover:border-white/10 transition-colors">
                {city.stats.map((stat, si) => (
                  <div key={si}>
                    <div className="text-lg sm:text-xl font-sans font-bold text-[#0a1f1c] group-hover:text-[#1a8a5e] transition-colors">{stat.val}</div>
                    <div className="text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.2em] opacity-40 group-hover:text-white/40 transition-colors font-bold">{stat.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activation Breakdown (Expect Section) */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">What Happens at Every City</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white uppercase tracking-tight">A complete activation, not just a booth.</h2>
            <p className="text-white/40 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Each HGER stop is a 3-day, fully-produced ground event. Here&apos;s what every sponsor and visitor experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            {[
              {
                title: "Custom-built stalls",
                desc: "Premium branded, weatherproof stalls — fresh setup in every city, designed for premium product showcasing.",
                icon: (
                  <svg className="w-8 h-8 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 9h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15" />
                  </svg>
                )
              },
              {
                title: "Govt. enrolment desks",
                desc: "HAREDA + DISCOM officers helping visitors apply for PM Surya Ghar, PM-KUSUM subsidies on the spot.",
                icon: (
                  <svg className="w-8 h-8 text-[#1e6fb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.33l-7.5-5-7.5 5V21m16.5 0H3" />
                  </svg>
                )
              },
              {
                title: "Live product demos",
                desc: "Real solar panels, EV test rides, smart-home setups — visitors touch, feel, and compare side-by-side.",
                icon: (
                  <svg className="w-8 h-8 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              {
                title: "Press & lead capture",
                desc: "Local Haryanvi-language press, digital lead scanning kiosks, and visitor demographic tracking for sponsors.",
                icon: (
                  <svg className="w-8 h-8 text-[#2cc985]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[24px] p-6 space-y-4 hover:bg-white/10 transition-colors">
                <div className="flex justify-center sm:justify-start">{item.icon}</div>
                <h4 className="text-base font-bold uppercase tracking-tight">{item.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Master Schedule</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">The complete calendar.</h2>
        </div>
        
        <div className="bg-white rounded-[32px] border border-[#1a8a5e]/10 overflow-hidden shadow-sm">
          <div className="hidden md:grid grid-cols-[80px_1fr_180px_100px] gap-6 p-6 bg-[#0a1f1c] text-white font-mono text-[9px] tracking-[0.3em] uppercase">
            <span>Stop</span>
            <span>City Profile</span>
            <span>Date</span>
            <span className="text-right">Discom</span>
          </div>
          <div className="divide-y divide-[#1a8a5e]/5">
            {cities.map((city, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[80px_1fr_180px_100px] gap-4 md:gap-6 p-6 md:p-8 items-center hover:bg-[#f0f7f4]/25 transition-colors group">
                <span className="text-3xl font-sans font-light italic text-[#1a8a5e] group-hover:scale-110 transition-transform">/{city.num}</span>
                <div className="space-y-0.5">
                  <h4 className="text-lg md:text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">{city.name}</h4>
                  <p className="text-[9px] text-[#2d4a45]/40 font-mono uppercase tracking-widest">{city.tagline.split('·')[0]}</p>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0a1f1c] tracking-widest uppercase">{city.tagline.split('·')[1] || "MAY 2026"}</div>
                <div className="text-[9px] md:text-right font-mono font-bold text-[#1a8a5e] uppercase tracking-wider">{city.discom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-white border border-[#1a8a5e]/15 rounded-[40px] p-8 md:p-14 text-center relative overflow-hidden shadow-xl max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight uppercase">
            Ready to be part of <span className="text-[#1a8a5e] italic font-light">the journey?</span>
          </h2>
          <p className="text-[#2d4a45]/70 text-xs sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Exactly 20 sponsor slots. 10 cities. Once filled, applications close. Find out how your brand can join.
          </p>
          <div className="pt-4">
            <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase transition-all shadow-md">
              Explore Sponsorship
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
