import React from "react";
import "../home/HeroSection.css";
import myimage from "../../../public/aswinbinaj.webp";
import aswinbinaj from "../../../public/aswin.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <img src={aswinbinaj} alt="Aswin Binaj" className="avatar" />
        <h1 className="hero-title ">Aswin Binaj</h1>
        <h2 className="hero-subtitle typing-animation">
          Freelance Full-Stack Web Developer in Kollam
        </h2>
        <p className="hero-description">
          Being a freelance full-stack web developer in Kollam , the
          second-largest city, with an enthusiasm for web development and
          experience working in React, WordPress, PHP, and Laravel, I flourish
          in designing dynamic and user-friendly websites and applications that
          translate into the balance between performance tied to modern digital
          environments and a smooth user experience.
        </p>
        <a
          href="https://wa.me/9539711107?text=I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
