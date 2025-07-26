import React from 'react';
// import './RashComparison.css'; // CSS in separate file

const RashComparison = () => {
  return (
    <div className="Infection-section">
      <div className="">
        <h1>Rash – Allergic Reaction or Infection?</h1>

        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Allergic Rash</th>
              <th>Infectious Rash</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Onset</td>
              <td>Sudden (within minutes to hours after exposure)</td>
              <td>Often slower (1–3 days or more after exposure)</td>
            </tr>
            <tr>
              <td>Itching</td>
              <td><span className="highlight">Very common</span> (often intense)</td>
              <td>Uncommon with bacterial, often with fungal infections</td>
            </tr>
            <tr>
              <td>Appearance</td>
              <td>Red, raised welts (hives), or dry scaly patches</td>
              <td>May have vesicles or pus</td>
            </tr>
            <tr>
              <td>Associated Symptoms</td>
              <td>Itching, swelling, no fever</td>
              <td>Fever, chills, fatigue, swollen lymph nodes</td>
            </tr>
            <tr>
              <td>Exposure History</td>
              <td>Recent new food, medication, plant, chemical, insect, detergent, metal</td>
              <td>Break in skin, wound, or abrasion</td>
            </tr>
            <tr>
              <td>Spreading</td>
              <td>May spread quickly, then fade</td>
              <td>May spread gradually, often with redness and warmth</td>
            </tr>
            <tr>
              <td>Skin Appearance</td>
              <td>Usually not painful</td>
              <td><span className="highlight">Warm, red, tender</span> if bacterial</td>
            </tr>
            <tr>
              <td>Antihistamines or hydrocortisone</td>
              <td>Often improves quickly</td>
              <td>No improvement</td>
            </tr>
          </tbody>
        </table>

        <div className="treatment">
          <p><strong>Allergic Rash</strong> – Minor rashes due to an allergic reaction take <span className="highlight">Hydrocortisone 1% cream apply 3 – 4 times a day</span> to relieve the skin itching, burning and redness of skin. For more severe allergic rashes take Prescription-only topical steroid cream. This type of steroid cream should not be used on the face or genitals.</p>

          <p><strong>Skin Infection (Cellulitis)</strong> – Cephalexin (Keflex) 500 mg every 6 hours for 7 days. If due to human/dog bite, <strong>Amoxicillin-Clavuanate (Augmentin) 875mg twice daily for 7 days.</strong></p>
        </div>

        <div className="red-flags">
          <h3>Red Flag for Infection</h3>
          <ul>
            <li>Fever</li>
            <li>Blisters or pus</li>
            <li>Spreading redness with swelling</li>
            <li>Systemic symptoms (fatigue, sore throat, cough)</li>
            <li>Facial or throat swelling (possible <strong>anaphylaxis</strong>)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RashComparison;
