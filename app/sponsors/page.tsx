import React from 'react';

export default function SponsorsPage() {
  return (
    <div className="space-y-20 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
      {/* Page Hero */}
      <section className="relative flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a8a5e]">Partner with us</span>
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase">
            TWENTY SEATS. <span className="text-[#1a8a5e] italic font-light decoration-[4px] sm:decoration-[8px] underline underline-offset-[10px] sm:underline-offset-[16px] decoration-[#1a8a5e]/20">THREE TIERS.</span>
          </h1>
          
          <div className="pt-8">
            <p className="text-sm md:text-base text-[#2d4a45] font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                Guaranteeing every sponsor real visibility, real leads, and real ROI. Once filled, applications close.
            </p>
          </div>
        </div>
      </section>

      {/* Live Slots */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-10 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a8a5e] blur-[80px] opacity-20"></div>
        <div className="relative z-10 space-y-10">
            <div className="text-center space-y-2">
                <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Live Status</span>
                <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-white">ONLY <span className="text-[#1a8a5e] italic font-light">14 SLOTS</span> REMAIN.</h2>
            </div>
            <div className="max-w-2xl mx-auto grid grid-cols-5 md:grid-cols-10 gap-2">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className={`aspect-square rounded-lg flex items-center justify-center font-mono text-[10px] font-bold border transition-all ${i < 6 ? 'bg-[#1a8a5e] border-[#1a8a5e] text-white' : 'bg-white/5 border-white/10 text-white/20'}`}>
                        {String(i + 1).padStart(2, '0')}
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-6 text-[8px] font-mono uppercase tracking-widest opacity-40 font-bold">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-[#1a8a5e]"></div> Reserved</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-white/10"></div> Available</div>
            </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          { 
            meta: "Tier III · Associate", 
            name: "HAMSAFAR", 
            info: "12 slots · co-traveller status", 
            features: ["Branded stall in all 10 cities", "Logo on all collateral", "Lead capture at every stop", "Summit invitation (2 seats)"],
            price: "From ₹5–8 Lakh"
          },
          { 
            meta: "Tier II · Co-Title", 
            name: "SAARTHI", 
            info: "7 slots · strategic partner", 
            features: ["Premium stall + product zone", "Stage time at every city", "Dedicated PR + media coverage", "Track I Award eligibility"],
            price: "₹15–25 Lakh",
            featured: true
          },
          { 
            meta: "Tier I · Title", 
            name: "PRADHAAN", 
            info: "1 slot · title sponsor", 
            features: ["'Presented by' naming rights", "Headline Summit speaker", "Year-long brand association", "Top stage during Awards Night"],
            price: "By Invitation"
          }
        ].map((tier, i) => (
          <div key={i} className={`rounded-[40px] p-10 flex flex-col justify-between border transition-all duration-500 hover:-translate-y-1 ${tier.featured ? 'bg-[#0a1f1c] text-white border-[#1a8a5e]/20 shadow-xl' : 'bg-white text-[#0a1f1c] border-[#1a8a5e]/5'}`}>
            <div>
              <div className={`text-[9px] font-mono uppercase tracking-widest font-bold mb-6 ${tier.featured ? 'text-[#1a8a5e]' : 'text-[#1a8a5e]/60'}`}>{tier.meta}</div>
              <h3 className="text-3xl font-sans font-bold mb-3 italic tracking-tight uppercase">{tier.name}</h3>
              <p className={`text-[11px] mb-8 pb-6 border-b uppercase tracking-widest font-bold ${tier.featured ? 'text-white/20 border-white/5' : 'text-[#2d4a45]/20 border-[#1a8a5e]/5'}`}>{tier.info}</p>
              <ul className="space-y-3 mb-10">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex gap-2 items-start text-xs leading-relaxed">
                    <span className="text-[#1a8a5e] font-bold">→</span>
                    <span className="opacity-60">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className={`text-[9px] font-mono uppercase tracking-widest font-bold mb-6 ${tier.featured ? 'text-white/20' : 'text-[#2d4a45]/20'}`}>{tier.price}</div>
              <button className={`w-full py-4 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${tier.featured ? 'bg-[#1a8a5e] text-white hover:bg-[#0e5a3d]' : 'bg-[#0a1f1c] text-white hover:bg-[#1a8a5e]'}`}>
                Reserve {tier.name}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Audience Segments */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
            <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Who Walks In</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">BUYERS WITH BUDGETS.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { title: "SCHOOLS", pct: "14%", icon: "🎓", desc: "Rooftop solar." },
                { title: "HOSPITALS", pct: "11%", icon: "🏥", desc: "24/7 backup." },
                { title: "GOVT", pct: "13%", icon: "🏛️", desc: "Streetlights." },
                { title: "HOTELS", pct: "12%", icon: "🏨", desc: "ESG focus." },
                { title: "HOMES", pct: "18%", icon: "🏠", desc: "Bill reduction." },
                { title: "FARMERS", pct: "15%", icon: "🚜", desc: "Solar pumps." },
                { title: "DEALERS", pct: "9%", icon: "🤝", desc: "Channel partners." },
                { title: "INDUSTRY", pct: "8%", icon: "🏭", desc: "Energy deals." }
            ].map((aud, i) => (
                <div key={i} className="bg-white p-6 rounded-[32px] border border-[#1a8a5e]/5 hover:bg-[#1a8a5e] hover:text-white transition-all group duration-500">
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{aud.icon}</div>
                    <div className="flex justify-between items-center mb-1">
                        <h4 className="text-[11px] font-bold uppercase tracking-tight">{aud.title}</h4>
                        <span className="text-[9px] font-mono font-bold text-[#1a8a5e] group-hover:text-white">{aud.pct}</span>
                    </div>
                    <p className="text-[#2d4a45]/40 group-hover:text-white/60 text-[10px] leading-tight">{aud.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Why HGER */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { num: "01", title: "EXCLUSIVITY", desc: "Only 20 brands total. Guaranteed visibility in every city, every day." },
          { num: "02", title: "GOVT-ALIGNED", desc: "Live HAREDA & DISCOM enrolment desks right next to your booth." },
          { num: "03", title: "10X REACH", desc: "One commitment, 10 cities, 3 months of massive coverage." }
        ].map((why, i) => (
          <div key={i} className="bg-[#0e5a3d]/[0.02] p-10 rounded-[40px] border border-[#1a8a5e]/5 text-center space-y-4">
            <div className="text-5xl font-sans font-light italic text-[#1a8a5e]">/{why.num}</div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#0a1f1c]">{why.title}</h3>
            <p className="text-[#2d4a45]/60 text-xs leading-relaxed">{why.desc}</p>
          </div>
        ))}
      </section>

      {/* Application Form */}
      <section className="max-w-3xl mx-auto bg-white rounded-[56px] p-10 md:p-16 border border-[#1a8a5e]/5 shadow-sm">
        <div className="text-center mb-12 space-y-2">
            <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Apply Now</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">TELL US ABOUT YOUR BRAND.</h2>
            <p className="text-[#2d4a45]/40 text-sm font-bold uppercase tracking-widest">In touch within 48 hours.</p>
        </div>
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="FULL NAME" className="bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
                <input type="text" placeholder="COMPANY NAME" className="bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
                <input type="email" placeholder="WORK EMAIL" className="bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
                <select className="bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all appearance-none">
                    <option>PICK A TIER</option>
                    <option>PRADHAAN (TITLE)</option>
                    <option>SAARTHI (CO-TITLE)</option>
                    <option>HAMSAFAR (ASSOCIATE)</option>
                </select>
            </div>
            <textarea placeholder="TELL US ABOUT YOUR GOALS..." className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest h-32 focus:ring-1 focus:ring-[#1a8a5e] transition-all"></textarea>
            <button className="w-full bg-[#0a1f1c] text-white py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#1a8a5e] transition-all shadow-xl">
                Submit Application
            </button>
        </form>
      </section>
    </div>
  );
}
