import React from "react";
import styled from "styled-components";
import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react";

const AboutSectionContainer = styled.section`
  padding: 2rem 0;
  background-color: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentSection = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--medium-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Description = styled.p`
  color: var(--medium-gray);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--dark-gray);
  font-weight: 500;

  svg {
    color: var(--success-green);
    flex-shrink: 0;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #1e3888 0%, #2d4ba8 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(30, 56, 136, 0.25);
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 56, 136, 0.35);
  }
`;

const VisualSection = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

const MainImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, var(--accent-blue) 0%, var(--light-gray) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
  font-size: 1.5rem;
  font-weight: 600;
`;

const StatsOverlay = styled.div`
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  background: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--medium-gray);
  font-weight: 500;
`;

const FloatingCard = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
  background: var(--white);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 180px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    margin-bottom: 1rem;
  }
`;

const FloatingIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;

const FloatingContent = styled.div``;

const FloatingTitle = styled.div`
  font-weight: 600;
  color: var(--dark-gray);
  font-size: 0.9rem;
`;

const FloatingSubtitle = styled.div`
  color: var(--medium-gray);
  font-size: 0.8rem;
`;

const AboutSection = () => {
  const features = [
    "15+ years of industry experience",
    "Certified technology professionals",
    "24/7 support and monitoring",
    "Custom solutions for every business",
    "Proven track record of success",
  ];

  const stats = [
    { number: "500+", label: "Clients" },
    { number: "15+", label: "Years" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <AboutSectionContainer>
      <Container>
        <AboutGrid>
          <ContentSection>
            <SectionTitle>Your Trusted Technology Partner</SectionTitle>
            <SectionSubtitle>We deliver innovative technology solutions that drive business growth and operational excellence.</SectionSubtitle>

            <FeaturesList>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <CheckCircle size={20} />
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>

            <CTAButton onClick={() => window.location.href = '/about'}>
              Learn More About Us <ArrowRight size={16} />
            </CTAButton>
          </ContentSection>

          <VisualSection>
            <ImageContainer>
              <img src="/products/about.jpg" alt="Professional Team Working" style={{ width: "100%", height: "auto", borderRadius: "1rem" }} />
            </ImageContainer>
          </VisualSection>
        </AboutGrid>
      </Container>
    </AboutSectionContainer>
  );
};

export default AboutSection;
