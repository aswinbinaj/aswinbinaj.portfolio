import React from "react";
import "../home/Services.css";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "React, Tailwind CSS, for Responsive and  modern simplicity User interfaces.",
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress themes, plugins, WooCommerce stores, and page builder applications such as Elementor"
    },

    {
      title: "E-commerce Development",
      description:
        "Developing an online shopping site using WooCommerce or Laravel that includes payment handling and stock management. ",
    },

    {
      title: "Ongoing Website Maintenance & Optimization",
      description:
        "Improving performance, removing malware, generating backups, executing updates, and supporting continuous enhancements.",
    },
    {
      title: "WordPress Training & Mentorship",
      description:
        "Provide individual or group sessions for beginners learning knowledge  in WordPress development, Elementor, WooCommerce, and customizing themes"
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
