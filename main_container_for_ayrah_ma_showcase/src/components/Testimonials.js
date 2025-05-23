import React, { useState } from 'react';
import Section from './common/Section';
import TestimonialSlide from './common/TestimonialSlide';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

/**
 * Testimonials section component with client testimonials in a carousel
 */
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Ayrah's strategic guidance was instrumental in navigating our complex acquisition. Their attention to detail during due diligence uncovered opportunities we hadn't considered, ultimately increasing the value of the transaction significantly.",
      name: "Sarah Johnson",
      position: "CEO, Healthcare Services Company"
    },
    {
      quote: "The Ayrah team demonstrated exceptional expertise in positioning our technology firm for sale. Their approach attracted multiple qualified buyers, resulting in a competitive process that exceeded our valuation expectations.",
      name: "Michael Roberts",
      position: "Founder, Enterprise Software Company"
    },
    {
      quote: "As a family-owned business, finding the right partner for our succession planning was critical. Ayrah understood our priorities beyond just financials and helped us structure a transition that preserved our legacy and culture.",
      name: "David Wilson",
      position: "Owner, Manufacturing Business"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section 
      id="testimonials"
      title="Client Testimonials"
    >
      <div className="testimonials-carousel">
        <button 
          className="testimonial-arrow testimonial-prev" 
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <HiChevronLeft size={24} />
        </button>
        
        <div className="testimonial-slides-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-slide-wrapper ${index === activeIndex ? 'active' : ''}`}
            >
              <TestimonialSlide
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
              />
            </div>
          ))}
        </div>
        
        <button 
          className="testimonial-arrow testimonial-next" 
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <HiChevronRight size={24} />
        </button>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
