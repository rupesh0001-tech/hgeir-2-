import React from 'react';

export default function SchemesPage() {
  return (
    <div className="space-y-20 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
      {/* Page Hero */}
      <section className="relative flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a8a5e]">Financial Support</span>
            <span className="w-10 h-[1px] bg-[#0a1f1c]/10"></span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tighter leading-[1.1] text-[#0a1f1c] uppercase">
            GOVT <span className="text-[#1a8a5e] italic font-light decoration-[4px] sm:decoration-[8px] underline underline-offset-[10px] sm:underline-offset-[16px] decoration-[#1a8a5e]/20">SCHEMES</span> & SAVINGS.
          </h1>
          
          <div className="pt-8">
            <p className="text-sm md:text-base text-[#2d4a45] font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Transitioning to clean energy has never been more affordable. Learn about Haryana's flagship subsidy programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "PM-KUSUM", sub: "Agricultural Solar", desc: "Up to 75% subsidy for farmers to install solar water pumps and solarize existing grid pumps.", savings: "85%", tag: "Farmer Heavy" },
          { title: "PM-SURYA GHAR", sub: "Residential Solar", desc: "Direct benefit transfer for rooftop solar installations. Zero electricity bills for up to 300 units.", savings: "100%", tag: "Homeowners" },
          { title: "MANOHAR JYOTI", sub: "Rural Lighting", desc: "Compact solar home systems for rural households. Reliable power for lights and fans.", savings: "60%", tag: "Rural Focus" },
          { title: "EV SUBSIDY", sub: "Electric Mobility", desc: "Direct cash incentives on purchase of 2-wheelers and 3-wheelers for Haryana residents.", savings: "₹15K-50K", tag: "Transport" },
          { title: "NET METERING", sub: "Grid Integration", desc: "Sell excess solar power back to the grid. DISCOM credits applied directly to your monthly bill.", savings: "40% Credit", tag: "Commercial" },
          { title: "SME CLEAN-TECH", sub: "Industrial Upgrade", desc: "Special low-interest loans for factories upgrading to energy-efficient machinery and captive solar.", savings: "12% ROI", tag: "Industrial" }
        ].map((scheme, i) => (
          <div key={i} className="bg-white rounded-[40px] p-8 border border-[#1a8a5e]/5 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.2em] uppercase font-bold">{scheme.sub}</span>
                    <span className="bg-[#1a8a5e]/5 text-[#1a8a5e] text-[7px] font-bold px-2 py-1 rounded uppercase group-hover:bg-[#1a8a5e] group-hover:text-white transition-colors">{scheme.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1f1c] uppercase tracking-tight">{scheme.title}</h3>
                <p className="text-[#2d4a45]/60 text-xs leading-relaxed">{scheme.desc}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1a8a5e]/5">
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-[8px] font-mono uppercase tracking-widest opacity-40 mb-1">Potential Saving</div>
                        <div className="text-xl font-bold text-[#1a8a5e]">{scheme.savings}</div>
                    </div>
                    <div className="w-16 h-1 bg-[#1a8a5e]/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1a8a5e]" style={{ width: i % 2 === 0 ? '70%' : '90%' }}></div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </section>

      {/* Impact Stats */}
      <section className="bg-[#0a1f1c] rounded-[40px] p-12 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a8a5e] blur-[100px] opacity-20"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center">
            <div>
                <div className="text-4xl font-sans font-bold text-[#1a8a5e] italic mb-1">₹500Cr+</div>
                <div className="text-[9px] font-mono uppercase tracking-widest opacity-40 font-bold">Subsidy Budget</div>
            </div>
            <div>
                <div className="text-4xl font-sans font-bold text-[#1a8a5e] italic mb-1">10,000+</div>
                <div className="text-[9px] font-mono uppercase tracking-widest opacity-40 font-bold">Applications Proccessed</div>
            </div>
            <div>
                <div className="text-4xl font-sans font-bold text-[#1a8a5e] italic mb-1">24/7</div>
                <div className="text-[9px] font-mono uppercase tracking-widest opacity-40 font-bold">Portal Availability</div>
            </div>
        </div>
      </section>

      {/* Enrolment Process */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
            <span className="text-[#1a8a5e] font-mono text-[9px] tracking-[0.4em] uppercase font-bold">Step-by-Step</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a1f1c] uppercase tracking-tight">HOW TO ENROL.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
                { step: "01", title: "VISIT HGER", desc: "Come to the govt. desk at any of our 10 city stops." },
                { step: "02", title: "CONSULT", desc: "Free eligibility check with DISCOM/HAREDA officials." },
                { step: "03", title: "DOCUMENT", desc: "Upload Aadhaar, electricity bill, and land records live." },
                { step: "04", title: "TRACK", desc: "Get a tracking ID for your subsidy disbursement." }
            ].map((step, i) => (
                <div key={i} className="space-y-4">
                    <div className="text-3xl font-sans font-light italic text-[#1a8a5e]">{step.step}</div>
                    <h4 className="text-base font-bold text-[#0a1f1c] uppercase tracking-tight">{step.title}</h4>
                    <p className="text-[#2d4a45]/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a8a5e] rounded-[56px] p-12 md:p-16 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 leading-tight tracking-tight uppercase">
            NEED A <span className="italic font-light">EXPERT CALL?</span>
        </h2>
        <p className="text-white/40 text-[10px] mb-10 max-w-xl mx-auto font-bold uppercase tracking-widest">
            Our team will guide you through the right scheme for your home or business.
        </p>
        <button className="bg-[#0a1f1c] text-white text-[10px] font-bold px-10 py-4 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all">
            Request Callback
        </button>
      </section>
    </div>
  );
}
