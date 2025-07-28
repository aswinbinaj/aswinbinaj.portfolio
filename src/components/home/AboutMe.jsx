import React from "react";
import "../../components/home/Aboutme.css"

const AboutMe = () => {
  return (
    <div className="about-me-section" id="about">
      <div className="about-me-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-subheading">Get to know me</p>
        <p className="about-description">
          Hi there! I'm Aswin Binaj, a full-stack web developer with expertise
          in React, WordPress, Shopify, and Laravel. I specialize in building
          responsive websites, developing custom WordPress themes and plugins,
          and creating scalable e-commerce solutions as a WooCommerce and
          Shopify expert. I'm currently working as a frontend developer at Tron Digital and also serve as a
          web development trainer at Tron Academy, where I train aspiring
          developers in modern web technologies and best practices.
        </p>
        <p className="about-description">
          Apart from coding, I’m also a violinist—an art that sharpens my
          creativity, focus, and precision, which I bring into every development
          project.{" "}
        </p>
        <p className="about-description">
          With a strong blend of technical skills and creative thinking, I’m
          dedicated to delivering clean, scalable, and impactful digital
          experiences. Let’s collaborate and bring your vision to life!
        </p>

        {/* New Experience Boxes Section */}
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

        <button className="resume-button">Download Resume</button>
      </div>
    </div>
  );
};

export default AboutMe;
