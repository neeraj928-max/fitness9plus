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
    const validWeight = Math.max(30, weight || 70);
    const validHeight = Math.max(100, height || 170);
    const validAge = Math.max(15, age || 25);

    // Mifflin-St Jeor Formula
    let bmr = 10 * validWeight + 6.25 * validHeight - 5 * validAge;
    bmr += gender === "male" ? 5 : -161;

    const tdee = bmr * (activity || 1.55);
    let targetCalories = tdee;
    let takeawayText = "";

    if (goal === "shred") {
      targetCalories = tdee * 0.8; // 20% deficit
      takeawayText = "Aggressive fat reduction deficit with elevated protein to preserve lean muscle tissue.";
    } else if (goal === "bulk") {
      targetCalories = tdee * 1.12; // 12% surplus
      takeawayText = "Lean hypertrophy surplus optimized for maximum muscle protein synthesis with minimal fat gain.";
    } else {
      // Recomp
      targetCalories = tdee * 0.93; // 7% slight deficit
      takeawayText = "Body recomposition zone engineered to burn adipose fat while building lean dense muscle.";
    }

    // Protein: 2.2g per kg bodyweight (4 kcal/g)
    const proteinGrams = Math.round(validWeight * 2.2);
    const proteinCalories = proteinGrams * 4;

    // Fats: 0.85g per kg (9 kcal/g)
    const fatGrams = Math.round(validWeight * 0.85);
    const fatCalories = fatGrams * 9;

    // Remaining calories for Carbs (4 kcal/g)
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
                  max={80}
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
                  max={200}
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
              </div>

              <div className="input-group">
                <label htmlFor="calc-height">Height (CM)</label>
                <input
                  type="number"
                  id="calc-height"
                  value={height}
                  min={120}
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
                <option value={1.9}>Athletic Elite (Double Sessions / Heavy Labor)</option>
              </select>
            </div>

            <div className="input-group" style={{ marginTop: "16px" }}>
              <label>Primary Transformation Objective</label>
              <div className="goal-options">
                <label className={`goal-btn ${goal === "shred" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="calc-goal"
                    value="shred"
                    checked={goal === "shred"}
                    onChange={() => setGoal("shred")}
                  />
                  <span>🔥 Fat Shred</span>
                </label>
                <label className={`goal-btn ${goal === "recomp" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="calc-goal"
                    value="recomp"
                    checked={goal === "recomp"}
                    onChange={() => setGoal("recomp")}
                  />
                  <span>⚡ Body Recomp</span>
                </label>
                <label className={`goal-btn ${goal === "bulk" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="calc-goal"
                    value="bulk"
                    checked={goal === "bulk"}
                    onChange={() => setGoal("bulk")}
                  />
                  <span>💪 Hypertrophy Bulk</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Output Side */}
          <div className="calc-result-side">
            <div className="result-header">
              <span className="badge-gold">ESTIMATED F9 BLUEPRINT</span>
              <span className="result-model">Mifflin-St Jeor Standard</span>
            </div>

            <div className="calorie-display">
              <div className="cal-num">{results.calories.toLocaleString()}</div>
              <div className="cal-label">DAILY CALORIE TARGET (KCAL)</div>
            </div>

            <div className="macros-breakdown">
              <div className="macro-chip protein">
                <div className="macro-title">PROTEIN</div>
                <div className="macro-gram">{results.protein}g</div>
                <div className="macro-pct">High Muscle Sparing</div>
              </div>
              <div className="macro-chip carbs">
                <div className="macro-title">CARBS</div>
                <div className="macro-gram">{results.carbs}g</div>
                <div className="macro-pct">Glycogen & Performance</div>
              </div>
              <div className="macro-chip fats">
                <div className="macro-title">FATS</div>
                <div className="macro-gram">{results.fats}g</div>
                <div className="macro-pct">Hormonal Health</div>
              </div>
            </div>

            <div className="calc-takeaway">
              <p><b>F9 Protocol Target:</b> {results.takeaway}</p>
            </div>

            <div className="calc-actions">
              <a href="#enquire" className="btn full">
                <span>Apply With These Targets</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}