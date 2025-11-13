
import React from 'react';
import './Footer.css';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
      
        <div className="footer-socials">
          <h3 className="visually-hidden">Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/arc1183" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/arc1183" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:abhishekrajchowdary14@gmail.com" aria-label="Email Me">
              <FaEnvelope size={24} />
            </a>
     
          </div>
        </div>

        <div className="footer-info">
          <p className="footer-message">
            Thank you for visiting my portfolio!
          </p>
          <p className="footer-copyright">
         &copy; {currentYear} Abhishek. Code dedicated to the &nbsp;
         <a href="https://github.com/yourusername/your-repo-name/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
         MIT License</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;