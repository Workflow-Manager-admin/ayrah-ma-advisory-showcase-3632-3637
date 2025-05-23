import React from 'react';

/**
 * ProcessStep component for the process timeline
 * 
 * @param {number} number - Step number
 * @param {string} title - Step title
 * @param {string} description - Step description
 * @param {boolean} showConnector - Whether to show the connecting line
 */
const ProcessStep = ({
  number,
  title,
  description,
  showConnector = true,
  className = '',
}) => {
  return (
    <div className={`process-step ${className}`}>
      <div className="step-number-circle">
        {number}
      </div>
      <div className="step-content">
        <h4 className="step-title">{title}</h4>
        <p className="step-description">{description}</p>
      </div>
      {showConnector && <div className="connecting-line"></div>}
    </div>
  );
};

export default ProcessStep;
