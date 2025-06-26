import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  overflow: hidden;
  background-color: #f8f9fa;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 10;
`;

const Headline = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.primary {
    background-color: #1e3888;
    color: white;

    &:hover {
      background-color: #152a66;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(30, 56, 136, 0.3);
    }
  }

  &.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: white;
      color: #1e3888;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    }
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? "#1e3888" : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1e3888;
  }
`;

const slides = [
  {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/products/ban1.jpg')",
  },
  {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/products/ban2.jpg')",
  },
  {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/products/ban3.jpg')",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HeroSection>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide} style={{ backgroundImage: slide.background }}>
          <ContentContainer>
            <Headline>Smart, Secure, and Scalable IT Solutions — Built for Healthcare and Enterprise</Headline>
            <Subheadline>
              From clinics and pharmacies to enterprise networks, Vtechsecure delivers reliable, end-to-end technology management that keeps your business moving forward.
            </Subheadline>
            <ButtonContainer>
              <Button className="primary">Get a Free Consultation</Button>
              <Button className="secondary">Explore Our Services</Button>
            </ButtonContainer>
          </ContentContainer>
        </Slide>
      ))}
      <Dots>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
        ))}
      </Dots>
    </HeroSection>
  );
};

export default HeroSlider;
