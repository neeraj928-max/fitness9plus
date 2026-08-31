export default function MarqueeTicker() {
  const marqueeText = "HYPERTROPHY • NUTRITION PRECISION • 1-ON-1 ACCOUNTABILITY • METABOLIC OPTIMIZATION • DISCIPLINE OVER MOTIVATION • FITNESS PLUSE 9 • BIOMECHANICAL AUDITS • ZERO GUESSWORK •";

  return (
    <section className="ticker" aria-label="Brand Highlights Ticker">
      <div className="ticker-track">
        <div className="ticker-item">
          {marqueeText.split("•").map((item, idx) => (
            <span key={idx}>
              {item.trim()} <i>•</i>{" "}
            </span>
          ))}
        </div>
        <div className="ticker-item" aria-hidden="true">
          {marqueeText.split("•").map((item, idx) => (
            <span key={idx}>
              {item.trim()} <i>•</i>{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}