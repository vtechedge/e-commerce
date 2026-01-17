import React from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { FaRocket, FaArrowLeft } from "react-icons/fa";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.gradients.primary};
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px);
  z-index: 1;
`;

const ContentCard = styled.div`
  position: relative;
  z-index: 10;
  background: ${props => props.theme.mode === "dark" ? "rgba(22, 27, 34, 0.95)" : "rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 5rem 4rem;
  max-width: 1200px;
  width: 100%;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 100px rgba(30, 56, 136, 0.2);
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    border-radius: 20px;
  }
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.background.card};
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(30, 56, 136, 0.3);
  animation: ${pulse} 2s ease-in-out infinite;
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 2.5rem;
  background: ${props => props.theme.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.background.card};
  font-size: 3.5rem;
  box-shadow: 
    0 10px 30px rgba(30, 56, 136, 0.3),
    inset 0 -5px 15px rgba(0, 0, 0, 0.2);
  animation: ${float} 3s ease-in-out infinite;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: ${props => props.theme.gradients.primary};
    opacity: 0.3;
    z-index: -1;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: ${props => props.theme.text.primary};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 500;
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.theme.text.secondary};
  margin-bottom: 2.5rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.background.card};
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(30, 56, 136, 0.3);
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(30, 56, 136, 0.4);
    background: linear-gradient(135deg, ${props => props.theme.accent}, ${props => props.theme.primary});
  }

  &:active {
    transform: translateY(0);
  }
`;

const FloatingCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.theme.mode === "light" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)"};
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: -100px;
    right: -100px;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 10%;
    animation-delay: 4s;
  }
`;

function ComingSoon() {
  return (
    <PageContainer>
      <Head>
        <title>Coming Soon - VtechSecure</title>
        <meta name="description" content="This page is under construction. We're building something amazing!" />
      </Head>

      <BackgroundPattern />
      <FloatingCircle />
      <FloatingCircle />
      <FloatingCircle />

      <ContentCard>
        <StatusBadge>Under Development</StatusBadge>

        <IconContainer>
          <FaRocket />
        </IconContainer>

        <Title>Coming Soon</Title>

        <Subtitle>
          We're Building Something Amazing
        </Subtitle>

        <Description>
          This page is currently under construction. Our team is working hard to bring you an exceptional experience with cutting-edge features and seamless functionality.
        </Description>

        <ButtonGroup>
          <Button href="/">
            <FaArrowLeft /> Back to Home
          </Button>
        </ButtonGroup>
      </ContentCard>
    </PageContainer>
  );
}

export default ComingSoon;
