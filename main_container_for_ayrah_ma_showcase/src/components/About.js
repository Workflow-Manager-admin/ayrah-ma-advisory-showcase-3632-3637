import React from 'react';
import Section from './common/Section';
import PlaceholderImages from '../assets/images/placeholder';
import Button from './common/Button';

/**
 * About section component with company information and image
 */
const About = () => {
  return (
    <Section 
      id="about"
      title="About Ayrah"
      background="light"
    >
      <div className="row about-section">
        <div className="col about-image-container">
          <img 
            src={PlaceholderImages.aboutImage} 
            alt="Ayrah M&A Advisory team" 
            className="about-image"
          />
        </div>
        <div className="col about-content">
          <p className="mb-3">
            Ayrah LLC is a premier mergers and acquisitions advisory firm dedicated to 
            helping business owners and corporate executives navigate complex transactions 
            with confidence and achieve optimal outcomes.
          </p>
          <p className="mb-3">
            With decades of combined experience across various industries, our seasoned 
            team of M&A specialists brings deep expertise, strategic insight, and a 
            personalized approach to every engagement.
          </p>
          
          <div className="key-values">
            <div className="key-value-point mb-2">
              <h4>Client-Focused Approach</h4>
              <p>We prioritize your specific goals and circumstances to deliver tailored solutions.</p>
            </div>
            <div className="key-value-point mb-2">
              <h4>Transaction Excellence</h4>
              <p>Our proven methodology ensures rigorous execution across all stages of the M&A process.</p>
            </div>
            <div className="key-value-point mb-2">
              <h4>Value Maximization</h4>
              <p>We identify and leverage strategic opportunities to enhance transaction value.</p>
            </div>
          </div>
          
          <Button variant="primary" className="mt-3">Learn More</Button>
        </div>
      </div>
    </Section>
  );
};

export default About;
