export default function QualificationGrid() {
  return (
    <section className="qualify grain">
      <div className="wrap">
        <div className="qualify-grid">
          <div className="qualify-col for rv">
            <div className="qualify-head">
              <span className="icon">✓</span>
              <h3>WHO FITNESS PLUSE 9 IS FOR</h3>
            </div>
            <ul className="qualify-list">
              <li>
                <span className="icon">✓</span>
                <span><b>Committed Individuals:</b> Men and women ready to follow a proven, science-based plan without cutting corners.</span>
              </li>
              <li>
                <span className="icon">✓</span>
                <span><b>Busy Professionals:</b> People who want maximum muscle-building results without living inside the gym 7 days a week.</span>
              </li>
              <li>
                <span className="icon">✓</span>
                <span><b>Action Takers:</b> Those who value direct feedback, transparent accountability, and progressive overload.</span>
              </li>
            </ul>
          </div>

          <div className="qualify-col not-for rv rv-delay-1">
            <div className="qualify-head">
              <span className="icon">✕</span>
              <h3>WHO THIS IS NOT FOR</h3>
            </div>
            <ul className="qualify-list">
              <li>
                <span className="icon">✕</span>
                <span><b>Quick-Fix Seekers:</b> Anyone expecting overnight magic pills without putting in the lifting sessions and nutritional consistency.</span>
              </li>
              <li>
                <span className="icon">✕</span>
                <span><b>Excuse Makers:</b> Those not willing to log their weekly check-in data, food intake, or lifting weights.</span>
              </li>
              <li>
                <span className="icon">✕</span>
                <span><b>Closed-Minded:</b> Individuals unwilling to accept coaching critiques on exercise technique and habit structures.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}