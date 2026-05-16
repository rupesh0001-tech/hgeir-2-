"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Roadshow", href: "/roadshow" },
    { name: "Summit", href: "/summit" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Schemes", href: "/schemes" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-10 py-4 max-w-[1500px] mx-auto w-full relative z-[100]">
        <Link href="/" className="flex items-center space-x-2.5">
          <div className="w-5 h-5 bg-[#1a8a5e] rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm flex items-center justify-center text-white text-[9px] shrink-0">
            🌱
          </div>
          <span className="font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase whitespace-nowrap">HGER<sup className="text-[9px] text-[#1a8a5e] ml-0.5">2026</sup></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-[9px] xl:text-[10px] font-black tracking-[0.2em] text-[#2d4a45]/50 uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#1a8a5e] transition-colors">{link.name}</Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/sponsors" className="hidden sm:block bg-[#0a1f1c] hover:bg-[#1a8a5e] transition-all text-white text-[9px] font-bold px-5 py-2.5 rounded-full tracking-widest whitespace-nowrap shadow-lg">
            RESERVE A SLOT
          </Link>
          
          {/* Hamburger Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 z-[110]"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
              className="w-6 h-0.5 bg-[#0a1f1c] rounded-full transition-all"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-[#0a1f1c] rounded-full transition-all"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
              className="w-6 h-0.5 bg-[#0a1f1c] rounded-full transition-all"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-white z-[90] lg:hidden flex flex-col pt-32 px-10"
          >
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tighter hover:text-[#1a8a5e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-16 pt-8 border-t border-[#0a1f1c]/5">
              <Link 
                href="/sponsors" 
                onClick={() => setIsOpen(false)}
                className="inline-block bg-[#1a8a5e] text-white text-xs font-bold px-10 py-5 rounded-full tracking-widest uppercase shadow-xl"
              >
                Reserve a Slot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
