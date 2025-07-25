import React, { useEffect, useState, useRef } from "react";
import ThroatSymptomChecker from "./ThroatSymptomChecker";
import Medications from "./Medications";
import logo from "../public/logo.webp";
import ThroatSection from "./ThroatSection";
import ThroatSectionTwo from "./ThroatSectiontwo";
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
      <header>
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
      </header>

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
          <div className="cardone">
            <div className="cardoneinner">
              <h2>Treatment </h2>
            <ul>
              <li>Viral Infection Upper Respiratory Infection?</li>
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

    </div>
  );
};

export default App;
