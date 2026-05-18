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
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 0 0-4 4v2z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-r hover:from-[#69C242] hover:to-[#50AC26] hover:border-transparent cursor-pointer transition-all shadow-sm">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
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
