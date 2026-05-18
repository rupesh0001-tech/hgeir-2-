"use client";
import React, { useState, useEffect } from "react";
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

export default function Home() {
  const words = [
    "GREENER HARYANA",
    "SMARTER CITIES",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2800); // Transitions every 2.8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12 md:py-16 space-y-20 md:space-y-24">
      <Hero index={index} words={words} />
      <BentoGrid activeIndex={index} words={words} />
      <RoadshowTrail />
      <PoliciesAndSchemes />
      <TargetAudience />
      <Exclusivity />
      <SummitAndAwards />
      <AwardCategories />
      <SponsorshipTiers />
      <FinalCTA />
    </div>
  );
}
