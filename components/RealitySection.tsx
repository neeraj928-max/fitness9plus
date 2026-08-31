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

          <div className="problem-cards">
            <div className="p-card rv rv-delay-1">
              <div className="p-card-header">
                <span className="p-num">01</span>
                <span className="p-tag">Common Mistake</span>
              </div>
              <h4>CRASH DIETING & METABOLIC DAMAGE</h4>
              <p>
                Slashing calories down to single digits forces hormonal down-regulation, muscle wasting, rebound weight gain, and intense brain fog.
              </p>
            </div>

            <div className="p-card rv rv-delay-2">
              <div className="p-card-header">
                <span className="p-num">02</span>
                <span className="p-tag">Common Mistake</span>
              </div>
              <h4>COOKIE-CUTTER BODYBUILDING SPLITS</h4>
              <p>
                Copying high-volume pro influencer routines with zero consideration for your joint architecture, recovery bandwidth, or active lifestyle.
              </p>
            </div>

            <div className="p-card rv rv-delay-3">
              <div className="p-card-header">
                <span className="p-num">03</span>
                <span className="p-tag">Common Mistake</span>
              </div>
              <h4>LACK OF DATA-DRIVEN FEEDBACK</h4>
              <p>
                Pushing through plateaus without tracking scale weight moving averages, lifting technique videos, or biofeedback markers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}