import React from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import { Wrench, ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3888 0%, #152a66 50%, #0a1a44 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.8s ease-out;
`;

const IconWrapper = styled.div`
  margin-bottom: 2.5rem;
  animation: ${float} 3s ease-in-out infinite;
  
  svg {
    width: 80px;
    height: 80px;
    color: white;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
    stroke-width: 1.5;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  background-color: white;
  color: #1e3888;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background-color: #f8f8f8;
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const DecorativeLines = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px;
  height: 100%;
  pointer-events: none;
  opacity: 0.1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, transparent, white, transparent);
    height: 1px;
    width: 100%;
  }

  &::before {
    top: 30%;
  }

  &::after {
    bottom: 30%;
  }
`;

function ComingSoon() {
  return (
    <PageContainer>
      <Head>
        <title>Coming Soon - VtechSecure</title>
        <meta name="description" content="Page under construction" />
      </Head>

      <DecorativeLines />

      <ContentWrapper>
        <Badge>Under Construction</Badge>

        <IconWrapper>
          <Wrench />
        </IconWrapper>

        <Title>Coming Soon</Title>

        <Subtitle>
          We're Building Something Great
        </Subtitle>

        <Description>
          This page is currently under construction. Our team is working hard to bring you an incredible experience.
          Stay tuned for updates.
        </Description>

        <ButtonGroup>
          <Button href="/">
            <ArrowLeft size={20} />
            Back to Home
          </Button>
          <SecondaryButton href="/contact">
            <Phone size={20} />
            Contact Us
          </SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>
    </PageContainer>
  );
}

export default ComingSoon;
