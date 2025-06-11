import React from "react";
import Image from "next/image";
import styled from "styled-components";

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
  font-size: 2.5rem;
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

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const VideoContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  overflow: hidden;
  aspect-ratio: 16/9;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  margin: 0 auto 1rem;
  border-radius: 9999px;
  overflow: hidden;
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TeamMemberPosition = styled.p`
  color: #4b5563;
`;

const About = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroTitle>About Our Company</HeroTitle>
          <HeroSubtitle>
            We are a leading IT solutions provider dedicated to helping businesses achieve their digital transformation goals through innovative technology solutions and expert
            support.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Company Introduction</SectionTitle>
          <VideoContainer>
            <Video controls poster="/video-thumbnail.jpg">
              <source src="/company-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </VideoContainer>
        </Container>
      </Section>

      <Section bgColor="#f9fafb">
        <Container>
          <Grid>
            <div>
              <SectionTitle>Our Mission</SectionTitle>
              <p style={{ color: "#4b5563", fontSize: "1.125rem" }}>
                To empower businesses with cutting-edge IT solutions that drive growth, enhance efficiency, and ensure security in an ever-evolving digital landscape.
              </p>
            </div>
            <div>
              <SectionTitle>Our Vision</SectionTitle>
              <p style={{ color: "#4b5563", fontSize: "1.125rem" }}>
                To be the most trusted IT partner for businesses worldwide, known for our innovation, reliability, and commitment to client success.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Our Leadership Team</SectionTitle>
          <TeamGrid>
            {[
              {
                name: "John Doe",
                position: "CEO & Founder",
                image: "/team/ceo.jpg",
              },
              {
                name: "Jane Smith",
                position: "CTO",
                image: "/team/cto.jpg",
              },
              {
                name: "Mike Johnson",
                position: "Operations Director",
                image: "/team/operations.jpg",
              },
            ].map((member, index) => (
              <TeamMember key={index}>
                <TeamMemberImage>
                  <Image src={member.image} alt={member.name} fill style={{ objectFit: "cover" }} />
                </TeamMemberImage>
                <TeamMemberName>{member.name}</TeamMemberName>
                <TeamMemberPosition>{member.position}</TeamMemberPosition>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default About;
