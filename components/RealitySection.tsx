export default function RealitySection() {
  return (
    <section className="problem grain" id="problem">
      <div className="wrap">
        <div className="problem-grid">
          <div className="problem-content rv">
            <div className="eyebrow">The Hard Truth</div>
            <h2>WHY MOST <em>FAIL</em> TO BUILD AN AESTHETIC BODY</h2>
            <p className="sub" style={{ marginTop: "14px" }}>
              The fitness industry is filled with recycled cookie-cutter PDF workouts and starvation crash diets that destroy your metabolism. Real transformation requires an engineered blueprint.
            </p>

            <div className="problem-solution-box">
              <h3>THE FITNESS PLUSE 9 FORMULA</h3>
              <p>
                We eliminate guesswork with a scientific, bio-individual approach. Every set, rep, carb, and macro is tailored to your unique biomechanics, metabolic rate, and daily lifestyle schedule.
              </p>
              <a href="#system" className="btn small ghost">
                <span>Explore The Blueprint</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="pain-list rv rv-delay-1">
            <div className="pain-card">
              <span className="x-icon">✕</span>
              <div>
                <b>Cookie-Cutter Generic Workouts</b>
                <p>Following generic fitness influencer routines without progressive overload schemes or biomechanical adjustments for your limb lengths and joint structure.</p>
              </div>
            </div>

            <div className="pain-card">
              <span className="x-icon">✕</span>
              <div>
                <b>Unsustainable Crash Diets</b>
                <p>Cutting out entire food groups and slashing calories to starvation levels, causing metabolic slowdown, intense cravings, muscle loss, and rapid fat rebound.</p>
              </div>
            </div>

            <div className="pain-card">
              <span className="x-icon">✕</span>
              <div>
                <b>Zero Accountability & Coaching Feedback</b>
                <p>No one reviewing your lifting execution, no weekly biofeedback audits, and zero guidance when plateaus hit. You end up spinning your wheels for months.</p>
              </div>
            </div>

            <div className="pain-card">
              <span className="x-icon">✕</span>
              <div>
                <b>Information Overload & Paralysis</b>
                <p>Jumping from one trendy routine to another every three weeks without ever committing to a proven periodized hypertrophy progression.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}