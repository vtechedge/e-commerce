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

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #1e3888;
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
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e3888;
`;

const CardDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`;

const cards = [
  {
    title: "Cloud Infrastructure",
    description: "Build and manage scalable cloud infrastructure that grows with your business needs.",
    image: "/products/card1.jpg",
  },
  {
    title: "Network Security",
    description: "Protect your business with advanced security solutions and threat detection systems.",
    image: "/products/card2.jpg",
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    image: "/products/card3.jpg",
  },
];

const CardSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Our Solutions</SectionTitle>
        <Grid>
          {cards.map((card, index) => (
            <Card key={index}>
              <ImageWrapper>
                <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />
              </ImageWrapper>
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default CardSection;
