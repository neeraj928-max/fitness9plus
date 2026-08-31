"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header id="hd" className={solid ? "solid" : ""}>
        <div className="nav">
          <a href="#hero" className="brand" aria-label="Fitness Pluse 9 Home">
            <img
              src="assets/images/f9-brand-logo.jpg"
              alt="Fitness Pluse 9 Logo"
              className="brand-logo-img"
            />
            <img
              src="assets/images/f9-wordmark.png"
              alt="Fitness 9 Pluse"
              className="brand-wordmark-img"
            />
          </a>

          <nav className="nav-links" aria-label="Primary Navigation">
            <a href="#problem">Reality</a>
            <a href="#story">Coach</a>
            <a href="#system">The System</a>
            <a href="#calculator">Macro Engine</a>
            <a href="#packages">Protocols</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-cta-wrap">
            <a href="#enquire" className="btn small">
              <span>Apply Now</span>
              <span className="arrow">→</span>
            </a>
            <button
              className="mobile-nav-toggle"
              id="mobile-toggle"
              aria-label="Open Navigation Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} id="mobile-menu">
        <a href="#problem" onClick={closeMobile}>Reality</a>
        <a href="#story" onClick={closeMobile}>Meet Coach</a>
        <a href="#system" onClick={closeMobile}>The 4-Pillar System</a>
        <a href="#calculator" onClick={closeMobile}>Macro & Calorie Engine</a>
        <a href="#packages" onClick={closeMobile}>Coaching Protocols</a>
        <a href="#faq" onClick={closeMobile}>FAQ</a>
        <a
          href="#enquire"
          onClick={closeMobile}
          style={{ color: "var(--gold)", fontWeight: 700 }}
        >
          Start Transformation →
        </a>
      </div>
    </>
  );
}