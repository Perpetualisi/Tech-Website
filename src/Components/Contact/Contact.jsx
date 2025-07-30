import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>

        <div className="contact-info">
          <div className="info-box">
            <h3>📍 Location</h3>
            <p>Lagos, Nigeria</p>
          </div>
          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+234-123-456-7890</p>
          </div>
          <div className="info-box">
            <h3>📧 Email</h3>
            <p>Tech0@gmail.com</p>
          </div>
          <div className="info-box">
            <h3>⏰ Hours</h3>
            <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
            <p>Sat: 10:00 AM – 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        <div className="map-container">
          <h3>📍 Find Us on Map</h3>
          <iframe
            title="Google Map"
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.11851325202!2d3.3488894!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b05c5f62cfb%3A0x22f3f4eb4d4e67e4!2sLagos!5e0!3m2!1sen!2sng!4v1711297626114!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-form">
          <h3>📩 Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
