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

function Hardware() {
  return (
    <PageContainer>
      <Head>
        <title>Hardware - IT Solutions Provider</title>
        <meta name="description" content="Quality hardware solutions for your business" />
      </Head>

      <HeroSection>
        <Container>
          <HeroTitle>Hardware Solutions</HeroTitle>
          <HeroSubtitle>Quality hardware products and solutions to meet your business needs.</HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Coming Soon</SectionTitle>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#666" }}>Our hardware catalog is currently under development. Check back soon for quality products!</p>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}

export default Hardware;
