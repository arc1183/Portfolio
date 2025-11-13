
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Profilepic from '../../assets/Profilepic.jpg';
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Exp', href: '#experience-education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-intro'); 
  useEffect(() => {
    const handleScroll = () => {
      
        let currentSection = 'hero-intro';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
         if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">

        <a href="#hero-intro" className="navbar-logo-group">
          <img src={Profilepic} alt="Profile" className="navbar-profile-pic" />
          <span className="navbar-logo">
            Abhishek
          </span>
        </a>
        <ul className="navbar-links desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className={link.href.substring(1) === activeSection ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'} 
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="navbar-links mobile">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className={link.href.substring(1) === activeSection ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};


export default Navbar;