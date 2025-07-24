import React, { useEffect, useState, useRef } from "react";
import ThroatSymptomChecker from "./ThroatSymptomChecker";
import Medications from "./Medications";
import logo from "../public/logo.webp";
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

         <section className="throat-section">
      <div className="throat-container">
        <div className="throat-text">
          <h2>
            How to Know Whether Your Sore Throat Is a Viral Infection or Strep Throat?
          </h2>
        </div>
        <div className="throat-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDikDOqDAm4yjSc7xb09q_k52eo-da_qrFBQ&s"
            alt="Sore Throat Info"
          />
        </div>
      </div>
    </section>

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
    </div>
  );
};

export default App;
