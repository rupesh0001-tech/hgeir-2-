import React from 'react';
import Image from 'next/image';

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[280px] xl:min-h-[320px] max-w-[1400px] mx-auto w-full px-4 md:px-0">
      {/* Card 1: Community */}
      <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] relative shadow-sm text-[#0e5a3d] min-h-[240px]">
        <div className="flex justify-between items-start mb-4">
          <span className="border border-[#0e5a3d]/20 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono">COMMUNITY</span>
          <span className="text-[10px] font-bold mt-1 font-mono">/2023</span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="flex flex-col items-start mb-6 relative z-10">
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex items-center font-fraunces">
                <span className="text-xl sm:text-2xl xl:text-3xl font-semibold tracking-tight text-[#0e5a3d]">JOIN OUR</span>
                <span className="ml-2 text-xl sm:text-2xl xl:text-3xl font-light text-[#0e5a3d]">✕</span>
             </div>
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex relative mt-2 ml-1 font-fraunces">
                <span className="text-xl sm:text-2xl xl:text-3xl font-light italic tracking-tight text-[#0e5a3d]">COMMUNITY</span>
                <div className="absolute -right-5 -bottom-3 z-20 rotate-12 bg-[#fbfdfc] border border-[#0e5a3d]/10 px-2 py-1 shadow-lg flex flex-col items-center justify-center rounded-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0e5a3d" className="-rotate-12 mb-0.5"><path d="M5.5 3L19 10L12.5 12.5L10 19L5.5 3Z" stroke="#fbfdfc" strokeWidth="1" strokeLinejoin="round"/></svg>
                  <span className="text-[7px] font-bold text-[#0e5a3d] font-mono">JOIN</span>
                </div>
             </div>
          </div>
          <p className="text-[9px] text-[#0e5a3d]/70 uppercase tracking-wide leading-relaxed max-w-[90%] font-medium">
            Join us on this journey towards an eco-friendly future
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/100?img=3" alt="User 1" className="w-5 h-5 rounded-full border-2 border-white/50 object-cover" />
              <img src="https://i.pravatar.cc/100?img=1" alt="User 2" className="w-5 h-5 rounded-full border-2 border-white/50 object-cover" />
              <img src="https://i.pravatar.cc/100?img=4" alt="User 3" className="w-5 h-5 rounded-full border-2 border-white/50 object-cover" />
            </div>
            <div className="text-[8px] text-[#0e5a3d]/70 leading-tight">
              <span className="font-bold text-[#0e5a3d]">Adam Davis</span><br/>and others
            </div>
          </div>
        </div>
      </div>
 
      {/* Card 2: Stats Column */}
      <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-0 lg:space-y-[-30px] py-4 lg:py-0">
        <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm flex-1 lg:w-[85%] z-10 transition-all hover:z-50 hover:-translate-y-2 border border-gray-100 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">10</h3>
          <p className="text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Tier 2/3 Cities</p>
        </div>
        <div className="bg-[#f5f5f5] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-md flex-1 lg:w-[92%] z-20 transition-all hover:z-50 hover:-translate-y-2 border border-gray-200 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">03</h3>
          <p className="text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Months Journey</p>
        </div>
        <div className="bg-[#1a8a5e] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg flex-1 lg:w-full z-30 transition-all hover:z-50 hover:-translate-y-2 border border-[#1a8a5e]/20 min-h-[100px]">
          <h3 className="text-2xl xl:text-3xl font-bold mb-1 text-white tracking-tight font-mono">20</h3>
          <p className="text-[8px] text-white/90 font-bold tracking-wider uppercase leading-tight">Sponsor Slots</p>
        </div>
      </div>
 
      {/* Card 3: Image */}
      <div className="bg-gray-200 rounded-3xl lg:col-span-4 relative overflow-hidden min-h-[250px] lg:h-full group shadow-sm">
        <Image src="/wind_turbines.png" alt="Wind Turbines" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[#0a1f1c]/10"></div>
        <div className="absolute bottom-5 right-5">
          <button className="bg-[#fbfdfc] hover:bg-[#f0f7f4] text-[#0a1f1c] text-[9px] font-bold px-4 py-2 rounded-full flex items-center space-x-1.5 transition-colors shadow-lg">
            <span className="text-[6px]">▶</span> <span>ABOUT US</span>
          </button>
        </div>
      </div>
 
      {/* Card 4: Blog */}
      <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm text-[#0a1f1c] min-h-[240px]">
        <div className="flex justify-between items-start mb-6">
          <span className="border border-[rgba(10,31,28,0.15)] rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono">BLOG</span>
          <span className="text-[10px] font-bold mt-1 text-[#2d4a45] font-mono">/2023</span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-start mb-6 font-fraunces">
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 transform -rotate-1 rounded-[4px] shadow-sm flex items-center inline-flex">
                <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase italic mr-2 text-[#0a1f1c]">CLIMATE</h2>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a8a5e" strokeWidth="2.5" className="mx-0.5"><path d="M12 4L2 20H22L12 4Z"/></svg>
                <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase ml-2 text-[#0a1f1c]">CHANGE</h2>
             </div>
             <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 transform rotate-1 rounded-[4px] shadow-sm inline-flex ml-3 mt-2">
                <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase text-[#0a1f1c]">AND CLEAN ENERGY</h2>
             </div>
          </div>
        </div>
        <div className="mt-auto">
          <button className="text-[9px] font-bold flex items-center text-[#2d4a45] hover:text-[#0a1f1c] transition-colors">
            <div className="w-4 h-4 bg-[#fbfdfc] rounded-full flex items-center justify-center mr-2 shadow-sm text-[5px] text-[#1a8a5e]">▶</div>
            <span className="border-b border-[rgba(10,31,28,0.15)] pb-0.5 uppercase">Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
