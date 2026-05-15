"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const schemesRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: schemesRef,
    offset: ["start start", "end end"]
  });

  const textX = useTransform(scrollYProgress, [0, 0.25], ["0%", "-150%"]);
  const cardsX = useTransform(scrollYProgress, [0.05, 1], ["0%", "-70%"]);

  return (
    <div className="min-h-screen bg-[#f0f7f4] text-[#0a1f1c] font-sans selection:bg-[#2cc985]/30">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 max-w-[1600px] mx-auto">
        <div className="flex items-center space-x-2">
          {/* Logo icon (small leaf-like shape) */}
          <div className="w-5 h-5 bg-[#1a8a5e] rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm flex items-center justify-center text-white text-[10px]">
            🌱
          </div>
          <span className="font-bold tracking-widest text-sm">HGER ROADSHOW®</span>
        </div>

        <nav className="hidden md:flex space-x-12 text-xs font-semibold tracking-wider text-[#2d4a45]">
          <a href="#" className="hover:text-[#0a1f1c] transition-colors flex items-center">HOME <span className="ml-1 text-[8px]">▼</span></a>
          <a href="#" className="hover:text-[#0a1f1c] transition-colors flex items-center">ABOUT US <span className="ml-1 text-[8px]">▼</span></a>
          <a href="#" className="hover:text-[#0a1f1c] transition-colors flex items-center">OUR PROJECTS <span className="ml-1 text-[8px]">▼</span></a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-[#1a8a5e] hover:bg-[#0e5a3d] transition-colors text-white text-xs font-bold px-6 py-3 rounded-full tracking-wider">
            CONTACT US
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-8 pt-14 pb-24 space-y-32">
        {/* Hero Section */}
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 xl:gap-4 lg:h-[280px] xl:h-[320px] max-w-[1400px] mx-auto w-full">
          
          {/* Card 1: Community */}
          <div className="bg-[#0e5a3d]/[0.05] rounded-3xl p-5 xl:p-6 lg:col-span-3 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02] relative shadow-sm text-[#0e5a3d]">
            <div className="flex justify-between items-start mb-4">
              <span className="border border-[#0e5a3d]/20 rounded-full px-3 py-1 text-[9px] font-bold tracking-wider bg-transparent font-mono">COMMUNITY</span>
              <span className="text-[10px] font-bold mt-1 font-mono">/2023</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center relative">
              <div className="flex flex-col items-start mb-6 relative z-10">
                 <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex items-center font-fraunces">
                   <span className="text-2xl xl:text-3xl font-semibold tracking-tight text-[#0e5a3d]">JOIN OUR</span>
                   <span className="ml-2 text-2xl xl:text-3xl font-light text-[#0e5a3d]">✕</span>
                 </div>
                 <div className="bg-[#fbfdfc] px-3 xl:px-4 py-1.5 xl:py-2 rounded-[4px] shadow-sm inline-flex relative mt-1.5 xl:mt-2 ml-1 font-fraunces">
                   <span className="text-2xl xl:text-3xl font-light italic tracking-tight text-[#0e5a3d]">COMMUNITY</span>
                   <div className="absolute -right-5 xl:-right-6 -bottom-3 z-20 rotate-12 bg-[#fbfdfc] border border-[#0e5a3d]/10 px-2 py-1 shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center rounded-sm">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="#0e5a3d" xmlns="http://www.w3.org/2000/svg" className="-rotate-12 mb-0.5"><path d="M5.5 3L19 10L12.5 12.5L10 19L5.5 3Z" stroke="#fbfdfc" strokeWidth="1" strokeLinejoin="round"/></svg>
                     <span className="text-[7px] font-bold text-[#0e5a3d] font-mono">JOIN</span>
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
            {/* Box 1 - White */}
            <div className="bg-white rounded-[15px] xl:rounded-[20px] p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-sm w-[80%] z-10 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 border border-gray-100 min-h-[100px]">
              <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">10</h3>
              <p className="text-[7px] xl:text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Tier 2/3 Cities</p>
            </div>
            
            {/* Box 2 - Fade Gray */}
            <div className="bg-[#f5f5f5] rounded-[15px] xl:rounded-[20px] p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-md w-[90%] z-20 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 border border-gray-200 min-h-[100px]">
              <h3 className="text-2xl xl:text-3xl font-bold mb-1 tracking-tight text-[#0a1f1c] font-mono">03</h3>
              <p className="text-[7px] xl:text-[8px] text-[#2d4a45] font-bold tracking-wider uppercase leading-tight">Months · 1 Closing Summit</p>
            </div>

            {/* Box 3 - Primary Green (#1a8a5e) */}
            <div className="bg-[#1a8a5e] rounded-[15px] xl:rounded-[20px] p-4 xl:p-5 flex flex-col items-center justify-start text-center shadow-lg w-full z-30 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 border border-[#1a8a5e]/20 min-h-[110px]">
              <h3 className="text-2xl xl:text-3xl font-bold mb-1 text-white tracking-tight font-mono">20</h3>
              <p className="text-[7px] xl:text-[8px] text-white/90 font-bold tracking-wider uppercase leading-tight px-1">Sponsor Slots</p>
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

        {/* Roadshow Trail Section - Interactive Slices */}
        <section className="">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[#1a8a5e] font-mono tracking-[0.2em] uppercase mb-3">
                The Roadshow Trail · 10 Cities
              </h2>
              <h1 className="text-4xl md:text-5xl font-sans font-semibold text-[#0a1f1c] mb-6 leading-tight">
                Cities Unfolded.
              </h1>
              <p className="text-[#2d4a45] text-base md:text-lg leading-relaxed max-w-xl">
                Experience the journey. Hover over each city slice to reveal our green vision for Haryana&apos;s future.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-[550px] gap-2 md:gap-2.5 overflow-hidden">
            {[
              { id: "01", name: "Palwal", vision: "Sustainable urban planning and solar integration.", color: "bg-[#fbfdfc]", img: "/city1.png" },
              { id: "02", name: "Rewari", vision: "Pioneering smart-grid technology and green logistics.", color: "bg-[#f0f7f4]", img: "/city2.png" },
              { id: "03", name: "Charkhi Dadri", vision: "Community-led renewable energy cooperatives.", color: "bg-[#e3eee9]", img: "/city1.png" },
              { id: "04", name: "Hisar", vision: "Transforming the education hub into a leading center.", color: "bg-[#dcf0c5]", img: "/city2.png" },
              { id: "05", name: "Sirsa", vision: "Agricultural energy transformation through biogas.", color: "bg-[#b2e672]", img: "/city1.png" },
              { id: "06", name: "Rohtak", vision: "Electrifying the heart with EV charging networks.", color: "bg-[#1a8a5e]", dark: true, img: "/city2.png" },
              { id: "07", name: "Sonipat", vision: "Industrial decarbonization through waste-to-energy.", color: "bg-[#0e5a3d]", dark: true, img: "/city1.png" },
              { id: "08", name: "Karnal", vision: "Modernizing agriculture with solar irrigation.", color: "bg-[#0a1f1c]", dark: true, img: "/city2.png" },
              { id: "09", name: "Yamunanagar", vision: "Hydro-energy optimization and manufacturing.", color: "bg-[#2d4a45]", dark: true, img: "/city1.png" },
              { id: "10", name: "Chandigarh", vision: "Final summit: Unifying the roadmap for net-zero.", color: "bg-[#1a8a5e]", dark: true, img: "/city2.png" },
            ].map((city) => (
              <div 
                key={city.id}
                className={`group relative flex-1 hover:flex-[5] transition-all duration-700 ease-in-out ${city.color} rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-2xl`}
              >
                {/* Background Image */}
                <Image 
                  src={city.img}
                  alt={city.name}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 z-0"
                />
                
                {/* Background Overlays - Removed fades as requested */}
                <div className={`absolute inset-0 ${city.color} group-hover:hidden z-[1]`}></div>

                <div className="relative z-10 flex flex-col h-full p-6">
                  <div className="flex justify-between items-start">
                    <span className={`font-mono text-[10px] font-bold ${city.dark ? 'text-white' : 'text-[#1a8a5e]'} tracking-tighter`}>
                      {city.id}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${city.dark ? 'bg-white' : 'bg-[#1a8a5e]'} shadow-sm`}></div>
                  </div>

                  {/* Vertical Text (Compressed State) */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center group-hover:hidden transition-all duration-300">
                    <h3 className={`text-lg xl:text-xl font-sans font-bold ${city.dark ? 'text-white' : 'text-[#0a1f1c]'} tracking-tighter uppercase whitespace-nowrap rotate-[270deg]`}>
                      {city.name}
                    </h3>
                  </div>

                  {/* Horizontal Content (Hover State) */}
                  <div className="hidden group-hover:flex flex-col h-full mt-10">
                    <h3 className="text-3xl xl:text-4xl font-sans font-bold text-white tracking-tight mb-4 drop-shadow-lg">
                      {city.name}
                    </h3>
                    <div className="mt-auto max-w-[280px]">
                      <p className="text-[13px] xl:text-[14px] leading-relaxed mb-6 text-white font-medium drop-shadow-md">
                        {city.vision}
                      </p>
                      <div className="w-12 h-[2px] bg-white mb-3 shadow-sm"></div>
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase font-mono text-white drop-shadow-sm">
                        CITY VISION
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full bg-[#1a8a5e] transition-all duration-700 z-20"></div>
              </div>
            ))}
          </div>


        </section>

        {/* Policies & Schemes Section - Horizontal Scroll Animation */}
        <section ref={schemesRef} className="relative h-[400vh]">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            {/* Left Column: Text Content - Will move left */}
            <motion.div 
              style={{ x: textX }}
              className="absolute left-8 lg:left-20 z-20 max-w-xl"
            >
              <h2 className="text-sm font-bold text-[#1a8a5e] font-mono tracking-[0.2em] uppercase mb-4">
                Policies & Schemes
              </h2>
              <h1 className="text-5xl md:text-6xl font-sans font-bold text-[#0a1f1c] mb-8 leading-[1.1] tracking-tight">
                <span className="text-[#1a8a5e]">Government</span><br />Backing.
              </h1>
              <p className="text-[#2d4a45] text-lg md:text-xl leading-relaxed mb-12">
                We bring official enrolment desks for every major central and state scheme directly to the roadshow floor — helping visitors move from awareness to enrolment in minutes.
              </p>
              <button className="bg-[#1a8a5e] hover:bg-[#0e5a3d] text-white text-[11px] font-bold px-10 py-4 rounded-xl tracking-widest uppercase flex items-center self-start shadow-xl transition-all group">
                Live Enrolment Desks <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>

            {/* Right Side: Horizontal Cards - Will move in from right and across */}
            <motion.div 
              style={{ x: cardsX }}
              className="flex gap-8 pl-[60vw]" // Start cards offset to the right
            >
              {[
                {
                  id: "01",
                  category: "Central · Active",
                  title: "PM Surya Ghar Muft Bijli Yojana",
                  desc: "Free electricity up to 300 units/month for 1 crore households across India.",
                  img: "/scheme1.png"
                },
                {
                  id: "02",
                  category: "Most Subsidised",
                  title: "PM-KUSUM (Kisan Urja Suraksha)",
                  desc: "Solar pumps and grid-connected plants for farmers — stacked subsidies.",
                  img: "/city1.png"
                },
                {
                  id: "03",
                  category: "State · Haryana",
                  title: "Haryana Solar Policy 2024",
                  desc: "Additional state subsidy for rooftop solar and time-bound DISCOM approvals.",
                  img: "/city2.png"
                },
                {
                  id: "04",
                  category: "EV · Mobility",
                  title: "FAME-II + Haryana EV Policy",
                  desc: "Subsidies on electric 2/3 wheelers + 100% registration fee waiver.",
                  img: "/city1.png"
                },
                {
                  id: "05",
                  category: "Industrial · 2030",
                  title: "National Green Hydrogen Mission",
                  desc: "Outlay for green hydrogen production, electrolyzers, and pilot projects.",
                  img: "/city2.png"
                },
                {
                  id: "06",
                  category: "HAREDA · State Nodal",
                  title: "HAREDA Outreach Programs",
                  desc: "Awareness drives, vendor empanelment, and direct citizen support.",
                  img: "/scheme1.png"
                }
              ].map((scheme, i) => (
                <div 
                  key={i} 
                  className="w-[350px] md:w-[450px] h-[500px] flex-shrink-0 relative rounded-[48px] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-4"
                >
                  <Image 
                    src={scheme.img} 
                    alt={scheme.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1c]/95 via-[#0a1f1c]/40 to-transparent"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/60 group-hover:bg-[#1a8a5e] group-hover:text-white transition-all shadow-lg">
                    <span className="text-sm font-bold">✕</span>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1a8a5e] text-white font-mono text-[8px] font-bold tracking-widest uppercase shadow-sm">
                        {scheme.category}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2cc985] animate-pulse shadow-[0_0_8px_rgba(44,201,133,0.6)]"></div>
                    </div>
                    
                    <h2 className="text-white text-3xl md:text-4xl font-sans font-bold leading-[1.1] mb-6 group-hover:text-[#2cc985] transition-colors duration-500">
                      {scheme.title}
                    </h2>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {scheme.desc}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-white/40 font-mono text-[9px] font-bold tracking-widest uppercase">ENROLMENT ACTIVE</span>
                      <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-[#1a8a5e] transition-colors">
                        <span className="text-lg">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Savings & Who Walks In Section */}
        <section className="space-y-40 py-20 relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a8a5e]/5 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2cc985]/5 rounded-full blur-[120px] -z-10"></div>

          {/* Interactive Who Walks In - Institutional Grid */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-5 py-2 rounded-full bg-[#f0f7f4] border border-[#1a8a5e]/10 text-[#1a8a5e] font-mono text-[10px] font-bold tracking-widest uppercase mb-10 shadow-sm"
                >
                  Target Audience
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-[1.1] tracking-tight mb-8"
                >
                  Institutional buyers <br />
                  <span className="text-[#1a8a5e] italic font-light relative">
                    with budgets,
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,10 100,5" stroke="#2cc985" strokeWidth="2" fill="none" opacity="0.3"/></svg>
                  </span> not browsers.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[#2d4a45]/70 text-base md:text-xl max-w-2xl leading-relaxed font-medium"
                >
                  We&apos;ve designed HGER to attract decision-makers from high-impact institutional segments who are ready to invest in Haryana&apos;s green transition.
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
              >
                <Image 
                  src="/images/audience.png" 
                  alt="Decision Makers" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="bg-white rounded-[48px] border border-[#1a8a5e]/20 shadow-[0_40px_100px_-20px_rgba(26,138,94,0.08)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-[#1a8a5e]/15">
                {[
                  { 
                    percent: "28%", 
                    title: "Schools & Colleges", 
                    desc: "1,200+ schools and 80+ colleges across Haryana looking for rooftop solar and clean-tech partnerships.",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                  },
                  { 
                    percent: "22%", 
                    title: "Hospitals & Healthcare", 
                    desc: "Govt. hospitals, private clinics, and PHCs seeking 24×7 solar backup for critical care infrastructure.",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM12 7v10M7 12h10"/></svg>
                  },
                  { 
                    percent: "26%", 
                    title: "Govt. Bodies & Panchayats", 
                    desc: "6,000+ Gram Panchayats with mandated procurement for solar streetlights and water pumps.",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4"/></svg>
                  },
                  { 
                    percent: "24%", 
                    title: "Hotels & Commercial", 
                    desc: "Hotels, resorts, and malls under ESG pressure — high-ticket buyers for energy storage and EV charging.",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h1m-1 4h1m-1 4h1m4-12h1m-1 4h1m-1 4h1"/></svg>
                  }
                ].map((segment, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 lg:p-10 group hover:bg-[#f0f7f4] transition-all duration-700 relative cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#1a8a5e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="mb-8 w-10 h-10 bg-white border border-[#1a8a5e]/10 rounded-lg flex items-center justify-center text-[#1a8a5e] group-hover:bg-[#1a8a5e] group-hover:text-white transition-all duration-500 shadow-sm">
                      {segment.icon}
                    </div>
                    <div className="mb-4">
                      <span className="text-[7px] font-black tracking-[0.2em] text-[#1a8a5e] uppercase">
                        {segment.percent} OF FOOTFALL
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-sans font-bold text-[#0a1f1c] mb-4 leading-tight group-hover:text-[#1a8a5e] transition-colors">
                      {segment.title}
                    </h3>
                    <p className="text-[#2d4a45]/60 text-[11px] md:text-[12px] leading-relaxed group-hover:text-[#0a1f1c] transition-colors">
                      {segment.desc}
                    </p>
                    <div className="mt-8 flex items-center gap-1.5 text-[8px] font-bold text-[#1a8a5e] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      Learn More <span className="text-xs">→</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Exclusivity Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Content */}
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-1.5 rounded-full bg-[#f0f7f4] border border-[#1a8a5e]/10 text-[#1a8a5e] font-mono text-[9px] font-bold tracking-widest uppercase mb-10 shadow-sm"
                >
                  Exclusivity Guaranteed
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-[1.1] tracking-tight mb-10"
                >
                  A <span className="text-[#1a8a5e] italic font-light">limited</span> circle of partners.
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-8 text-[#2d4a45]/80 text-sm md:text-[15px] leading-relaxed max-w-xl font-medium"
                >
                  <p>
                    We are capping each sponsor category to ensure that every partner gets maximum visibility and zero competition within their niche. This isn&apos;t a crowded expo — it&apos;s an exclusive roadshow.
                  </p>
                  <p>
                    HGER is not a crowded expo with hundreds of competing booths. We intentionally cap participation at <span className="text-[#1a8a5e] font-bold">twenty companies</span> across all 10 cities.
                  </p>
                  <p>
                    This guarantees every sponsor real visibility, real leads, and real ROI in front of every visitor that walks in. Once the 20 slots are filled, applications close. Period.
                  </p>
                </motion.div>
                
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-12 bg-[#0a4d34] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-wide hover:bg-[#1a8a5e] transition-all flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(10,77,52,0.3)] hover:-translate-y-1"
                >
                  Claim a Slot <span>→</span>
                </motion.button>
              </div>

              {/* Right - Live Status Grid */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-[#061412] rounded-[60px] p-10 md:p-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden border border-white/5"
              >
                {/* Dot Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-14">
                    <div>
                      <span className="text-[8px] font-black tracking-[0.3em] text-[#2cc985]/50 uppercase block mb-3">Sponsor Slots · Live</span>
                      <h3 className="text-3xl md:text-4xl font-sans font-bold text-white">14 of 20 open</h3>
                    </div>
                    <div className="bg-[#1a8a5e]/20 border border-[#1a8a5e]/30 px-4 py-1.5 rounded-full">
                      <span className="text-[9px] font-bold text-[#2cc985] tracking-widest uppercase">Live Status</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-3 md:gap-4">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const isFilled = i < 6;
                      return (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className={`aspect-square rounded-xl md:rounded-2xl flex items-center justify-center text-[10px] md:text-xs font-bold transition-all duration-500 border ${
                            isFilled 
                              ? 'bg-[#1a8a5e]/20 border-[#1a8a5e]/40 text-[#2cc985] shadow-[0_0_20px_rgba(44,201,133,0.1)]' 
                              : 'bg-white/[0.03] border-white/5 text-white/20 hover:border-white/20'
                          }`}
                        >
                          {(i + 1).toString().padStart(2, '0')}
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-12 flex items-center gap-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#2cc985] shadow-[0_0_10px_rgba(44,201,133,0.5)]"></div>
                      <span className="text-[9px] font-bold text-white/40 tracking-widest uppercase">In Conversation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                      <div className="w-2 h-2 rounded-full bg-[#1a8a5e] shadow-[0_0_10px_rgba(26,138,94,0.5)]"></div>
                      <span className="text-[9px] font-bold text-[#0a1f1c]/40 tracking-widest uppercase">In Conversation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#1a8a5e]/20"></div>
                      <span className="text-[9px] font-bold text-[#0a1f1c]/40 tracking-widest uppercase">Open Slot</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* HGER Summit & Awards Section */}
        <section className="py-32 bg-[#f0f7f4] overflow-hidden relative">
          {/* Animated Mesh Gradients for Color depth */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#1a8a5e]/10 rounded-full blur-[120px] pointer-events-none"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1.1, 1, 1.1],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-24">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#1a8a5e]/10 text-[#1a8a5e] font-mono text-[9px] font-bold tracking-widest uppercase mb-8 shadow-sm"
              >
                Exclusive Leadership & Recognition
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-tight tracking-tight mb-8"
              >
                The HGER <span className="text-[#1a8a5e]">Summit</span> <br />
                <span className="text-[#d4af37]">& Awards Night</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#2d4a45]/60 text-base md:text-lg leading-relaxed font-medium"
              >
                An exclusive summit and awards evening bringing together renewable energy leaders, innovators, policymakers, and clean-tech pioneers under one platform.
              </motion.p>
            </div>

            {/* High-End Visual Break */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden mb-24 shadow-2xl"
            >
              <Image 
                src="/images/summit.png" 
                alt="HGER Summit Visual" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1c]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div className="max-w-md">
                  <span className="text-[#d4af37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Event Highlight</span>
                  <h3 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">A Night of Sustainable Excellence</h3>
                </div>
                <div className="hidden md:flex gap-4">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                    <span className="text-[10px] font-bold">2026</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Event Overview Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] p-12 md:p-16 shadow-[0_20px_50px_-10px_rgba(26,138,94,0.08)] border border-white relative overflow-hidden group hover:border-[#1a8a5e]/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-8 bg-[#1a8a5e] rounded-full"></div>
                  <h3 className="text-2xl font-sans font-bold text-[#0a1f1c]">Event Overview</h3>
                </div>
                <p className="text-[#2d4a45]/70 text-[15px] leading-relaxed font-medium mb-12">
                  The event celebrates impactful contributions toward a greener Haryana while creating opportunities for collaboration, networking, recognition, and business growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Premium networking",
                    "Live presentations",
                    "Awards gala",
                    "Media exposure",
                    "Industry connections",
                    "Exclusive opportunities"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 py-2 border-b border-[#1a8a5e]/5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a8a5e]"></div>
                      <span className="text-[11px] font-bold text-[#2d4a45]/80 uppercase tracking-widest">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Distinguished Leaders Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a1f1c] rounded-[32px] p-12 md:p-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a8a5e]/10 rounded-full blur-[100px] group-hover:bg-[#1a8a5e]/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <span className="text-[9px] font-black tracking-[0.4em] text-[#d4af37] uppercase mb-10 block">Chief Guest Protocol</span>
                  <h3 className="text-4xl md:text-5xl font-sans font-bold text-white mb-10 leading-tight">
                    Distinguished <br />
                    <span className="text-[#d4af37]">Government &</span> <br />
                    Industry Leaders
                  </h3>
                  <p className="text-white/50 text-[15px] leading-relaxed max-w-sm mb-16 font-medium">
                    Special participation from senior cabinet officials, renewable energy pioneers, and clean-tech visionaries from across the nation.
                  </p>
                </div>

                <div className="relative z-10 pt-12 border-t border-white/5 flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Official Protocol</span>
                    <span className="text-sm font-sans font-bold text-white">Edition I · 2026</span>
                  </div>
                  <div className="px-6 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm">
                    <span className="text-[10px] font-black text-[#d4af37] tracking-widest">VIP ACCESS</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Award Categories - Sleek Grid */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] font-black tracking-[0.4em] text-[#1a8a5e] uppercase block mb-6">Recognition Excellence</span>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] leading-tight">Award Categories</h2>
              </div>
              <p className="text-[#2d4a45]/60 text-sm md:text-base font-medium max-w-xs">
                Celebrating Impact across two distinct leadership tracks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  track: "Track 01",
                  title: "Exhibitor Track",
                  awards: ["Best Solar Innovation", "Best EV Technology", "Best RE Startup", "Impactful Green Solution", "Sustainable Product Display", "Clean Energy Mfg."]
                },
                {
                  track: "Track 02",
                  title: "Community Track",
                  awards: ["Green Community Champion", "Sustainability Leadership", "Institutional Green Initiative", "RE Adoption Excellence", "Eco-Business Award", "Youth Climate Leadership"]
                }
              ].map((track, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#f0f7f4] rounded-[32px] p-10 md:p-14 group hover:bg-[#1a8a5e] transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <span className="text-[9px] font-black tracking-[0.3em] text-[#1a8a5e] uppercase block mb-2 group-hover:text-white/50">{track.track}</span>
                      <h4 className="text-2xl font-sans font-bold text-[#0a1f1c] group-hover:text-white">{track.title}</h4>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#1a8a5e] font-bold shadow-sm">0{i+1}</div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {track.awards.map((award, idx) => (
                      <div key={idx} className="flex justify-between items-center py-4 border-b border-[#1a8a5e]/10 group-hover:border-white/10">
                        <span className="text-[#0a1f1c] font-bold text-[14px] group-hover:text-white/90">{award}</span>
                        <span className="text-[#1a8a5e]/30 font-mono text-[9px] font-bold group-hover:text-white/30">0{idx+1}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers - Refined & Visual */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
              <div className="lg:col-span-7">
                <span className="text-[10px] font-black tracking-[0.4em] text-[#1a8a5e] uppercase block mb-8">Sponsorship Tiers</span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-sans font-bold text-[#0a1f1c] leading-[1.1] tracking-tight mb-8"
                >
                  Three tiers. Twenty seats. <br />
                  <span className="text-[#1a8a5e] italic font-light relative">
                    One unforgettable journey.
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,10 100,5" stroke="#2cc985" strokeWidth="2" fill="none" opacity="0.3"/></svg>
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-[#2d4a45]/70 text-base md:text-xl font-medium leading-relaxed max-w-2xl"
                >
                  Every tier is built around one promise — your brand, in front of the right buyer, in every city we visit. We are selecting partners who share our vision for a sustainable Haryana.
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative h-[300px] rounded-[32px] overflow-hidden shadow-xl"
              >
                <Image 
                  src="/images/clean-tech.png" 
                  alt="Clean Tech Vision" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1a8a5e]/10 backdrop-blur-[2px]"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  tier: "Tier III · Associate",
                  name: "Hamsafar",
                  slots: "12 slots available",
                  features: ["Branded stall in all 10 cities", "Logo on collateral & banners", "Lead capture at every stop", "Closing summit invitation", "Institutional buyer intros"]
                },
                {
                  tier: "Tier II · Co-Title",
                  name: "Saarthi",
                  slots: "7 slots available",
                  featured: true,
                  features: ["Premium stall + showcase zone", "Stage time at every city event", "Co-branded press releases", "Dedicated PR + media coverage", "Govt MoU photo-ops", "Awards stage recognition"]
                },
                {
                  tier: "Tier I · Title",
                  name: "Pradhaan",
                  slots: "1 exclusive slot",
                  features: ["\"Presented by\" naming rights", "HGER becomes \"[Brand] HGER\"", "Inaugural ribbon-cut", "Headline summit speaker", "Year-long brand association", "Right of first refusal 2027"]
                }
              ].map((tier, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`p-10 md:p-12 rounded-[32px] border transition-all duration-500 flex flex-col ${
                    tier.featured 
                      ? 'bg-[#0a1f1c] text-white border-[#1a8a5e]/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] scale-105 z-10' 
                      : 'bg-white text-[#0a1f1c] border-[#1a8a5e]/5 shadow-[0_20px_40px_-10px_rgba(26,138,94,0.04)]'
                  }`}
                >
                  <div className="mb-10">
                    <span className={`text-[9px] font-black tracking-[0.2em] uppercase mb-4 block ${tier.featured ? 'text-[#1a8a5e]' : 'text-[#1a8a5e]/50'}`}>
                      {tier.tier}
                    </span>
                    <h3 className="text-3xl font-sans font-bold mb-3">{tier.name}</h3>
                    <p className={`text-[10px] font-bold tracking-widest uppercase ${tier.featured ? 'text-white/40' : 'text-[#0a1f1c]/30'}`}>
                      {tier.slots}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-12 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-1 h-1 rounded-full mt-2 shrink-0 ${tier.featured ? 'bg-[#1a8a5e]' : 'bg-[#1a8a5e]/30'}`}></div>
                        <span className={`text-[13px] font-bold ${tier.featured ? 'text-white/70' : 'text-[#2d4a45]/80'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all ${
                    tier.featured 
                      ? 'bg-[#1a8a5e] text-white hover:bg-[#2cc985]' 
                      : 'bg-[#f0f7f4] text-[#1a8a5e] hover:bg-[#1a8a5e] hover:text-white'
                  }`}>
                    ENQUIRE NOW →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Fade Green & Minimal */}
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

        {/* Footer - Light Editorial Design */}
        <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-20 pb-10">
            {/* Decorative Background SVG */}
            <svg className="hidden md:block absolute -bottom-30 -left-80 opacity-5 w-full h-full pointer-events-none" width="68"
                height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_8678_1074)">
                    <path d="M16.141 0C13.4854 0 10.9387 1.04871 9.06091 2.91543L2.93268 9.00761C1.05492 10.8743 0 13.4061 0 16.0461C0 21.5435 4.48289 26 10.0128 26C12.6684 26 15.2152 24.9512 17.0929 23.0845L21.3319 18.8705C21.3319 18.8705 21.3319 18.8706 21.3319 18.8705L33.6827 6.59239C34.5795 5.70086 35.7958 5.2 37.0641 5.2C39.1874 5.2 40.9876 6.57576 41.6117 8.47953L45.5096 4.60457C43.7314 1.83589 40.6134 0 37.0641 0C34.4085 0 31.8617 1.04871 29.984 2.91543L13.3943 19.4076C12.4974 20.2992 11.2811 20.8 10.0128 20.8C7.37176 20.8 5.23077 18.6716 5.23077 16.0461C5.23077 14.7852 5.73459 13.5761 6.63139 12.6845L12.7596 6.59239C13.6564 5.70086 14.8727 5.2 16.141 5.2C18.2645 5.2 20.0645 6.57582 20.6887 8.47965L24.5866 4.60466C22.8084 1.83595 19.6904 0 16.141 0Z" fill="#1a8a5e" />
                    <path d="M34.3188 19.4076C33.422 20.2992 32.2056 20.8 30.9373 20.8C28.8143 20.8 27.0143 19.4246 26.39 17.5211L22.4922 21.396C24.2705 24.1643 27.3883 26 30.9373 26C33.5929 26 36.1397 24.9512 38.0175 23.0845L54.6072 6.59239C55.504 5.70086 56.7203 5.2 57.9886 5.2C60.6297 5.2 62.7707 7.32839 62.7707 9.95393C62.7707 11.2148 62.2669 12.4239 61.37 13.3155L55.2419 19.4076C54.345 20.2992 53.1287 20.8 51.8604 20.8C49.7372 20.8 47.9371 19.4243 47.3129 17.5207L43.4151 21.3957C45.1933 24.1642 48.3112 26 51.8604 26C54.516 26 57.0628 24.9512 58.9405 23.0845L65.0687 16.9924C66.9465 15.1257 68.0014 12.5939 68.0014 9.95393C68.0014 4.45652 63.5186 0 57.9886 0C55.333 0 52.7863 1.04871 50.9085 2.91543L34.3188 19.4076Z" fill="#1a8a5e" />
                </g>
                <defs>
                    <clipPath id="clip0_8678_1074">
                        <rect width="68" height="26" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 relative z-10">
                <div className="sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-[#1a8a5e] rounded-xl flex items-center justify-center relative overflow-hidden -rotate-12 shadow-lg">
                            <div className="absolute top-0 right-0 w-5 h-10 bg-[#0e5a3d] rounded-r-full"></div>
                        </div>
                        <span className="text-2xl font-bold tracking-tighter text-[#0a1f1c]">HGER ROADSHOW</span>
                    </div>
                    <p className="text-sm/7 mt-6 text-slate-500 max-w-sm font-medium">
                        Transforming energy overhead into long-term wealth for families and businesses across the state of Haryana through sustainable green energy adoption.
                    </p>
                </div>
                
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-bold mb-5 text-[#0a1f1c] uppercase tracking-widest text-[11px]">Company</h2>
                        <a className="hover:text-[#1a8a5e] transition font-medium" href="#">About us</a>
                        <a className="hover:text-[#1a8a5e] transition font-medium" href="#">The Route</a>
                        <a className="hover:text-[#1a8a5e] transition font-medium" href="#">Contact us</a>
                        <a className="hover:text-[#1a8a5e] transition font-medium" href="#">Privacy policy</a>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-[#0a1f1c] mb-5 uppercase tracking-widest text-[11px]">Subscribe to our newsletter</h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p className="font-medium text-slate-500">The latest news, articles, and resources about Haryana&apos;s green energy transition, sent to your inbox weekly.</p>
                        <div className="flex items-center shadow-sm">
                            <input className="rounded-l-xl bg-gray-100 outline-none w-full max-w-64 h-12 px-4 font-medium" type="email" placeholder="Enter your email" />
                            <button className="bg-[#1a8a5e] cursor-pointer hover:bg-[#0a1f1c] transition px-6 h-12 text-white rounded-r-xl font-bold text-[11px] tracking-widest uppercase">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-t mt-16 border-slate-100 relative z-10">
                <p className="text-center font-medium text-[12px]">
                    Copyright 2026 © <span className="text-[#0a1f1c] font-bold">HGER Roadshow</span> All Rights Reserved.
                </p>
                <div className="flex items-center gap-6 font-bold text-[10px] tracking-widest uppercase">
                    <a href="/" className="hover:text-[#1a8a5e] transition">Privacy Policy</a>
                    <a href="/" className="hover:text-[#1a8a5e] transition">Terms of Service</a>
                    <a href="/" className="hover:text-[#1a8a5e] transition">Cookie Policy</a>
                </div>
            </div>
        </footer>

      </main>
    </div>
  );
}
