import React from "react";
import "../home/Services.css";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Responsive and dynamic user interfaces using React, Tailwind CSS, and modern UI practices.",
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress themes, plugins, WooCommerce stores, and page builders like Elementor.",
    },

    {
      title: "E-commerce Development",
      description:
        "Online store setup using WooCommerce or Laravel, including payment gateways and product management.",
    },

    {
      title: "Website Maintenance & Optimization",
      description:
        "Speed optimization, bug fixing, backups, updates, and continuous improvements.",
    },
    {
      title: "WordPress Training & Mentorship",
      description:
        "Offer one-on-one or group sessions for beginners learning WordPress development, Elementor, WooCommerce, and theme customization.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-heading">My Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
