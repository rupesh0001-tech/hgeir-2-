"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SponsorshipTiers() {
  const tiers = [
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
  ];

  return (
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
          {tiers.map((tier, i) => (
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
  );
}
