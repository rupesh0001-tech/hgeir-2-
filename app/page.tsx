"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import RoadshowTrail from "@/components/RoadshowTrail";
import PoliciesAndSchemes from "@/components/PoliciesAndSchemes";
import TargetAudience from "@/components/TargetAudience";
import Exclusivity from "@/components/Exclusivity";
import SummitAndAwards from "@/components/SummitAndAwards";
import AwardCategories from "@/components/AwardCategories";
import SponsorshipTiers from "@/components/SponsorshipTiers";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f7f4] text-[#0a1f1c] font-sans selection:bg-[#2cc985]/30">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-8 pt-14 pb-24 space-y-32">
        <Hero />
        <BentoGrid />
        <RoadshowTrail />
        <PoliciesAndSchemes />
        <TargetAudience />
        <Exclusivity />
        <SummitAndAwards />
        <AwardCategories />
        <SponsorshipTiers />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
