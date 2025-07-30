import React from "react";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "We build modern and responsive websites tailored to your needs.",
    image: "/images/web-development.jpg",
  },
  {
    id: 2,
    title: "App Development",
    description: "Creating high-performance mobile applications for various platforms.",
    image: "/images/app-development.jpg",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Reliable and scalable cloud computing solutions for businesses.",
    image: "/images/Cloud Solutions.jpg",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={service.id} className="service-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={service.image} alt={service.title} className="service-img" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
