import React from 'react';

export default function AboutPage() {
  return (
    <div className="space-y-20 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
      {/* Subpage Hero */}
      <section className="relative flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a8a5e]">Vision 2026</span>
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase">
            A NEW <span className="text-[#1a8a5e] italic font-light decoration-[4px] sm:decoration-[8px] underline underline-offset-[10px] sm:underline-offset-[16px] decoration-[#1a8a5e]/20">MOVEMENT</span> FOR HARYANA.
          </h1>
          
          <div className="pt-8">
            <p className="text-sm md:text-base text-[#2d4a45] font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              HGER is the largest grassroots green energy outreach ever undertaken in Haryana.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-[40px] p-10 flex flex-col justify-center border border-[#1a8a5e]/5 shadow-sm">
          <span className="text-[#1a8a5e] font-mono text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">Why HGER Exists</span>
          <h2 className="text-2xl md:text-4xl font-sans font-bold text-[#0a1f1c] leading-tight mb-6 uppercase tracking-tight">
            A market <span className="italic font-light">hidden</span> in plain sight.
          </h2>
          <p className="text-[#2d4a45]/70 text-base leading-relaxed">
            India's tier 2 and tier 3 cities represent the largest untapped opportunity for renewable energy adoption. 
            HGER closes that gap by bringing the industry directly to the doorstep of every district.
          </p>
        </div>
        <div className="bg-[#0a1f1c] rounded-[40px] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a8a5e] blur-[80px] opacity-20"></div>
          <div className="relative z-10">
            <div className="text-7xl md:text-8xl font-sans font-bold text-white italic mb-2">28M</div>
            <div className="text-sm font-bold text-[#1a8a5e] uppercase tracking-[0.3em]">Haryanvis</div>
            <p className="mt-2 text-white/30 text-[9px] font-mono uppercase tracking-[0.2em]">Ready for transition</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0e5a3d]/[0.02] rounded-[40px] p-10 border border-[#1a8a5e]/5">
          <div className="text-3xl mb-6">🎯</div>
          <h3 className="text-xl font-bold text-[#0a1f1c] mb-4 uppercase tracking-tighter">Our Mission</h3>
          <p className="text-[#2d4a45]/70 leading-relaxed text-sm">
            Bridge the gap between green energy supply and rural demand. Bringing 20 leading brands face-to-face with 50,000+ buyers.
          </p>
        </div>
        <div className="bg-[#0e5a3d]/[0.02] rounded-[40px] p-10 border border-[#1a8a5e]/5">
          <div className="text-3xl mb-6">✨</div>
          <h3 className="text-xl font-bold text-[#0a1f1c] mb-4 uppercase tracking-tighter">Our Vision</h3>
          <p className="text-[#2d4a45]/70 leading-relaxed text-sm">
            A Haryana where every district leads India's energy transition. Establishing HGER as North India's most respected roadshow.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-12 md:p-16 text-white relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
          <div>
            <div className="text-4xl font-sans font-bold text-[#1a8a5e] italic mb-1">10</div>
            <div className="text-[9px] font-mono uppercase tracking-widest opacity-40">Cities Covered</div>
          </div>
          <div>
            <div className="text-4xl font-sans font-bold text-[#1a8a5e] italic mb-1">50K+</div>
            <div className="text-[9px] font-mono uppercase tracking-widest opacity-40">Expected Visitors</div>
          </div>
          <div>
            <div className="text-4xl font-sans font-bold text-[#1a8a5e] italic mb-1">20</div>
            <div className="text-[9px] font-mono uppercase tracking-widest opacity-40">Sponsor Brands</div>
          </div>
          <div>
            <div className="text-4xl font-sans font-bold text-[#1a8a5e] italic mb-1">₹100Cr</div>
            <div className="text-[9px] font-mono uppercase tracking-widest opacity-40">Deal Pipeline</div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">HOW HGER CAME TO BE.</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { year: "2024", title: "The Insight", desc: "Metros were oversaturated; the real opportunity sat in tier 2/3 Haryana." },
            { year: "2025", title: "The Blueprint", desc: "HGER was conceptualised as a curated, 10-city traveling roadshow." },
            { year: "2026", title: "The Launch", desc: "HGER begins in Palwal, traversing the state with solar, wind, and EV tech." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start p-6 bg-white rounded-[24px] border border-[#1a8a5e]/5 hover:bg-[#1a8a5e] hover:text-white transition-all group">
              <div className="text-xl font-sans font-bold italic text-[#1a8a5e] group-hover:text-white shrink-0 w-20">{item.year}</div>
              <div>
                <h4 className="text-base font-bold mb-1 uppercase tracking-tight">{item.title}</h4>
                <p className="opacity-60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Founder & CEO", role: "Strategy · Govt Relations", desc: "Native of Palwal. Regional insight into building state agency partnerships.", initial: "F" },
          { name: "Programme Director", role: "Operations · Execution", desc: "Heads city-by-city execution — venue logistics and ground teams.", initial: "P" },
          { name: "Sponsorships Head", role: "Partnerships · ROI", desc: "Manages the 20-sponsor cohort end-to-end.", initial: "S" }
        ].map((member, i) => (
          <div key={i} className="bg-white rounded-[40px] p-8 border border-[#1a8a5e]/5 text-center group hover:bg-[#0a1f1c] hover:text-white transition-all">
            <div className="w-20 h-20 bg-[#1a8a5e]/10 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-sans italic text-[#1a8a5e] group-hover:bg-[#1a8a5e] group-hover:text-white transition-all">
              {member.initial}
            </div>
            <h4 className="text-xl font-bold mb-1 uppercase tracking-tighter">{member.name}</h4>
            <div className="text-[9px] font-mono uppercase tracking-widest text-[#1a8a5e] mb-3 font-bold">{member.role}</div>
            <p className="opacity-50 text-[11px] leading-relaxed">{member.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Strip */}
      <section className="bg-[#1a8a5e] rounded-[56px] p-12 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-[100px]"></div>
        <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 leading-tight tracking-tight uppercase">
            WANT TO BE PART OF <span className="italic font-light">HGER 2026?</span>
        </h2>
        <button className="bg-white text-[#1a8a5e] text-[10px] font-bold px-10 py-4 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all">
            Get in Touch
        </button>
      </section>
    </div>
  );
}
