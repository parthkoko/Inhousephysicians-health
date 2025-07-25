import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./ThroatSection.css";

const ThroatSectionTwo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Auto-scroll carousel effect
    const el = containerRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (!el) return;
      scrollAmount += 1;
      el.scrollLeft = scrollAmount;
      if (scrollAmount >= el.scrollWidth - el.clientWidth) {
        scrollAmount = 0;
        el.scrollLeft = 0;
      }
    }, 30); // speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="throat-section">
      <div
        className="throat-container"
        ref={containerRef}
        data-aos="fade-up"
      >
        <div className="throat-text throat-two" data-aos="zoom-in-right">
          <h2>
            Cough - Viral or Bacterial Infection?
          </h2>
        </div>
        <div className="throat-image" data-aos="zoom-in-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDikDOqDAm4yjSc7xb09q_k52eo-da_qrFBQ&s"
            alt="Sore Throat Info"
          />
        </div>
      </div>
    </section>
  );
};

export default ThroatSectionTwo;
