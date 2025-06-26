import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.bgColor || "white"};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e3888;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const CheckIcon = styled.div`
  background-color: #10b981;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const features = [
  {
    title: "Deep healthcare & pharma IT expertise",
    description: "Specialized knowledge in healthcare and pharmaceutical IT systems, ensuring compliance and optimal performance for medical practices and pharma companies.",
  },
  {
    title: "End-to-end support: Setup → Scaling",
    description: "Complete IT lifecycle management from initial setup and implementation to ongoing scaling and optimization as your business grows.",
  },
  {
    title: "Compliance-first approach (HIPAA, GDPR, PCI DSS)",
    description: "Built-in compliance frameworks ensuring your IT infrastructure meets healthcare, data protection, and payment security standards.",
  },
  {
    title: "Flexible support for any industry or business size",
    description: "Adaptable solutions that work for startups, SMBs, enterprises, and organizations across all industry verticals.",
  },
  {
    title: "Clear, reliable communication from start to finish",
    description: "Transparent project management with regular updates, clear timelines, and dedicated support channels for seamless collaboration.",
  },
];

const Features = () => {
  return (
    <Section bgColor="#f8fafc">
      <Container>
        <SectionTitle>Why Leading Brands Choose Vtechsecure</SectionTitle>
        <SectionSubtitle>Trusted by businesses across industries for our comprehensive IT solutions and unwavering commitment to excellence</SectionSubtitle>
        <Grid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <CheckIcon>✓</CheckIcon>
              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureContent>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
