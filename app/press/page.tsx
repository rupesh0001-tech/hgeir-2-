import React from 'react';

export default function PressPage() {
  return (
    <div className="space-y-20 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
      {/* Page Hero */}
      <section className="relative flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a8a5e]">Newsroom</span>
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase">
            MEDIA <span className="text-[#1a8a5e] italic font-light decoration-[4px] sm:decoration-[8px] underline underline-offset-[10px] sm:underline-offset-[16px] decoration-[#1a8a5e]/20">& RELEASES.</span>
          </h1>
          
          <div className="pt-8">
            <p className="text-sm md:text-base text-[#2d4a45] font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                Latest updates, official announcements, and press resources for the Haryana Green Energy Roadshow.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Release */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-10 md:p-12 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a8a5e] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-center">
            <div className="space-y-6">
                <span className="bg-[#1a8a5e] text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Latest Release · Oct 24, 2025</span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight uppercase tracking-tight">
                    HGER 2026 OFFICIALLY ANNOUNCED AT <span className="text-[#1a8a5e] italic font-light">ENERGY SUMMIT.</span>
                </h2>
                <p className="text-white/40 text-base leading-relaxed max-w-2xl">
                    The 2026 edition of Haryana's largest green energy roadshow will traverse 10 cities, 
                    targeting over 50,000 visitors and bringing 20 global brands to the state's tier 2 hubs.
                </p>
                <button className="text-[10px] font-bold text-[#1a8a5e] uppercase tracking-widest border-b border-[#1a8a5e] pb-1 hover:text-white hover:border-white transition-all">Read Full Release →</button>
            </div>
            <div className="hidden lg:block aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center text-4xl">📰</div>
        </div>
      </section>

      {/* News Grid */}
      <section className="space-y-12">
        <div className="flex justify-between items-end">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">ARCHIVE.</h2>
            <span className="text-[9px] font-mono font-bold text-[#1a8a5e] uppercase tracking-widest">Filter: All</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { date: "Oct 12", title: "Minister Anil Vij to Inagurate HGER 2026 in Palwal", tag: "Govt" },
                { date: "Sept 30", title: "HAREDA Partners as Institutional Knowledge Partner", tag: "Partners" },
                { date: "Sept 15", title: "Sponsorship Slots for 2026 Now 40% Booked", tag: "Updates" },
                { date: "Aug 22", title: "HGER Impact Report: Over 5,000 Solar Pumps Installed", tag: "Impact" },
                { date: "Aug 05", title: "Roadshow Route Finalized: Sirsa and Hisar Included", tag: "Route" },
                { date: "July 20", title: "Call for Exhibitors: Green Tech Innovation Awards", tag: "Awards" }
            ].map((news, i) => (
                <div key={i} className="bg-white rounded-[32px] p-8 border border-[#1a8a5e]/5 hover:bg-[#f0f7f4] transition-all group">
                    <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.2em] uppercase font-bold">{news.date} · {news.tag}</span>
                    <h4 className="text-base font-bold text-[#0a1f1c] mt-3 uppercase tracking-tight leading-snug">{news.title}</h4>
                    <p className="mt-6 text-[#2d4a45]/40 text-[10px] leading-relaxed group-hover:text-[#2d4a45]/60">Read the official statement regarding this announcement...</p>
                </div>
            ))}
        </div>
      </section>

      {/* Media Kit */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0e5a3d]/[0.02] rounded-[40px] p-10 border border-[#1a8a5e]/5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0a1f1c] mb-4 uppercase tracking-tight">MEDIA KIT.</h3>
            <p className="text-[#2d4a45]/60 text-sm leading-relaxed mb-8">
                Download official HGER 2026 brand assets, high-resolution photography, and event backgrounders for your coverage.
            </p>
            <div className="space-y-3">
                {[
                    { lbl: "HGER Brand Guidelines", size: "4.2 MB", type: "PDF" },
                    { lbl: "Press Photo Pack", size: "128 MB", type: "ZIP" },
                    { lbl: "Fact Sheet 2026", size: "1.1 MB", type: "PDF" }
                ].map((file, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-[#1a8a5e]/5 hover:border-[#1a8a5e] transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-[#1a8a5e]">{file.type}</span>
                            <span className="text-xs font-bold text-[#0a1f1c] group-hover:text-[#1a8a5e] uppercase tracking-tight">{file.lbl}</span>
                        </div>
                        <span className="text-[9px] font-mono opacity-30 font-bold">{file.size}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-[#1a8a5e] rounded-[40px] p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[80px]"></div>
            <div className="relative z-10 space-y-6">
                <div className="text-4xl">📸</div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">GALLERY ACCESS.</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                    Live high-res feeds from every city stop will be available via our media portal.
                </p>
                <button className="bg-white text-[#1a8a5e] text-[10px] font-bold px-8 py-3.5 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all">
                    Request Login
                </button>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1f1c] rounded-[56px] p-12 md:p-16 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 leading-tight tracking-tight uppercase">
            MEDIA <span className="text-[#1a8a5e] italic font-light">INQUIRIES?</span>
        </h2>
        <p className="text-white/30 text-[10px] mb-10 max-w-xl mx-auto font-bold uppercase tracking-widest">
            Direct access for journalists, quote requests, and interview scheduling.
        </p>
        <button className="bg-[#1a8a5e] text-white text-[10px] font-bold px-10 py-4 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all">
            media@hger.in
        </button>
      </section>
    </div>
  );
}
