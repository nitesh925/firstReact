// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css' // Link to a separate CSS file for styles
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
         
        </div>
        <div className="footer-section">
        <h4>Follow Us</h4>
        <ul className="social-links">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" /> Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; Nitesh Devarsetty. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
