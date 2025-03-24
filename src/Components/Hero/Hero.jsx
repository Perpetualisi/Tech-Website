
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to TECH</h1>
        <p>Innovating the future, one step at a time.</p>
        <br />
        <br />
        <a href="#services" className="btn">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
