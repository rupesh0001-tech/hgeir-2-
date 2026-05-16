import React from 'react';
import Image from 'next/image';

export default function RoadshowTrail() {
  const cities = [
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
  ];

  return (
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
        {cities.map((city) => (
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
  );
}
