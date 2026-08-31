"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import RealitySection from "@/components/RealitySection";
import CoachSection from "@/components/CoachSection";
import PillarsSection from "@/components/PillarsSection";
import MacroCalculator from "@/components/MacroCalculator";
import PricingProtocols from "@/components/PricingProtocols";
import QualificationGrid from "@/components/QualificationGrid";
import FaqAccordion from "@/components/FaqAccordion";
import ApplicationSection from "@/components/ApplicationSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
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
      <QualificationGrid />
      <FaqAccordion />
      <ApplicationSection />
      <Footer />
      <BackToTop />
    </main>
  );
}