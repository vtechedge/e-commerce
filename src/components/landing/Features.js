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
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #4b5563;
`;

const features = [
  {
    title: "Expert Team",
    description: "Certified professionals with years of experience",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring",
  },
  {
    title: "Custom Solutions",
    description: "Tailored IT solutions for your specific needs",
  },
  {
    title: "Proven Track Record",
    description: "Successfully serving businesses across industries",
  },
];

const Features = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Why Choose Us</SectionTitle>
        <Grid>
          {features.map((feature, index) => (
            <Card key={index}>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
