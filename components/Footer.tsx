"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-coach-badge">
              <img
                src="assets/images/nandhan-r-founder.jpg"
                alt="Nandhan R - Head Coach & Founder"
                className="footer-coach-thumb"
              />
              <div className="footer-coach-meta">
                <span className="footer-coach-name">NANDHAN R</span>
                <span className="footer-coach-sub">Head Coach & Founder, F9</span>
              </div>
            </div>
            <p>
              <b>Fitness Pluse 9</b> — Elite online physique transformation and lifestyle coaching system. Dedicated to science, biomechanics, and discipline.
            </p>
            <div className="badge-gold">F9 SYSTEM • WORLDWIDE COACHING</div>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#problem">The Reality</a></li>
              <li><a href="#story">Meet The Coach</a></li>
              <li><a href="#system">The 4 Pillars</a></li>
              <li><a href="#calculator">Macro Engine</a></li>
              <li><a href="#packages">Coaching Protocols</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Protocols</h5>
            <ul className="footer-links">
              <li><a href="#packages">12-Week Shred</a></li>
              <li><a href="#packages">24-Week Recomp</a></li>
              <li><a href="#packages">VIP Mentorship</a></li>
              <li><a href="#calculator">Macro Assessment</a></li>
              <li><a href="#faq">Client FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="footer-links">
              <li><a href="#enquire">Direct Consultation</a></li>
              <li><a href="#enquire">WhatsApp Fast-Track</a></li>
              <li><a href="mailto:coach@fitnesspluse9.com">coach@fitnesspluse9.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Fitness Pluse 9 (F9 Coaching). All Rights Reserved. Discipline Over Motivation.
          </div>
          <button className="back-to-top-btn" id="back-to-top" onClick={scrollToTop}>
            Back To Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}