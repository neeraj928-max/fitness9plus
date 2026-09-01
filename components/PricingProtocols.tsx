"use client";

export default function PricingProtocols() {
  const handleSelectTier = (tierName: string) => {
    const progInput = document.getElementById("app-program") as HTMLSelectElement | null;
    if (progInput) {
      progInput.value = tierName;
    }
    const enquireEl = document.getElementById("enquire");
    if (enquireEl) {
      enquireEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pricing grain" id="packages">
      <div className="wrap">
        <div className="section-head rv">
          <div className="eyebrow center">Investment In Yourself</div>
          <h2>COACHING <em>PROTOCOLS</em></h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            Choose your level of commitment. Every package includes 100% bespoke biomechanical programming, custom nutrition, and direct coach mentorship.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Tier 1 - 1:1 Training */}
          <div className="tier-card rv">
            <div className="tier-top">
              <div className="tier-name">1:1 PERSONAL TRAINING</div>
              <div className="tier-sub">Dedicated 1-on-1 private coaching engineered for bespoke hypertrophy, biomechanics, and personalized attention.</div>
              <span className="tier-duration">1-on-1 Private Protocol</span>
            </div>

            <ul className="tier-features-list">
              <li><span className="check">✓</span> 100% Customized Biomechanical Training Split</li>
              <li><span className="check">✓</span> Custom Diet Blueprint (Veg / Eggitarian / Non-Veg)</li>
              <li><span className="check">✓</span> Weekly Metric, Scale & Form Video Audits</li>
              <li><span className="check">✓</span> 24/7 Direct WhatsApp Coach Chat Support</li>
              <li><span className="check">✓</span> Posture Correction, Mobility & Supplement Guidance</li>
            </ul>

            <a
              href="#enquire"
              className="btn ghost tier-select-btn"
              data-tier="1:1 Personal Coaching"
              onClick={() => handleSelectTier("1:1 Personal Coaching")}
            >
              <span>Apply For 1:1 Training</span>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Tier 2 - Couple Training (Featured) */}
          <div className="tier-card featured rv rv-delay-1">
            <div className="featured-badge">MOST POPULAR • PARTNER PROTOCOL</div>
            <div className="tier-top">
              <div className="tier-name">COUPLE TRAINING</div>
              <div className="tier-sub">Synchronized dual transformation coaching for couples or partners aiming to build aesthetic physiques together.</div>
              <span className="tier-duration">Dual 2-Person Custom Protocol</span>
            </div>

            <ul className="tier-features-list">
              <li><span className="check">✓</span> Dual Individualized Training Plans Tailored to Both</li>
              <li><span className="check">✓</span> Custom Diet Plans (Veg / Eggitarian / Non-Veg)</li>
              <li><span className="check">✓</span> Joint & Individual Weekly Progress & Form Audits</li>
              <li><span className="check">✓</span> Shared Private WhatsApp Accountability Group</li>
              <li><span className="check">✓</span> Lifestyle, Dining Out & Travel Strategies for Two</li>
              <li><span className="check">✓</span> Continuous Motivation & Mindset Coaching</li>
            </ul>

            <a
              href="#enquire"
              className="btn tier-select-btn"
              data-tier="Couple Training"
              onClick={() => handleSelectTier("Couple Training")}
            >
              <span>Apply For Couple Training</span>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Tier 3 - Fat Shred */}
          <div className="tier-card rv rv-delay-2">
            <div className="tier-top">
              <div className="tier-name">FAT SHRED PROTOCOL</div>
              <div className="tier-sub">Aggressive fat reduction and metabolic conditioning engineered to incinerate stubborn adipose and reveal deep muscle definition.</div>
              <span className="tier-duration">Targeted Fat Shred Split</span>
            </div>

            <ul className="tier-features-list">
              <li><span className="check">✓</span> Accelerated Fat Oxidation & Hypertrophy Split</li>
              <li><span className="check">✓</span> Precision Calorie Deficit & Macro Partitioning</li>
              <li><span className="check">✓</span> Weekly Biofeedback, Waist & Body Fat Tracking</li>
              <li><span className="check">✓</span> Daily Habit Check & Direct WhatsApp Coaching</li>
              <li><span className="check">✓</span> High-Intensity Conditioning & Recovery Protocols</li>
            </ul>

            <a
              href="#enquire"
              className="btn ghost tier-select-btn"
              data-tier="Fat Shred Protocol"
              onClick={() => handleSelectTier("Fat Shred Protocol")}
            >
              <span>Apply For Fat Shred</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}