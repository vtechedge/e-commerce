import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

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
  animation: ${(props) => (props.active ? slideIn : fadeIn)} 0.5s ease-in-out;
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
        <Slide key={index} active={index === currentSlide} style={{ backgroundImage: slide.background }}></Slide>
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
