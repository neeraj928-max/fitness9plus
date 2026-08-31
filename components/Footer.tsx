import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer grain">
      <div className="wrap">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-head">
              <Image
                src="/images/f9-logo.png"
                alt="Fitness 9 Pluse"
                width={36}
                height={36}
              />
              <span className="footer-brand-title">FITNESS 9 PLUSE</span>
            </div>
            <p className="footer-tagline">
              Online lifestyle and physique transformation system founded by <b>Nandhan R</b>. Biomechanical hypertrophy, precision metabolic nutrition, and relentless 1-on-1 discipline.
            </p>

            <div className="footer-coach-badge">
              <Image
                src="/images/nandhan-r-founder.jpg"
                alt="Nandhan R"
                width={48}
                height={48}
                className="coach-avatar"
              />
              <div>
                <div className="coach-name">NANDHAN R</div>
                <div className="coach-role">Head Coach & Founder • 13 Years of Zidd</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>EXPLORE</h4>
            <ul>
              <li><a href="#hero">Overview</a></li>
              <li><a href="#problem">The Reality</a></li>
              <li><a href="#story">Meet Coach Nandhan</a></li>
              <li><a href="#system">The 4-Pillar System</a></li>
              <li><a href="#calculator">Macro Engine</a></li>
            </ul>
          </div>

          {/* Protocols */}
          <div className="footer-links-col">
            <h4>PROTOCOLS</h4>
            <ul>
              <li><a href="#packages">12-Week Intensive Shred</a></li>
              <li><a href="#packages">24-Week Aesthetic Recomp</a></li>
              <li><a href="#packages">VIP Executive Mentorship</a></li>
              <li><a href="#standards">Who We Coach</a></li>
              <li><a href="#faq">Coaching FAQ</a></li>
            </ul>
          </div>

          {/* Direct WhatsApp CTA */}
          <div className="footer-cta-col">
            <h4>GET STARTED</h4>
            <p>Ready to build the body and discipline you&apos;ve always wanted?</p>
            <a href="#enquire" className="btn small full" style={{ marginTop: "14px" }}>
              <span>Apply For Coaching</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} FITNESS 9 PLUSE (F9). All Rights Reserved. Discipline Over Motivation.
          </div>
          <div className="footer-meta">
            <span>Engineered for Maximum Hypertrophy & Longevity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}