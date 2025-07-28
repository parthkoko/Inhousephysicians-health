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

         <div class="container-earpaintable">
        {/* <div class="header">
            <h1>Ear Conditions Comparison</h1>
            <p>Comprehensive guide to common ear infections and treatments</p>
        </div> */}

        {/*  Desktop Table View */}
        <div class="desktop-table">
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Condition</th>
                            <th>Pain & Location</th>
                            <th>Hearing Loss</th>
                            <th>Discharge</th>
                            <th>Fever</th>
                            <th>Onset</th>
                            <th>Age Group</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="condition-name">Otitis Externa</div>
                                <div class="common-name">Swimmer's Ear</div>
                            </td>
                            <td>
                                <span class="pain-indicator pain-high"></span>
                                Outer ear canal<br/>
                                <small>Pain on tugging ear</small>
                            </td>
                            <td>Mild</td>
                            <td>Yes, foul-smelling</td>
                            <td>Rare</td>
                            <td>After swimming or trauma</td>
                            <td>All ages</td>
                            <td>Ofloxacin ear drops</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="condition-name">Otitis Media</div>
                                <div class="common-name">Middle Ear Infection</div>
                            </td>
                            <td>
                                <span class="pain-indicator pain-high"></span>
                                Deep in ear<br/>
                                <small>No pain on tugging</small>
                            </td>
                            <td>Very Common</td>
                            <td>Sometimes (if ruptured)</td>
                            <td>Common in children</td>
                            <td>Sudden after URI</td>
                            <td>Mostly children</td>
                            <td><span class="highlight">Augmentin 875mg</span> x 7 days</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="condition-name">Serous Otitis Media</div>
                                <div class="common-name">Fluid Behind Eardrum</div>
                            </td>
                            <td>
                                <span class="pain-indicator pain-low"></span>
                                Minimal or no pain<br/>
                                <small>No trigger</small>
                            </td>
                            <td>Very Common</td>
                            <td>No</td>
                            <td>No</td>
                            <td>Gradual after URI</td>
                            <td>Mostly children</td>
                            <td>Decongestants (Afrin, oral)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Mobile Card View  */}
        <div class="mobile-cards">
            <div class="condition-card">
                <div class="card-header">
                    <h3>Otitis Externa</h3>
                    <div class="common-name">Swimmer's Ear</div>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <div class="card-label">Pain Location:</div>
                        <div class="card-value">Outer Ear Canal</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Trigger:</div>
                        <div class="card-value">Pain on tugging ear</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Hearing Loss:</div>
                        <div class="card-value">Mild</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Discharge:</div>
                        <div class="card-value">Yes, foul-smelling</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Fever:</div>
                        <div class="card-value">Rare</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Onset:</div>
                        <div class="card-value">After swimming or trauma</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Age Group:</div>
                        <div class="card-value">All ages</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Treatment:</div>
                        <div class="card-value">Ofloxacin ear drops</div>
                    </div>
                </div>
            </div>

            <div class="condition-card">
                <div class="card-header">
                    <h3>Otitis Media</h3>
                    <div class="common-name">Middle Ear Infection</div>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <div class="card-label">Pain Location:</div>
                        <div class="card-value">Deep in Ear</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Trigger:</div>
                        <div class="card-value">No pain on tugging</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Hearing Loss:</div>
                        <div class="card-value">Very Common</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Discharge:</div>
                        <div class="card-value">Sometimes (if ruptured)</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Fever:</div>
                        <div class="card-value">Common in children</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Onset:</div>
                        <div class="card-value">Sudden after URI</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Age Group:</div>
                        <div class="card-value">Mostly children</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Treatment:</div>
                        <div class="card-value"><span class="highlight">Augmentin 875mg</span> x 7 days</div>
                    </div>
                </div>
            </div>

            <div class="condition-card">
                <div class="card-header">
                    <h3>Serous Otitis Media</h3>
                    <div class="common-name">Fluid Behind Eardrum</div>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <div class="card-label">Pain Location:</div>
                        <div class="card-value">Minimal or No Pain</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Trigger:</div>
                        <div class="card-value">No trigger</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Hearing Loss:</div>
                        <div class="card-value">Very Common</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Discharge:</div>
                        <div class="card-value">No</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Fever:</div>
                        <div class="card-value">No</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Onset:</div>
                        <div class="card-value">Gradual after URI</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Age Group:</div>
                        <div class="card-value">Mostly children</div>
                    </div>
                    <div class="card-row">
                        <div class="card-label">Treatment:</div>
                        <div class="card-value">Decongestants (Afrin, oral)</div>
                    </div>
                </div>
            </div>
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
