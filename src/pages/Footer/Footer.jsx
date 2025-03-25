import React from "react";
import "./Footer.css";  // Import the CSS for styling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid-container">
      {/* First column: Logo Image */}
      <div className="logo" style={{ marginLeft: '20px' }}>
        <img src="logo-img.jpg" alt="Logo" className="logo-image" />
      </div>

      {/* Second column: Paragraphs */}
      <div className="content" style={{ marginTop: '20px' }}>
        <p>Copyright 2025 Pramoda Rebar (P)Ltd. All Rights Reserved </p>
        <p>REGISTERED as LLC.</p>
        <p>Designed and Developed by <span style={{ color: 'green' }}><Link to='https://www.linkedin.com/in/rajasri-govindasamy/'>RAJASRI G</Link></span></p>
      </div>

      {/* Third column: Navigation link and icon */}
      <div className="navigation">
        <a href="/" className="nav-link">
          Go to Example
        </a>
        <a href="/" className="nav-icon">
          <img src="" alt="Navigate Icon" />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Footer;
