import React from 'react';
import Section from './common/Section';
import ServiceCard from './common/ServiceCard';
import { 
  FaHandshake, 
  FaSearchDollar, 
  FaClipboardCheck,
  FaChartLine, 
  FaLightbulb, 
  FaPuzzlePiece 
} from 'react-icons/fa';

/**
 * Services section component with grid of service cards
 */
const Services = () => {
  const services = [
    {
      icon: FaHandshake,
      title: "Sell-Side M&A Advisory",
      description: "Strategic guidance for business owners seeking to maximize value through a full or partial sale of their company."
    },
    {
      icon: FaSearchDollar,
      title: "Buy-Side M&A Advisory",
      description: "Comprehensive acquisition support including target identification, valuation, negotiation, and integration planning."
    },
    {
      icon: FaClipboardCheck,
      title: "Due Diligence Support",
      description: "Thorough analysis of financial, operational, and strategic aspects to identify risks and opportunities."
    },
    {
      icon: FaChartLine,
      title: "Valuation Services",
      description: "Sophisticated business valuation utilizing industry-specific metrics and market comparables."
    },
    {
      icon: FaLightbulb,
      title: "Strategic Planning",
      description: "Development of growth strategies and exit plans aligned with shareholder objectives."
    },
    {
      icon: FaPuzzlePiece,
      title: "Post-Merger Integration",
      description: "Structured approaches to combining operations, culture, and systems for successful transitions."
    }
  ];

  return (
    <Section 
      id="services"
      title="Our Advisory Services"
      subtitle="Comprehensive M&A expertise tailored to your business needs"
    >
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
