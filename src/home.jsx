import React, { useEffect, useState, useRef } from "react";
import ThroatSymptomChecker from "./ThroatSymptomChecker";
import Medications from "./Medications";
import logo from "../public/logo.webp";
import ThroatSection from "./ThroatSection";
import ThroatSectionTwo from "./ThroatSectiontwo";
import ThroatSectionthree from "./ThroatSectionthree";
import ThroatSectionfour from "./ThroatSectionfour";
import HayFeverColdComparison from "./HayFeverColdComparison";
import RashComparison from "./RashComparison";
import EarPainDiagnosis from "./EarPainDiagnosis";
import AbdominalPain from "./AbdominalPain";
import Footer from "./Footer";
import ThroatSectionfive from "./ThroatSectionfive";
import ThroatSectionsix from "./ThroatSectionsix";
import ThroatSectionseven from "./ThroatSectionseven";
import ThroatSectioneight from "./ThroatSectioneight";
import Header from "./header";
// import "./App.css";

const App = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
    fadeRefs.current.forEach((el) => el && observer.observe(el));

    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random(),
      });
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff11";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      update();
    }
    function update() {
      particles.forEach((p) => {
        p.y += p.d;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });
    }
    const interval = setInterval(draw, 33);
    setTimeout(() => setPopupVisible(true), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <canvas id="bg"></canvas>
      {/* <header>
        <div className="logo">
          <img src={logo} alt="IHP Logo" />
        </div>
        <nav>
          <a href="#">Our Services</a>
          <a href="#">Our Impact</a>
          <a href="#">About Us</a>
          <a href="#">Resources</a>
        </nav>
        <a className="contact-button" href="#">Contact us</a>
      </header> */}
      <div className="main-header">
        <Header/>
      </div>

      <section className="hero">
        <div className="text-container">
          <h1>RoamRX Medical Symptom Guide</h1>
          <p>
            Your RoamRx Essential Kit contains a variety of OTC and Rx medications. These medications have been chosen to treat the most common medical conditions travelers experience. Below is a list of medications included in the RoamRx Essential Kit. The guide on the following pages instructs you on how and when to use these medications. 
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GfPQnDNPUACiS9e5xihXbMPTM0XB5OfCdw&s"
            alt="IHP Doctor"
          />
        </div>
      </section>

      {/* <section className="medications">
        <div className="medication-card fade-in" ref={(el) => fadeRefs.current[0] = el}>
          <h3>OTC Medications</h3>
          <ul>
            <li>Tylenol 500mg</li>
            <li>Advil 200mg</li>
            <li>Hydrocortisone Cream 1%</li>
            <li>Bacitracin Ointment</li>
            <li>Guaifenesin 400mg</li>
            <li>Cetirizine 10mg</li>
            <li>Loperamide</li>
            <li>Pepto-Bismol</li>
          </ul>
        </div>
        <div className="medication-card fade-in" ref={(el) => fadeRefs.current[1] = el}>
          <h3>Rx Medications</h3>
          <ul>
            <li>Azithromycin</li>
            <li>Augmentin</li>
            <li>Cephalexin</li>
            <li>Ondansetron</li>
          </ul>
        </div>

      </section> */}
      <div className="medications-main">
        <Medications />
      </div>

      <div className="">
        <ThroatSection/>
      </div>

      {popupVisible && (
        <div id="popup">
          <div className="modal">
            <h2>📋 Important Notes</h2>
            <ul className="popup-list">
            <li>Antibiotics ONLY treat bacterial infections, not viral infections.</li>
            <li>Do not take any Rx medications or antibiotics without a physician’s advice.</li>
            <li>Antibiotics can cause serious side effects, c. difficile diarrhea, and an increased risk of antibiotic-resistant infections if not used correctly.</li>
            <li>If starting a course of antibiotics, make sure to finish the complete course, even if you start to feel better after the first 2 days.</li>
          </ul>
            <button onClick={() => setPopupVisible(false)}>Got it</button>
          </div>
        </div>
      )}


      <div className="">
        <ThroatSymptomChecker />
      </div>
        <div className="ThroatSectionTwo-main">
        <ThroatSectionTwo/>
      </div>
<section className="secmain">
      <div className="box-section">
        <div className="box-section-inn">
          <div className="cardone">
            <div className="cardoneinner">
              <h2>Viral Cough Features </h2>
            <ul>
              <li>Gradual onset</li>
              <li>Often begins with a sore throat or a runny nose </li>
              <li>Low-grade or no fever </li>
              <li>Symptoms improve in 7–10 days </li>
              <li>Often accompanied by:</li>
              <li>Sneezing</li>
              <li>Nasal congestion</li>
              <li>Body aches</li>
              <li>Fatigue </li>
            </ul>
            </div>
          </div>
          <div className="cardone">
            <div className="cardoneinner">
              <h2>Bacterial Cough Features</h2>
            <ul>
              <li>Productive cough with thick, dark yellow/brown/green mucus</li>
              <li>Shortness of breath </li>
              <li>Chest pain when coughing or breathing </li>
              <li>Symptoms worsen after initial improvement (“double sickening”)</li>
            </ul>
            </div>
          </div>
          <div className="cardone">
            <div className="cardoneinner">
              <h2>Other Causes of a Cough </h2>
            <ul>
              <li>Asthma (improves with an Albuterol inhaler) </li>
              <li>Reactive Airway after viral infection (improves with an Albuterol inhaler)</li>
              <li>Acid Reflux (GERD – improves with Omeprazole, Brand Name Nexium) </li>
            </ul>
            </div>
          </div>
          </div>
<h2 className="title-changes">Treatment </h2>
<div className="box-section-inn">
          <div className="cardone">
            <div className="cardoneinner">
              
              <h2>Viral Infection Upper Respiratory Infection? </h2>
            <ul>
              
              <li>Consider using:</li>
              <li>Guaifenesin (generic for Mucinex®) 400 mg by mouth every 4 hours as needed, not to exceed 2400 mg per day - this loosens up secretions </li>
              <li>Ibuprofen 600 mg every 6 hours AND/OR Acetaminophen 1000 mg every 6-8 hours as needed for pain or fever (do not exceed 3000 mg per day)</li>
            </ul>
            </div>
          </div>
          <div className="cardone">
            <div className="cardoneinner">
              <h2>Influenza or COVID-19?</h2>
            <ul>
              <li>Usually more severe than a cold with: </li>
              <li>Severe body or muscle aches</li>
              <li>nasal congestion, headache, cough, fever, fatigue </li>
              <li>exposure to someone with the flu </li>
              <li>Loss of sensation of taste or smell </li>
              <li>We recommend taking the COVID-19 test. If the antigen COVID test is negative, then test again 2 days later.</li>
            </ul>
            </div>
          </div>
          <div className="cardone">
            <div className="cardoneinner">
              <h2>Bronchitis or Pneumonia?</h2>
            <ul>
              <li>Consider using: Azithromycin (Brand Name Zithromax) 500 mg by mouth the first day, then 250 mg per day for the next 4 days OR Amoxicillin-Clavulanic 875 mg-125 mg (Brand Name Augmentin) by mouth twice daily for 7 days.</li>
              <li>We recommend not taking antibiotics for bronchitis unless symptoms have been present for more than 7 - 10 days without improving. </li>
            </ul>
            </div>
          </div>
          </div>
          <h2 className="title-changes">Red Flags </h2>
          <div className="box-section-inn">
          <div className="cardone">
            <div className="cardoneinner">
              <h2>Red Flags </h2>
            <ul>
              <li>Seek immediate medical attention if: </li>
              <li>Fever  101°F for more than 3 days </li>
              <li>Cough with bloody mucus </li>
              <li>Difficulty breathing or wheezing </li>
              <li>Chest pain</li>
              <li>Mental confusion or fatigue (especially in older adults)</li>
              <li>Oxygen saturation level  92% (using a pulse oximeter)</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
<div className="ThroatSectionTwo-main">
        <ThroatSectionthree/>
      </div>

      <div className="HayFeverColdComparison">
       <div className="">
    <h2 className="section-title">Cause</h2>
    <ul>
      <li><strong>Hay fever:</strong> Caused by an allergic reaction to pollen, dust, pet dander, or mold.</li>
      <li><strong>Cold:</strong> Caused by a virus.</li>
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
      <li>Cetirizine 10mg (generic for Zyrtec) or Allegra or Claritin</li>
      <li>Nasal sprays: Azelastine (Astelin, Astepro), Cromolyn sodium (NasalCrom)</li>
      <li>Steroid nasal sprays: (Flonase, Rhinocort, Nasonex, Nasacort)</li>
      <li>Decongestants: Pseudoephedrine (Sudafed), Oxymetazoline (Afrin, limit to 3 days)</li>
      <li>Eye Drops: Ketotifen (Zaditor) or Olopatadine (Pataday, Patanol)</li>
    </ul>
  </div>
  </div>
  <div className="ThroatSectionTwo-main">
        <ThroatSectionfour/>
      </div>
      <div className="Diarrhea">
        <div class="card">
    <h2>Diarrhea</h2>
    <p>When you have <span class="highlight">diarrhea while traveling</span>, it can be tough to tell whether it's due to <span class="highlight">food poisoning</span>, a <span class="highlight">viral infection</span>, or a <span class="highlight">bacterial infection</span> that needs antibiotics. Here's a breakdown to help you differentiate:</p>

    <h3>Key Differences</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Food Poisoning (Toxin-based)</th>
          <th>Viral Gastroenteritis</th>
          <th>Bacterial Infection</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Onset</td><td>Sudden (1–6 hrs or 12–24 hrs)</td><td>Gradual (1–2 days after exposure)</td><td>Gradual or sudden (1–3 days after exposure)</td></tr>
        <tr><td>Duration</td><td>Short (less than 24 hrs)</td><td>1–3 days</td><td>3 days if untreated</td></tr>
        <tr><td>Fever</td><td>Rare</td><td>Low-grade</td><td>High (38.5°C / 101.3°F) often present</td></tr>
        <tr><td>Vomiting</td><td>Prominent</td><td>Common</td><td>Sometimes</td></tr>
        <tr><td>Abdominal cramps</td><td>Strong, sudden</td><td>Moderate</td><td>Often severe</td></tr>
        <tr><td>Blood or mucus in stool</td><td>Uncommon</td><td>No</td><td><span class="highlight">Yes</span> (esp. Shigella, Campylobacter)</td></tr>
        <tr><td>Volume of diarrhea</td><td>Large, watery</td><td>Large, watery</td><td>Frequent, smaller-volume, may be bloody</td></tr>
        <tr><td>Dehydration risk</td><td>Moderate</td><td>Moderate</td><td>High if persistent</td></tr>
        <tr><td>Need for antibiotics?</td>
          <td><span class="badge no">❌ No</span></td>
          <td><span class="badge no">❌ No</span></td>
          <td><span class="badge maybe">🟡 Sometimes</span></td>
        </tr>
      </tbody>
    </table>

    <div class="section-title">Bacterial Infection Symptoms and Signs (Consider Antibiotics)</div>
    <ul>
      <li>Diarrhea lasting  3 days</li>
      <li>Fever ≥ 38.5°C / 101.3°F</li>
      <li>Blood or pus in the stool</li>
      <li>Severe abdominal pain</li>
      <li>Immunocompromised or high-risk medical history</li>
    </ul>

    <h3>Recovery Tips</h3>
    <div class="tips">
      <ul>
        <li>Stay hydrated with <strong>oral rehydration salts (ORS)</strong> or electrolyte drinks.</li>
        <li>If no blood or fever is present:</li>
        <li><strong>Loperamide (Imodium)</strong> 4 mg every 6 hours as needed. <em>(Not more than 2 days)</em></li>
        <li><strong>Bismuth subsalicylate</strong> (Pepto-Bismol) 2–4 capsules every hour as needed. <em>(Max 8 in 24 hrs)</em></li>
      </ul>
    </div>

    <h3>Associated with Nausea & Vomiting</h3>
    <div class="tips">
      <ul>
        <li><strong>Clear fluids:</strong> Water, electrolyte tablets, ORS</li>
        <li><strong>Avoid:</strong> Sugary, caffeinated, or dairy-based drinks</li>
        <li><strong>Start slow:</strong> Sip small amounts every 10–15 min</li>
        <li>Use <strong>BRAT diet</strong>: Bananas, rice, applesauce, toast</li>
        <li>Ginger candy or tea may help</li>
        <li>Consider <strong>Ondansetron 8mg</strong> dissolvable under tongue every 8 hrs as needed</li>
      </ul>
    </div>

    <h3>Red Flags</h3>
    <div class="red-flags">
      <ul>
        <li class="red-flag">Vomiting persists  24 hrs</li>
        <li class="red-flag">No urination for 12 hrs</li>
        <li class="red-flag">Blood in vomit</li>
        <li class="red-flag">Fever 101°F (38.3°C)</li>
        <li class="red-flag">Suspected <strong>pregnancy</strong> or severe abdominal pain</li>
      </ul>
    </div>
  </div>
      </div>
       <div className="ThroatSectionTwo-main">
        <ThroatSectionfive/>
      </div>
      <div className="Vomiting-container">
         <div className="grid-container">

    <div className="card">
      <h2>What Causes Nausea?</h2>
      <p>Nausea is a common symptom triggered by various conditions. It's important to identify the root cause to treat it effectively.</p>
      <ul>
        <li>Food poisoning, viral infection</li>
        <li>Motion sickness, migraine</li>
        <li>Pregnancy (morning sickness)</li>
        <li>Heat stroke or dehydration</li>
      </ul>
    </div>

    <div className="card">
      <h2>Hydration & Nutrition</h2>
      <p>Keeping the body hydrated is the most important step during episodes of vomiting and nausea.</p>
      <ul>
        <li>Sip ORS, coconut water, or lime water</li>
        <li>Avoid soda, coffee, or milk</li>
        <li>Eat soft foods – khichdi, toast, bananas</li>
        <li>Start with small amounts frequently</li>
      </ul>
    </div>

    <div className="card">
      <h2>Home Remedies</h2>
      <p>Simple home-based solutions can ease symptoms before medication is needed.</p>
      <ul>
        <li>Chew ginger or sip ginger tea</li>
        <li>Lemon and honey in warm water</li>
        <li>Deep breathing in fresh air</li>
        <li>Cold compress on the neck</li>
      </ul>
    </div>

    <div className="card">
      <h2>Medications & Alerts</h2>
      <ul>
        <li>Ondansetron 4–8mg (dissolvable)</li>
        <li>Meclizine (for motion sickness)</li>
        <li>Domperidone (consult doctor)</li>
      </ul>
      <div className="alert">⚠️ Avoid Ondansetron in first trimester of pregnancy.</div>
      <div className="alert">⚠️ Always consult a doctor for correct dosage.</div>
    </div>

  </div>

      </div>
       <div className="ThroatSectionTwo-main">
        <ThroatSectionsix/>
      </div>
      <div className="">
        <RashComparison/>
      </div>
        <div className="ThroatSectionTwo-main">
        <ThroatSectionseven/>
      </div>
      <div className="">
        <EarPainDiagnosis/>
      </div>
         <div className="ThroatSectionTwo-main">
        <ThroatSectioneight/>
      </div>
      <div className="">
        <AbdominalPain/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
