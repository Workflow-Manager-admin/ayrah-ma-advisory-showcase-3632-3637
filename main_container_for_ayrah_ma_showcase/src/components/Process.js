import React from 'react';
import Section from './common/Section';
import ProcessStep from './common/ProcessStep';

/**
 * Process section component displaying the M&A process steps
 */
const Process = () => {
  const processSteps = [
    {
      number: 1,
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your business goals, timeline, and strategic objectives."
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Creation of a targeted approach based on market conditions and your unique situation."
    },
    {
      number: 3,
      title: "Market Approach",
      description: "Strategic outreach to qualified prospects using our extensive network and industry knowledge."
    },
    {
      number: 4,
      title: "Negotiation & Due Diligence",
      description: "Expert representation through offer evaluation, negotiation, and comprehensive due diligence."
    },
    {
      number: 5,
      title: "Closing & Implementation",
      description: "Seamless transaction closing and guidance through the transition and integration phases."
    }
  ];

  return (
    <Section 
      id="process"
      background="navy"
      title="Our M&A Process"
      subtitle="A methodical approach to successful transactions"
    >
      <div className="process-container">
        {processSteps.map((step, index) => (
          <ProcessStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            showConnector={index < processSteps.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Process;
