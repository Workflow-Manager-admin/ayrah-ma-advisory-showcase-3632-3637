import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Button from './common/Button';

/**
 * Navigation component for the Ayrah M&A Advisory website
 * Includes responsive behavior and scroll effects
 */
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (e) => {
    // Get the target section id from href
    const targetId = e.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      e.preventDefault();
      
      // Calculate position to scroll to (accounting for header height)
      const headerHeight = 80; // Height of header in pixels
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      // Smooth scroll to target position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">AYRAH</div>
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              <li><a href="#home" onClick={handleLinkClick}>HOME</a></li>
              <li><a href="#about" onClick={handleLinkClick}>ABOUT</a></li>
              <li><a href="#services" onClick={handleLinkClick}>SERVICES</a></li>
              <li><a href="#process" onClick={handleLinkClick}>PROCESS</a></li>
              <li><a href="#case-studies" onClick={handleLinkClick}>CASE STUDIES</a></li>
              <li><a href="#contact" onClick={handleLinkClick}>CONTACT</a></li>
            </ul>
            <Button variant="gold">Schedule Consultation</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={handleLinkClick}>HOME</a></li>
          <li><a href="#about" onClick={handleLinkClick}>ABOUT</a></li>
          <li><a href="#services" onClick={handleLinkClick}>SERVICES</a></li>
          <li><a href="#process" onClick={handleLinkClick}>PROCESS</a></li>
          <li><a href="#case-studies" onClick={handleLinkClick}>CASE STUDIES</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>CONTACT</a></li>
        </ul>
        <div className="mobile-nav-cta">
          <Button variant="gold" fullWidth>Schedule Consultation</Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
