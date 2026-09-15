document.addEventListener("DOMContentLoaded", () => {
  // 1. Reveal on scroll
  const rvElements = document.querySelectorAll(".rv");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    },
    { threshold: 0.1 }
  );
  rvElements.forEach((el) => observer.observe(el));

  // 2. Hero play
  const heroEl = document.querySelector(".hero");
  if (heroEl) {
    setTimeout(() => heroEl.classList.add("play"), 100);
  }

  // 3. Navbar solid on scroll
  const header = document.querySelector("#hd");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("solid");
    } else {
      header?.classList.remove("solid");
    }
  });

  // 4. Mobile menu toggle
  const mobileToggle = document.querySelector("#mobile-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

  // 5. Stat Counter Animation
  const storySection = document.querySelector("#story");
  let animated = false;
  if (storySection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const statNumbers = storySection.querySelectorAll(".stat-number");
          statNumbers.forEach((el) => {
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
    }, { threshold: 0.2 });
    counterObserver.observe(storySection);
  }

  // 6. Macro Calculator Engine
  const genderEl = document.getElementById("calc-gender");
  const ageEl = document.getElementById("calc-age");
  const weightEl = document.getElementById("calc-weight");
  const heightEl = document.getElementById("calc-height");
  const activityEl = document.getElementById("calc-activity");
  const resCalories = document.getElementById("res-calories");
  const resProtein = document.getElementById("res-protein");
  const resCarbs = document.getElementById("res-carbs");
  const resFats = document.getElementById("res-fats");
  const resTakeaway = document.getElementById("res-takeaway");

  function calculateMacros() {
    if (!genderEl || !ageEl || !weightEl || !heightEl || !activityEl) return;
    const gender = genderEl.value;
    const age = parseInt(ageEl.value, 10) || 26;
    const weight = parseInt(weightEl.value, 10) || 78;
    const height = parseInt(heightEl.value, 10) || 178;
    const activity = parseFloat(activityEl.value) || 1.55;
    const goalRadio = document.querySelector('input[name="calc-goal"]:checked');
    const goal = goalRadio ? goalRadio.value : "recomp";

    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr += gender === "male" ? 5 : -161;
    const tdee = bmr * activity;

    let targetCalories = tdee;
    let takeawayText = "";
    if (goal === "shred") {
      targetCalories = tdee * 0.8;
      takeawayText = "Aggressive fat reduction deficit zone engineered to incinerate stubborn body fat while preserving lean muscle.";
    } else if (goal === "bulk") {
      targetCalories = tdee * 1.12;
      takeawayText = "Lean hypertrophy surplus zone engineered to maximize muscle protein synthesis with minimal fat gain.";
    } else {
      targetCalories = tdee * 0.9;
      takeawayText = "Body recomposition zone engineered to burn adipose fat while building lean dense muscle tissue.";
    }

    const pGrams = Math.round(weight * 2.2);
    const fGrams = Math.round(weight * 0.85);
    const cGrams = Math.round(Math.max(0, targetCalories - (pGrams * 4 + fGrams * 9)) / 4);

    if (resCalories) resCalories.innerHTML = `${Math.round(targetCalories).toLocaleString()} <span>KCAL / DAY</span>`;
    if (resProtein) resProtein.innerText = `${pGrams}g`;
    if (resCarbs) resCarbs.innerText = `${cGrams}g`;
    if (resFats) resFats.innerText = `${fGrams}g`;
    if (resTakeaway) resTakeaway.innerHTML = `<p><b>F9 Protocol Target:</b> ${takeawayText}</p>`;
  }

  [genderEl, ageEl, weightEl, heightEl, activityEl].forEach((el) => {
    el?.addEventListener("change", calculateMacros);
    el?.addEventListener("input", calculateMacros);
  });
  document.querySelectorAll('input[name="calc-goal"]').forEach((el) => {
    el.addEventListener("change", calculateMacros);
  });
  calculateMacros();

  // 7. Tier Selection Buttons
  document.querySelectorAll(".tier-select-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tier = btn.getAttribute("data-tier");
      const progSelect = document.getElementById("app-program");
      if (progSelect && tier) {
        progSelect.value = tier;
      }
    });
  });

  // 7b. Disciplines Slider Navigation & Selection
  const discTrack = document.getElementById("disciplines-track");
  const discPrev = document.getElementById("disc-prev-btn");
  const discNext = document.getElementById("disc-next-btn");
  const discCounter = document.getElementById("disc-counter-current");
  const discDots = document.querySelectorAll("#disc-dots .disciplines-dot");
  const discCards = document.querySelectorAll("#disciplines-track .discipline-card");

  if (discTrack) {
    const updateDiscState = () => {
      const scrollLeft = discTrack.scrollLeft;
      const cardWidth = discCards[0]?.offsetWidth || 380;
      const gap = 24;
      const activeIdx = Math.min(Math.max(Math.round(scrollLeft / (cardWidth + gap)), 0), discCards.length - 1);

      if (discCounter) {
        discCounter.textContent = String(activeIdx + 1).padStart(2, "0");
      }

      if (discPrev) {
        if (scrollLeft <= 15) {
          discPrev.classList.add("disabled");
        } else {
          discPrev.classList.remove("disabled");
        }
      }

      if (discNext) {
        if (scrollLeft >= discTrack.scrollWidth - discTrack.clientWidth - 15) {
          discNext.classList.add("disabled");
        } else {
          discNext.classList.remove("disabled");
        }
      }

      discDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === activeIdx);
      });

      discCards.forEach((card, i) => {
        card.classList.toggle("is-focused", i === activeIdx);
      });
    };

    discTrack.addEventListener("scroll", updateDiscState, { passive: true });

    if (discPrev) {
      discPrev.addEventListener("click", () => {
        const cardWidth = discCards[0]?.offsetWidth || 380;
        discTrack.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
      });
    }

    if (discNext) {
      discNext.addEventListener("click", () => {
        const cardWidth = discCards[0]?.offsetWidth || 380;
        discTrack.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
      });
    }

    discDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = parseInt(dot.getAttribute("data-index") || "0", 10);
        if (discCards[idx]) {
          discCards[idx].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        }
      });
    });

    updateDiscState();
  }

  // Discipline Apply Buttons
  document.querySelectorAll(".discipline-select-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const goal = btn.getAttribute("data-goal");
      const goalSelect = document.getElementById("app-goal");
      if (goalSelect && goal) {
        goalSelect.value = goal;
      }
      const enquireEl = document.getElementById("enquire");
      if (enquireEl) {
        enquireEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 8. FAQ Accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (q && a) {
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((other) => {
          other.classList.remove("open");
          const otherA = other.querySelector(".faq-a");
          if (otherA) otherA.style.maxHeight = "0px";
        });
        if (!isOpen) {
          item.classList.add("open");
          a.style.maxHeight = "500px";
        }
      });
    }
  });

  // 9. Application Form & Modal
  const form = document.getElementById("coaching-app-form");
  const modal = document.getElementById("success-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOkBtn = document.getElementById("modal-ok-btn");
  const modalWaCta = document.getElementById("modal-whatsapp-cta");

  if (form && modal) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : "";

      if (submitBtn) {
        submitBtn.setAttribute("disabled", "true");
        submitBtn.style.opacity = "0.7";
        submitBtn.innerHTML = "<span>Saving Application...</span> <span class='arrow'>⏳</span>";
      }

      const nameInput = document.getElementById("app-name")?.value?.trim() || "";
      const phoneInput = document.getElementById("app-phone")?.value?.trim() || "";
      const emailInput = document.getElementById("app-email")?.value?.trim() || "";
      const programInput = document.getElementById("app-program")?.value || "";
      const goalInput = document.getElementById("app-goal")?.value || "";
      const expInput = document.getElementById("app-experience")?.value || "";
      const notesInput = document.getElementById("app-notes")?.value?.trim() || "";

      const payload = {
        full_name: nameInput,
        phone: phoneInput,
        email: emailInput,
        program: programInput,
        goal: goalInput,
        experience: expInput,
        notes: notesInput
      };

      let isSaved = false;
      let dbErrorMsg = "";

      try {
        const res = await fetch("https://osedvqbxfznlgrftwvxa.supabase.co/rest/v1/appointments", {
          method: "POST",
          headers: {
            "apikey": "sb_publishable_VqW_nKJFmfjPI9kmoJwFZA_XLc5IgEt",
            "Authorization": "Bearer sb_publishable_VqW_nKJFmfjPI9kmoJwFZA_XLc5IgEt",
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          isSaved = true;
        } else {
          const errData = await res.json().catch(() => ({}));
          dbErrorMsg = errData.message || "Failed to save into database";
          console.warn("Supabase booking notice:", dbErrorMsg);
        }
      } catch (err) {
        console.error("Supabase booking save error:", err);
        dbErrorMsg = err.message || "Network error";
      } finally {
        if (submitBtn) {
          submitBtn.removeAttribute("disabled");
          submitBtn.style.opacity = "1";
          submitBtn.innerHTML = originalText;
        }
      }

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

      const waUrl = `https://wa.me/919686802995?text=${text}`;
      if (modalWaCta) {
        modalWaCta.href = waUrl;
      }
      try {
        window.open(waUrl, "_blank");
      } catch (err) {
        console.warn("Could not automatically open WhatsApp window:", err);
      }

      const modalHeading = modal.querySelector("h3");
      const modalDesc = modal.querySelector("p");
      const modalIcon = modal.querySelector(".modal-icon");

      if (isSaved) {
        if (modalHeading) modalHeading.textContent = "APPLICATION SAVED TO DATABASE";
        if (modalIcon) modalIcon.textContent = "✓";
        if (modalDesc) {
          modalDesc.innerHTML = "Thank you! Your appointment booking details have been securely recorded in our Supabase database for <b>Fitness Pluse 9</b>. Coach Nandhan R will review your metrics and message you directly.";
        }
      } else if (dbErrorMsg) {
        if (modalHeading) modalHeading.textContent = "APPLICATION PROCESSED";
        if (modalIcon) modalIcon.textContent = "⚠️";
        if (modalDesc) {
          modalDesc.innerHTML = `Thank you! Your application is ready for Coach Nandhan R via WhatsApp.<br><span style="display:block;margin-top:10px;padding:8px 12px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);border-radius:8px;font-size:0.85em;color:#fca5a5;text-align:left;"><b>Database Notice:</b> ${dbErrorMsg}</span>`;
        }
      }

      modal.classList.add("active");
    });
  }
  [modalCloseBtn, modalOkBtn].forEach((btn) => {
    btn?.addEventListener("click", () => {
      modal?.classList.remove("active");
    });
  });

  // 10. Back to top button
  const backBtn = document.getElementById("back-to-top");
  backBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
