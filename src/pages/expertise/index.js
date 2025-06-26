import React from "react";
import Head from "next/head";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ExpertiseCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Expertise() {
  const expertiseAreas = [
    {
      title: "Digital Transformation",
      description: "We help businesses modernize their operations through cutting-edge digital solutions, from cloud migration to process automation.",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat monitoring, vulnerability assessments, and compliance management to protect your business.",
    },
    {
      title: "Cloud Solutions",
      description: "Expert cloud infrastructure management, migration services, and optimization to scale your business efficiently.",
    },
    {
      title: "Network Management",
      description: "Complete network infrastructure setup, monitoring, and maintenance to ensure optimal performance and reliability.",
    },
    {
      title: "Software Development",
      description: "Custom application development and integration services tailored to your specific business needs and requirements.",
    },
    {
      title: "IT Consulting",
      description: "Strategic IT planning and consulting services to help you make informed technology decisions for your business growth.",
    },
  ];

  return (
    <PageContainer>
      <Head>
        <title>Expertise - IT Solutions Provider</title>
        <meta name="description" content="Our expertise in IT solutions and digital transformation" />
      </Head>

      <HeroSection>
        <Container>
          <HeroTitle>Our Expertise</HeroTitle>
          <HeroSubtitle>
            We are a leading IT solutions provider dedicated to helping businesses achieve their digital transformation goals through innovative technology solutions and expert
            support.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Areas of Expertise</SectionTitle>
          <ExpertiseGrid>
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard key={index}>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </ExpertiseCard>
            ))}
          </ExpertiseGrid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}

export default Expertise;
