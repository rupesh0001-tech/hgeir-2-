"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SponsorsPage() {
  const rotatingWords = [
    "TWENTY SEATS ONLY",
    "THREE TIERS",
    "MAXIMUM LEADS",
    "REAL BUSINESS"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const slots = [
    { num: "01", status: "Taken", company: "Leading Solar EPC Brand" },
    { num: "02", status: "Taken", company: "National EV 2-Wheeler Brand" },
    { num: "03", status: "Taken", company: "Top Battery Storage Manufacturer" },
    { num: "04", status: "Taken", company: "State Green Finance Partner" },
    { num: "05", status: "Taken", company: "Major Biofuels Enterprise" },
    { num: "06", status: "Taken", company: "Premium Solar Inverter Brand" },
    { num: "07", status: "Open", company: "Available for Reservation" },
    { num: "08", status: "Open", company: "Available for Reservation" },
    { num: "09", status: "Open", company: "Available for Reservation" },
    { num: "10", status: "Open", company: "Available for Reservation" },
    { num: "11", status: "Open", company: "Available for Reservation" },
    { num: "12", status: "Open", company: "Available for Reservation" },
    { num: "13", status: "Open", company: "Available for Reservation" },
    { num: "14", status: "Open", company: "Available for Reservation" },
    { num: "15", status: "Open", company: "Available for Reservation" },
    { num: "16", status: "Open", company: "Available for Reservation" },
    { num: "17", status: "Open", company: "Available for Reservation" },
    { num: "18", status: "Open", company: "Available for Reservation" },
    { num: "19", status: "Open", company: "Available for Reservation" },
    { num: "20", status: "Open", company: "Available for Reservation" }
  ];

  return (
    <div className="space-y-16 max-w-[1400px] mx-auto px-6 py-8 md:py-12">
      
      {/* Hero Section with Rotating Text */}
      <section className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-12">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1a8a5e] font-mono">Sponsorship</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center">
            <div className="opacity-95">RESERVED STAGE FOR</div>
            
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
            HGER caps participation at exactly 20 brands across all 10 cities — guaranteeing every sponsor real visibility, real leads, and real ROI. Once filled, applications close. Period.
          </p>
        </div>
      </section>

      {/* Slots Live Status Section */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Live Booking Map · First-Come Basis</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-white">Only <span className="text-[#1a8a5e] italic font-light">14 slots</span> remain.</h2>
            <p className="text-white/40 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Hover or click on a slot to view its current reservation status. Every sponsor commits across all 10 cities — no city-by-city participation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-3 pt-4">
            {slots.map((slot, i) => (
              <div 
                key={i} 
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center font-mono text-xs font-bold border cursor-pointer transition-all duration-300 relative group ${slot.status === 'Taken' ? 'bg-white/5 border-white/10 text-white/30' : 'bg-[#1a8a5e]/10 border-[#1a8a5e]/40 text-[#1a8a5e] hover:bg-[#1a8a5e] hover:text-white hover:scale-105 shadow-md'}`}
                onClick={() => setSelectedSlot(selectedSlot === i ? null : i)}
              >
                <span>{slot.num}</span>
                {slot.status === 'Taken' ? (
                  <span className="text-[7px] opacity-40 uppercase font-mono tracking-widest mt-1">TAKEN</span>
                ) : (
                  <span className="text-[7px] text-[#1a8a5e] group-hover:text-white uppercase font-mono tracking-widest mt-1">OPEN</span>
                )}
                
                {/* Popover */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 bg-white text-[#0a1f1c] rounded-xl p-3 shadow-xl z-50 text-left font-sans">
                  <div className="text-[9px] font-mono font-bold text-[#1a8a5e] uppercase tracking-wider mb-1">Slot {slot.num} · {slot.status}</div>
                  <div className="text-[11px] font-bold leading-snug">{slot.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 text-[9px] font-mono uppercase tracking-widest opacity-40 font-bold">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-white/10"></div> Taken / Reserved</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded bg-[#1a8a5e]"></div> Available / Open</div>
          </div>

        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Sponsorship Packages</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Three tiers. One promise.</h2>
          <p className="text-[#2d4a45]/60 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Your brand, in front of the right buyer, in every city we visit. Pick the tier that matches your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4 items-stretch">
          
          {/* Tier 1: Hamsafar */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-6">
              <div>
                <span className="text-[#1a8a5e]/60 font-mono text-[9px] tracking-[0.2em] uppercase font-bold">Tier III · Associate</span>
                <h3 className="text-3xl font-sans font-bold text-[#0a1f1c] mt-2 uppercase tracking-tight">Hamsafar</h3>
                <p className="text-[#2d4a45]/60 font-mono italic text-[11px] mt-1">12 slots · co-traveller status</p>
              </div>

              <ul className="space-y-3 pt-4 border-t border-[#1a8a5e]/5">
                {["Branded stall in all 10 cities", "Logo on all collateral & banners", "Lead capture at every stop", "Closing summit invitation (2 seats)", "Institutional buyer introductions", "Eligible for Visitor Awards mentions", "Post-event ROI report"].map((f, fi) => (
                  <li key={fi} className="flex gap-2.5 items-start text-xs text-[#2d4a45]/70 leading-relaxed font-medium">
                    <span className="text-[#1a8a5e] font-bold">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1a8a5e]/5 space-y-4">
              <div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#2d4a45]/40 mb-1">Pricing</div>
                <div className="text-xl font-bold text-[#0a1f1c]">From ₹5–8 Lakh <span className="text-xs font-mono font-normal text-[#2d4a45]/60">· 12 slots</span></div>
              </div>
              <a href="#apply" className="w-full bg-[#0a1f1c] hover:bg-[#1a8a5e] text-white py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all shadow-md block text-center">
                Apply for Hamsafar
              </a>
            </div>
          </div>

          {/* Tier 2: Saarthi (Featured) */}
          <div className="bg-[#0e5a3d]/[0.02] rounded-[32px] p-8 border-2 border-[#1a8a5e] flex flex-col justify-between hover:shadow-xl transition-all duration-300 group relative">
            <div className="absolute top-0 right-0 bg-[#1a8a5e] text-white text-[8px] font-mono font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">Most Popular</div>
            
            <div className="space-y-6">
              <div>
                <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.2em] uppercase font-bold">Tier II · Co-Title</span>
                <h3 className="text-3xl font-sans font-bold text-[#0a1f1c] mt-2 uppercase tracking-tight">Saarthi</h3>
                <p className="text-[#2d4a45]/60 font-mono italic text-[11px] mt-1">7 slots · strategic partner</p>
              </div>

              <ul className="space-y-3 pt-4 border-t border-[#1a8a5e]/5">
                {["Premium stall + product showcase zone", "Stage time at every city event", "Co-branded press releases", "Dedicated PR + media coverage", "Govt MoU signing photo-ops", "Closing summit awards stage (10 seats)", "Track I Exhibitor Award eligibility", "Dealer-network onboarding support"].map((f, fi) => (
                  <li key={fi} className="flex gap-2.5 items-start text-xs text-[#2d4a45]/80 leading-relaxed font-bold">
                    <span className="text-[#1a8a5e] font-bold">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1a8a5e]/5 space-y-4">
              <div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#2d4a45]/40 mb-1">Pricing</div>
                <div className="text-xl font-bold text-[#1a8a5e]">₹15–25 Lakh <span className="text-xs font-mono font-normal text-[#2d4a45]/60">· 7 slots</span></div>
              </div>
              <a href="#apply" className="w-full bg-[#1a8a5e] hover:bg-[#0e5a3d] text-white py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all shadow-md block text-center">
                Reserve Saarthi
              </a>
            </div>
          </div>

          {/* Tier 3: Pradhaan */}
          <div className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-6">
              <div>
                <span className="text-[#1a8a5e]/60 font-mono text-[9px] tracking-[0.2em] uppercase font-bold">Tier I · Title Sponsor</span>
                <h3 className="text-3xl font-sans font-bold text-[#0a1f1c] mt-2 uppercase tracking-tight">Pradhaan</h3>
                <p className="text-[#2d4a45]/60 font-mono italic text-[11px] mt-1">1 slot · exclusive title</p>
              </div>

              <ul className="space-y-3 pt-4 border-t border-[#1a8a5e]/5">
                {["\"Presented by\" naming rights", "HGER becomes \"[Brand] HGER 2026\"", "Inaugural ribbon-cut every city", "Headline closing summit speaker", "Year-long brand association", "Top stage during Awards Night", "First right of refusal for HGER 2027", "Custom-designed sponsor benefits"].map((f, fi) => (
                  <li key={fi} className="flex gap-2.5 items-start text-xs text-[#2d4a45]/70 leading-relaxed font-medium">
                    <span className="text-[#1a8a5e] font-bold">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1a8a5e]/5 space-y-4">
              <div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[#2d4a45]/40 mb-1">Pricing</div>
                <div className="text-xl font-bold text-[#0a1f1c]">By Invitation <span className="text-xs font-mono font-normal text-[#2d4a45]/60">· 1 slot</span></div>
              </div>
              <a href="#apply" className="w-full bg-[#0a1f1c] hover:bg-[#1a8a5e] text-white py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all shadow-md block text-center">
                Apply for Pradhaan
              </a>
            </div>
          </div>

        </div>

        <p className="text-center text-[10px] sm:text-xs text-[#2d4a45]/60 max-w-2xl mx-auto font-medium leading-relaxed pt-4">
          All tiers include co-branding with HAREDA, DHBVN, and UHBVN. Final packages customized based on category exclusivity and city activation depth.
        </p>
      </section>

      {/* Audience Segmentation Grid (Sleek SVGs, No Emojis) */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Audience Demographics</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Buyers with budgets, not browsers.</h2>
          <p className="text-[#2d4a45]/60 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            8 core visitor segments. Every attendee carrying procurement budgets, residential subsidies, agricultural needs, or commercial intent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {[
            {
              title: "Schools & Colleges",
              pct: "14% of footfall",
              desc: "1,200+ schools & 80+ colleges seeking rooftop solar systems under PM Surya Ghar and educational CSR schemes.",
              icon: (
                <svg className="w-6 h-6 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21l-6.825-3.943a12.083 12.083 0 01.665-6.479L12 14z" />
                </svg>
              )
            },
            {
              title: "Hospitals & Healthcare",
              pct: "11% of footfall",
              desc: "Govt hospitals, clinics, PHCs needing reliable 24×7 solar backup, oxygen plant systems, and clean backup solutions.",
              icon: (
                <svg className="w-6 h-6 text-[#1e6fba]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            },
            {
              title: "Govt. & Panchayats",
              pct: "13% of footfall",
              desc: "6,000+ Gram Panchayats with budgets allocated for solar streetlights, electric utility fleets, and retrofits.",
              icon: (
                <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )
            },
            {
              title: "Hotels & Commercial",
              pct: "12% of footfall",
              desc: "ESG-pressured commercial office buildings, hospitality venues, and dhabas seeking smart solar-plus-storage models.",
              icon: (
                <svg className="w-6 h-6 text-[#2cc985]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 9h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15m-5.25 3h1.5m2.25 0H15" />
                </svg>
              )
            },
            {
              title: "Households",
              pct: "18% of footfall",
              desc: "Affluent homeowners seeking to cut ₹3,000–8,000 monthly bills using the direct PM Surya Ghar Muft Bijli subsidy.",
              icon: (
                <svg className="w-6 h-6 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v11h14V10" />
                </svg>
              )
            },
            {
              title: "Farmers & FPOs",
              pct: "15% of footfall",
              desc: "PM-KUSUM agricultural solar pump prospective buyers (up to 90% government funding) and high-income crop landholders.",
              icon: (
                <svg className="w-6 h-6 text-[#1e6fba]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )
            },
            {
              title: "Dealers & Distributors",
              pct: "9% of footfall",
              desc: "Regional solar dealers, EV showroom owners, electrical distributors, and aspiring clean-tech channel partners.",
              icon: (
                <svg className="w-6 h-6 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "SMEs & Industry",
              pct: "8% of footfall",
              desc: "Manufacturing, plywood exporters, and metal engineering plants paying ₹5–50 Lakh monthly bills with urgent solar ROI intent.",
              icon: (
                <svg className="w-6 h-6 text-[#2cc985]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                </svg>
              )
            }
          ].map((segment, i) => (
            <div key={i} className="bg-white rounded-[24px] border border-[#1a8a5e]/10 p-6 flex flex-col justify-between hover:border-[#1a8a5e]/30 transition-all shadow-sm">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0f7f4] flex items-center justify-center">
                  {segment.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#0a1f1c] uppercase tracking-tight">{segment.title}</h4>
                <p className="text-[#2d4a45]/70 text-xs leading-relaxed font-medium">{segment.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a8a5e]/5 text-[9px] font-mono font-bold text-[#1a8a5e] uppercase tracking-wider">
                {segment.pct}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why HGER over Generic Expo */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { num: "01", title: "Exclusivity", desc: "Only 20 sponsors total. At a typical green energy expo, 200+ brands compete for attention. At HGER, your brand is one of just 20 — guaranteed visibility, in every city, every day." },
          { num: "02", title: "Govt-aligned", desc: "Live HAREDA, DHBVN, UHBVN enrolment desks at every stall. Visitors aren't browsing — they're applying for subsidies right next to your booth. Maximum-intent leads." },
          { num: "03", title: "10× Reach", desc: "One commitment, 10 cities, 50,000+ visitors, 3 months of coverage. Doing this individually city-by-city would cost 5× more — and you'd still not have HAREDA partnership." }
        ].map((why, i) => (
          <div key={i} className="bg-[#0e5a3d]/[0.02] p-10 rounded-[32px] border border-[#1a8a5e]/10 text-center space-y-4">
            <div className="text-5xl font-sans font-light italic text-[#1a8a5e]">/{why.num}</div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#0a1f1c]">{why.title}</h3>
            <p className="text-[#2d4a45]/70 text-xs leading-relaxed font-medium">{why.desc}</p>
          </div>
        ))}
      </section>

      {/* Application Form */}
      <section className="max-w-3xl mx-auto bg-white rounded-[40px] p-8 md:p-14 border border-[#1a8a5e]/10 shadow-sm" id="apply">
        <div className="text-center mb-10 space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Apply Now · Reserve Your Slot</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Tell us about your brand.</h2>
          <p className="text-[#2d4a45]/60 text-xs sm:text-sm font-medium">
            Drop your details and we&apos;ll be in touch within 48 hours to walk you through the right tier for your goals.
          </p>
        </div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully! We will get in touch with you within 48 hours.'); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Full Name</label>
              <input type="text" required placeholder="YOUR FULL NAME" className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Designation</label>
              <input type="text" required placeholder="CMO / HEAD OF MARKETING / ETC." className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Company Name</label>
              <input type="text" required placeholder="YOUR COMPANY" className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Industry Category</label>
              <select required className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all appearance-none">
                <option value="">SELECT CATEGORY</option>
                <option>Solar — Rooftop / Commercial</option>
                <option>Solar — Utility / Industrial</option>
                <option>EV — Two/Three Wheeler</option>
                <option>EV — Cars / Fleet</option>
                <option>EV — Charging Infrastructure</option>
                <option>Energy Storage / Batteries</option>
                <option>Wind / Hybrid</option>
                <option>Biofuels / Biogas</option>
                <option>Green Hydrogen</option>
                <option>Financial Services — Green Loans</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Work Email</label>
              <input type="email" required placeholder="YOU@COMPANY.COM" className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Phone</label>
              <input type="tel" required placeholder="+91 ..." className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Sponsorship Interest</label>
            <select required className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all appearance-none">
              <option value="">PICK A TIER</option>
              <option>Pradhaan — Title Sponsor (1 slot)</option>
              <option>Saarthi — Co-Title (7 slots)</option>
              <option>Hamsafar — Associate (12 slots)</option>
              <option>Open to discussion</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[8px] font-mono uppercase tracking-widest text-[#1a8a5e] font-bold">Tell us about your goals</label>
            <textarea placeholder="What outcomes are you hoping HGER delivers? Brand awareness, dealer network, sales pipeline, ESG storytelling — anything specific." className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest h-32 focus:ring-1 focus:ring-[#1a8a5e] transition-all"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#0a1f1c] text-white py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#1a8a5e] transition-all shadow-xl">
            Submit Application
          </button>
          <p className="text-center text-[10px] font-mono tracking-widest text-[#2d4a45]/40 mt-4">
            Or email <a href="mailto:partnerships@hger.in" className="text-[#1a8a5e] font-bold">partnerships@hger.in</a>
          </p>
        </form>
      </section>

    </div>
  );
}
