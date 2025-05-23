import React from 'react';

/**
 * Section component for consistent section styling
 * 
 * @param {string} id - The section ID for navigation
 * @param {string} background - The background style (light, navy, white)
 * @param {string} title - The section title
 * @param {string} subtitle - The section subtitle
 * @param {object} children - Section content
 * @param {boolean} withContainer - Whether to wrap the content in a container
 */
const Section = ({
  id,
  background = 'white',
  title,
  subtitle,
  children,
  withContainer = true,
  className = '',
  ...props
}) => {
  // Determine background class
  const bgClass = 
    background === 'navy' ? 'section-bg-navy' :
    background === 'light' ? 'section-bg-light' : '';
  
  // Combine classes
  const sectionClasses = [
    'section',
    bgClass,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <section id={id} className={sectionClasses} {...props}>
      {withContainer ? (
        <div className="container">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          {children}
        </div>
      ) : (
        <>
          {title && (
            <div className="container">
              <h2 className="section-title">{title}</h2>
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>
          )}
          {children}
        </>
      )}
    </section>
  );
};

export default Section;
