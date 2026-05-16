import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Fade Green Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a8a5e]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-[10px] font-bold tracking-[0.5em] text-[#1a8a5e] uppercase block mb-10">
          The Window is Closing
        </span>
        <h2 className="text-5xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-none tracking-tight mb-10">
          The future is cleaner. <br />
          <span className="text-[#1a8a5e]">Begins in Haryana.</span>
        </h2>
        <p className="text-[#2d4a45]/70 text-base md:text-lg font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
          HGER 2026 begins this March. With only 20 sponsor slots and a 3-month window, the conversation starts now.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto mb-16">
          <div className="text-center md:text-left">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#1a8a5e] uppercase block mb-3">Official Email</span>
            <a href="mailto:partnerships@hger.in" className="text-xl md:text-2xl font-sans font-bold text-[#0a1f1c] hover:text-[#1a8a5e] transition-colors">partnerships@hger.in</a>
          </div>
          <div className="text-center md:text-left md:border-l md:border-gray-100 md:pl-12">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#1a8a5e] uppercase block mb-3">Direct Connect</span>
            <a href="tel:+919991234567" className="text-xl md:text-2xl font-sans font-bold text-[#0a1f1c] hover:text-[#1a8a5e] transition-colors">+91 999 123 4567</a>
          </div>
        </div>
        
        <button className="bg-[#1a8a5e] text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-[#0a1f1c] transition-all shadow-lg">
          ENQUIRE FOR PARTNERSHIP
        </button>
      </div>
    </section>
  );
}
