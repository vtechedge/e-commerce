import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.bgColor || "white"};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #1e3888;
  margin-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <SectionHeading>About Us</SectionHeading>
        <ContentWrapper>
          <Content>
            <Title>About Vtechsecure</Title>
            <Description>
              At Vtechsecure, we don't just manage technology — we empower your business through it. With deep domain knowledge in healthcare and pharmaceutical IT, and scalable
              solutions for enterprise, retail, government, and more, we design and deliver fully managed services tailored to your unique operations.
            </Description>
            <Description>Whether you're setting up a new clinic or securing a nationwide infrastructure, we're here to make technology your strongest asset.</Description>
          </Content>
          <ImageWrapper>
            <Image src="/products/about.jpg" alt="IT Solutions" fill style={{ objectFit: "cover" }} priority />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default AboutSection;
