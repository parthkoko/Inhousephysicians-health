import React from "react";
// import "./EarPainDiagnosis.css";

const EarPainDiagnosis = () => {
  return (
    <div className="EarPainDiagnosis">
      <div className="">
        <h1>Ear Pain Conditions</h1>
        <p className="subtitle">
          Compare Otitis Externa, Otitis Media & Serous Otitis with treatment &
          red flags
        </p>

        <div className="comparison-grid">
          <div className="card">
            <h2>Otitis Externa</h2>
            <p><strong>Common Name:</strong> Swimmer's Ear</p>
            <p><strong>Pain Location:</strong> Outer Ear Canal</p>
            <p><strong>Trigger:</strong> Pain on tugging ear</p>
            <p><strong>Hearing Loss:</strong> Mild</p>
            <p><strong>Discharge:</strong> Yes, foul-smelling</p>
            <p><strong>Fever:</strong> Rare</p>
            <p><strong>Onset:</strong> After swimming or trauma</p>
            <p><strong>Age Group:</strong> All ages</p>
            <p><strong>Treatment:</strong> Ofloxacin ear drops</p>
          </div>

          <div className="card">
            <h2>Otitis Media</h2>
            <p><strong>Common Name:</strong> Middle Ear Infection</p>
            <p><strong>Pain Location:</strong> Deep in Ear</p>
            <p><strong>Trigger:</strong> No pain on tugging</p>
            <p><strong>Hearing Loss:</strong> Very Common</p>
            <p><strong>Discharge:</strong> Sometimes (if ruptured)</p>
            <p><strong>Fever:</strong> Common in children</p>
            <p><strong>Onset:</strong> Sudden after URI</p>
            <p><strong>Age Group:</strong> Mostly children</p>
            <p><strong>Treatment:</strong> <span className="highlight">Augmentin 875mg</span> x 7 days</p>
          </div>

          <div className="card">
            <h2>Serous Otitis Media</h2>
            <p><strong>Common Name:</strong> Fluid Behind Eardrum</p>
            <p><strong>Pain Location:</strong> Minimal or No Pain</p>
            <p><strong>Trigger:</strong> No trigger</p>
            <p><strong>Hearing Loss:</strong> Very Common</p>
            <p><strong>Discharge:</strong> No</p>
            <p><strong>Fever:</strong> No</p>
            <p><strong>Onset:</strong> Gradual after URI</p>
            <p><strong>Age Group:</strong> Mostly children</p>
            <p><strong>Treatment:</strong> Decongestants (Afrin, oral)</p>
          </div>
        </div>

        <div className="treatment">
          <h2>Treatment Summary</h2>
          <p><span className="highlight">Otitis Media:</span> Amoxicillin-Clavulanate (Augmentin) 875mg twice daily for 7 days</p>
          <p><span className="highlight">Otitis Externa:</span> Treated with ear drops like <strong>Ofloxacin</strong></p>
          <p><span className="highlight">Serous Otitis:</span> Treated with <strong>nasal/oral decongestants</strong></p>
        </div>

        <div className="red-flags">
          <h2>Red Flags </h2>
          <ul>
            <li>Worsening pain or discharge despite medication</li>
            <li>Hearing loss persists or worsens</li>
            <li>Spreading redness near the ear</li>
            <li>Pain radiates to jaw, face, or mastoid</li>
            <li>Blood draining from the ear</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EarPainDiagnosis;
