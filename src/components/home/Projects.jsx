import React, { useState } from "react";
import "../home/Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("React");

  const projects = [
    {
      title: "Dahab Miners",
      category: "React",
      img: "/dahab.JPG",
      url: "https://dahabminers.com",
      description:
        "Dahab Miners is a UAE-based company offering secure and cost-effective crypto mining solutions, including hardware, hosting, and support.",
    },
    {
      title: "Tron Academy",
      category: "React",
      img: "/tronacademy.JPG",
      url: "https://tronacademy.in",
      description: "Tron Academy is a Kerala-based professional training institute providing industry-oriented programs in coding, digital marketing, and multimedia with assured placement support.",
    },
    {
      title: "Signature-D-World",
      category: "React",
      img: "/signature.JPG",
      url: "https://signaturedworld.com",
      description: "Signature D World is a user-friendly website for a supermarket, featuring product categories, WhatsApp-based inquiries, and dedicated Home, About, and Contact pages.",
    },
    {
      title: "Collective Transportations",
      category: "React",
      img: "/collective.JPG",
      url: "https://collectivetransportations.com",
      description: "Collective Transportation offers reliable transport services including airport transfers, event rides, and employee commutes, with easy booking and flexible scheduling",
    },
    {
      title: "Precious Stores",
      category: "WordPress",
      img: "/precious.JPG",
      url: "https://preciousstores.com",
      description: "Precious Stores is an eCommerce website built with Elementor and WooCommerce, offering a wide range of products through a clean and user-friendly interface.",
    },
    {
      title: "We-Work",
      category: "WordPress",
      img: "/wework.JPG",
       url: "https://wewrk.ae",
      description: "WeWork UAE is a professional website offering flexible workspaces, private offices, and meeting rooms with modern amenities in Dubai and Sharjah.",
    },
    {
      title: "Merzeecool",
      category: "WordPress",
      img: "/merzeecool.JPG",
       url: "https://https://merzecoolsystems.com",
      description: "Merze Cool Systems is a professional website offering HVAC sales, installation, and repair services in Thrissur and Palakkad for top brands like Mitsubishi, Daikin, and Carrier",
    },
    {
      title: "SaraWaterproof",
      category: "WordPress",
      img: "/sarawaterproof.JPG",
      description: "Sara Waterproofing is a professional website offering waterproofing and heat-reflective roof coating services for residential and commercial properties",
    },
  ];

  const filteredProjects = projects.filter((p) => p.category === filter);

  return (
    <div className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <p className="projects-subheading">Some of my works</p>

      <div className="project-filters">
        <button
          className={filter === "React" ? "active" : ""}
          onClick={() => setFilter("React")}
        >
          React JS
        </button>
        <button
          className={filter === "WordPress" ? "active" : ""}
          onClick={() => setFilter("WordPress")}
        >
          WordPress
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
              </a>
            ) : (
              <>
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
              </>
            )}
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
