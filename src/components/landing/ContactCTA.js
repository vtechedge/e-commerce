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
  padding: 2rem 2rem;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8edff 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(30, 56, 136, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(45, 75, 168, 0.08) 0%, transparent 70%);
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
  background: linear-gradient(135deg, rgba(30, 56, 136, 0.1) 0%, rgba(45, 75, 168, 0.1) 100%);
  color: #1e3888;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(30, 56, 136, 0.2);
  animation: fadeInDown 0.6s ease-out;

  svg {
    width: 16px;
    height: 16px;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1f35;
  margin-bottom: 1rem;
  line-height: 1.2;
  animation: fadeInUp 0.6s ease-out 0.1s both;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.6s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #1e3888 0%, #2d4ba8 100%);
  color: white;
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
    background: linear-gradient(135deg, #2d4ba8 0%, #3557c2 100%);
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
  color: #6b7280;
  font-size: 0.9rem;
  animation: fadeIn 0.6s ease-out 0.4s both;

  svg {
    color: #1e3888;
    width: 18px;
    height: 18px;
  }

  a {
    color: #1e3888;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #2d4ba8;
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
