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
    <div className="min-h-screen bg-[#f0f7f4] text-[#0a1f1c] font-manrope selection:bg-[#2cc985]/30">
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
          <button className="bg-[#1a8a5e] hover:bg-[#0e5a3d] transition-colors text-white text-xs font-bold px-6 py-3 rounded-full tracking-wider">
            CONTACT US
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-8 pt-14 pb-24 space-y-32">
        {/* Hero Section */}
        <section className="text-center max-w-6xl mx-auto relative">
          
          <h1 className="text-5xl md:text-4xl lg:text-7xl font-fraunces font-semibold tracking-tight leading-[1.1] mb-6 flex flex-col items-center justify-center uppercase">
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
              <h1 className="text-4xl md:text-5xl font-fraunces font-semibold text-[#0a1f1c] mb-6 leading-tight">
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
                    <h3 className={`text-lg xl:text-xl font-fraunces font-bold ${city.dark ? 'text-white' : 'text-[#0a1f1c]'} tracking-tighter uppercase whitespace-nowrap rotate-[270deg]`}>
                      {city.name}
                    </h3>
                  </div>

                  {/* Horizontal Content (Hover State) */}
                  <div className="hidden group-hover:flex flex-col h-full mt-10">
                    <h3 className="text-3xl xl:text-4xl font-fraunces font-bold text-white tracking-tight mb-4 drop-shadow-lg">
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
              <h1 className="text-5xl md:text-6xl font-fraunces font-bold text-[#0a1f1c] mb-8 leading-[1.1] tracking-tight">
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
                    
                    <h2 className="text-white text-3xl md:text-4xl font-fraunces font-bold leading-[1.1] mb-6 group-hover:text-[#2cc985] transition-colors duration-500">
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

      </main>
    </div>
  );
}


