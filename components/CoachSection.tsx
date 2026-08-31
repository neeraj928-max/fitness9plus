"use client";

import { useEffect, useRef } from "react";

export default function CoachSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const statNumbers = sectionRef.current?.querySelectorAll<HTMLElement>(".stat-number");
            statNumbers?.forEach((el) => {
              const target = parseInt(el.getAttribute("data-count") || "0", 10);
              const suffix = el.getAttribute("data-suffix") || "";
              let current = 0;
              const step = Math.max(1, Math.ceil(target / 40));
              const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                el.innerText = `${current}${suffix}`;
              }, 30);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="story grain" id="story" ref={sectionRef}>
      <div className="wrap">
        <div className="story-grid">
          {/* Sticky Coach Poster Card */}
          <div className="story-figure rv">
            <div className="story-figure-img-wrap">
              <img
                src="assets/images/nandhan-r-founder.jpg"
                alt="Nandhan R - Head Coach & Founder of Fitness Pluse 9"
                loading="lazy"
              />
              <div className="story-figure-badge">
                <span className="gold-dot"></span>
                <span>Head Coach & Founder</span>
              </div>
            </div>
            <figcaption>
              <div>
                <div className="coach-title">NANDHAN R</div>
                <div className="coach-sub">Head Coach & Founder, F9</div>
              </div>
              <a href="#enquire" className="btn small" style={{ padding: "9px 16px" }}>
                Mentorship
              </a>
            </figcaption>
          </div>

          {/* Coach Philosophy & Content */}
          <div className="story-content rv rv-delay-1">
            <div className="eyebrow">Head Coach & Founder</div>
            <h2>MEET COACH <em>NANDHAN R</em></h2>

            <p className="story-lead">
              &ldquo;Aesthetic development isn&apos;t about shortcuts or luck. It&apos;s built on <span>relentless discipline, smart biomechanics</span>, and unstoppable drive.&rdquo;
            </p>

            <div className="story-body">
              <p>
                I founded <b>Fitness Pluse 9</b> with a singular mission: to cut through the industry noise, cookie-cutter plans, and crash diets by delivering a truly personalized, science-based coaching system.
              </p>
              <p>
                Having spent years mastering physique development, progressive overload, and metabolic adaptation, I work 1-on-1 with dedicated clients to build aesthetic, strong, and injury-free physiques that they are proud of every single day.
              </p>
            </div>

            <div className="story-quote">
              <p>&ldquo;Discipline is choosing between what you want now and what you want most.&rdquo;</p>
              <cite>— NANDHAN R (HEAD COACH & FOUNDER)</cite>
            </div>

            {/* Stats Counter Row */}
            <div className="stats-counter-grid">
              <div className="stat-box">
                <span className="stat-number" data-count="100" data-suffix="%">100%</span>
                <span className="stat-label">Tailored Protocols</span>
              </div>
              <div className="stat-box">
                <span className="stat-number" data-count="24" data-suffix="/7">24/7</span>
                <span className="stat-label">Direct Coach Access</span>
              </div>
              <div className="stat-box">
                <span className="stat-number" data-count="9" data-suffix=" Pillars">9 Pillars</span>
                <span className="stat-label">Transformation System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}