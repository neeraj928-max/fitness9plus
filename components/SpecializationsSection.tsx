"use client";

import { useRef, useState, useEffect } from "react";
import {
  Dumbbell,
  Flame,
  BicepsFlexed,
  Activity,
  Zap,
  Compass,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface Discipline {
  id: string;
  num: string;
  title: string;
  badge: string;
  icon: typeof Dumbbell;
  description: string;
  highlights: string[];
  bestFor: string;
  goalValue: string;
}

const disciplines: Discipline[] = [
  {
    id: "strength-training",
    num: "01",
    title: "STRENGTH TRAINING",
    badge: "MAX POWER & FORCE",
    icon: Dumbbell,
    description:
      "Heavy compound biomechanics, central nervous system adaptation, and periodized progressive overload designed to build dense, unbreakable real-world strength.",
    highlights: [
      "Periodized Compound Overload (Squat, Bench, Deadlift)",
      "Neuromuscular Recruitment & Peak Force Generation",
      "Tendon, Ligament & Skeletal Density Reinforcement",
    ],
    bestFor: "Raw Power & Dense Bone Structure",
    goalValue: "Strength Training",
  },
  {
    id: "fat-loss",
    num: "02",
    title: "FAT LOSS PROGRAM",
    badge: "METABOLIC SHRED",
    icon: Flame,
    description:
      "Science-backed calorie partitioning, metabolic resistance circuits, and steady-state conditioning to incinerate stubborn adipose while preserving lean muscle.",
    highlights: [
      "Precision Calorie Deficit & Macro Partitioning",
      "Lean Muscle Retention During Thermogenesis",
      "Stubborn Adipose & Visceral Fat Oxidation",
    ],
    bestFor: "Rapid Fat Reduction & Razor Definition",
    goalValue: "Fat Loss Program",
  },
  {
    id: "muscle-building",
    num: "03",
    title: "MUSCLE BUILDING",
    badge: "HYPERTROPHY ARCHITECTURE",
    icon: BicepsFlexed,
    description:
      "High mechanical tension, targeted metabolic stress, and scientific muscle fiber recruitment tailored to your biomechanics for maximum aesthetic hypertrophy.",
    highlights: [
      "Precision Range of Motion & Peak Contraction Tension",
      "Hypertrophy Volume & Muscle Split Calibration",
      "Mind-Muscle Neurological Fiber Recruitment",
    ],
    bestFor: "Aesthetic Hypertrophy & Muscular Symmetry",
    goalValue: "Muscle Building",
  },
  {
    id: "functional-training",
    num: "04",
    title: "FUNCTIONAL TRAINING",
    badge: "ATHLETIC PERFORMANCE",
    icon: Activity,
    description:
      "Multi-planar movement patterns, stability drills, and kinetic chain integration to build a body that looks elite and performs effortlessly in everyday life.",
    highlights: [
      "Multi-Planar Movement & Rotational Torque",
      "Unilateral Balance & Core Stabilization",
      "Real-World Kinetic Chain Durability",
    ],
    bestFor: "Agility, Real-World Athleticism & Stamina",
    goalValue: "Functional Training",
  },
  {
    id: "hit-conditioning",
    num: "05",
    title: "HIT & CONDITIONING",
    badge: "MAX VO2 & ENDURANCE",
    icon: Zap,
    description:
      "High-intensity interval surges and heart-rate zone conditioning engineered to elevate VO2 max, burn high caloric volume, and forge unstoppable stamina.",
    highlights: [
      "Explosive Anaerobic Work Capacity Bursts",
      "Elevated Post-Exercise Oxygen Consumption (EPOC)",
      "Cardiovascular Stamina & Heart Health Optimization",
    ],
    bestFor: "Explosive Energy & Cardiovascular Endurance",
    goalValue: "HIT & Conditioning",
  },
  {
    id: "mobility-flexibility",
    num: "06",
    title: "MOBILITY & FLEXIBILITY",
    badge: "JOINT LONGEVITY",
    icon: Compass,
    description:
      "Active range of motion protocols, deep fascial release, and dynamic stretching to eliminate chronic stiffness, expand movement freedom, and bulletproof against injury.",
    highlights: [
      "Active End-Range Joint Expansion Protocols",
      "Thoracic Spine & Hip Capsule Decompression",
      "Long-Term Injury Resistance & Faster Recovery",
    ],
    bestFor: "Pain-Free Movement & Lifelong Joint Health",
    goalValue: "Mobility & Flexibility",
  },
  {
    id: "core-posture",
    num: "07",
    title: "CORE STRENGTH & POSTURE CORRECTION",
    badge: "STRUCTURAL REALIGNMENT",
    icon: ShieldCheck,
    description:
      "Targeted lumbo-pelvic stabilization, anterior pelvic tilt reversal, and spinal erector reinforcement to correct desk posture and sculpt an iron core.",
    highlights: [
      "Deep Transverse Abdominis & Pelvic Stability",
      "Anterior Pelvic Tilt & Rounded Shoulder Correction",
      "Spinal Decompression & Chronic Back Fatigue Relief",
    ],
    bestFor: "Iron Core & Upright Confident Posture",
    goalValue: "Core Strength & Posture Correction",
  },
];

export default function SpecializationsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);

    const cardWidth = el.querySelector(".discipline-card")?.clientWidth || 360;
    const gap = 24;
    const current = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(current, 0), disciplines.length - 1));
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const card = el.querySelector(".discipline-card") as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 24 : 380;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".discipline-card");
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const handleSelectDiscipline = (goalVal: string) => {
    const goalSelect = document.getElementById("app-goal") as HTMLSelectElement | null;
    if (goalSelect) {
      goalSelect.value = goalVal;
    }
    const enquireEl = document.getElementById("enquire");
    if (enquireEl) {
      enquireEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="disciplines-section grain" id="disciplines">
      <div className="wrap">
        {/* Slide Header */}
        <div className="disciplines-head rv">
          <div className="disciplines-head-left">
            <div className="eyebrow">Targeted Programming Suite</div>
            <h2>
              TRAINING <em>SPECIALIZATIONS</em>
            </h2>
            <p className="sub">
              Every physique requires precision targeting. Choose a primary discipline or integrate multiple programs into your bespoke 1:1 or partner protocol.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="disciplines-nav-controls">
            <div className="disciplines-counter">
              <span className="current">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="sep">/</span>
              <span className="total">{String(disciplines.length).padStart(2, "0")}</span>
            </div>

            <div className="disciplines-arrows">
              <button
                type="button"
                className={`discipline-arrow-btn ${!canScrollLeft ? "disabled" : ""}`}
                onClick={() => scroll("left")}
                aria-label="Previous specialization"
                disabled={!canScrollLeft}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className={`discipline-arrow-btn ${!canScrollRight ? "disabled" : ""}`}
                onClick={() => scroll("right")}
                aria-label="Next specialization"
                disabled={!canScrollRight}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Slider Track */}
        <div className="disciplines-slider-wrap rv rv-delay-1">
          <div className="disciplines-slider" ref={sliderRef}>
            {disciplines.map((d, idx) => {
              const IconComp = d.icon;
              return (
                <div
                  key={d.id}
                  className={`discipline-card ${idx === activeIndex ? "is-focused" : ""}`}
                >
                  <div className="discipline-card-header">
                    <span className="discipline-num">{d.num}</span>
                    <div className="discipline-icon-wrap">
                      <IconComp size={26} strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className="discipline-badge">{d.badge}</div>

                  <h3 className="discipline-title">{d.title}</h3>

                  <p className="discipline-desc">{d.description}</p>

                  <div className="discipline-divider" />

                  <div className="discipline-features-title">Core Focus Areas:</div>
                  <ul className="discipline-features">
                    {d.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="check">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="discipline-footer">
                    <div className="discipline-best-for">
                      <span className="label">Focus:</span> {d.bestFor}
                    </div>

                    <button
                      type="button"
                      className="discipline-select-btn"
                      onClick={() => handleSelectDiscipline(d.goalValue)}
                    >
                      <span>Apply For This Discipline</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Indicator Dots */}
        <div className="disciplines-dots">
          {disciplines.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`disciplines-dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
