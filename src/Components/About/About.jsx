import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
            
                <div className="about-text">
                    <h2>About Us</h2>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>
    Welcome to TECH, where innovation meets expertise! We are a leading 
    technology solutions provider, specializing in web development, 
    app development, cloud solutions, and more. Our mission is to 
    transform ideas into reality through cutting-edge technology.
</p>
<p style={{ fontFamily: "'Poppins', sans-serif" }}>
    Whether you're a startup, a business, or an enterprise, 
    we offer tailored solutions to help you succeed in the digital world.
</p>
<a href="#contact" className="about-btn" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
