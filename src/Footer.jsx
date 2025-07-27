import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import footerlogo from "../src/images/footerlogo.webp";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-main">
      {/* Logo + Description */}
      <div className="footer-detail-section">
      <div className="footer-section">
        <div className="logo">
          <img
            src={footerlogo}
            alt="IHP Logo"
          />
          {/* <div className="logo-text">IHP</div> */}
        </div>
        {/* <p className="footer-text">InHouse Physicians</p> */}
      </div>

      {/* InHouse Info */}
      <div className="footer-section">
        <div className="footer-title">InHouse Physicians</div>
        <p className="footer-text">Excellence in On-Site Medical</p>
        <p className="footer-text">Services since 1992.</p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <div className="footer-title">Quick Links</div>
        <a href="#" className="footer-link">About Us</a>
        <a href="#" className="footer-link">Resources</a>
        <a href="#" className="footer-link">Meetings + Events</a>
        <a href="#" className="footer-link">Join Our Team</a>
      </div>

      {/* Social Icons */}
      <div className="footer-section">
        <div className="footer-title">Social</div>
         <div className="social-icons">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
