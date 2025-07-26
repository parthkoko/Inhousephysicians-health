import React from "react";
// import "./AbdominalPain.css";

const AbdominalPain = () => {
  return (
    <div className="abdominal-main">
      <div className="abdominal-container">
        <section className="intro-section">
          <h1>Abdominal Pain</h1>
          <p className="subtitle">Upper Abdominal Pain (above the belly button)</p>
          <p>
            For a healthy traveler, the most common causes of upper abdominal pain are
            acid reflux, gastritis, or overeating.
          </p>
          <p>
            For these conditions consider taking{" "}
            <span className="highlight">Famotidine (Brand Name Pepcid)</span> or{" "}
            <span className="highlight">Omeprazole (Brand Name Prilosec)</span>.
          </p>
        </section>

        <section className="compare-section">
          <h2>Heartburn vs. Heart Attack</h2>
          <p>
            <strong>Heartburn</strong> (or <strong>acid reflux</strong>) can sometimes get confused with a heart attack and angina.
            Below will help you tell the difference. Always seek emergency care if unsure.
          </p>

          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Acid Reflux (GERD)</th>
                  <th>Heart Attack / Angina</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Location</td>
                  <td>Center of chest, behind breastbone</td>
                  <td>Chest (center or left), may radiate</td>
                </tr>
                <tr>
                  <td>Pain Type</td>
                  <td>Burning sensation</td>
                  <td>Pressure, squeezing, tightness</td>
                </tr>
                <tr>
                  <td>Triggers</td>
                  <td>After eating, lying down, spicy/fatty food</td>
                  <td>Physical exertion, emotional stress</td>
                </tr>
                <tr>
                  <td>Relief</td>
                  <td>Antacids, sitting up</td>
                  <td>Rest, nitroglycerin</td>
                </tr>
                <tr>
                  <td>Symptoms</td>
                  <td>Sour taste, bloating</td>
                  <td>Shortness of breath, sweating</td>
                </tr>
                <tr>
                  <td>Radiation</td>
                  <td>Occasionally to throat</td>
                  <td>Arms, shoulder, jaw</td>
                </tr>
                <tr>
                  <td>Risk Factors</td>
                  <td>Obesity, smoking, late night meals</td>
                  <td>Heart disease, high BP/cholesterol</td>
                </tr>
                <tr>
                  <td>With Activity</td>
                  <td>Worse after meals or lying down</td>
                  <td>Worse with exertion, better with rest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lower-section">
          <h2>Lower Abdominal Pain (below the belly button)</h2>
          <p>Common causes: constipation, bloating, diarrhea, UTIs, gynecologic conditions (women).</p>

          <div className="condition-group">
            <h3>Constipation</h3>
            <ul>
              <li>Increase dietary fiber</li>
              <li><strong>Docusate (Colace®)</strong>: 100–300 mg by mouth each day</li>
              <li><strong>Senna (Senokot®)</strong>: 1–2 tablets daily</li>
              <li><strong>MiraLAX</strong>: 17gm powder in water/juice daily</li>
            </ul>
          </div>

          <div className="condition-group">
            <h3>Diarrhea</h3>
            <p>Often caused by viral/bacterial infections or food poisoning.</p>
          </div>

          <div className="condition-group">
            <h3>Urinary Symptoms</h3>
            <h4>Urinary Tract Infection</h4>
            <p>If frequent urination + burning pain, likely UTI. Treat with:</p>
            <ul>
              <li><strong>Cephalexin 500mg (Keflex®)</strong>: 2x daily for 5–7 days</li>
              <li><strong>Macrobid®</strong>: 100mg twice a day for 5 days</li>
              <li><strong>Bactrim®</strong>: 1 tab twice a day for 5 days</li>
            </ul>
          </div>

          <div className="condition-group">
            <h3>Kidney Infection</h3>
            <p>Lower back pain, fever, nausea. Seek <strong>immediate medical attention</strong>.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AbdominalPain;
