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
              <li><a href="#packages">1:1 Personal Coaching</a></li>
              <li><a href="#packages">Couple Training</a></li>
              <li><a href="#packages">Fat Shred Protocol</a></li>
              <li><a href="#calculator">Macro Assessment</a></li>
              <li><a href="#faq">Client FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <a href="https://wa.me/919686802995" target="_blank" rel="noopener noreferrer">
                  <span className="footer-contact-icon">💬</span>
                  <span>+91 96868 02995</span>
                </a>
              </li>
              <li className="footer-contact-item">
                <a href="tel:9916948899">
                  <span className="footer-contact-icon">📞</span>
                  <span>+91 99169 48899</span>
                </a>
              </li>
              <li className="footer-contact-item">
                <a href="https://instagram.com/fitness_plus9" target="_blank" rel="noopener noreferrer">
                  <span className="footer-contact-icon">📸</span>
                  <span>@fitness_plus9</span>
                </a>
              </li>
              <li className="footer-contact-item">
                <a href="mailto:fitnesspluse9@gmail.com">
                  <span className="footer-contact-icon">✉️</span>
                  <span>fitnesspluse9@gmail.com</span>
                </a>
              </li>
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