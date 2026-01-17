import React from "react";
import styled from "styled-components";
import { Award, Users, Clock, Shield, Zap, Headphones, CheckCircle } from "lucide-react";

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, ${props => props.theme.background.primary} 0%, ${props => props.theme.background.secondary} 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.border.light}, transparent);
  }
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
  color: ${props => props.theme.text.primary};
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
    background: ${props => props.theme.gradients.primaryHorizontal};
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.background.card};
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${props => props.theme.border.light};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(30, 56, 136, 0.15);
    border-color: ${props => props.theme.primary};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.gradients.primaryHorizontal};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${props => props.theme.background.card};
  box-shadow: 0 8px 20px rgba(30, 56, 136, 0.25);
  transition: all 0.4s ease;
  
  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 30px rgba(30, 56, 136, 0.35);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: var(--medium-gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const FeatureItem = styled.li`
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

const StatsSection = styled.div`
  background: ${props => props.theme.gradients.primary};
  border-radius: 16px;
  padding: 4rem 2rem;
  margin-top: 4rem;
  box-shadow: 0 20px 40px rgba(30, 56, 136, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled.div`
  color: var(--${props => props.theme.background.card});
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const features = [
  {
    id: 1,
    icon: <Award size={32} />,
    title: "Industry Expertise",
    description: "Over 15 years of experience delivering technology solutions across various industries.",
    benefits: ["Certified professionals", "Industry best practices", "Proven methodologies"],
  },
  {
    id: 2,
    icon: <Users size={32} />,
    title: "Dedicated Support",
    description: "24/7 technical support and dedicated account managers for personalized service.",
    benefits: ["24/7 help desk", "Dedicated account managers", "Proactive monitoring"],
  },
  {
    id: 3,
    icon: <Clock size={32} />,
    title: "Rapid Response",
    description: "Quick response times and efficient problem resolution to minimize downtime.",
    benefits: ["15-minute response time", "Same-day resolution", "Emergency support"],
  },
  {
    id: 4,
    icon: <Shield size={32} />,
    title: "Security First",
    description: "Enterprise-grade security measures to protect your data and infrastructure.",
    benefits: ["Multi-layer security", "Compliance certified", "Regular security audits"],
  },
  {
    id: 5,
    icon: <Zap size={32} />,
    title: "Performance Optimized",
    description: "Optimized solutions designed for maximum performance and scalability.",
    benefits: ["Performance monitoring", "Scalable architecture", "Load balancing"],
  },
  {
    id: 6,
    icon: <Headphones size={32} />,
    title: "Training & Support",
    description: "Comprehensive training programs and ongoing support for your team.",
    benefits: ["Custom training programs", "Documentation & guides", "Ongoing support"],
  },
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "15+", label: "Years Experience" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" },
];

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Why Choose Us</SectionTitle>
          <SectionSubtitle>We deliver exceptional value through expertise, reliability, and customer-focused solutions</SectionSubtitle>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.benefits.map((benefit, index) => (
                  <FeatureItem key={index}>
                    <CheckCircle size={16} />
                    {benefit}
                  </FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <StatsSection>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </StatsSection>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
