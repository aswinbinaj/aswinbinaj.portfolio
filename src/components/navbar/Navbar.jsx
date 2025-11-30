import React, { useState } from "react";
import "../navbar/Navbar.css";
import { CiLight } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

import {redirectToWhatsApp} from "../../utils/whatsapp"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>Aswin Binaj</h1>
      </div>

      <div className="nav-menus desktop-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          {/* <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </div>

      <div className="nav-contact-btn desktop-contact">
        <button onClick={redirectToWhatsApp}>Contact me</button>
      </div>

      <div className="mobile-right">
        {/* <div className="mode-switcher">
          <CiLight />
        </div> */}

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#blogs" onClick={closeMenu}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className="mobile-contact-btn">
          <button onClick={closeMenu } >Contact me</button>
        </div>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default Navbar;
