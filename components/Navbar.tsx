"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`} id="main-header">
        <div className="header-inner">
          {/* Brand Logo & Wordmark */}
          <a href="#hero" className="brand" aria-label="Fitness Pluse 9 Home">
            <div className="brand-logo-frame">
              <Image
                src="/images/f9-logo.png"
                alt="Fitness 9 Pluse F9 Logo"
                className="brand-logo-img"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className="brand-wordmark-container">
              <span className="brand-wordmark-text">FITNESS 9 PLUSE</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <a href="#problem" className="nav-link">Reality</a>
            <a href="#story" className="nav-link">Coach</a>
            <a href="#system" className="nav-link">The 4-Pillar System</a>
            <a href="#calculator" className="nav-link">Macro Engine</a>
            <a href="#packages" className="nav-link">Protocols</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          {/* Header Action Button & Mobile Toggle */}
          <div className="header-actions">
            <a href="#enquire" className="header-cta">
              <span>Apply Now</span>
              <span className="arrow">→</span>
            </a>
            <button
              className="mobile-nav-toggle"
              id="mobile-toggle"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobile-menu">
        <a href="#problem" onClick={closeMobileMenu}>Reality</a>
        <a href="#story" onClick={closeMobileMenu}>Meet Coach</a>
        <a href="#system" onClick={closeMobileMenu}>The 4-Pillar System</a>
        <a href="#calculator" onClick={closeMobileMenu}>Macro & Calorie Engine</a>
        <a href="#packages" onClick={closeMobileMenu}>Coaching Protocols</a>
        <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
        <a href="#enquire" onClick={closeMobileMenu} style={{ color: "var(--gold)", fontWeight: 700 }}>
          Start Transformation →
        </a>
      </div>
    </>
  );
}