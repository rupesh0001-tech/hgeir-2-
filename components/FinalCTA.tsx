import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Fade Green Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#1a8a5e]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>
      
      {/* Premium Green Gradient from the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#1b8a5e]/22 via-[#1b8a5e]/4 to-transparent pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-[10px] font-bold tracking-[0.5em] text-[#1a8a5e] uppercase block mb-6 md:mb-10">
          The Window is Closing
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight mb-8 md:mb-10 text-balance">
          The future is cleaner. <br />
          <span className="text-[#1a8a5e]">Begins in Haryana.</span>
        </h2>
        <p className="text-[#2d4a45]/70 text-base md:text-lg font-medium max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed text-balance">
          HGER 2026 begins this March. With only 20 sponsor slots and a 3-month window, the conversation starts now.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#1a8a5e] uppercase block mb-2 md:mb-3">Official Email</span>
            <a href="mailto:partnerships@hger.in" className="text-lg md:text-2xl font-sans font-bold text-[#0a1f1c] hover:text-[#1a8a5e] transition-colors">partnerships@hger.in</a>
          </div>
          <div className="text-center md:text-left md:border-l md:border-gray-100 md:pl-12">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#1a8a5e] uppercase block mb-2 md:mb-3">Direct Connect</span>
            <a href="tel:+919991234567" className="text-lg md:text-2xl font-sans font-bold text-[#0a1f1c] hover:text-[#1a8a5e] transition-colors">+91 999 123 4567</a>
          </div>
        </div>
        
        <button className="bg-[#1b8a5e] text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-[11px] md:text-sm tracking-widest uppercase hover:bg-[#0e5a3d] transition-all shadow-[0_10px_25px_rgba(27,138,94,0.15)] w-full sm:w-auto active:scale-[0.98]">
          ENQUIRE FOR PARTNERSHIP
        </button>
      </div>
    </section>
  );
}
