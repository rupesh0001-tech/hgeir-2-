import React from 'react';

export default function Hero() {
  return (
    <section className="text-center max-w-6xl mx-auto relative px-6 py-4 md:py-2">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-tight leading-[1.2] sm:leading-[1.1] mb-6 flex flex-col items-center justify-center uppercase text-[#0a1f1c]">
        <div className="flex items-center justify-center gap-4">
          <span className="opacity-90">TEN CITIES UNITED</span>
          <span className="hidden sm:flex ml-4 md:ml-6 items-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-[#1a8a5e] rounded-full flex items-center justify-center relative overflow-hidden -rotate-45 shadow-xl">
              <div className="absolute top-0 right-0 w-5 h-10 md:w-8 md:h-16 bg-[#0e5a3d] rounded-r-full"></div>
            </div>
          </span>
        </div>
        
        <div className="mt-2 text-center flex flex-col sm:flex-row items-center justify-center">
          <div className="flex items-center justify-center">
            <span className="opacity-90">FOR</span>
            <span className="italic font-light mx-2 md:mx-4 text-[#1a8a5e] underline decoration-[4px] sm:decoration-[8px] decoration-[#1a8a5e]/40 underline-offset-[6px] sm:underline-offset-[16px] whitespace-nowrap">
              GREENER HARYANA
            </span>
          </div>
          <span className="opacity-90 mt-1 sm:mt-0">FUTURE</span>
        </div>
      </h1>
      
      <div className="max-w-4xl mx-auto mt-6 md:mt-12">
        <p className="text-[#2d4a45] text-[10px] sm:text-sm md:text-base font-medium uppercase tracking-wide leading-relaxed">
          Together, we can make the world a better place by creating <br className="hidden md:block" />
          a strong and sustainable energy infrastructure for all.
        </p>
      </div>
    </section>
  );
}
