import React, { useState } from "react";
import logo from "../public/logo.webp"; // Update this path to your actual logo
import { FaBars, FaTimes } from "react-icons/fa";
// import "./Header.css"; // External CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="IHP Logo" />
      </div>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#">Our Services</a>
        <a href="#">Our Impact</a>
        <a href="#">About Us</a>
        <a href="#">Resources</a>
        <a className="contact-button" href="#">Contact us</a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
