import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 max-w-[1600px] mx-auto">
      <div className="flex items-center space-x-2">
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
  );
}
