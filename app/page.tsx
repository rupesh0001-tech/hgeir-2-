import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900 font-sans selection:bg-green-200">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 max-w-[1600px] mx-auto">
        <div className="flex items-center space-x-2">
          {/* Logo icon (small leaf-like shape) */}
          <div className="w-5 h-5 bg-black rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm flex items-center justify-center text-white text-[10px]">
            🌱
          </div>
          <span className="font-bold tracking-widest text-sm">ECOTECH ENERGIES®</span>
        </div>

        <nav className="hidden md:flex space-x-12 text-xs font-semibold tracking-wider text-gray-600">
          <a href="#" className="hover:text-black transition-colors flex items-center">HOME <span className="ml-1 text-[8px]">▼</span></a>
          <a href="#" className="hover:text-black transition-colors flex items-center">ABOUT US <span className="ml-1 text-[8px]">▼</span></a>
          <a href="#" className="hover:text-black transition-colors flex items-center">OUR PROJECTS <span className="ml-1 text-[8px]">▼</span></a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white rounded-full p-1 border border-gray-200">
            <div className="w-6 h-6 rounded-full bg-black"></div>
            <div className="w-6 h-6 rounded-full bg-transparent"></div>
          </div>
          <button className="bg-[#dcf0c5] hover:bg-[#cbe6a8] transition-colors text-black text-xs font-bold px-6 py-3 rounded-full tracking-wider">
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
                <div className="w-10 h-10 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center relative overflow-hidden -rotate-45">
                   <div className="absolute top-0 right-0 w-5 h-10 md:w-8 md:h-16 bg-white rounded-r-full opacity-20"></div>
                </div>
                
              </span>
            </div>
            <div className="mt-3 md:mt-2 text-center md:whitespace-nowrap flex items-center justify-center">
              <span>FOR <span className="italic font-light mx-2 md:mx-4">GREENER HARYANA</span> FUTURE</span>
            </div>
          </h1>
          
          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wide leading-relaxed">
              TOGETHER, WE CAN MAKE THE WORLD A BETTER PLACE BY CREATING<br className="hidden md:block" />
              A STRONG AND SUSTAINABLE ENERGY INFRASTRUCTURE FOR ALL.
            </p>
          </div>

          
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 xl:gap-4 lg:h-[280px] xl:h-[320px] max-w-[1400px] mx-auto w-full">
          
          {/* Card 1: Community */}
          <div className="bg-[#f5f5f5] rounded-3xl p-5 xl:p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] relative shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="border border-gray-400 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent">COMMUNITY</span>
              <span className="text-[10px] font-bold mt-1">/2023</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center relative">
              <div className="flex flex-col items-start mb-6 relative z-10">
                 <div className="bg-white px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex items-center">
                   <span className="text-2xl xl:text-3xl font-semibold tracking-tight">JOIN OUR</span>
                   <span className="ml-2 text-2xl xl:text-3xl font-light">✕</span>
                 </div>
                 <div className="bg-white px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex relative mt-1.5 xl:mt-2 ml-1">
                   <span className="text-2xl xl:text-3xl font-light italic tracking-tight">COMMUNITY</span>
                   <div className="absolute -right-5 xl:-right-6 -bottom-3 z-20 rotate-12 bg-white border border-gray-100 px-2 py-1 shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center rounded-sm">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="-rotate-12 mb-0.5"><path d="M5.5 3L19 10L12.5 12.5L10 19L5.5 3Z" stroke="white" strokeWidth="1" strokeLinejoin="round"/></svg>
                     <span className="text-[7px] font-bold">JOIN</span>
                   </div>
                 </div>
              </div>
              <p className="text-[8px] xl:text-[9px] text-gray-500 uppercase tracking-wide leading-relaxed max-w-[90%] font-medium">
                Join us on this journey towards an eco-friendly future
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=3" alt="User 1" className="w-5 h-5 rounded-full border-2 border-[#f5f5f5] object-cover" />
                  <img src="https://i.pravatar.cc/100?img=1" alt="User 2" className="w-5 h-5 rounded-full border-2 border-[#f5f5f5] object-cover" />
                  <img src="https://i.pravatar.cc/100?img=4" alt="User 3" className="w-5 h-5 rounded-full border-2 border-[#f5f5f5] object-cover" />
                </div>
                <div className="text-[7px] xl:text-[8px] text-gray-400 leading-tight">
                  <span className="font-bold text-gray-700">Adam Davis</span><br/>and other already joined to us
                </div>
              </div>
              <div className="flex items-center space-x-1.5 text-gray-800 font-bold">
                <button className="text-sm hover:text-black transition-colors">←</button>
                <button className="text-sm hover:text-black transition-colors">→</button>
              </div>
            </div>
          </div>

          {/* Card 2: Stats Column */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center h-full group/stats pt-2 cursor-pointer relative">
            <div className="bg-white rounded-[20px] xl:rounded-3xl p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-sm w-[80%] z-10 transition-all duration-300 ease-out group-hover/stats:-translate-y-6 group-hover/stats:mb-4 border border-gray-100/50 min-h-[100px]">
              <h3 className="text-2xl xl:text-3xl font-medium mb-1 tracking-tight">500+</h3>
              <p className="text-[7px] xl:text-[8px] text-gray-500 font-semibold tracking-wider uppercase">Solar panels installed on</p>
            </div>
            
            <div className="bg-[#f0f0f0] rounded-[20px] xl:rounded-3xl p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-[0_-4px_15px_rgba(0,0,0,0.04)] w-[90%] z-20 -mt-10 xl:-mt-12 transition-all duration-300 ease-out group-hover/stats:mt-0 group-hover/stats:-translate-y-3 group-hover/stats:mb-3 border border-gray-100/50 min-h-[100px]">
              <h3 className="text-2xl xl:text-3xl font-medium mb-1 tracking-tight">{">15%"}</h3>
              <p className="text-[7px] xl:text-[8px] text-gray-500 font-semibold tracking-wider uppercase">Reduction in CO2 emissions</p>
            </div>

            <div className="bg-[#d2eab2] rounded-[20px] xl:rounded-3xl p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-[0_-8px_20px_rgba(0,0,0,0.06)] w-full z-30 -mt-10 xl:-mt-12 transition-all duration-300 ease-out group-hover/stats:mt-0 min-h-[110px]">
              <h3 className="text-2xl xl:text-3xl font-medium mb-1 text-gray-900 tracking-tight">80+</h3>
              <p className="text-[7px] xl:text-[8px] text-gray-700 font-bold tracking-wider uppercase leading-tight px-1">Local businesses are powered by clean energy through collaboration with us</p>
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
            <div className="absolute inset-0 bg-black/5"></div>
            
            <div className="absolute top-5 left-5 flex space-x-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 border border-white/60 shadow-sm"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 border border-white/60 shadow-sm"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 border border-white/60 shadow-sm"></div>
            </div>
            
            <div className="absolute top-4 right-5 flex items-center space-x-2.5 text-white font-medium">
              <button className="text-sm hover:text-white/80 transition-colors drop-shadow-md">←</button>
              <button className="text-sm hover:text-white/80 transition-colors drop-shadow-md">→</button>
            </div>

            <div className="absolute bottom-5 right-5">
              <button className="bg-white hover:bg-gray-50 text-black text-[8px] xl:text-[9px] font-bold px-4 py-2 rounded-full flex items-center space-x-1.5 transition-colors shadow-lg">
                <span className="text-[6px]">▶</span> <span>ABOUT US</span>
              </button>
            </div>
          </div>

          {/* Card 4: Blog */}
          <div className="bg-[#e4e7ec] rounded-3xl p-5 xl:p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <span className="border border-gray-400 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent">BLOG</span>
              <span className="text-[10px] font-bold mt-1">/2023</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col items-start mb-6">
                 <div className="bg-white px-3 xl:px-4 py-1.5 xl:py-2 transform -rotate-1 rounded-[4px] shadow-sm flex items-center inline-flex">
                   <h2 className="text-xl xl:text-2xl font-semibold tracking-tight uppercase italic mr-2">CLIMATE</h2>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mx-0.5"><path d="M12 4L2 20H22L12 4Z"/></svg>
                   <h2 className="text-xl xl:text-2xl font-semibold tracking-tight uppercase ml-2">CHANGE</h2>
                 </div>
                 <div className="bg-white px-3 xl:px-4 py-1.5 xl:py-2 transform rotate-1 rounded-[4px] shadow-sm inline-flex ml-3 xl:ml-4 mt-1.5 xl:mt-2">
                   <h2 className="text-xl xl:text-2xl font-semibold tracking-tight uppercase">AND CLEAN ENERGY</h2>
                 </div>
              </div>
              
              <p className="text-[8px] xl:text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-6">
                A global imperative
              </p>
            </div>
            
            <div className="mt-auto">
              <button className="text-[9px] xl:text-[10px] font-bold flex items-center text-gray-600 hover:text-black group-hover:text-black transition-colors">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-2 shadow-sm text-[5px] text-gray-500">▶</div>
                <span className="border-b border-gray-400 pb-0.5">READ MORE</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
