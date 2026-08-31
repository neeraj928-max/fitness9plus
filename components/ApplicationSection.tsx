"use client";

import { useState } from "react";

export default function ApplicationSection() {
  const [showModal, setShowModal] = useState(false);
  const [waLink, setWaLink] = useState("https://wa.me/");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = (form.querySelector("#app-name") as HTMLInputElement)?.value || "";
    const phoneInput = (form.querySelector("#app-phone") as HTMLInputElement)?.value || "";
    const emailInput = (form.querySelector("#app-email") as HTMLInputElement)?.value || "";
    const programInput = (form.querySelector("#app-program") as HTMLSelectElement)?.value || "";
    const goalInput = (form.querySelector("#app-goal") as HTMLSelectElement)?.value || "";
    const expInput = (form.querySelector("#app-experience") as HTMLSelectElement)?.value || "";
    const notesInput = (form.querySelector("#app-notes") as HTMLTextAreaElement)?.value || "";

    const text = encodeURIComponent(
      `Hi Coach Nandhan R! I have submitted my F9 Coaching Application.\n\n` +
      `*Name:* ${nameInput}\n` +
      `*Phone:* ${phoneInput}\n` +
      `*Email:* ${emailInput}\n` +
      `*Protocol:* ${programInput}\n` +
      `*Goal:* ${goalInput}\n` +
      `*Experience:* ${expInput}\n` +
      `*Notes:* ${notesInput || "N/A"}`
    );

    setWaLink(`https://wa.me/?text=${text}`);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <section className="enquiry grain" id="enquire">
        <div className="wrap">
          <div className="enquiry-card rv">
            <div className="eyebrow center" style={{ marginBottom: "12px" }}>
              Step Up To The Next Level
            </div>
            <h2>APPLY FOR <em>F9 COACHING</em></h2>
            <p className="sub">
              Fill out the application below to secure your 1-on-1 consultation and transformation roadmap. Spots are strictly limited to ensure high-touch attention.
            </p>

            <form className="app-form" id="coaching-app-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="app-name">Full Name *</label>
                  <input type="text" id="app-name" placeholder="e.g. John Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="app-phone">WhatsApp / Phone Number *</label>
                  <input type="tel" id="app-phone" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="app-email">Email Address *</label>
                  <input type="email" id="app-email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="app-program">Selected Coaching Protocol *</label>
                  <select id="app-program" required defaultValue="24-Week Complete Aesthetic Recomp">
                    <option value="24-Week Complete Aesthetic Recomp">
                      24-Week Complete Recomp (Recommended)
                    </option>
                    <option value="12-Week Intensive Shred">12-Week Intensive Shred</option>
                    <option value="VIP 1-on-1 Executive Mentorship">
                      VIP 1-on-1 Executive Mentorship
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="app-goal">Primary Fitness Goal *</label>
                  <select id="app-goal" required defaultValue="Body Recomposition (Lose Fat + Build Muscle)">
                    <option value="Body Recomposition (Lose Fat + Build Muscle)">
                      Body Recomposition (Lose Fat + Build Muscle)
                    </option>
                    <option value="Aggressive Fat Shred & Definition">
                      Aggressive Fat Shred & Definition
                    </option>
                    <option value="Lean Muscle Hypertrophy & Bulk">
                      Lean Muscle Hypertrophy & Bulk
                    </option>
                    <option value="Strength & Athletic Performance">
                      Strength & Athletic Performance
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="app-experience">Lifting Experience *</label>
                  <select id="app-experience" required defaultValue="Intermediate (1-3 years)">
                    <option value="Intermediate (1-3 years)">Intermediate (1-3 years)</option>
                    <option value="Beginner (0-1 year)">Beginner (0-1 year)</option>
                    <option value="Advanced (3+ years)">Advanced (3+ years)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="app-notes">Tell Us About Your Goals & Past Obstacles</label>
                <textarea
                  id="app-notes"
                  placeholder="What has held you back previously? What are your target goals over the next 6-12 months?"
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn"
                  style={{ width: "100%", maxWidth: "380px", padding: "18px 30px" }}
                >
                  <span>Submit Coaching Application</span>
                  <span className="arrow">→</span>
                </button>
                <div className="form-guarantee">
                  <span>🔒 100% Confidential • Fast Direct WhatsApp Response</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Application Success Modal */}
      <div className={`modal-backdrop ${showModal ? "active" : ""}`} id="success-modal">
        <div className="modal-box">
          <button
            className="modal-close-btn"
            id="modal-close-btn"
            aria-label="Close modal"
            onClick={closeModal}
          >
            ×
          </button>
          <div className="modal-icon">✓</div>
          <h3>APPLICATION RECEIVED</h3>
          <p>
            Thank you! Your coaching application for <b>Fitness Pluse 9</b> has been received. Coach will review your metrics and message you directly via WhatsApp within 24 hours.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href={waLink}
              id="modal-whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ width: "100%" }}
            >
              <span>Instant WhatsApp Fast-Track ⚡</span>
            </a>
            <button
              className="btn ghost"
              id="modal-ok-btn"
              style={{ width: "100%" }}
              onClick={closeModal}
            >
              <span>Done</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}