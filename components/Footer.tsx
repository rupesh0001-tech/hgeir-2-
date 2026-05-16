import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1f1c] text-white pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1a8a5e]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-24">
          {/* Branding Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-[#1a8a5e] rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm flex items-center justify-center text-white text-xs">
                🌱
              </div>
              <span className="font-black tracking-[0.2em] text-lg">HGER ROADSHOW</span>
            </div>
            <p className="text-white/40 text-sm md:text-base max-w-sm leading-relaxed mb-10">
              Haryana&apos;s largest clean energy outreach program. Connecting global technology providers with local institutional demand.
            </p>
            <div className="flex gap-4">
               {['FB', 'X', 'LN', 'IG'].map((social) => (
                 <div key={social} className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-[10px] font-bold hover:bg-white/5 cursor-pointer transition-colors">
                   {social}
                 </div>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">The Route</li>
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">Sponsorship</li>
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">Exhibition</li>
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">Summit 2026</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">Governance</li>
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">Partners</li>
              <li className="hover:text-[#2cc985] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-8">Get in Touch</h4>
            <div className="space-y-8">
              <div>
                <span className="block text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Email</span>
                <p className="text-lg md:text-xl font-bold hover:text-[#2cc985] transition-colors cursor-pointer">partner@hger.in</p>
              </div>
              <div>
                <span className="block text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Location</span>
                <p className="text-sm font-bold text-white/60 leading-relaxed">
                  HSVP Complex, Sector 6, <br />
                  Panchkula, Haryana 134109
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase">
            © 2024 HGER ROADSHOW. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 tracking-widest uppercase">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
