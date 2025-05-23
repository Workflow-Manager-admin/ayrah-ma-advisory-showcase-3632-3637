import React from 'react';

/**
 * CaseStudyCard component for displaying case studies
 * 
 * @param {string} industry - Client industry/sector
 * @param {string} transactionType - Type of transaction
 * @param {string} metric - Key achievement metric
 * @param {string} challenge - Challenge description
 * @param {string} solution - Solution description
 * @param {string} results - Results description
 */
const CaseStudyCard = ({
  industry,
  transactionType,
  metric,
  challenge,
  solution,
  results,
  className = '',
}) => {
  return (
    <div className={`case-study-card ${className}`}>
      <div className="card-header">
        <span className="industry-badge">{industry}</span>
        <span className="transaction-type">{transactionType}</span>
      </div>
      <div className="card-body">
        <div className="metric">{metric}</div>
        <h5 className="challenge-title">Challenge</h5>
        <p className="challenge-text">{challenge}</p>
        <h5 className="solution-title">Solution</h5>
        <p className="solution-text">{solution}</p>
        <h5 className="results-title">Results</h5>
        <p className="results-text">{results}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
