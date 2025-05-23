import React from 'react';
import Section from './common/Section';
import CaseStudyCard from './common/CaseStudyCard';

/**
 * Case Studies section component displaying success stories
 */
const CaseStudies = () => {
  const caseStudies = [
    {
      industry: "TECHNOLOGY",
      transactionType: "Company Sale",
      metric: "$45M Transaction Value",
      challenge: "A mid-sized software company faced intense market competition and needed to achieve liquidity for its founders while ensuring continued growth.",
      solution: "We conducted a targeted search for strategic buyers, positioned the company's proprietary technology as a key differentiator, and managed a competitive bidding process.",
      results: "Achieved a 7.5x EBITDA multiple, 40% higher than industry average, with favorable terms including reduced earnout requirements."
    },
    {
      industry: "HEALTHCARE",
      transactionType: "Strategic Acquisition",
      metric: "3 Year Payback Period",
      challenge: "A healthcare services provider sought to expand service offerings and geographical reach through strategic acquisition.",
      solution: "We identified complementary targets, conducted thorough financial analysis, and negotiated favorable terms that protected against identified compliance risks.",
      results: "Client expanded into two new states, added service lines that increased revenue by 35%, and achieved integration synergies that exceeded projections."
    },
    {
      industry: "MANUFACTURING",
      transactionType: "Ownership Transition",
      metric: "100% Family Retention",
      challenge: "A third-generation family business needed to transition ownership while preserving the company legacy and culture.",
      solution: "We designed a phased succession plan, structured financing that minimized tax implications, and established governance systems for sustainable operations.",
      results: "Successfully transferred ownership while retaining key family leadership, preserved employee stability, and positioned the company for continued growth."
    }
  ];

  return (
    <Section 
      id="case-studies"
      title="Success Stories"
      subtitle="Real results from our strategic advisory services"
      background="light"
    >
      <div className="case-studies-grid">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            industry={study.industry}
            transactionType={study.transactionType}
            metric={study.metric}
            challenge={study.challenge}
            solution={study.solution}
            results={study.results}
          />
        ))}
      </div>
    </Section>
  );
};

export default CaseStudies;
