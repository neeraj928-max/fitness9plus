"use client";

import { useState, useMemo } from "react";

export default function MacroCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<number>(26);
  const [weight, setWeight] = useState<number>(78);
  const [height, setHeight] = useState<number>(178);
  const [activity, setActivity] = useState<number>(1.55);
  const [goal, setGoal] = useState<"shred" | "recomp" | "bulk">("recomp");

  const results = useMemo(() => {
    const validWeight = Math.max(30, weight || 78);
    const validHeight = Math.max(100, height || 178);
    const validAge = Math.max(15, age || 26);

    let bmr = 10 * validWeight + 6.25 * validHeight - 5 * validAge;
    bmr += gender === "male" ? 5 : -161;

    const tdee = bmr * (activity || 1.55);
    let targetCalories = tdee;
    let takeawayText = "";

    if (goal === "shred") {
      targetCalories = tdee * 0.8;
      takeawayText = "Aggressive fat reduction deficit zone engineered to incinerate stubborn body fat while preserving lean muscle.";
    } else if (goal === "bulk") {
      targetCalories = tdee * 1.12;
      takeawayText = "Lean hypertrophy surplus zone engineered to maximize muscle protein synthesis with minimal fat gain.";
    } else {
      targetCalories = tdee * 0.90;
      takeawayText = "Body recomposition zone engineered to burn adipose fat while building lean dense muscle tissue.";
    }

    const proteinGrams = Math.round(validWeight * 2.2);
    const fatGrams = Math.round(validWeight * 0.85);

    const proteinCalories = proteinGrams * 4;
    const fatCalories = fatGrams * 9;
    const remainingCalories = Math.max(0, targetCalories - proteinCalories - fatCalories);
    const carbGrams = Math.round(remainingCalories / 4);

    return {
      calories: Math.round(targetCalories),
      protein: proteinGrams,
      carbs: carbGrams,
      fats: fatGrams,
      takeaway: takeawayText,
    };
  }, [gender, age, weight, height, activity, goal]);

  return (
    <section className="calc-section grain" id="calculator">
      <div className="wrap">
        <div className="section-head rv">
          <div className="eyebrow center">Interactive Assessment</div>
          <h2>ESTIMATE YOUR <em>MACRO BLUEPRINT</em></h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            Use our interactive transformation calculator to calculate your daily baseline calorie targets, protein requirements, and macronutrient distribution.
          </p>
        </div>

        <div className="calc-container rv rv-delay-1">
          {/* Input Form Side */}
          <div className="calc-form-side">
            <h3>YOUR PHYSICAL METRICS</h3>
            <p className="calc-desc">Adjust the parameters below to see your customized baseline transformation metrics.</p>

            <div className="calc-grid">
              <div className="input-group">
                <label htmlFor="calc-gender">Gender</label>
                <select
                  id="calc-gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as "male" | "female")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="calc-age">Age (Years)</label>
                <input
                  type="number"
                  id="calc-age"
                  value={age}
                  min={16}
                  max={75}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>

              <div className="input-group">
                <label htmlFor="calc-weight">Weight (KG)</label>
                <input
                  type="number"
                  id="calc-weight"
                  value={weight}
                  min={40}
                  max={180}
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
              </div>

              <div className="input-group">
                <label htmlFor="calc-height">Height (CM)</label>
                <input
                  type="number"
                  id="calc-height"
                  value={height}
                  min={130}
                  max={230}
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="calc-activity">Weekly Activity & Training Level</label>
              <select
                id="calc-activity"
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
              >
                <option value={1.2}>Sedentary (Desk Job, 0-1 Workouts/week)</option>
                <option value={1.375}>Light Activity (1-3 Gym Sessions/week)</option>
                <option value={1.55}>Moderate Activity (3-5 Lifting Sessions/week)</option>
                <option value={1.725}>Heavy Training (5-6 Hard Lifting Sessions/week)</option>
              </select>
            </div>

            <div className="input-group" style={{ marginTop: "18px" }}>
              <label>Primary Transformation Objective</label>
              <div className="goal-selector">
                <label className="goal-option">
                  <input
                    type="radio"
                    name="calc-goal"
                    value="shred"
                    checked={goal === "shred"}
                    onChange={() => setGoal("shred")}
                  />
                  <div className="goal-card-btn">
                    <span className="goal-title">Fat Shred</span>
                    <span className="goal-sub">Max Deficit & Cut</span>
                  </div>
                </label>
                <label className="goal-option">
                  <input
                    type="radio"
                    name="calc-goal"
                    value="recomp"
                    checked={goal === "recomp"}
                    onChange={() => setGoal("recomp")}
                  />
                  <div className="goal-card-btn">
                    <span className="goal-title">Lean Recomp</span>
                    <span className="goal-sub">Burn Fat & Build</span>
                  </div>
                </label>
                <label className="goal-option">
                  <input
                    type="radio"
                    name="calc-goal"
                    value="bulk"
                    checked={goal === "bulk"}
                    onChange={() => setGoal("bulk")}
                  />
                  <div className="goal-card-btn">
                    <span className="goal-title">Hypertrophy</span>
                    <span className="goal-sub">Lean Mass Surplus</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Calculated Output Side */}
          <div className="calc-results-side">
            <div>
              <div className="results-header">
                <span className="res-eyebrow">ESTIMATED DAILY CALORIES</span>
                <div className="res-main-val" id="res-calories">
                  {results.calories.toLocaleString()} <span>KCAL / DAY</span>
                </div>
              </div>

              <div className="macro-split-grid">
                <div className="macro-card protein">
                  <div className="macro-label">Target Protein</div>
                  <div className="macro-val" id="res-protein">{results.protein}g</div>
                </div>
                <div className="macro-card carbs">
                  <div className="macro-label">Target Carbs</div>
                  <div className="macro-val" id="res-carbs">{results.carbs}g</div>
                </div>
                <div className="macro-card fats">
                  <div className="macro-label">Target Fats</div>
                  <div className="macro-val" id="res-fats">{results.fats}g</div>
                </div>
              </div>

              <div className="calc-takeaway" id="res-takeaway">
                <p><b>F9 Protocol Target:</b> {results.takeaway}</p>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <a href="#enquire" className="btn" style={{ width: "100%" }}>
                <span>Get Custom Meal Plan With Coach</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}