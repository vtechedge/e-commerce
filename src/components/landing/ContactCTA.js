import React from "react";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { PhoneCall, ArrowRight, Sparkles } from "lucide-react";

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const sparkle = keyframes`
  0%, 100% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.2); 
  }
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: ${props => props.theme.gradients.primary};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, ${props => props.theme.mode === "light" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)"} 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTABadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: ${props => props.theme.background.card};
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: fadeInDown 0.6s ease-out;
  position: relative;
  z-index: 2;

  svg {
    width: 16px;
    height: 16px;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.background.card};
  margin-bottom: 1rem;
  line-height: 1.2;
  animation: fadeInUp 0.6s ease-out 0.1s both;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.mode === "dark" ? "rgba(122, 159, 196, 0.95)" : "rgba(255, 255, 255, 0.95)"};
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.6s ease-out 0.2s both;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: ${props => props.theme.background.card};
  color: ${props => props.theme.primary};
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1.125rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(30, 56, 136, 0.3);
  animation: fadeInUp 0.6s ease-out 0.3s both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(240, 249, 255, 0.3) 0%, rgba(224, 242, 254, 0.3) 100%);
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 40px rgba(30, 56, 136, 0.4);

    &::before {
      opacity: 1;
    }

    svg {
      transform: translateX(5px);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.01);
  }

  span {
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme.text.tertiary};
  font-size: 0.9rem;
  animation: fadeIn 0.6s ease-out 0.4s both;

  svg {
    color: ${props => props.theme.primary};
    width: 18px;
    height: 18px;
  }

  a {
    color: ${props => props.theme.primary};
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.primaryLight};
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const ContactCTA = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <CTASection>
      <CTAContainer>
        <CTABadge>
          <Sparkles />
          <span>We're Here to Help</span>
        </CTABadge>

        <CTATitle>
          Ready to Transform Your Business?
        </CTATitle>

        <CTASubtitle>
          Let's discuss how our IT solutions can help you achieve your goals. Our team of experts is ready to assist you.
        </CTASubtitle>

        <CTAButton onClick={handleContactClick}>
          <span>Get Started Today</span>
          <ArrowRight size={22} />
        </CTAButton>

        <SecondaryInfo>
          <PhoneCall />
          <span>Or call us directly at</span>
          <a href="tel:+16478640847">+1 647-864-0847</a>
        </SecondaryInfo>
      </CTAContainer>
    </CTASection>
  );
};

export default ContactCTA;
