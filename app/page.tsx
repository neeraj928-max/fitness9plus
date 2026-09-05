"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import RealitySection from "@/components/RealitySection";
import CoachSection from "@/components/CoachSection";
import PillarsSection from "@/components/PillarsSection";
import MacroCalculator from "@/components/MacroCalculator";
import PricingProtocols from "@/components/PricingProtocols";
import SpecializationsSection from "@/components/SpecializationsSection";
import QualificationGrid from "@/components/QualificationGrid";
import FaqAccordion from "@/components/FaqAccordion";
import ApplicationSection from "@/components/ApplicationSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const rvElements = document.querySelectorAll(".rv");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 }
    );

    rvElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <RealitySection />
      <CoachSection />
      <PillarsSection />
      <MacroCalculator />
      <PricingProtocols />
      <SpecializationsSection />
      <QualificationGrid />
      <FaqAccordion />
      <ApplicationSection />
      <Footer />
    </main>
  );
}