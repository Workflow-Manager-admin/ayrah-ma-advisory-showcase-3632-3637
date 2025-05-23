import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiChevronUp } from 'react-icons/hi';

/**
 * Footer component with company information and navigation links
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">AYRAH</div>
            <p className="footer-description">
              Providing expert M&A guidance for businesses seeking meaningful growth and 
              successful transitions. Specializing in mergers, acquisitions, and strategic advisory services.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Sell-Side M&A Advisory</a></li>
              <li><a href="#services">Buy-Side M&A Advisory</a></li>
              <li><a href="#services">Due Diligence Support</a></li>
              <li><a href="#services">Valuation Services</a></li>
              <li><a href="#services">Strategic Planning</a></li>
              <li><a href="#services">Post-Merger Integration</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <address className="footer-address">
              100 Financial Avenue<br />
              New York, NY 10001<br /><br />
              <strong>Phone:</strong> (555) 123-4567<br />
              <strong>Email:</strong> contact@ayrahadvisory.com
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Ayrah M&A Advisory. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <HiChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
