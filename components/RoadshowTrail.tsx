"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RoadshowTrail() {
  const cities = [
    { id: "01", name: "Palwal", vision: "Sustainable urban planning and solar integration.", category: "City Vision", img: "/city1.png" },
    { id: "02", name: "Rewari", vision: "Pioneering smart-grid technology and green logistics.", category: "City Vision", img: "/city2.png" },
    { id: "03", name: "Charkhi Dadri", vision: "Community-led renewable energy cooperatives.", category: "City Vision", img: "/city1.png" },
    { id: "04", name: "Hisar", vision: "Transforming the education hub into a leading center.", category: "City Vision", img: "/city2.png" },
    { id: "05", name: "Sirsa", vision: "Agricultural energy transformation through biogas.", category: "City Vision", img: "/city1.png" },
    { id: "06", name: "Rohtak", vision: "Electrifying the heart with EV charging networks.", category: "City Vision", img: "/city2.png" },
    { id: "07", name: "Sonipat", vision: "Industrial decarbonization through waste-to-energy.", category: "City Vision", img: "/city1.png" },
    { id: "08", name: "Karnal", vision: "Modernizing agriculture with solar irrigation.", category: "City Vision", img: "/city2.png" },
    { id: "09", name: "Yamunanagar", vision: "Hydro-energy optimization and manufacturing.", category: "City Vision", img: "/city1.png" },
    { id: "10", name: "Chandigarh", vision: "Final summit: Unifying the roadmap for net-zero.", category: "City Vision", img: "/city2.png" },
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
              <Image 
                src={city.img} 
                alt={city.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
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
  );
}
