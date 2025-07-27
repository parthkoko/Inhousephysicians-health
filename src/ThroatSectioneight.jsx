import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import piceight from "../src/images/piceight.jpg";
// import "./ThroatSection.css";

const ThroatSectioneight = () => {
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
    <section className="throat-section ThroatSectioneight">
      <div
        className="throat-container"
        ref={containerRef}
        data-aos="fade-up"
      >
        <div className="throat-text throat-two" data-aos="zoom-in-right">
          <h2>
        Abdominal Pain
          </h2>
        </div>
        <div className="throat-image" data-aos="zoom-in-left">
          <img
            src={piceight}
            alt="Sore Throat Info"
          />
        </div>
      </div>
    </section>
  );
};

export default ThroatSectioneight;
