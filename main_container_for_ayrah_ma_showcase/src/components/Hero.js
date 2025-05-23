import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Button from './common/Button';
import PlaceholderImages from '../assets/images/placeholder';

/**
 * Hero section component with background image and CTA buttons
 */
const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = 80; // Height of header in pixels
      const targetPosition = aboutSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${PlaceholderImages.heroBackground})` }}
        role="img" 
        aria-label="Business professionals in a meeting"
      />
      <div className="overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title slide-up">
            Strategic M&A Advisory for Meaningful Business Growth
          </h1>
          <p className="hero-subtitle slide-up animation-delay-1">
            Ayrah LLC provides expert guidance for mergers, acquisitions, and 
            business transitions that create lasting value.
          </p>
          <div className="cta-container fade-in animation-delay-2">
            <Button 
              variant="gold" 
              size="large" 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Explore Our Services
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <HiChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
