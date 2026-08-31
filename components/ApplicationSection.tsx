"use client";

import { useState } from "react";

export default function ApplicationSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("Body Recomposition");
  const [program, setProgram] = useState("24-Week Complete Aesthetic Recomp");
  const [experience, setExperience] = useState("Intermediate (1-3 Years)");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `Hi Coach Nandhan! I have just submitted my application for Fitness Pluse 9.\n\n` +
      `👤 Name: ${name}\n` +
      `📱 WhatsApp: ${phone}\n` +
      `📧 Email: ${email}\n` +
      `🎯 Goal: ${goal}\n` +
      `🏆 Program: ${program}\n` +
      `🏋️ Experience: ${experience}\n` +
      `📝 Notes: ${notes || "None"}\n\n` +
      `I am ready to build my ultimate physique!`
    );

    setWhatsappUrl(`https://wa.me/?text=${waText}`);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 600);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
  };

  return (
    <>
      <section className="enquire grain" id="enquire">
        <div className="wrap">
          <div className="enquire-grid">
            {/* Left Info Column */}
            <div className="enquire-info rv">
              <div className="eyebrow">Apply For System 9</div>
              <h2>START YOUR <em>TRANSFORMATION</em></h2>
              <p className="sub" style={{ marginTop: "16px" }}>
                Complete the application below to secure your private coaching spot with Head Coach Nandhan R. Applications are reviewed within 24 hours.
              </p>

              <div className="enquire-perks">
                <div className="enquire-perk-item">
                  <span className="perk-icon">⚡</span>
                  <div>
                    <h4>100% INDIVIDUALIZED DESIGN</h4>
                    <p>No templates. Every single rep and calorie is tailored to your body.</p>
                  </div>
                </div>

                <div className="enquire-perk-item">
                  <span className="perk-icon">📱</span>
                  <div>
                    <h4>DIRECT WHATSAPP LINE</h4>
                    <p>Direct communication with Coach Nandhan throughout your entire journey.</p>
                  </div>
                </div>

                <div className="enquire-perk-item">
                  <span className="perk-icon">🎯</span>
                  <div>
                    <h4>WEEKLY METRIC AUDITS</h4>
                    <p>Continuous biofeedback reviews to eliminate all plateaus.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="enquire-form-card rv rv-delay-1">
              <form onSubmit={handleSubmit} id="coaching-app-form">
                <div className="form-title">COACHING APPLICATION</div>
                <p className="form-sub">Fill in your details accurately to get started.</p>

                <div className="form-grid">
                  <div className="input-group">
                    <label htmlFor="app-name">Full Name *</label>
                    <input
                      type="text"
                      id="app-name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="app-phone">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      id="app-phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="app-email">Email Address *</label>
                  <input
                    type="email"
                    id="app-email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-grid">
                  <div className="input-group">
                    <label htmlFor="app-goal">Primary Goal</label>
                    <select
                      id="app-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                    >
                      <option value="Body Recomposition">Body Recomposition</option>
                      <option value="Aggressive Fat Shred">Aggressive Fat Shred</option>
                      <option value="Hypertrophy Muscle Gain">Hypertrophy Muscle Gain</option>
                      <option value="Lifestyle Strength & Energy">Lifestyle Strength & Energy</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="app-program">Selected Protocol Tier</label>
                    <select
                      id="app-program"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                    >
                      <option value="12-Week Intensive Shred">12-Week Intensive Shred</option>
                      <option value="24-Week Complete Aesthetic Recomp">24-Week Complete Aesthetic Recomp (Signature)</option>
                      <option value="VIP 1-on-1 Executive Mentorship">VIP 1-on-1 Executive Mentorship</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="app-exp">Training Experience</label>
                  <select
                    id="app-exp"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value="Complete Beginner (0-6 Months)">Complete Beginner (0-6 Months)</option>
                    <option value="Intermediate (1-3 Years)">Intermediate (1-3 Years)</option>
                    <option value="Advanced (3+ Years Consistent)">Advanced (3+ Years Consistent)</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="app-notes">Current Weight, Height & Transformation Goals</label>
                  <textarea
                    id="app-notes"
                    rows={3}
                    placeholder="Tell coach about your target weight, current challenges, or any injuries..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn full"
                  disabled={isSubmitting}
                  style={{ marginTop: "12px" }}
                >
                  <span>{isSubmitting ? "Securing Your Spot..." : "Submit Coaching Application"}</span>
                  <span className="arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="modal active" id="success-modal">
          <div className="modal-backdrop" onClick={handleCloseModal}></div>
          <div className="modal-card">
            <button className="modal-close" onClick={handleCloseModal} aria-label="Close Modal">
              ✕
            </button>
            <div className="modal-icon">🏆</div>
            <h3>APPLICATION RECEIVED</h3>
            <p className="modal-text">
              Thank you, <b>{name}</b>! Coach Nandhan R has received your application for the <b>{program}</b>.
            </p>
            <p className="modal-sub">
              To speed up your onboarding review, tap the WhatsApp Fast-Track button below to send your profile directly to Coach Nandhan&apos;s priority line:
            </p>
            <div className="modal-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn full"
                id="modal-whatsapp-cta"
              >
                <span>Fast-Track on WhatsApp 📱</span>
              </a>
              <button
                type="button"
                className="btn full ghost"
                onClick={handleCloseModal}
                style={{ marginTop: "10px" }}
              >
                <span>Close Window</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}