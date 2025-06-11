import React from "react";
import styled from "styled-components";

const services = {
  "IT Services": [
    "IT Support Services",
    "Network Management",
    "Server Management",
    "Cybersecurity",
    "Backup and Disaster Recovery",
    "Cloud Services Management",
    "Software and Hardware Maintenance",
    "Remote Monitoring and Management (RMM)",
    "Consulting and Strategic IT Planning",
    "Compliance and Regulatory Support",
    "Unified Communications",
    "Mobile Device Management (MDM)",
    "Software Development and Customization",
    "Website Management and Hosting",
    "Surveillance and Security Systems",
    "Data Analytics and Business Intelligence",
    "DevOps Support",
  ],
};

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.bgColor || "white"};
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #4b5563;
`;

const CTAButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const Services = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>Comprehensive IT solutions tailored to meet your business needs</HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          {Object.entries(services).map(([category, items], index) => (
            <div key={index}>
              <CategoryTitle>{category}</CategoryTitle>
              <ServiceGrid>
                {items.map((service, serviceIndex) => (
                  <ServiceCard key={serviceIndex}>
                    <ServiceTitle>{service}</ServiceTitle>
                  </ServiceCard>
                ))}
              </ServiceGrid>
            </div>
          ))}
        </Container>
      </Section>

      <Section bgColor="#f9fafb">
        <Container style={{ textAlign: "center" }}>
          <CategoryTitle>Ready to Get Started?</CategoryTitle>
          <p style={{ fontSize: "1.25rem", color: "#4b5563", maxWidth: "42rem", margin: "0 auto 2rem" }}>
            Contact us today to discuss how our services can help your business grow and succeed in the digital age.
          </p>
          <CTAButton>Contact Us</CTAButton>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Services;
