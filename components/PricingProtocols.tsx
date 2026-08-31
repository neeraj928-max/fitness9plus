"use client";

interface PricingProtocolsProps {
  onSelectProtocol?: (protocolName: string) => void;
}

export default function PricingProtocols({ onSelectProtocol }: PricingProtocolsProps) {
  const handleSelect = (tier: string) => {
    if (onSelectProtocol) {
      onSelectProtocol(tier);
    } else {
      const progInput = document.getElementById("app-program") as HTMLSelectElement | null;
      if (progInput) {
        progInput.value = tier;
      }
      const notesInput = document.getElementById("app-notes") as HTMLTextAreaElement | null;
      if (notesInput && !notesInput.value) {
        notesInput.value = `I am interested in applying for the ${tier}.`;
      }
      const enquireEl = document.getElementById("enquire");
      if (enquireEl) {
        enquireEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="packages grain" id="packages">
      <div className="wrap">
        <div className="section-head rv">
          <div className="eyebrow center">Coaching Protocols</div>
          <h2>SELECT YOUR <em>TRANSFORMATION TIER</em></h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            Every tier includes 100% bespoke training splits, custom metabolic nutrition calculations, and private direct coach WhatsApp access.
          </p>
        </div>

        <div className="packages-grid">
          {/* Tier 1 */}
          <div className="tier-card rv">
            <div className="tier-header">
              <div className="tier-duration">12 WEEKS</div>
              <h3>INTENSIVE SHRED</h3>
              <p className="tier-desc">
                Ideal for individuals with a solid training foundation looking for aggressive, structured body fat reduction.
              </p>
            </div>

            <ul className="tier-features-list">
              <li>Custom Biomechanical Training Split</li>
              <li>Calculated Protein & Deficit Macro Targets</li>
              <li>Weekly Video Check-In & Biofeedback Audits</li>
              <li>Exercise Form Analysis & Critiques</li>
              <li>Direct WhatsApp Coach Support (Mon-Sat)</li>
            </ul>

            <button
              type="button"
              className="tier-select-btn btn full ghost"
              onClick={() => handleSelect("12-Week Intensive Shred")}
            >
              <span>Apply For 12-Week</span>
              <span className="arrow">→</span>
            </button>
          </div>

          {/* Tier 2 (Featured) */}
          <div className="tier-card featured rv rv-delay-1">
            <div className="tier-popular-badge">MOST POPULAR • COMPLETE RECOMP</div>
            <div className="tier-header">
              <div className="tier-duration">24 WEEKS</div>
              <h3>COMPLETE AESTHETIC RECOMP</h3>
              <p className="tier-desc">
                Our signature transformation protocol. Engineered to simultaneously build dense muscle tissue and incinerate stubborn body fat.
              </p>
            </div>

            <ul className="tier-features-list">
              <li>Full 24-Week Periodized Hypertrophy Periodization</li>
              <li>Dynamic Metabolic Reverse Dieting & Carb Cycling</li>
              <li>Weekly Comprehensive Biofeedback & Metric Audits</li>
              <li>Priority Unlimited WhatsApp Access (7 Days/Week)</li>
              <li>Restaurant Menu, Dining Out & Travel Protocols</li>
              <li>Lifestyle, Sleep & Recovery Optimization Blueprint</li>
            </ul>

            <button
              type="button"
              className="tier-select-btn btn full"
              onClick={() => handleSelect("24-Week Complete Aesthetic Recomp")}
            >
              <span>Apply For 24-Week Recomp</span>
              <span className="arrow">→</span>
            </button>
          </div>

          {/* Tier 3 */}
          <div className="tier-card rv rv-delay-2">
            <div className="tier-header">
              <div className="tier-duration">BESPOKE / VIP</div>
              <h3>EXECUTIVE 1-ON-1 MENTORSHIP</h3>
              <p className="tier-desc">
                Exclusive high-touch coaching for busy executives, entrepreneurs, and high-performers demanding maximum attention.
              </p>
            </div>

            <ul className="tier-features-list">
              <li>100% Fully Customized Annual Transformation Plan</li>
              <li>Bi-Weekly 1-on-1 Zoom Strategy Review Calls</li>
              <li>Direct Private VIP Coach WhatsApp Hot-line</li>
              <li>Executive Travel & Business Dining Navigation</li>
              <li>Comprehensive Health Biomarker Review Assistance</li>
              <li>Tailored Supplementation Protocol Strategy</li>
            </ul>

            <button
              type="button"
              className="tier-select-btn btn full ghost"
              onClick={() => handleSelect("VIP 1-on-1 Executive Mentorship")}
            >
              <span>Apply For VIP Mentorship</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}