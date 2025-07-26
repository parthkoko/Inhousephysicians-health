import React from "react";
// import "./HayFeverColdComparison.css";

const HayFeverColdComparison = () => {
  return (
    <div className="container">
      <h2>Cause</h2>
      <ul>
        <li>
          <strong>Hay fever:</strong> Caused by an allergic reaction to pollen,
          dust, pet dander, or mold.
        </li>
        <li>
          <strong>Cold:</strong> Caused by a virus.
        </li>
      </ul>

      <h3 className="section-title">Common Symptoms Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>Symptom</th>
            <th>Hay Fever</th>
            <th>Cold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Runny/stuffy nose</td>
            <td>Yes (clear, watery mucus)</td>
            <td>Yes (thicker, colored mucus)</td>
          </tr>
          <tr>
            <td>Sneezing</td>
            <td>Frequent</td>
            <td>Often, but less intense</td>
          </tr>
          <tr>
            <td>Itchy eyes/nose/throat</td>
            <td>Very common</td>
            <td>Rare</td>
          </tr>
          <tr>
            <td>Watery eyes</td>
            <td>Common</td>
            <td>Rare</td>
          </tr>
          <tr>
            <td>Cough</td>
            <td>Sometimes (postnasal drip)</td>
            <td>Common</td>
          </tr>
          <tr>
            <td>Sore throat</td>
            <td>Sometimes (from irritation)</td>
            <td>Common</td>
          </tr>
          <tr>
            <td>Fever</td>
            <td><strong>Never</strong></td>
            <td><strong>Sometimes</strong></td>
          </tr>
          <tr>
            <td>Body aches</td>
            <td><strong>Never</strong></td>
            <td><strong>Common</strong></td>
          </tr>
          <tr>
            <td>Fatigue</td>
            <td>Sometimes</td>
            <td>Common</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>As long as they are exposed to an allergen</td>
            <td>Usually 3–10 days</td>
          </tr>
        </tbody>
      </table>

      <h3 className="section-title">Treatment</h3>
      <ul className="treatment-list">
        <li>
          Cetirizine 10mg (generic for Zyrtec) or Allegra or Claritin
        </li>
        <li>
          Nasal sprays: Azelastine (Astelin, Astepro), Cromolyn sodium
          (NasalCrom)
        </li>
        <li>
          Steroid nasal sprays: (Flonase, Rhinocort, Nasonex, Nasacort)
        </li>
        <li>
          Decongestants: Pseudoephedrine (Sudafed), Oxymetazoline (Afrin,
          limit to 3 days)
        </li>
        <li>
          Eye Drops: Ketotifen (Zaditor) or Olopatadine (Pataday, Patanol)
        </li>
      </ul>
    </div>
  );
};

export default HayFeverColdComparison;
