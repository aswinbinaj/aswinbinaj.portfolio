import React from "react";
import "../home/Footer.css";
import { FaLinkedin,  FaFacebook, FaInstagram,  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2025 All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/aswinbinaj/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        
        
      </div>
    </footer>
  );
};

export default Footer;
