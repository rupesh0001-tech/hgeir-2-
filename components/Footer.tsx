import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a1f1c] text-white pt-16 pb-10 px-6 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1a8a5e]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
          {/* Branding Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2.5 mb-6">
              <div className="w-6 h-6 bg-[#1a8a5e] rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm flex items-center justify-center text-white text-[9px]">
                🌱
              </div>
              <span className="font-bold tracking-[0.2em] text-base uppercase">HGER<sup className="text-[9px] text-[#1a8a5e] ml-0.5">2026</sup></span>
            </div>
            <p className="text-white/30 text-xs max-w-sm leading-relaxed mb-8">
              Haryana&apos;s largest clean energy outreach program. Bringing renewable energy solutions across solar, wind, EV, and clean-tech to every district.
            </p>
            <div className="flex gap-3">
               {['FB', 'X', 'LN', 'IG'].map((social) => (
                 <div key={social} className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center text-[9px] font-bold hover:bg-[#1a8a5e] hover:border-[#1a8a5e] cursor-pointer transition-all">
                   {social}
                 </div>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3 text-[11px] font-bold">
              <li><Link href="/roadshow" className="text-white/40 hover:text-[#1a8a5e] transition-colors">The Roadshow</Link></li>
              <li><Link href="/sponsors" className="text-white/40 hover:text-[#1a8a5e] transition-colors">Sponsorship</Link></li>
              <li><Link href="/schemes" className="text-white/40 hover:text-[#1a8a5e] transition-colors">Govt. Schemes</Link></li>
              <li><Link href="/summit" className="text-white/40 hover:text-[#1a8a5e] transition-colors">Summit 2026</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-[11px] font-bold">
              <li><Link href="/about" className="text-white/40 hover:text-[#1a8a5e] transition-colors">About Us</Link></li>
              <li><Link href="/press" className="text-white/40 hover:text-[#1a8a5e] transition-colors">Press Kit</Link></li>
              <li><Link href="/contact" className="text-white/40 hover:text-[#1a8a5e] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-[9px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase mb-6">Get in Touch</h4>
            <div className="space-y-6">
              <div>
                <span className="block text-[8px] font-black text-white/10 uppercase tracking-[0.3em] mb-1.5">Email</span>
                <p className="text-base font-bold hover:text-[#1a8a5e] transition-colors cursor-pointer uppercase tracking-tight">partner@hger.in</p>
              </div>
              <div>
                <span className="block text-[8px] font-black text-white/10 uppercase tracking-[0.3em] mb-1.5">Headquarters</span>
                <p className="text-[11px] font-bold text-white/40 leading-relaxed uppercase tracking-wider">
                  Sector 17, Chandigarh, <br />
                  Haryana, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold text-white/10 tracking-widest uppercase">
            © 2026 HGER ROADSHOW. All rights reserved.
          </p>
          <div className="flex gap-6 text-[9px] font-bold text-white/10 tracking-widest uppercase font-mono">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
