import React from "react";
import styled from "styled-components";
import { Shield, Cloud, Network, Server, Database, Monitor, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = styled.section`
  padding: 2rem 0;
  background-color: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark-gray);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--medium-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background: var(--white);
  border: 1px solid var(--border-gray);
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-blue);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-blue) 0%, var(--light-gray) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--primary-blue);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--medium-gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--medium-gray);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  svg {
    color: var(--success-green);
    flex-shrink: 0;
  }
`;

const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: gap 0.3s ease;

  &:hover {
    gap: 0.75rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  color: var(--white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
  }
`;

const services = [
  {
    id: 1,
    icon: <Shield size={28} />,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services to protect your organization from evolving cyber threats.",
    features: ["Threat monitoring & detection", "Vulnerability assessments", "Security compliance", "Incident response"],
    link: "/services/cybersecurity",
  },
  {
    id: 2,
    icon: <Cloud size={28} />,
    title: "Cloud Services",
    description: "Scalable cloud solutions to modernize your infrastructure and drive digital transformation.",
    features: ["Cloud migration", "Infrastructure as a Service", "Cloud security", "Performance optimization"],
    link: "/services/cloud",
  },
  {
    id: 3,
    icon: <Network size={28} />,
    title: "Network Solutions",
    description: "Reliable networking infrastructure designed for performance, security, and scalability.",
    features: ["Network design & implementation", "Wireless solutions", "Network monitoring", "Performance optimization"],
    link: "/services/networking",
  },
  {
    id: 4,
    icon: <Server size={28} />,
    title: "Infrastructure Management",
    description: "End-to-end infrastructure solutions to keep your systems running efficiently.",
    features: ["Server management", "Virtualization", "Backup & recovery", "System monitoring"],
    link: "/services/infrastructure",
  },
  {
    id: 5,
    icon: <Database size={28} />,
    title: "Data Management",
    description: "Comprehensive data solutions for storage, analytics, and business intelligence.",
    features: ["Data warehousing", "Business intelligence", "Data analytics", "Compliance & governance"],
    link: "/services/data",
  },
  {
    id: 6,
    icon: <Monitor size={28} />,
    title: "Managed IT Services",
    description: "Proactive IT management to reduce costs and improve operational efficiency.",
    features: ["24/7 monitoring", "Help desk support", "Proactive maintenance", "Strategic planning"],
    link: "/services/managed-it",
  },
];

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>Comprehensive technology solutions designed to meet your business needs and drive growth</SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>
                    <CheckCircle size={16} />
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
              <ServiceLink href={service.link}>
                Learn More <ArrowRight size={16} />
              </ServiceLink>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTAButton>View All Services</CTAButton>
      </Container>
    </ServicesSection>
  );
};

export default Services;
