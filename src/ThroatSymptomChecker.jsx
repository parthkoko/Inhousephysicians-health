import React, { useEffect } from 'react';

const ThroatSymptomChecker = () => {
  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;

      // Clear old particles to avoid infinite buildup
      particlesContainer.innerHTML = '';
      const particleCount = 15;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';

        // Random colors for particles
        const colors = [
          'rgba(102, 126, 234, 0.4)',
          'rgba(236, 72, 153, 0.4)',
          'rgba(34, 197, 94, 0.4)'
        ];
        particle.style.background =
          colors[Math.floor(Math.random() * colors.length)];

        particlesContainer.appendChild(particle);
      }
    };

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-20px) rotateX(0deg) scale(1.02)';
      });

      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
      });
    });

    createParticles();
    const interval = setInterval(createParticles, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="throat-symptom-checker">
      <div className="floating-particles" id="particles"></div>
{/* 
      <h1 className="main-title">🩺 Throat Symptom Checker</h1>
      <p className="subtitle">Advanced diagnostic tool for throat-related symptoms</p> */}

      <div className="container">
        {/* Step 1 */}
        <div className="card card1">
          <div className="card-header">
            <span className="card-icon">🔍</span>
            <h2 className="card-title">Step 1: Symptom Analysis</h2>
          </div>
          <div className="card-content">
            <div className="symptom-section">
              <h3 className="symptom-title">Viral Sore Throat Indicators</h3>
              <ul className="symptom-list">
                <li>Runny nose, nasal congestion, persistent cough</li>
                <li>Sneezing, hoarseness, voice changes</li>
                <li>Low-grade fever (under 101°F) or no fever</li>
                <li>Mild throat pain with scratchy sensation</li>
                <li>Red, irritated throat without white patches</li>
              </ul>
            </div>

            <div className="symptom-section">
              <h3 className="symptom-title">Strep Throat Warning Signs</h3>
              <ul className="symptom-list">
                <li>Absence of cough or nasal symptoms</li>
                <li>Severe, painful swallowing difficulty</li>
                <li><span className="emphasis">High fever ≥ 101°F (38.3°C)</span></li>
                <li>Swollen, tender lymph nodes in neck</li>
                <li>Red tonsils with white patches or pus streaks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="card card3">
          <div className="card-header">
            <span className="card-icon">📊</span>
            <h2 className="card-title">Step 2: Centor Risk Assessment</h2>
          </div>
          <div className="card-content">
            <p style={{ marginBottom: '20px' }}>
              Calculate your strep throat probability using clinical criteria:
            </p>

            <table className="criteria-table">
              <thead>
                <tr>
                  <th>Clinical Symptom</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Fever present</td><td>+1</td></tr>
                <tr><td>No cough</td><td>+1</td></tr>
                <tr><td>Swollen, tender neck lymph nodes</td><td>+1</td></tr>
                <tr><td>Tonsillar exudates (white spots/pus)</td><td>+1</td></tr>
                <tr><td>Age 3–14 years</td><td>+1</td></tr>
                <tr><td>Age 15–44 years</td><td>0</td></tr>
                <tr><td>Age ≥ 45 years</td><td>-1</td></tr>
              </tbody>
            </table>

            <div className="interpretation-section">
              <h3 className="symptom-title">Risk Interpretation</h3>
              <div className="risk-item"><strong>0–1 Points:</strong> Low risk - Likely viral infection</div>
              <div className="risk-item"><strong>2–3 Points:</strong> Moderate risk - Consider rapid strep test</div>
              <div className="risk-item"><strong>4+ Points:</strong> High risk - Likely strep, seek medical care</div>
            </div>

            <div className="medication-note">
              <strong>If strep throat is confirmed, typical treatments include:</strong><br />
              • <span className="emphasis">Cephalexin 500mg (Keflex®)</span> - 2 times daily for 10 days<br />
              • <span className="emphasis">Azithromycin (Zithromax®)</span> - 500mg day 1, then 250mg daily for 4 days
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="card card2">
          <div className="card-header">
            <span className="card-icon">💡</span>
            <h2 className="card-title">Step 3: Important Guidelines</h2>
          </div>
          <div className="card-content">
            <div className="final-tips">
              <div className="tip-item">
                <strong>🦠 Viral vs Bacterial:</strong> Viral sore throats do NOT require antibiotics - only bacterial infections like strep throat benefit from antibiotic treatment.
              </div>

              <div className="tip-item">
                <strong>🧪 Definitive Diagnosis:</strong> A rapid strep test or throat culture is the only reliable way to confirm strep throat - symptoms alone aren't sufficient.
              </div>

              <div className="tip-item">
                <strong>⚕️ When to Seek Care:</strong> Contact healthcare provider if fever exceeds 101°F, severe throat pain, difficulty swallowing, or symptoms worsen after 3-4 days.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThroatSymptomChecker;
