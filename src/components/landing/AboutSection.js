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
  color: #1e3888;
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
    <Section bgColor="#f8f9fa">
      <Container>
        <ContentWrapper>
          <Content>
            <Title>Transform Your Business with Our IT Solutions</Title>
            <Description>
              We are a leading IT solutions provider dedicated to helping businesses thrive in the digital age. Our comprehensive suite of services combines cutting-edge technology
              with expert knowledge to deliver results that drive growth and efficiency.
            </Description>
            <Description>
              With years of experience and a team of certified professionals, we understand the unique challenges businesses face in today's rapidly evolving technological
              landscape. We work closely with our clients to develop customized solutions that address their specific needs and objectives.
            </Description>
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
