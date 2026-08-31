"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // Add play class after mount to trigger animations
    const timer = setTimeout(() => setPlay(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero grain ${play ? "play" : ""}`} id="hero">
      {/* Left Vertical Spine */}
      <div className="hero-spine">
        <span>FITNESS PLUSE 9</span> • DISCIPLINE OVER MOTIVATION
      </div>

      <div className="hero-inner">
        <div className="hero-grid-layout">
          {/* Left Text Column */}
          <div className="hero-text-col">
            <div className="mast">
              <div className="mast-line">
                <span className="l1">BUILD YOUR</span>
              </div>
              <div className="mast-line">
                <span className="l2">ULTIMATE <span className="gold-accent">PHYSIQUE</span></span>
              </div>
              <div className="mast-line">
                <span className="l3">SYSTEM 9<span className="dot"></span></span>
              </div>
            </div>

            {/* Hero Badges */}
            <div className="hero-badges-row rv rv-delay-1">
              <div className="hero-stat-chip">
                <span className="chip-icon">⚡</span>
                <div>
                  <div className="chip-val">1-ON-1</div>
                  <div className="chip-lbl">Direct Mentorship</div>
                </div>
              </div>
              <div className="hero-stat-chip">
                <span className="chip-icon">🎯</span>
                <div>
                  <div className="chip-val">100%</div>
                  <div className="chip-lbl">Custom Nutrition</div>
                </div>
              </div>
              <div className="hero-stat-chip">
                <span className="chip-icon">📈</span>
                <div>
                  <div className="chip-val">DATA-DRIVEN</div>
                  <div className="chip-lbl">Weekly Audits</div>
                </div>
              </div>
            </div>

            {/* Hero Base Bar */}
            <div className="hero-base">
              <p>
                Online lifestyle and physique transformation coaching by <b>Fitness Pluse 9</b>. Custom biomechanical training, precision nutrition engineered for your life, and relentless 1-on-1 accountability.
              </p>
              <div className="hero-actions">
                <a href="#enquire" className="enq-link">
                  <span>Apply For Coaching</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Column (Directly Beside Text) */}
          <div className="hero-image-col">
            <div className="hero-figure-card">
              <img
                src="assets/images/coach-physique.jpg"
                alt="Fitness Pluse 9 - Aesthetic Physique"
                id="f9-hero-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Index Marker */}
      <div className="hero-index">
        <b>01 / 06</b> — F9 COACHING METHODOLOGY
      </div>
    </section>
  );
}