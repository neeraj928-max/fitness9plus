"use client";

import { useState } from "react";

const faqData = [
  {
    q: "How does the online coaching process work?",
    a: "Once accepted, you will complete an in-depth onboarding audit covering your training history, biomechanics, schedule, and food preferences. Your head coach designs your customized protocol within 48 hours. You then receive daily WhatsApp support and thorough weekly performance reviews.",
  },
  {
    q: "Do I need a commercial gym membership?",
    a: "While a standard gym with barbells, dumbbells, and cables allows for maximum exercise variability, we also customize elite protocols for home gym setups with dumbbells and adjustable benches.",
  },
  {
    q: "Will I have to eat only plain chicken, rice, and broccoli?",
    a: "Never. We implement flexible macronutrient targeting that incorporates your favorite foods, social dining, and busy travel schedules. Sustainable results come from consistency, not rigid dietary deprivation.",
  },
  {
    q: "How are weekly check-ins conducted?",
    a: "Every Sunday you submit your check-in metrics (scale weight averages, circumference numbers, progress feedback, and lifting form clips). Your coach provides detailed feedback via video/voice notes and adjusts your calories, macros, or training splits accordingly.",
  },
  {
    q: "Can beginners join the Fitness Pluse 9 coaching system?",
    a: "Absolutely. Beginners often make the fastest progress with F9 because they avoid years of common gym mistakes, injuries, and improper lifting execution by learning correct biomechanics from day one.",
  },
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq grain" id="faq">
      <div className="wrap">
        <div className="section-head rv">
          <div className="eyebrow center">Got Questions?</div>
          <h2>FREQUENTLY ASKED <em>QUESTIONS</em></h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            Everything you need to know about starting your coaching journey with Fitness Pluse 9.
          </p>
        </div>

        <div className="faq-list rv rv-delay-1">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>
                  <h4>{item.q}</h4>
                  <div className="faq-icon">+</div>
                </div>
                <div
                  className="faq-a"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                  }}
                >
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}