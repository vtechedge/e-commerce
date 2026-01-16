import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react";

const AboutSectionContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
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
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #1e3888 0%, #06b6d4 100%);
    border-radius: 2px;
  }
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
  color: #1a1a1a;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  svg {
    color: #10b981;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    padding-left: 0.5rem;
    color: #1e3888;
    
    svg {
      transform: scale(1.2);
    }
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(30, 56, 136, 0.3);
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(30, 56, 136, 0.4);
    gap: 0.75rem;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const VisualSection = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(30, 56, 136, 0.15);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(30, 56, 136, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(30, 56, 136, 0.1) 0%, transparent 50%);
    z-index: 1;
    pointer-events: none;
  }
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
  background: linear-gradient(135deg, #1e3888 0%, #06b6d4 100%);
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
              <Image 
                src="/products/about.jpg" 
                alt="Professional Team Working" 
                width={600} 
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
                priority
              />
            </ImageContainer>
          </VisualSection>
        </AboutGrid>
      </Container>
    </AboutSectionContainer>
  );
};

export default AboutSection;
