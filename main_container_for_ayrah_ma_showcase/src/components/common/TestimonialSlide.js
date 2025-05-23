import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

/**
 * TestimonialSlide component for displaying client testimonials
 * 
 * @param {string} quote - The testimonial text
 * @param {string} name - Client name
 * @param {string} position - Client position/company
 */
const TestimonialSlide = ({
  quote,
  name,
  position,
  className = '',
}) => {
  return (
    <div className={`testimonial-slide ${className}`}>
      <FaQuoteLeft className="quote-icon" />
      <p className="testimonial-text">{quote}</p>
      <div className="client-info">
        <h5 className="client-name">{name}</h5>
        <p className="client-position">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialSlide;
