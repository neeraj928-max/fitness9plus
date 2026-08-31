export default function QualificationGrid() {
  return (
    <section className="qualification grain" id="standards">
      <div className="wrap">
        <div className="section-head rv">
          <div className="eyebrow center">High Standards</div>
          <h2>WHO WE COACH <em>VS</em> WHO WE DON&apos;T</h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            We work exclusively with committed individuals ready to take action. Quality and personal attention are our highest priorities.
          </p>
        </div>

        <div className="qual-grid">
          {/* Who This Is For */}
          <div className="qual-card for-card rv">
            <div className="qual-card-head">
              <span className="qual-icon">✓</span>
              <h3>THIS IS FOR YOU IF:</h3>
            </div>
            <ul className="qual-list">
              <li>You are willing to track your food and follow data-driven targets.</li>
              <li>You can commit to 3-5 focused resistance training sessions per week.</li>
              <li>You want a proven scientific system without starvation or bro-science.</li>
              <li>You are coachable, communicate honestly, and submit weekly check-ins.</li>
              <li>You value your health, physique, and long-term joint longevity.</li>
            </ul>
          </div>

          {/* Who This Is Not For */}
          <div className="qual-card not-for-card rv rv-delay-1">
            <div className="qual-card-head">
              <span className="qual-icon">✕</span>
              <h3>THIS IS NOT FOR YOU IF:</h3>
            </div>
            <ul className="qual-list">
              <li>You are looking for overnight magic pills, detox teas, or fad crash diets.</li>
              <li>You cannot spare 3-4 hours per week to train with intensity.</li>
              <li>You are not willing to submit weekly check-in measurements and photos.</li>
              <li>You make endless excuses and do not take personal accountability.</li>
              <li>You are unwilling to step outside of your comfort zone.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}