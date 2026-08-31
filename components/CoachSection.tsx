import Image from "next/image";

export default function CoachSection() {
  return (
    <section className="story grain" id="story">
      <div className="wrap">
        <div className="story-grid">
          {/* Coach Photo Card */}
          <div className="story-media rv">
            <div className="story-image-wrap">
              <Image
                src="/images/nandhan-r-founder.jpg"
                alt="Nandhan R - Head Coach & Founder of Fitness Pluse 9"
                width={550}
                height={700}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <div className="story-badge">
                <span className="story-badge-icon">👑</span>
                <div>
                  <div className="story-badge-title">NANDHAN R</div>
                  <div className="story-badge-sub">13 YEARS OF ZIDD • FOUNDER & HEAD COACH</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coach Narrative */}
          <div className="story-content rv rv-delay-1">
            <div className="eyebrow">The Man Behind System 9</div>
            <h2>MEET YOUR HEAD COACH <em>NANDHAN R</em></h2>
            
            <blockquote className="story-quote">
              &ldquo;Discipline is choosing between what you want now and what you want most. We don&apos;t just change your physique—we rewire your mindset.&rdquo;
            </blockquote>

            <p>
              With over <b>13 years of relentless passion and training experience</b>, Nandhan R founded <b>Fitness Pluse 9</b> with a single mission: to provide serious, results-driven lifestyle transformations without the fluff, toxic bro-science, or unsustainable crash starvation methods.
            </p>
            <p>
              Every client accepted into the F9 System is coached directly by Nandhan. You get continuous biomechanical adjustments, calculated progressive overload protocols, and custom metabolic nutrition that fits seamlessly into your executive, professional, or everyday lifestyle.
            </p>

            {/* Coach Viewport Stats */}
            <div className="story-counters">
              <div className="story-counter-item">
                <div className="count-val">100%</div>
                <div className="count-lbl">Tailored Protocols</div>
              </div>
              <div className="story-counter-item">
                <div className="count-val">24/7</div>
                <div className="count-lbl">Direct WhatsApp Line</div>
              </div>
              <div className="story-counter-item">
                <div className="count-val">9</div>
                <div className="count-lbl">Pillars of Mastery</div>
              </div>
            </div>

            <div style={{ marginTop: "28px" }}>
              <a href="#enquire" className="btn small">
                <span>Work With Nandhan</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}