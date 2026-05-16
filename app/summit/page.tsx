import React from 'react';

export default function SummitPage() {
  return (
    <div className="space-y-20 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
      {/* Page Hero */}
      <section className="relative flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a8a5e]">The Finale</span>
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase">
            THE SUMMIT <span className="text-[#f4c430] italic font-light decoration-[4px] sm:decoration-[8px] underline underline-offset-[10px] sm:underline-offset-[16px] decoration-[#f4c430]/20">& AWARDS.</span>
          </h1>
          
          <div className="pt-8">
            <p className="text-sm md:text-base text-[#2d4a45] font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Chandigarh · 15 May 2026 · Uniting policymakers, industry leaders, and changemakers.
            </p>
          </div>
        </div>
      </section>

      {/* Chief Guest */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-[#0a1f1c] rounded-[40px] aspect-[4/5] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a8a5e]/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[140px] font-sans font-light italic text-white/5 select-none">AV</span>
            </div>
            <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[#f4c430] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Chief Guest</span>
                <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mt-2 uppercase tracking-tight">SH. ANIL VIJ</h3>
                <p className="text-white/30 text-[10px] mt-1 uppercase tracking-widest">Hon'ble Minister of Power, Haryana</p>
            </div>
        </div>
        <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#0a1f1c] leading-tight uppercase tracking-tight">
                A VETERAN <span className="italic font-light">STATESMAN.</span>
            </h2>
            <p className="text-[#2d4a45]/70 text-base leading-relaxed">
                Sh. Anil Vij brings decades of public-service leadership and deep familiarity with the state's energy agenda. 
                As Chief Guest, he will deliver the keynote address and formally recognise the award winners.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-[#0a1f1c]/5">
                <div>
                    <div className="text-xl font-bold text-[#1a8a5e] uppercase">Keynote</div>
                    <div className="text-[8px] font-mono uppercase tracking-widest opacity-40">Energy Roadmap</div>
                </div>
                <div>
                    <div className="text-xl font-bold text-[#1a8a5e] uppercase">Awards</div>
                    <div className="text-[8px] font-mono uppercase tracking-widest opacity-40">State Recognition</div>
                </div>
            </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
            <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Evening Agenda</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">THE PROGRAMME.</h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-[#1a8a5e]/10">
            {[
                { time: "5:30 PM", title: "REGISTRATION", desc: "Curated welcome zone and sponsor showcase." },
                { time: "6:30 PM", title: "OPENING CEREMONY", desc: "Lamp lighting by Hon'ble Minister and state officials." },
                { time: "7:00 PM", title: "MINISTERIAL KEYNOTE", desc: "Sh. Anil Vij on Haryana's renewable energy roadmap." },
                { time: "8:15 PM", title: "EXHIBITOR AWARDS", desc: "Recognising brand impact and technology innovation." },
                { time: "8:45 PM", title: "VISITOR AWARDS", desc: "Celebrating real adopters from across 10 cities." },
                { time: "9:30 PM", title: "GALA DINNER", desc: "Premium networking toast to the journey." }
            ].map((item, i) => (
                <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 group hover:translate-x-2 transition-transform">
                    <span className="text-xl font-mono font-bold text-[#1a8a5e]">{item.time}</span>
                    <div>
                        <h4 className="text-lg font-bold text-[#0a1f1c] uppercase tracking-tight mb-1">{item.title}</h4>
                        <p className="text-[#2d4a45]/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Award Categories */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">6 Prestigious Categories</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">HONOURING EXCELLENCE.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[40px] p-10 border border-[#1a8a5e]/5 shadow-sm">
                <span className="text-[#f4c430] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Track I</span>
                <h3 className="text-2xl font-sans font-bold text-[#0a1f1c] mt-4 mb-8 uppercase tracking-tight">EXHIBITOR AWARDS</h3>
                <div className="space-y-6">
                    {[
                        "RENEWABLE BRAND OF THE YEAR",
                        "MOST INNOVATIVE GREEN TECH",
                        "SUSTAINABILITY LEADERSHIP"
                    ].map((cat, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <span className="text-xl font-sans font-light italic text-[#f4c430]">0{i+1}</span>
                            <span className="text-base font-bold text-[#0a1f1c] uppercase tracking-tight">{cat}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#0a1f1c] rounded-[40px] p-10 border border-white/5 text-white">
                <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Track II</span>
                <h3 className="text-2xl font-sans font-bold mt-4 mb-8 uppercase tracking-tight">VISITOR AWARDS</h3>
                <div className="space-y-6">
                    {[
                        "SUSTAINABLE FARMER OF HARYANA",
                        "GREENEST INSTITUTION",
                        "RENEWABLE CHAMPION"
                    ].map((cat, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <span className="text-xl font-sans font-light italic text-[#1a8a5e]">0{i+4}</span>
                            <span className="text-base font-bold uppercase tracking-tight">{cat}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "MINISTERIAL AWARDS", desc: "Presented by Sh. Anil Vij.", icon: "🏅" },
          { title: "NATIONAL MEDIA", desc: "DD News, Tribune covering live.", icon: "🎥" },
          { title: "NETWORKING", desc: "HAREDA, DISCOM leaders.", icon: "🤝" },
          { title: "2027 LAUNCH", desc: "Expansion announcement.", icon: "🚀" }
        ].map((item, i) => (
          <div key={i} className="bg-[#0e5a3d]/[0.02] rounded-[32px] p-8 border border-[#1a8a5e]/5 text-center group hover:bg-[#1a8a5e] hover:text-white transition-all duration-500">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h4 className="text-sm font-bold mb-1 uppercase tracking-tighter">{item.title}</h4>
            <p className="opacity-30 text-[10px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#f4c430] rounded-[56px] p-12 md:p-16 text-center text-[#0a1f1c] relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 leading-tight tracking-tight uppercase">
            WANT TO BE ON <span className="italic font-light">THAT STAGE?</span>
        </h2>
        <p className="text-[#0a1f1c]/40 text-sm mb-10 max-w-xl mx-auto font-bold uppercase tracking-widest">
            Nominations open January 2026.
        </p>
        <button className="bg-[#0a1f1c] text-white text-[10px] font-bold px-10 py-4 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all">
            Submit Nomination
        </button>
      </section>
    </div>
  );
}
