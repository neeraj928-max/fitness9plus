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
          {/* Tier 1 */}
          <div className="tier-card rv">
            <div className="tier-top">
              <div className="tier-name">12-WEEK SHRED</div>
              <div className="tier-sub">Intensive body fat reduction, stubborn fat loss, and muscle preservation.</div>
              <span className="tier-duration">12 Weeks Duration</span>
            </div>

            <ul className="tier-features-list">
              <li><span className="check">✓</span> 100% Customized Hypertrophy Training Split</li>
              <li><span className="check">✓</span> Calorie & Macro Target Adjustments</li>
              <li><span className="check">✓</span> Weekly Metric & Form Video Check-Ins</li>
              <li><span className="check">✓</span> Private WhatsApp Coach Chat Support</li>
              <li><span className="check">✓</span> Supplement & Recovery Optimization</li>
            </ul>

            <a
              href="#enquire"
              className="btn ghost tier-select-btn"
              data-tier="12-Week Intensive Shred"
              onClick={() => handleSelectTier("12-Week Intensive Shred")}
            >
              <span>Apply For 12-Week Protocol</span>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Tier 2 (Featured) */}
          <div className="tier-card featured rv rv-delay-1">
            <div className="featured-badge">MOST POPULAR • SIGNATURE</div>
            <div className="tier-top">
              <div className="tier-name">24-WEEK RECOMP</div>
              <div className="tier-sub">Complete aesthetic transformation: muscle hypertrophy, strength PRs, and metabolic acceleration.</div>
              <span className="tier-duration">24 Weeks Duration</span>
            </div>

            <ul className="tier-features-list">
              <li><span className="check">✓</span> Complete Biomechanical Physique Blueprint</li>
              <li><span className="check">✓</span> Dynamic Phase-by-Phase Periodization</li>
              <li><span className="check">✓</span> Flexible Dieting & Custom Meal Guides</li>
              <li><span className="check">✓</span> Priority Weekly Video Analysis Audits</li>
              <li><span className="check">✓</span> Real-Time WhatsApp Direct Access</li>
              <li><span className="check">✓</span> Lifestyle, Travel & Dining Out Framework</li>
            </ul>

            <a
              href="#enquire"
              className="btn tier-select-btn"
              data-tier="24-Week Complete Aesthetic Recomp"
              onClick={() => handleSelectTier("24-Week Complete Aesthetic Recomp")}
            >
              <span>Apply For 24-Week Protocol</span>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Tier 3 */}
          <div className="tier-card rv rv-delay-2">
            <div className="tier-top">
              <div className="tier-name">VIP 1-ON-1 MENTORSHIP</div>
              <div className="tier-sub">Elite executive coaching for high performers demanding top-tier guidance and daily access.</div>
              <span className="tier-duration">Bespoke Annual / VIP</span>
            </div>

            <ul className="tier-features-list">
              <li><span className="check">✓</span> All-Inclusive Bespoke Transformation Engine</li>
              <li><span className="check">✓</span> Daily Priority WhatsApp Line with Head Coach</li>
              <li><span className="check">✓</span> Bi-Weekly 1-on-1 Zoom Strategy Calls</li>
              <li><span className="check">✓</span> Bloodwork & Biomarker Audit Guidance</li>
              <li><span className="check">✓</span> Advanced Peaking & Conditioning Protocols</li>
            </ul>

            <a
              href="#enquire"
              className="btn ghost tier-select-btn"
              data-tier="VIP 1-on-1 Executive Mentorship"
              onClick={() => handleSelectTier("VIP 1-on-1 Executive Mentorship")}
            >
              <span>Apply For VIP Mentorship</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}