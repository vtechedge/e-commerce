import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Shield, Cloud, Network, Server, Database, Monitor, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fb 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #1e3888 0%, #06b6d4 100%);
    border-radius: 2px;
  }
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
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(30, 56, 136, 0.15);
    border-color: #1e3888;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1e3888 0%, #06b6d4 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(30, 56, 136, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(50%, -50%);
    transition: all 0.4s ease;
  }
  
  &:hover::after {
    transform: translate(30%, -30%) scale(1.5);
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1e3888 0%, #2d4ba8 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  box-shadow: 0 4px 15px rgba(30, 56, 136, 0.2);
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 6px 20px rgba(30, 56, 136, 0.3);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
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
  color: #1e3888;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    gap: 0.75rem;
    color: #06b6d4;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #1e3888 0%, #06b6d4 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(30, 56, 136, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(30, 56, 136, 0.4);
  }
`;

const services = [
  {
    id: 1,
    icon: <Shield size={28} />,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services to protect your organization from evolving cyber threats.",
    features: ["Threat monitoring & detection", "Vulnerability assessments", "Security compliance", "Incident response"],
    link: "/coming-soon",
  },
  {
    id: 2,
    icon: <Cloud size={28} />,
    title: "Cloud Services",
    description: "Scalable cloud solutions to modernize your infrastructure and drive digital transformation.",
    features: ["Cloud migration", "Infrastructure as a Service", "Cloud security", "Performance optimization"],
    link: "/coming-soon",
  },
  {
    id: 3,
    icon: <Network size={28} />,
    title: "Network Solutions",
    description: "Reliable networking infrastructure designed for performance, security, and scalability.",
    features: ["Network design & implementation", "Wireless solutions", "Network monitoring", "Performance optimization"],
    link: "/coming-soon",
  },
  {
    id: 4,
    icon: <Server size={28} />,
    title: "Infrastructure Management",
    description: "End-to-end infrastructure solutions to keep your systems running efficiently.",
    features: ["Server management", "Virtualization", "Backup & recovery", "System monitoring"],
    link: "/coming-soon",
  },
  {
    id: 5,
    icon: <Database size={28} />,
    title: "Data Management",
    description: "Comprehensive data solutions for storage, analytics, and business intelligence.",
    features: ["Data warehousing", "Business intelligence", "Data analytics", "Compliance & governance"],
    link: "/coming-soon",
  },
  {
    id: 6,
    icon: <Monitor size={28} />,
    title: "Managed IT Services",
    description: "Proactive IT management to reduce costs and improve operational efficiency.",
    features: ["24/7 monitoring", "Help desk support", "Proactive maintenance", "Strategic planning"],
    link: "/coming-soon",
  },
];

const Services = () => {
  const router = useRouter();

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

        <CTAButton onClick={() => router.push('/coming-soon')}>View All Services</CTAButton>
      </Container>
    </ServicesSection>
  );
};

export default Services;
