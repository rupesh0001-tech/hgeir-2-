"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Monitor window scroll to apply sticky styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "pt-0 px-0" 
          : "pt-6 px-4 md:px-6 lg:px-8"
      }`}
    >
      <header 
        className={`w-full transition-all duration-500 ease-in-out flex flex-col relative ${
          isScrolled 
            ? "max-w-full rounded-none border-b border-[#e5eae6]/85 bg-white/95 backdrop-blur-md py-3 px-6 md:px-12 shadow-[0_10px_30px_rgba(26,60,40,0.06)]" 
            : "max-w-6xl rounded-full border border-[#e5eae6] bg-white py-3.5 px-6 lg:px-8 shadow-[0_8px_30px_rgba(26,60,40,0.03)]"
        }`}
      >
        {/* Inner container to keep elements aligned to standard page width */}
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* New HGER Logo */}
          <Link href="/" className="flex items-center space-x-3 shrink-0 group">
            <img 
              src="/logo-h.jpeg" 
              alt="HGER Logo" 
              className="h-9 w-auto rounded-lg object-contain shadow-sm group-hover:scale-102 transition-transform duration-300"
            />
            <span className="font-fraunces font-black text-base sm:text-lg text-[#0c2415] tracking-wide uppercase whitespace-nowrap">
              HGER
              <sup className="text-[9px] text-[#1a8a5e] ml-0.5 font-bold font-mono">2026</sup>
            </span>
          </Link>

          {/* Desktop Nav - 7 original links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[11px] font-manrope font-extrabold text-[#0c2415] tracking-wider uppercase relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // Detect if page matches
              
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`relative py-1 hover:text-[#1a8a5e] transition-colors ${
                    isActive 
                      ? "text-[#1a8a5e] font-black" 
                      : "text-[#0c2415] hover:text-[#1a8a5e]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1a8a5e] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button - RESERVE A SLOT */}
          <div className="hidden sm:flex items-center">
            <Link 
              href="/sponsors" 
              className="bg-[#031c0e] hover:bg-[#1a8a5e] text-white text-[10px] xl:text-[11px] font-bold px-5 py-2.5 rounded-full tracking-widest uppercase transition-all shadow-[0_4px_12px_rgba(3,28,14,0.15)] hover:shadow-lg whitespace-nowrap active:scale-95 font-sans"
            >
              RESERVE A SLOT
            </Link>
          </div>
          
          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center space-y-1 z-50 text-[#0c2415] bg-[#f3f9f5] hover:bg-[#e4efe8] active:scale-95 rounded-full transition-all cursor-pointer"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }}
              className="w-4 h-0.5 bg-current rounded-full transition-all"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-4 h-0.5 bg-current rounded-full transition-all"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0 }}
              className="w-4 h-0.5 bg-current rounded-full transition-all"
            />
          </button>
        </div>

        {/* Mobile Expandable Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden w-full"
            >
              <div className="pt-6 pb-4 flex flex-col space-y-4 border-t border-[#e5eae6] mt-4 px-2 max-w-6xl mx-auto w-full">
                <nav className="flex flex-col space-y-3 font-manrope font-extrabold text-xs text-[#0c2415] uppercase tracking-wider">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`hover:text-[#1a8a5e] transition-colors py-1.5 flex items-center justify-between ${
                        pathname === link.href ? "text-[#1a8a5e] font-black" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="pt-4 border-t border-[#e5eae6]/80 flex flex-col sm:hidden">
                  <Link 
                    href="/sponsors" 
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-[#031c0e] hover:bg-[#1a8a5e] text-white text-xs font-bold py-3 rounded-full transition-all shadow-md uppercase tracking-wider"
                  >
                    RESERVE A SLOT
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
