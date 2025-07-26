import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-main">
      {/* Logo + Description */}
      <div className="footer-detail-section">
      <div className="footer-section">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/IHP_logo.png/600px-IHP_logo.png"
            alt="IHP Logo"
          />
          <div className="logo-text">IHP</div>
        </div>
        <p className="footer-text">InHouse Physicians</p>
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
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
