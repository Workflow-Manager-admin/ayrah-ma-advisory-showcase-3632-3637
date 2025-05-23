import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

/**
 * ServiceCard component for displaying services
 * 
 * @param {object} icon - React icon component
 * @param {string} title - Card title
 * @param {string} description - Service description
 * @param {string} linkText - Text for the "Learn more" link
 * @param {string} linkUrl - URL for the "Learn more" link
 */
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  linkText = 'Learn More',
  linkUrl = '#',
  className = '',
}) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="service-icon-container">
        {Icon && <Icon className="service-icon" />}
      </div>
      <div className="service-content">
        <h4 className="service-title">{title}</h4>
        <p className="service-description">{description}</p>
        <a href={linkUrl} className="service-link">
          {linkText} <HiChevronRight className="service-link-icon" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
