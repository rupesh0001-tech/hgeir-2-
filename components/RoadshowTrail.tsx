"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function RoadshowTrail() {
  const cities = [
    { id: "01", name: "Palwal", vision: "Sustainable urban planning and solar integration.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Kos_Minar_001.jpg" },
    { id: "02", name: "Rewari", vision: "Pioneering smart-grid technology and green logistics.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Rewari_Railway_Heritage_Museum.JPG" },
    { id: "03", name: "Charkhi Dadri", vision: "Community-led renewable energy cooperatives.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Village_Gate_of_Pipli%2CSirsa.jpg" },
    { id: "04", name: "Hisar", vision: "Transforming the education hub into a leading center.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Fort_of_Firoz_Shah_Tughlaq_at_Hisar.jpg" },
    { id: "05", name: "Sirsa", vision: "Agricultural energy transformation through biogas.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Village_Gate_of_Pipli%2CSirsa.jpg" },
    { id: "06", name: "Rohtak", vision: "Electrifying the heart with EV charging networks.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Rohtak_Police_Lines.jpg" },
    { id: "07", name: "Sonipat", vision: "Industrial decarbonization through waste-to-energy.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Sonipat_Railway_Station.jpg" },
    { id: "08", name: "Karnal", vision: "Modernizing agriculture with solar irrigation.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Victoria_Memorial_Hall%2C_KARNAL.jpg" },
    { id: "09", name: "Yamunanagar", vision: "Hydro-energy optimization and manufacturing.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Yamuna_Nagar.jpg" },
    { id: "10", name: "Chandigarh", vision: "Final summit: Unifying the roadmap for net-zero.", category: "City Vision", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sukhna_Lake_Chandigarh.jpg" },
  ];

  // Reverse cities for the new order
  const reversedCities = [...cities].reverse();
  
  // Duplicate cities for infinite scroll
  const duplicatedCities = [...reversedCities, ...reversedCities];
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isHoverPaused, setIsHoverPaused] = React.useState(false);
  const [isClickPaused, setIsClickPaused] = React.useState(false);
  const isPaused = isHoverPaused || isClickPaused;

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Infinite loop: if we've scrolled past the first set of items, reset
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <>
      <section className="py-24 overflow-hidden relative">
        {/* Section Header */}
        <div className="px-6 lg:px-20 mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-[#0a1f1c] tracking-tighter mb-4 text-balance"
          >
            Cities <span className="text-[#1a8a5e] italic font-light">Unfolded.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#2d4a45]/60 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed text-balance"
          >
            A panoramic journey across Haryana. Our automatic roadshow trail brings the energy vision of every city directly to you.
          </motion.p>
        </div>

        {/* Auto-scrolling + Manual Swiping Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 no-scrollbar cursor-grab active:cursor-grabbing px-6 lg:px-20"
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
          onClick={() => setIsClickPaused(!isClickPaused)}
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex gap-8 flex-nowrap">
            {duplicatedCities.map((city, i) => (
              <div 
                key={`${city.id}-${i}`} 
                className="w-[280px] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[500px] md:h-[550px] flex-shrink-0 relative rounded-[32px] md:rounded-[48px] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <img 
                  src={city.img} 
                  alt={city.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1c]/95 via-[#0a1f1c]/30 to-transparent"></div>
                
                {/* Decorative Accent */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/60 group-hover:bg-[#1a8a5e] group-hover:text-white transition-all shadow-lg">
                  <span className="text-sm font-bold">{city.id}</span>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#1a8a5e] text-white font-mono text-[8px] font-bold tracking-widest uppercase shadow-sm">
                      {city.category}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2cc985] animate-pulse shadow-[0_0_8px_rgba(44,201,133,0.6)]"></div>
                  </div>
                  
                  <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-sans font-bold leading-[1.1] mb-4 md:mb-6 group-hover:text-[#2cc985] transition-colors duration-500">
                    {city.name}
                  </h2>
                  
                  <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {city.vision}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-white/40 font-mono text-[9px] font-bold tracking-widest uppercase">ROADSHOW PHASE {city.id}</span>
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-[#1a8a5e] transition-colors">
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion-Style Slice Section from Commit */}
      <section className="py-24 max-w-[1400px] mx-auto w-full px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#1a8a5e] font-mono tracking-[0.2em] uppercase mb-3">
              The Roadshow Trail · 10 Cities
            </h2>
            <h1 className="text-4xl md:text-5xl font-sans font-semibold text-[#0a1f1c] mb-6 leading-tight">
              Cities Unfolded.
            </h1>
            <p className="text-[#2d4a45] text-base md:text-lg leading-relaxed max-w-xl">
              Experience the journey. Hover over each city slice to reveal our green vision for Haryana's future.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-[550px] gap-2 md:gap-2.5 overflow-hidden">
          {[
            { id: "01", name: "Palwal", vision: "Sustainable urban planning and solar integration.", color: "bg-[#fbfdfc]", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Kos_Minar_001.jpg" },
            { id: "02", name: "Rewari", vision: "Pioneering smart-grid technology and green logistics.", color: "bg-[#f0f7f4]", img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Rewari_Railway_Heritage_Museum.JPG" },
            { id: "03", name: "Charkhi Dadri", vision: "Community-led renewable energy cooperatives.", color: "bg-[#e3eee9]", img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Village_Gate_of_Pipli%2CSirsa.jpg" },
            { id: "04", name: "Hisar", vision: "Transforming the education hub into a leading center.", color: "bg-[#dcf0c5]", img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Fort_of_Firoz_Shah_Tughlaq_at_Hisar.jpg" },
            { id: "05", name: "Sirsa", vision: "Agricultural energy transformation through biogas.", color: "bg-[#b2e672]", img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Village_Gate_of_Pipli%2CSirsa.jpg" },
            { id: "06", name: "Rohtak", vision: "Electrifying the heart with EV charging networks.", color: "bg-[#1a8a5e]", dark: true, img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Rohtak_Police_Lines.jpg" },
            { id: "07", name: "Sonipat", vision: "Industrial decarbonization through waste-to-energy.", color: "bg-[#0e5a3d]", dark: true, img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Sonipat_Railway_Station.jpg" },
            { id: "08", name: "Karnal", vision: "Modernizing agriculture with solar irrigation.", color: "bg-[#0a1f1c]", dark: true, img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Victoria_Memorial_Hall%2C_KARNAL.jpg" },
            { id: "09", name: "Yamunanagar", vision: "Hydro-energy optimization and manufacturing.", color: "bg-[#2d4a45]", dark: true, img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Yamuna_Nagar.jpg" },
            { id: "10", name: "Chandigarh", vision: "Final summit: Unifying the roadmap for net-zero.", color: "bg-[#1a8a5e]", dark: true, img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sukhna_Lake_Chandigarh.jpg" },
          ].map((city) => (
            <div 
              key={city.id}
              className={`group relative flex-1 hover:flex-[5] transition-all duration-700 ease-in-out ${city.color} rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-2xl`}
            >
              {/* Background Image */}
              <img 
                src={city.img}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 z-0"
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
    </>
  );
}
