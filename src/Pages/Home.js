import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h2>GRADE <span className="badge">11</span> SCIENCE</h2>
        <h1>SMART <span className="sub-title">TEXTBOOK</span></h1>
        <p className="info-text">NOW YOU CAN ACCESS THE ONLINE VERSIONS</p>
        <div className="language-btns">
          <button>ENGLISH</button>
          <button>සිංහල</button>
          <button>தமிழ்</button>
        </div>
        <p className="visit-link">
          VISIT: <a href="https://smarttextbook.epd.gov.lk" target="_blank" rel="noreferrer">SMARTTEXTBOOK.EPD.GOV.LK</a>
        </p>
      </div>
      <div className="hero-img">
        <img src="/student.jpg" alt="Student with laptop" />
      </div>
    </section>
  );
}

export default Home;
