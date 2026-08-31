"use client";

import { useState } from "react";

const faqData = [
  {
    q: "How does the online coaching process work?",
    a: "Once enrolled, Coach Nandhan analyzes your assessment questionnaire, training background, biomechanics, and lifestyle schedule. You receive a fully bespoke training split and metabolic nutrition plan. Each week, you submit your progress check-in metrics for video/voice note audits and protocol calibration.",
  },
  {
    q: "Do I need access to a full gym, or can I train at home?",
    a: "While a commercial gym with free weights and cables offers the optimal hypertrophy stimulus, Coach Nandhan can design custom periodized routines for home setups, dumbbell-only gyms, or travel schedules.",
  },
  {
    q: "Will I have to eat bland chicken and rice or follow strict meal plans?",
    a: "Never. Fitness Pluse 9 utilizes flexible precision nutrition. We provide calculated macronutrient and micronutrient targets with comprehensive food substitution guides, dining out navigation, and delicious high-protein recipes that fit your palate.",
  },
  {
    q: "How do the weekly check-ins work?",
    a: "Every weekend you submit your check-in portal form detailing scale moving averages, circumference measurements, lifting videos, and biofeedback (sleep, energy, digestion). Coach Nandhan reviews your data and delivers actionable adjustments.",
  },
  {
    q: "How fast will I see noticeable transformation results?",
    a: "Most clients experience significant increases in energy, strength, and visible body recomposition within the first 3-4 weeks. Dramatic 10-15kg physique transformations typically occur over a 12 to 24-week dedicated period.",
  },
  {
    q: "Is this suitable for beginners as well as advanced lifters?",
    a: "Yes. Every protocol is engineered around your current experience level. Beginners receive extensive lifting form critiques and habit foundations, while advanced athletes receive complex periodization and fatigue management.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq grain" id="faq">
      <div className="wrap">
        <div className="section-head rv">
          <div className="eyebrow center">Got Questions?</div>
          <h2>FREQUENTLY ASKED <em>QUESTIONS</em></h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            Everything you need to know about the Fitness Pluse 9 coaching methodology.
          </p>
        </div>

        <div className="faq-grid">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item rv ${isOpen ? "open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}