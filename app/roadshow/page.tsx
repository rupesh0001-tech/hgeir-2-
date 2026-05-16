import React from 'react';

const cities = [
  { num: "01", name: "PALWAL", tagline: "KMP Logistics Hub · 4 March 2026", desc: "The gateway to the roadshow — Palwal sits at the southern edge of Haryana on the KMP Expressway. Strong transport SME base and agri-belt economy.", stats: [{ val: "~10L", lbl: "Population" }, { val: "300+", lbl: "Panchayats" }, { val: "Transport", lbl: "SME Focus" }], discom: "DHBVN" },
  { num: "02", name: "REWARI", tagline: "Auto-SME Cluster · 11 March 2026", desc: "Heart of the Delhi-Mumbai Industrial Corridor with a dense auto-component SME base. Suzuki, Hero, and mid-tier suppliers.", stats: [{ val: "~9L", lbl: "Population" }, { val: "500+", lbl: "SMEs" }, { val: "DMIC", lbl: "Corridor" }], discom: "DHBVN" },
  { num: "03", name: "CHARKHI DADRI", tagline: "Cement Industry · 18 March 2026", desc: "Haryana's newest district — home to major cement plants. Big-ticket commercial buyers with zero prior green-energy expo exposure.", stats: [{ val: "~5L", lbl: "Population" }, { val: "5+", lbl: "Cement Plants" }, { val: "First", lbl: "Ever Expo" }], discom: "DHBVN" },
  { num: "04", name: "HISAR", tagline: "Agri University & Industrial · 1 April 2026", desc: "Home to CCS Haryana Agricultural University — bringing academic credibility and a strong industrial SME base.", stats: [{ val: "~17L", lbl: "Population" }, { val: "CCS HAU", lbl: "University" }, { val: "DHBVN HQ", lbl: "Region" }], discom: "DHBVN" },
  { num: "05", name: "SIRSA", tagline: "Cotton Belt · 8 April 2026", desc: "Western frontier — large farming community. Massive PM-KUSUM solar pump potential for farmers looking to cut diesel costs.", stats: [{ val: "~13L", lbl: "Population" }, { val: "Cotton", lbl: "Crop Belt" }, { val: "Farmer", lbl: "Heavy" }], discom: "DHBVN" },
  { num: "06", name: "ROHTAK", tagline: "MDU · IIM · PGIMS · 15 April 2026", desc: "Institutional powerhouse of central Haryana. Schools, hospitals, MBA networks, and factories in one city.", stats: [{ val: "~10L", lbl: "Population" }, { val: "3", lbl: "Universities" }, { val: "PGIMS", lbl: "Hospital" }], discom: "UHBVN" },
  { num: "07", name: "SONIPAT", tagline: "Ashoka · Kundli · Murthal · 22 April 2026", desc: "NCR-adjacent powerhouse — home to Ashoka University and Kundli industrial estate. Highest SME and education density.", stats: [{ val: "~15L", lbl: "Population" }, { val: "2", lbl: "Top Unis" }, { val: "Murthal", lbl: "Hospitality" }], discom: "UHBVN" },
  { num: "08", name: "KARNAL", tagline: "Smart City · NDRI Dairy · 29 April 2026", desc: "Smart City Mission member — premium basmati rice exporters. High-income buyers ready for premium solar and EV tech.", stats: [{ val: "~15L", lbl: "Population" }, { val: "Smart", lbl: "City Status" }, { val: "Basmati", lbl: "Export Hub" }], discom: "UHBVN" },
  { num: "09", name: "YAMUNANAGAR", tagline: "Plywood & Sugar Mills · 6 May 2026", desc: "India's plywood capital. Highest density of mid-to-large SMEs outside Delhi NCR — every factory paying high monthly bills.", stats: [{ val: "~12L", lbl: "Population" }, { val: "1000+", lbl: "SMEs" }, { val: "Plywood", lbl: "Capital" }], discom: "UHBVN" },
  { num: "10", name: "CHANDIGARH", tagline: "Summit & Awards · 14-15 May 2026", desc: "The grand finale — 2-day flagship event with the closing Summit and Awards Night. Premium buyers and government leadership.", stats: [{ val: "Capital", lbl: "Of Haryana" }, { val: "Summit", lbl: "+ Awards" }, { val: "CM", lbl: "Photo-op" }], discom: "CED" }
];

export default function RoadshowPage() {
  return (
    <div className="space-y-20 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
      {/* Page Hero */}
      <section className="relative flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a8a5e]">Route 2026</span>
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase">
            10 CITIES. <span className="text-[#0fa3a3] italic font-light decoration-[4px] sm:decoration-[8px] underline underline-offset-[10px] sm:underline-offset-[16px] decoration-[#0fa3a3]/20">3 MONTHS.</span>
          </h1>
          
          <div className="pt-8">
            <p className="text-sm md:text-base text-[#2d4a45] font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Every stop on HGER 2026 is a carefully designed 3-day activation.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Trail */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">The 10 Cities</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">A CITY-BY-CITY STRATEGY.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map((city, i) => (
            <div key={i} className="bg-white rounded-[40px] p-10 border border-[#1a8a5e]/5 group hover:bg-[#0a1f1c] transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[#1a8a5e] font-mono text-lg font-light italic">/{city.num}</span>
                <span className="bg-[#1a8a5e]/5 text-[#1a8a5e] text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {city.discom}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#0a1f1c] group-hover:text-white mb-1 transition-colors uppercase tracking-tight">{city.name}</h3>
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#1a8a5e] mb-6 font-bold">{city.tagline}</div>
              <p className="text-[#2d4a45]/70 group-hover:text-white/40 text-sm leading-relaxed mb-10 transition-colors">
                {city.desc}
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#1a8a5e]/10 group-hover:border-white/10 transition-colors">
                {city.stats.map((stat, si) => (
                    <div key={si}>
                        <div className="text-xl font-sans font-bold text-[#0a1f1c] group-hover:text-[#1a8a5e] transition-colors">{stat.val}</div>
                        <div className="text-[7px] font-mono uppercase tracking-[0.2em] opacity-40 group-hover:text-white transition-colors">{stat.lbl}</div>
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activation breakdown */}
      <section className="bg-[#0a1f1c] rounded-[56px] p-12 md:p-16 text-white relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center md:text-left">
          {[
            { title: "CUSTOM STALLS", icon: "🏢", desc: "Weatherproof branded stalls." },
            { title: "GOVT DESKS", icon: "🏛️", desc: "Live subsidy enrolment." },
            { title: "LIVE DEMOS", icon: "🔋", desc: "Hands-on clean tech." },
            { title: "LEAD CAPTURE", icon: "📸", desc: "Digital ROI tracking." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="text-3xl">{item.icon}</div>
              <h4 className="text-base font-bold uppercase tracking-widest">{item.title}</h4>
              <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Table */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Master Schedule</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">THE COMPLETE CALENDAR.</h2>
        </div>
        
        <div className="bg-white rounded-[40px] border border-[#1a8a5e]/5 overflow-hidden shadow-sm">
          <div className="hidden md:grid grid-cols-[80px_1fr_150px_80px] gap-6 p-6 bg-[#0a1f1c] text-white font-mono text-[9px] tracking-[0.3em] uppercase">
            <span>Stop</span>
            <span>City Profile</span>
            <span>Date</span>
            <span className="text-right">Discom</span>
          </div>
          <div className="divide-y divide-[#1a8a5e]/5">
            {cities.map((city, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[80px_1fr_150px_80px] gap-4 md:gap-6 p-8 items-center hover:bg-[#fbfdfc] transition-colors group">
                <span className="text-3xl font-sans font-light italic text-[#1a8a5e] group-hover:scale-110 transition-transform">/{city.num}</span>
                <div className="space-y-0.5">
                  <h4 className="text-xl font-bold text-[#0a1f1c] uppercase tracking-tight">{city.name}</h4>
                  <p className="text-[9px] text-[#2d4a45]/30 font-mono uppercase tracking-widest">{city.tagline.split('·')[0]}</p>
                </div>
                <div className="text-xs font-bold text-[#0a1f1c] tracking-widest uppercase">{city.tagline.split('·')[1] || "MAY 2026"}</div>
                <div className="text-[9px] font-bold text-[#1a8a5e] md:text-right font-mono uppercase tracking-widest">{city.discom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a8a5e] rounded-[56px] p-12 md:p-16 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 leading-tight tracking-tight uppercase">
            READY TO JOIN <span className="italic font-light">THE JOURNEY?</span>
        </h2>
        <button className="bg-[#0a1f1c] text-white text-[10px] font-bold px-10 py-4 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all">
            Explore Sponsorship
        </button>
      </section>
    </div>
  );
}
