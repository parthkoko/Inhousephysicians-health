import React, { useEffect, useState, useRef } from "react";
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
          <img src="https://i.ibb.co/nwN6cB2/logo-ihp.png" alt="IHP Logo" />
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
            Your RoamRx Essential Kit contains a variety of OTC and Rx medications
            for travelers. This guide helps you use them effectively.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GfPQnDNPUACiS9e5xihXbMPTM0XB5OfCdw&s"
            alt="IHP Doctor"
          />
        </div>
      </section>

      <section className="medications">
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
      </section>

      <section className="throat-info fade-in" ref={(el) => fadeRefs.current[2] = el}>
        <h2>Is it a Viral or Strep Throat?</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDikDOqDAm4yjSc7xb09q_k52eo-da_qrFBQ&s"
          alt="Sore Throat Info"
        />
      </section>

      {popupVisible && (
        <div id="popup">
          <div className="modal">
            <h2>📋 Important Notes</h2>
            <ul>
              <li>Antibiotics ONLY treat bacterial infections.</li>
              <li>Do not take any Rx medications without a physician’s advice.</li>
              <li>Misuse can lead to serious side effects and antibiotic resistance.</li>
              <li>Always complete the prescribed antibiotic course.</li>
            </ul>
            <button onClick={() => setPopupVisible(false)}>Got it</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
