export default function PillarsSection() {
  return (
    <section className="system grain" id="system">
      <div className="wrap">
        <div className="section-head rv">
          <div className="eyebrow center">Engineered For Excellence</div>
          <h2>THE F9 <em>4-PILLAR</em> SYSTEM</h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            Our proven four-stage framework designed to optimize muscle hypertrophy, accelerate metabolic rate, and instill unbreakable discipline.
          </p>
        </div>

        <div className="pillars-grid">
          {/* Pillar 1 */}
          <div className="pillar-card rv">
            <div className="pillar-num">01</div>
            <h3>BIOMECHANICAL TRAINING</h3>
            <p>
              Customized exercise selection engineered around your unique limb lengths and active range of motion to maximize muscular recruitment while protecting joint longevity.
            </p>
            <ul className="pillar-features">
              <li>Targeted Progressive Overload Schedules</li>
              <li>In-depth Exercise Form Video Critiques</li>
              <li>Customized Split & Volume Calibration</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card rv rv-delay-1">
            <div className="pillar-num">02</div>
            <h3>PRECISION METABOLIC NUTRITION</h3>
            <p>
              Flexible macronutrient and calorie targeting built specifically for your food preferences, work routine, and hormonal profile. No starvation, no bland restrictions.
            </p>
            <ul className="pillar-features">
              <li>Calculated Protein & Micronutrient Targets</li>
              <li>Dining Out & Travel Flexibility Strategies</li>
              <li>Continuous Metabolic Adaptation Tracking</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card rv rv-delay-2">
            <div className="pillar-num">03</div>
            <h3>WEEKLY BIOFEEDBACK AUDITS</h3>
            <p>
              Every week we conduct a deep-dive performance review analyzing scale weight averages, circumference metrics, training loads, sleep quality, and energy levels.
            </p>
            <ul className="pillar-features">
              <li>Weekly Video/Voice Note Protocol Adjustments</li>
              <li>Immediate Plateau-Busting Adjustments</li>
              <li>Comprehensive Health & Recovery Monitoring</li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card rv rv-delay-3">
            <div className="pillar-num">04</div>
            <h3>24/7 DIRECT COACH ACCOUNTABILITY</h3>
            <p>
              Direct access to your coach via private WhatsApp chat. Ask questions, send workout clips, get menu recommendations on the go, and stay laser-focused every single week.
            </p>
            <ul className="pillar-features">
              <li>Direct WhatsApp Line (No Junior Assistants)</li>
              <li>Daily Mindset & Habit Habit Formation</li>
              <li>High-Performance Lifestyle Coaching</li>
            </ul>
          </div>
        </div>

        {/* Facility & Training Atmosphere Strip */}
        <div className="facility-strip rv" style={{ marginTop: "60px" }}>
          <img
            src="assets/images/gym-facility.jpg"
            alt="Fitness Pluse 9 Dark Luxury Gym Setup"
            loading="lazy"
          />
          <div className="facility-overlay">
            <div className="facility-text">
              <div className="badge-gold" style={{ marginBottom: "12px" }}>ELITE ATMOSPHERE</div>
              <h3>PRECISION WORKOUT ENVIRONMENT</h3>
              <p>
                Whether training in a high-end commercial gym or private studio, every workout is programmed for maximum hypertrophy stimulus and progressive tension.
              </p>
              <a href="#calculator" className="btn small">
                <span>Calculate Your Targets</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}