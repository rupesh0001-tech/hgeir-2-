import React from 'react';

export default function Hero() {
  return (
    <section className="text-center max-w-6xl mx-auto relative">
      <h1 className="text-5xl md:text-4xl lg:text-7xl font-sans font-semibold tracking-tight leading-[1.1] mb-6 flex flex-col items-center justify-center uppercase">
        <div className="flex items-center flex-wrap justify-center gap-4 md:gap-0">
          TEN CITIES UNITED
          <span className="ml-4 md:ml-6 flex items-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-[#1a8a5e] rounded-full flex items-center justify-center relative overflow-hidden -rotate-45">
              <div className="absolute top-0 right-0 w-5 h-10 md:w-8 md:h-16 bg-[#0e5a3d] rounded-r-full"></div>
            </div>
          </span>
        </div>
        <div className="mt-3 md:mt-2 text-center md:whitespace-nowrap flex items-center justify-center">
          <span>FOR <span className="italic font-light mx-2 md:mx-4 text-[#1a8a5e] underline decoration-[8px] decoration-[#1a8a5e]/40 underline-offset-[16px]">GREENER HARYANA</span> FUTURE</span>
        </div>
      </h1>
      
      <div className="max-w-4xl mx-auto mt-10">
        <p className="text-[#2d4a45] text-sm md:text-base font-medium uppercase tracking-wide leading-relaxed">
          TOGETHER, WE CAN MAKE THE WORLD A BETTER PLACE BY CREATING<br className="hidden md:block" />
          A STRONG AND SUSTAINABLE ENERGY INFRASTRUCTURE FOR ALL.
        </p>
      </div>
    </section>
  );
}
