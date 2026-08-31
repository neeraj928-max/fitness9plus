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

  if (form && modal) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
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
