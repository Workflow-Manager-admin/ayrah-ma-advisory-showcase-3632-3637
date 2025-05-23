import React, { useState } from 'react';
import Section from './common/Section';
import Button from './common/Button';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import PlaceholderImages from '../assets/images/placeholder';

/**
 * Contact section component with form and contact information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, this would send the form data to a backend
    // For this showcase, we'll simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your inquiry. Our team will contact you shortly.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <Section 
      id="contact"
      title="Get in Touch"
      subtitle="Schedule a consultation or inquire about our services"
    >
      <div className="contact-container">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">Select a service</option>
                <option value="sell-side">Sell-Side M&A Advisory</option>
                <option value="buy-side">Buy-Side M&A Advisory</option>
                <option value="due-diligence">Due Diligence Support</option>
                <option value="valuation">Valuation Services</option>
                <option value="strategic-planning">Strategic Planning</option>
                <option value="post-merger">Post-Merger Integration</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
              />
            </div>
            
            <div className="submit-button-container">
              <Button type="submit" variant="primary" fullWidth>Submit Inquiry</Button>
            </div>
            
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
        
        <div className="contact-info-container">
          <div className="contact-info">
            <div className="contact-info-item">
              <HiMail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>contact@ayrahadvisory.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <HiPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <HiLocationMarker className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>100 Financial Avenue<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
          
          <div className="contact-image-container">
            <img 
              src={PlaceholderImages.officeLocation} 
              alt="Ayrah M&A Advisory office" 
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
