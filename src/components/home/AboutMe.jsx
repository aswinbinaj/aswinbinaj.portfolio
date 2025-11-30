import React from "react";
import "../../components/home/Aboutme.css";

const AboutMe = () => {

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Aswin Binaj_WebDeveloper_Resume"; 
    link.download = "Aswin-Binaj-Resume.pdf"; 
    link.click();
  };

  return (
    <div className="about-me-section" id="about">
      <div className="about-me-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-subheading">Get to know me</p>
        <p className="about-description">
          Hi there! I'm Aswin Binaj, and I am a Freelance full-stack web
          developer in Kollam with experience in React, WordPress, Shopify and
          Laravel. As a WooCommerce and Shopify expert, I am specialized in the
          building of responsive Websites, the development of custom WordPress
          themes, and the somehow-scalable e-commerce platforms. I am working
          currently as a frontend developer at Tron Digital and part-time web
          development instructor at Tron Academy where I teach future web
          developers modern web technology and best practices.
        </p>

        <p className="about-description">
          My other artistic passion besides coding is violin, which, in addition
          to sharpening my creativity, concentration, and accuracy, teaches me
          to apply to each development project.
        </p>

        <p className="about-description">
          Having a good combination of technical competencies and creative
          thinking, I am committed to providing clean, scalable and impactful
          online experiences. We should work together and make your dream come
          true!
        </p>

        {/* Experience Boxes Section */}
        <div className="experience-boxes">
          <div className="experience-box">
            <h3>2+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="experience-box">
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="experience-box">
            <h3>20+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="experience-box">
            <h3>100+</h3>
            <p>Students Trained</p>
          </div>
        </div>

        {/* Download Button */}
        <button className="resume-button" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
