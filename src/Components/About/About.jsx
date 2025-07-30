import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>TECH</strong>, where innovation meets expertise!
            We are a leading technology solutions provider, specializing in web
            development, app development, cloud solutions, and more. Our
            mission is to transform ideas into reality through cutting-edge
            technology.
          </p>
          <p>
            Whether you're a startup, a business, or an enterprise, we offer
            tailored solutions to help you succeed in the digital world.
          </p>
          <a href="#contact" className="about-btn">
            Get in Touch
          </a>
        </div>
        <div className="about-image">
          <img src="/images/about-bg.jpg" alt="About TECH" />
        </div>
      </div>
    </section>
  );
};

export default About;
