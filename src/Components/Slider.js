import React, { useEffect, useState } from "react";
import "./Slider.css";
import img1 from "./assets/header-image.jpg";
import img2 from "./assets/icpas-laptop-scholarship-800.jpg";
import img3 from "./assets/header-image.jpg";

const images = [img1, img2, img3];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Adjust slide time to 5 seconds (5000ms)
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length); // Go to previous slide
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length); // Go to next slide
  };

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <section className="hero-section">
        <div className="hero-text">
          <h2>
            GRADE <span className="badge">11</span> SCIENCE
          </h2>
          <h1>
            SMART <span className="sub-title">TEXTBOOK</span>
          </h1>
          <p className="info-text">NOW YOU CAN ACCESS THE ONLINE VERSIONS</p>
          <div className="language-btns">
            <button>ENGLISH</button>
            <button>සිංහල</button>
            <button>தமிழ்</button>
          </div>
          <p className="visit-link">
            VISIT:{" "}
            <a
              href="https://smarttextbook.epd.gov.lk"
              target="_blank"
              rel="noreferrer"
            >
              SMARTTEXTBOOK.EPD.GOV.LK
            </a>
          </p>
        </div>
      </section>

      {/* Navigation Arrows */}
      <button className="arrow left" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
