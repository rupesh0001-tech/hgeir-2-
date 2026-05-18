"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SummitPage() {
  const rotatingWords = [
    "THE HGER SUMMIT",
    "AWARDS NIGHT",
    "VIP PROTOCOL",
    "LEADERSHIP PANEL"
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
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1a8a5e] font-mono">The Grand Finale</span>
            <span className="w-8 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase flex flex-col items-center justify-center">
            <div className="opacity-95">CELEBRATING SUCCESS AT</div>
            
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
          
          <p className="text-[#2d4a45]/80 text-[13px] sm:text-base max-w-3xl mx-auto leading-relaxed pt-4 font-medium text-balance">
            An evening that closes 3 months of journey — uniting policymakers, industry leaders, sponsors, dealers, and changemakers shaping Haryana&apos;s renewable energy future. With awards across 6 prestigious categories and Hon&apos;ble Sh. Anil Vij as Chief Guest.
          </p>
        </div>
      </section>

      {/* Chief Guest */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="bg-[#0a1f1c] rounded-[32px] p-8 md:p-12 lg:col-span-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl min-h-[300px]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a8a5e]/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10 space-y-4">
            <div className="text-8xl sm:text-9xl font-sans font-black text-white/5 italic select-none">AV</div>
            <div className="text-xs font-bold text-[#f4c430] uppercase tracking-[0.3em] font-mono">CHIEF GUEST · 2026</div>
            <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white uppercase tracking-tight">Sh. Anil Vij</h3>
            <p className="text-[#1a8a5e] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
              Hon&apos;ble Minister for Power, Energy & Transport, Haryana
            </p>
          </div>
        </div>

        <div className="bg-[#0e5a3d]/[0.03] rounded-[32px] p-8 md:p-12 lg:col-span-7 flex flex-col justify-center border border-[#0e5a3d]/5 shadow-sm">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.3em] uppercase mb-4 font-bold">Keynote Guest of Honour</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#0a1f1c] leading-tight mb-6 tracking-tight">
            Veteran Statesman & Leader
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-[#2d4a45]/70 leading-relaxed font-medium">
            <p>
              A veteran statesman and one of Haryana&apos;s most respected political voices, Sh. Anil Vij brings decades of public-service leadership and deep familiarity with the state&apos;s energy and infrastructure agenda.
            </p>
            <p>
              As Chief Guest of the HGER 2026 Summit & Awards Night, he will deliver the keynote address, formally recognise the award winners across both Exhibitor and Visitor tracks, and announce HGER 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Program Agenda */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Evening Agenda · 15 May 2026</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">The Full Programme.</h2>
          <p className="text-[#2d4a45]/60 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            A carefully curated 4-hour evening — combining business, recognition, and celebration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-[#1a8a5e]/10 bg-white rounded-[32px] border border-[#1a8a5e]/5 overflow-hidden shadow-sm">
          {[
            {
              time: "5:30 PM",
              title: "Registration & Networking Welcome",
              desc: "Curated welcome zone, sponsor showcase, networking with district commissioners, university heads, and CXOs."
            },
            {
              time: "6:30 PM",
              title: "Opening Ceremony · Lamp Lighting",
              desc: "Hon'ble Minister Sh. Anil Vij, senior officials from HAREDA, DHBVN, UHBVN, and the HGER leadership inaugurate the evening."
            },
            {
              time: "7:00 PM",
              title: "Keynote · Hon'ble Sh. Anil Vij",
              desc: "Address on Haryana's renewable energy roadmap, state policy direction, and the role of grassroots adoption in the energy transition."
            },
            {
              time: "7:30 PM",
              title: "Expert Panel · The Future of Green Haryana",
              desc: "30-minute panel discussion with industry leaders, HAREDA, and senior policymakers on solar, EV, and decentralised renewable adoption."
            },
            {
              time: "8:15 PM",
              title: "Track I · Exhibitor Awards Presentation",
              desc: "Renewable Energy Brand of the Year, Most Innovative Green Technology, Sustainability Leadership Award — presented by the Hon'ble Minister."
            },
            {
              time: "8:45 PM",
              title: "Track II · Visitor Awards Presentation",
              desc: "Sustainable Farmer, Greenest Institution, Renewable Champion — recognising real changemakers from across the 10 cities."
            },
            {
              time: "9:15 PM",
              title: "HGER 2027 Announcement",
              desc: "The next chapter — expanded route, multi-state vision, and sponsor pre-bookings open."
            },
            {
              time: "9:30 PM",
              title: "Gala Dinner & Networking",
              desc: "Premium curated dinner, sponsor-buyer meets, and a closing toast to the HGER 2026 journey."
            }
          ].map((item, i) => (
            <div key={i} className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 items-start hover:bg-[#f0f7f4]/40 transition-colors">
              <span className="text-lg font-mono font-black text-[#1a8a5e] leading-none pt-1">{item.time}</span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#0a1f1c] uppercase tracking-tight">{item.title}</h4>
                <p className="text-[#2d4a45]/70 text-xs sm:text-[13px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Award Tracks */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Awards · 6 Prestigious Categories</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">Honouring excellence from every side.</h2>
          <p className="text-[#2d4a45]/60 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Two carefully designed tracks — one for industry leaders, one for grassroots champions. Awards presented on-stage by the Hon&apos;ble Minister with state-level media coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto pt-4">
          
          {/* Track 1: Exhibitors */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-[#1a8a5e]/10 shadow-sm space-y-8">
            <div className="pb-6 border-b border-[#1a8a5e]/5">
              <span className="text-[#f4c430] font-mono text-[9px] tracking-[0.3em] uppercase font-bold">Track I</span>
              <h3 className="text-2xl font-bold text-[#0a1f1c] mt-2 uppercase tracking-tight">Exhibitor Awards</h3>
              <p className="text-[#2d4a45]/60 text-xs leading-relaxed font-medium mt-1">
                Recognising industry leaders & sponsor excellence across the 10-city journey.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { num: "01", title: "Renewable Energy Brand of the Year", desc: "For the brand delivering highest visitor impact, lead conversion, and brand recall." },
                { num: "02", title: "Most Innovative Green Technology", desc: "For breakthrough product, system, or solution showcased during HGER 2026." },
                { num: "03", title: "Sustainability Leadership Award", desc: "For demonstrable ESG commitment, social impact, and long-term renewable vision." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-2xl font-sans font-black italic text-[#f4c430] shrink-0 w-8">{item.num}</span>
                  <div className="space-y-1">
                    <h5 className="text-sm sm:text-base font-bold text-[#0a1f1c] uppercase tracking-tight">{item.title}</h5>
                    <p className="text-[#2d4a45]/70 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Visitors */}
          <div className="bg-[#0a1f1c] rounded-[32px] p-8 md:p-10 text-white shadow-xl space-y-8">
            <div className="pb-6 border-b border-white/5">
              <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.3em] uppercase font-bold">Track II</span>
              <h3 className="text-2xl font-bold mt-2 uppercase tracking-tight">Visitor Awards</h3>
              <p className="text-white/40 text-xs leading-relaxed font-medium mt-1">
                Celebrating real adopters and champions of green energy across Haryana.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { num: "04", title: "Sustainable Farmer of Haryana", desc: "For a farmer leading solar/biofuel adoption, PM-KUSUM enrolment, or agri-energy innovation." },
                { num: "05", title: "Greenest Institution", desc: "School, hospital, or college with the most impactful renewable energy adoption story." },
                { num: "06", title: "Renewable Champion", desc: "An exceptional household, panchayat, or SME leading green energy adoption locally." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-2xl font-sans font-black italic text-[#1a8a5e] shrink-0 w-8">{item.num}</span>
                  <div className="space-y-1">
                    <h5 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">{item.title}</h5>
                    <p className="text-white/60 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">What Makes the Summit Unmissable</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">More than an event — a defining moment.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Awards from the Minister",
              desc: "Awards presented personally by Hon'ble Sh. Anil Vij — career-defining recognition for winners.",
              icon: (
                <svg className="w-8 h-8 text-[#f4c430]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0H7.5m9-10.5a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
                </svg>
              )
            },
            {
              title: "National Media Coverage",
              desc: "The Tribune, Dainik Jagran, ANI, DD News, and digital outlets covering the ceremony live.",
              icon: (
                <svg className="w-8 h-8 text-[#1a8a5e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              )
            },
            {
              title: "Premium Networking",
              desc: "HAREDA, DHBVN, UHBVN leaders + sponsor CXOs + district commissioners under one roof.",
              icon: (
                <svg className="w-8 h-8 text-[#0d4a82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A2.25 2.25 0 0112.75 21.5h-1.5a2.25 2.25 0 01-2.25-2.263V19.13m0-3.07M9.375 19.5a9.38 9.38 0 012.625-.372 9.336 9.336 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M9.375 19.5v-.003c-.501-.91-.786-1.957-.786-3.07M9.375 19.5v.109a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-.11m0-3.07a8.66 8.66 0 01-1.808-1.344M1.743 14.122a4.125 4.125 0 017.533-2.493M12.75 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0a3 3 0 11-6 0 3 3 0 016 0zM12.75 3.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )
            },
            {
              title: "HGER 2027 Launch",
              desc: "Multi-state expansion announcement — Punjab, UP, Rajasthan. Sponsor pre-bookings open.",
              icon: (
                <svg className="w-8 h-8 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.64 8.41a14.98 14.98 0 00-3.47 14.36 14.98 14.98 0 008.28-7.82z" />
                </svg>
              )
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#0e5a3d]/[0.02] rounded-[24px] p-6 border border-[#1a8a5e]/5 text-center space-y-4 hover:bg-[#f0f7f4]/50 transition-colors duration-300">
              <div className="flex justify-center">{item.icon}</div>
              <h4 className="text-sm sm:text-base font-bold text-[#0a1f1c] uppercase tracking-tight">{item.title}</h4>
              <p className="text-[#2d4a45]/70 text-xs leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nomination CTA Section */}
      <section className="bg-white border border-[#1a8a5e]/15 rounded-[40px] p-8 md:p-14 text-center relative overflow-hidden shadow-xl max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a8a5e]/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] font-black tracking-[0.4em] text-[#1a8a5e] uppercase block font-mono">Compete & Lead</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight uppercase">
            Want to be on <span className="text-[#1a8a5e] italic font-light">that stage?</span>
          </h2>
          <p className="text-[#2d4a45]/70 text-xs sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Self-nominations and exhibitor award eligibility open from January 2026. Reach out today to learn how your brand can compete.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1b8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase transition-all shadow-md">
              Submit Nomination
            </button>
            <button className="bg-[#0a1f1c] hover:bg-[#2d4a45] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase transition-all shadow-md">
              Sponsor & Compete
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
