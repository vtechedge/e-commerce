import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #1e3888 0%, #2d5aa0 100%);
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background-color: #10b981;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;

  &:hover {
    background-color: #059669;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  background-color: white;
  color: black;
  border: 2px solid white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;

  &:hover {
    background-color: white;
    color: #1e3888;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;


function Touch() {
  const handleConsultation = () => {
    // Handle consultation request
    console.log("Request consultation clicked");
  };

  const handleAdvisor = () => {
    // Handle speak to advisor request
    console.log("Speak to advisor clicked");
  };

  return (
    <Section>
      <Container>
        <Content>
          <Title>Let's Build a Future-Ready IT Foundation for Your Business</Title>
          <Description>Get in touch with our experts and discover how Vtechsecure can transform the way you manage technology.</Description>
          <ButtonGroup>
            <PrimaryButton onClick={handleConsultation}>Request a Free Consultation</PrimaryButton>
            <SecondaryButton onClick={handleAdvisor}>Speak to an IT Advisor</SecondaryButton>
          </ButtonGroup>
        </Content>
      </Container>
    </Section>
  );
}

export default Touch;
