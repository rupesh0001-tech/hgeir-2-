import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f7f4] text-[#0a1f1c] font-sans selection:bg-[#2cc985]/30">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 max-w-[1600px] mx-auto">
        <div className="flex items-center space-x-2">
          {/* Logo icon (small leaf-like shape) */}
          <div className="w-5 h-5 bg-[#1a8a5e] rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm flex items-center justify-center text-white text-[10px]">
            🌱
          </div>
          <span className="font-bold tracking-widest text-sm">ECOTECH ENERGIES®</span>
        </div>

        <nav className="hidden md:flex space-x-12 text-xs font-semibold tracking-wider text-[#2d4a45]">
          <a href="#" className="hover:text-[#0a1f1c] transition-colors flex items-center">HOME <span className="ml-1 text-[8px]">▼</span></a>
          <a href="#" className="hover:text-[#0a1f1c] transition-colors flex items-center">ABOUT US <span className="ml-1 text-[8px]">▼</span></a>
          <a href="#" className="hover:text-[#0a1f1c] transition-colors flex items-center">OUR PROJECTS <span className="ml-1 text-[8px]">▼</span></a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-[#fbfdfc] rounded-full p-1 border border-[rgba(10,31,28,0.15)]">
            <div className="w-6 h-6 rounded-full bg-[#0a1f1c]"></div>
            <div className="w-6 h-6 rounded-full bg-transparent"></div>
          </div>
          <button className="bg-[#1a8a5e] hover:bg-[#0e5a3d] transition-colors text-white text-xs font-bold px-6 py-3 rounded-full tracking-wider">
            CONTACT US
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-8 pt-14 pb-24">
        {/* Hero Section */}
        <section className="text-center max-w-6xl mx-auto mb-20 relative">
          
          <h1 className="text-5xl md:text-4xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 flex flex-col items-center justify-center uppercase">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 xl:gap-4 lg:h-[280px] xl:h-[320px] max-w-[1400px] mx-auto w-full">
          
          {/* Card 1: Community */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-5 xl:p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] relative shadow-sm text-[#0e5a3d]">
            <div className="flex justify-between items-start mb-4">
              <span className="border border-[#0e5a3d]/20 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent">COMMUNITY</span>
              <span className="text-[10px] font-bold mt-1">/2023</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center relative">
              <div className="flex flex-col items-start mb-6 relative z-10">
                 <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex items-center">
                   <span className="text-2xl xl:text-3xl font-semibold tracking-tight text-[#0e5a3d]">JOIN OUR</span>
                   <span className="ml-2 text-2xl xl:text-3xl font-light text-[#0e5a3d]">✕</span>
                 </div>
                 <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex relative mt-1.5 xl:mt-2 ml-1">
                   <span className="text-2xl xl:text-3xl font-light italic tracking-tight text-[#0e5a3d]">COMMUNITY</span>
                   <div className="absolute -right-5 xl:-right-6 -bottom-3 z-20 rotate-12 bg-[#fbfdfc] border border-[#0e5a3d]/10 px-2 py-1 shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center rounded-sm">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="#0e5a3d" xmlns="http://www.w3.org/2000/svg" className="-rotate-12 mb-0.5"><path d="M5.5 3L19 10L12.5 12.5L10 19L5.5 3Z" stroke="#fbfdfc" strokeWidth="1" strokeLinejoin="round"/></svg>
                     <span className="text-[7px] font-bold text-[#0e5a3d]">JOIN</span>
                   </div>
                 </div>
              </div>
              <p className="text-[8px] xl:text-[9px] text-[#0e5a3d]/70 uppercase tracking-wide leading-relaxed max-w-[90%] font-medium">
                Join us on this journey towards an eco-friendly future
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=3" alt="User 1" className="w-5 h-5 rounded-full border-2 border-white/50 object-cover" />
                  <img src="https://i.pravatar.cc/100?img=1" alt="User 2" className="w-5 h-5 rounded-full border-2 border-white/50 object-cover" />
                  <img src="https://i.pravatar.cc/100?img=4" alt="User 3" className="w-5 h-5 rounded-full border-2 border-white/50 object-cover" />
                </div>
                <div className="text-[7px] xl:text-[8px] text-[#0e5a3d]/70 leading-tight">
                  <span className="font-bold text-[#0e5a3d]">Adam Davis</span><br/>and other already joined to us
                </div>
              </div>
              <div className="flex items-center space-x-1.5 text-[#0e5a3d] font-bold">
                <button className="text-sm hover:text-black transition-colors">←</button>
                <button className="text-sm hover:text-black transition-colors">→</button>
              </div>
            </div>
          </div>

          {/* Card 2: Stats Column */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center h-full pt-2 cursor-default relative space-y-[-40px]">
            {/* Box 1 - Paper White */}
            <div className="bg-[#fbfdfc] rounded-[15px] xl:rounded-[20px] p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-sm w-[80%] z-10 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 border border-[rgba(10,31,28,0.07)] min-h-[100px]">
              <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c]">10</h3>
              <p className="text-[7px] xl:text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Tier 2/3 Cities</p>
            </div>
            
            {/* Box 2 - Misty Mint */}
            <div className="bg-[#f0f7f4] rounded-[15px] xl:rounded-[20px] p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-sm w-[90%] z-20 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 border border-[rgba(10,31,28,0.07)] min-h-[100px]">
              <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c]">03</h3>
              <p className="text-[7px] xl:text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Months · 1 Closing Summit</p>
            </div>

            {/* Box 3 - Light Mint (Fade Green) */}
            <div className="bg-[#e3eee9] rounded-[15px] xl:rounded-[20px] p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-sm w-full z-30 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 border border-[rgba(10,31,28,0.07)] min-h-[110px]">
              <h3 className="text-2xl xl:text-3xl font-bold mb-1 text-[#0a1f1c] tracking-tight">20</h3>
              <p className="text-[7px] xl:text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight px-1">Sponsor Slots</p>
            </div>
          </div>

          {/* Card 3: Image */}
          <div className="bg-gray-200 rounded-3xl lg:col-span-4 relative overflow-hidden min-h-[220px] lg:h-full group shadow-sm">
            <Image 
              src="/wind_turbines.png" 
              alt="Wind Turbines" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0a1f1c]/10"></div>
            
            <div className="absolute top-5 left-5 flex space-x-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbfdfc] shadow-sm"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbfdfc]/40 border border-[#fbfdfc]/60 shadow-sm"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbfdfc]/40 border border-[#fbfdfc]/60 shadow-sm"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbfdfc]/40 border border-[#fbfdfc]/60 shadow-sm"></div>
            </div>
            
            <div className="absolute top-4 right-5 flex items-center space-x-2.5 text-[#fbfdfc] font-medium">
              <button className="text-sm hover:text-white/80 transition-colors drop-shadow-md">←</button>
              <button className="text-sm hover:text-white/80 transition-colors drop-shadow-md">→</button>
            </div>

            <div className="absolute bottom-5 right-5">
              <button className="bg-[#fbfdfc] hover:bg-[#f0f7f4] text-[#0a1f1c] text-[8px] xl:text-[9px] font-bold px-4 py-2 rounded-full flex items-center space-x-1.5 transition-colors shadow-lg">
                <span className="text-[6px]">▶</span> <span>ABOUT US</span>
              </button>
            </div>
          </div>

          {/* Card 4: Blog */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-5 xl:p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm text-[#0a1f1c]">
            <div className="flex justify-between items-start mb-6">
              <span className="border border-[rgba(10,31,28,0.15)] rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent">BLOG</span>
              <span className="text-[10px] font-bold mt-1 text-[#2d4a45]">/2023</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col items-start mb-6">
                 <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 transform -rotate-1 rounded-[4px] shadow-sm flex items-center inline-flex">
                   <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase italic mr-2 text-[#0a1f1c]">CLIMATE</h2>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a8a5e" strokeWidth="2.5" className="mx-0.5"><path d="M12 4L2 20H22L12 4Z"/></svg>
                   <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase ml-2 text-[#0a1f1c]">CHANGE</h2>
                 </div>
                 <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 transform rotate-1 rounded-[4px] shadow-sm inline-flex ml-3 xl:ml-4 mt-1.5 xl:mt-2">
                   <h2 className="text-xl xl:text-2xl font-bold tracking-tight uppercase text-[#0a1f1c]">AND CLEAN ENERGY</h2>
                 </div>
              </div>
              
              <p className="text-[8px] xl:text-[9px] text-[#2d4a45] font-bold uppercase tracking-wider mb-6">
                A global imperative
              </p>
            </div>
            
            <div className="mt-auto">
              <button className="text-[9px] xl:text-[10px] font-bold flex items-center text-[#2d4a45] hover:text-[#0a1f1c] group-hover:text-[#0a1f1c] transition-colors">
                <div className="w-4 h-4 bg-[#fbfdfc] rounded-full flex items-center justify-center mr-2 shadow-sm text-[5px] text-[#1a8a5e]">▶</div>
                <span className="border-b border-[rgba(10,31,28,0.15)] pb-0.5 uppercase">Read More</span>
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
