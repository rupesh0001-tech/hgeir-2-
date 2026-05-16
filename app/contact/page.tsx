import React from 'react';

export default function ContactPage() {
  return (
    <div className="space-y-20 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
      {/* Page Hero */}
      <section className="relative flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a8a5e]">Get in touch</span>
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase">
            LET'S <span className="text-[#1a8a5e] italic font-light decoration-[4px] sm:decoration-[8px] underline underline-offset-[10px] sm:underline-offset-[16px] decoration-[#1a8a5e]/20">TALK.</span>
          </h1>
          
          <div className="pt-8">
            <p className="text-sm md:text-base text-[#2d4a45] font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                Sponsorship, media, or partnerships — pick the right way to reach us.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Routes */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "SPONSORSHIP", email: "partnerships@hger.in", desc: "Tier discussions, slot bookings, and custom packages." },
          { title: "MEDIA & PRESS", email: "media@hger.in", desc: "Interviews, quotes, and HGER media kit access." },
          { title: "GENERAL", email: "hello@hger.in", desc: "Visiting a stop, dealer interest, or anything else." }
        ].map((route, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-[#1a8a5e]/5 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group">
            <div className="space-y-4">
                <div className="w-10 h-10 bg-[#1a8a5e]/5 rounded-full flex items-center justify-center text-[#1a8a5e] group-hover:bg-[#1a8a5e] group-hover:text-white transition-all">
                    <span className="font-bold">→</span>
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-[#0a1f1c]">{route.title}</h3>
                <p className="text-[11px] text-[#2d4a45]/60 leading-relaxed">{route.desc}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1a8a5e]/5">
                <div className="text-[8px] font-mono uppercase tracking-[0.3em] text-[#1a8a5e] font-bold mb-1">Email us</div>
                <div className="text-sm font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">{route.email}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#0a1f1c] rounded-[40px] p-10 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a8a5e] blur-[80px] opacity-20"></div>
            <div className="relative z-10 space-y-10">
                <h2 className="text-2xl md:text-3xl font-sans font-bold leading-tight uppercase tracking-tight">
                    HEADQUARTERED IN <span className="text-[#1a8a5e] italic font-light">CHANDIGARH.</span>
                </h2>
                <p className="text-white/30 text-sm leading-relaxed max-w-sm">
                    Central to our Haryana focus and proximate to government partners and DISCOMs.
                </p>
                <div className="space-y-6">
                    {[
                        { label: "Office", val: "Sector 17, Chandigarh, India" },
                        { label: "Phone", val: "+91 XXX XXX XXXX" },
                        { label: "Hours", val: "Mon–Fri · 10:00 – 19:00 IST" }
                    ].map((item, i) => (
                        <div key={i} className="pb-6 border-b border-white/5 last:border-none">
                            <div className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold mb-1">{item.label}</div>
                            <div className="text-lg font-sans font-bold uppercase tracking-tight">{item.val}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="bg-white rounded-[40px] p-10 md:p-12 border border-[#1a8a5e]/5 shadow-sm">
            <h3 className="text-2xl font-sans font-bold text-[#0a1f1c] mb-2 uppercase tracking-tight">SEND A MESSAGE.</h3>
            <p className="text-[#2d4a45]/40 mb-10 text-[11px] font-bold uppercase tracking-widest">We'll respond within 24–48 working hours.</p>
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="NAME" className="bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
                    <input type="email" placeholder="EMAIL" className="bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all" />
                </div>
                <select className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-[#1a8a5e] transition-all appearance-none">
                    <option>PICK A TOPIC</option>
                    <option>SPONSORSHIP</option>
                    <option>MEDIA</option>
                    <option>PARTNERSHIPS</option>
                    <option>GENERAL</option>
                </select>
                <textarea placeholder="MESSAGE..." className="w-full bg-[#f0f7f4] border-none rounded-xl p-4 text-[10px] font-bold tracking-widest h-32 focus:ring-1 focus:ring-[#1a8a5e] transition-all"></textarea>
                <button className="w-full bg-[#0a1f1c] text-white py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#1a8a5e] transition-all shadow-xl">
                    Submit Enquiry
                </button>
            </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
            <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">QUICK ANSWERS.</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
            {[
                { q: "When does HGER 2026 take place?", a: "March 4 to May 15, 2026. Starting in Palwal and ending in Chandigarh." },
                { q: "How many sponsorship slots are available?", a: "Exactly 20 — split across three tiers. Once filled, applications close." },
                { q: "Can I sponsor for just one city?", a: "No — HGER is a unified 10-city journey. All sponsors commit across the entire route." },
                { q: "Is the event open to the public?", a: "Yes! All city stops have free public entry with live demos and government desks." }
            ].map((item, i) => (
                <div key={i} className="bg-white rounded-[20px] border border-[#1a8a5e]/5 p-6 hover:bg-[#f0f7f4] transition-colors group cursor-pointer">
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm font-bold text-[#0a1f1c] uppercase tracking-tight">{item.q}</h4>
                        <span className="text-[#1a8a5e] text-xl group-hover:rotate-45 transition-transform">+</span>
                    </div>
                    <p className="mt-3 text-[#2d4a45]/60 text-[11px] leading-relaxed max-w-xl">{item.a}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
