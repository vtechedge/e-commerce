import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;
  background-color: var(--white);
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
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgImage});
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.85) 0%, rgba(0, 34, 77, 0.9) 100%);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  height: 100%;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div`
  color: var(--white);
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: var(--white);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &.primary {
    background-color: var(--white);
    color: var(--primary-blue);

    &:hover {
      background-color: var(--light-gray);
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);

    &:hover {
      background-color: var(--white);
      color: var(--primary-blue);
      transform: translateY(-2px);
    }
  }
`;

const VisualContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  background: linear-gradient(135deg, var(--accent-blue) 0%, var(--light-gray) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  z-index: 20;
`;

const NavButton = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--dark-gray);

  &:hover {
    background-color: var(--white);
    transform: scale(1.1);
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 20;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? "var(--white)" : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--white);
  }
`;

const slides = [
  {
    id: 1,
    title: "Enterprise Technology Solutions",
    subtitle: "Transform your business with cutting-edge IT infrastructure, cloud solutions, and comprehensive digital transformation services tailored for healthcare and pharma industries.",
    videoThumbnail: true,
    bgImage: "/banners/banner1.png",
  },
  {
    id: 2,
    title: "Healthcare & Pharma IT Excellence",
    subtitle: "Specialized technology solutions ensuring compliance, data security, and operational efficiency for healthcare providers and pharmaceutical companies.",
    videoThumbnail: true,
    bgImage: "/banners/banner2.png",
  },
  {
    id: 3,
    title: "Cybersecurity & Cloud Innovation",
    subtitle: "Protect your critical assets with advanced security solutions, threat monitoring, and scalable cloud infrastructure designed for enterprise excellence.",
    videoThumbnail: true,
    bgImage: "/banners/banner3.png",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <HeroSection>
      {slides.map((slide, index) => (
        <Slide key={slide.id} active={index === currentSlide} bgImage={slide.bgImage}>
          <SlideOverlay />
          <ContentContainer>
            <TextContent>
              <Headline>{slide.title}</Headline>
              <Subheadline>{slide.subtitle}</Subheadline>
              <ButtonContainer>
                <Button className="primary" onClick={() => window.location.href = '/contact'}>Get Started</Button>
                <Button className="secondary" onClick={() => window.location.href = '/services'}>Learn More</Button>
              </ButtonContainer>
            </TextContent>
            <VisualContent>
              <VideoThumbnail>
                <PlayButton>
                  <Play size={32} />
                </PlayButton>
              </VideoThumbnail>
            </VisualContent>
          </ContentContainer>
        </Slide>
      ))}

      <NavigationButtons>
        <NavButton onClick={prevSlide}>
          <ChevronLeft size={24} />
        </NavButton>
        <NavButton onClick={nextSlide}>
          <ChevronRight size={24} />
        </NavButton>
      </NavigationButtons>

      <Dots>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
        ))}
      </Dots>
    </HeroSection>
  );
};

export default HeroSlider;
