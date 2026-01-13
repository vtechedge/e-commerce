import React from "react";
import styled from "styled-components";
import { Award, Users, Clock, Shield, Zap, Headphones, CheckCircle } from "lucide-react";

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background-color: var(--light-gray);
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FeatureCard = styled.div`
  background: var(--white);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--border-gray);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e3888 0%, #2d4ba8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--white);
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
  background: linear-gradient(135deg, #1e3888 0%, #152a66 100%);
  border-radius: 8px;
  padding: 3rem 2rem;
  margin-top: 3rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled.div`
  color: var(--white);
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
