import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.gradients.hero};
  overflow: hidden;
  margin: 5rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  }
`;

const MarqueeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const MarqueeContent = styled.div`
  display: inline-flex;
  animation: ${scroll} 20s linear infinite;
  padding: 1rem 0;
`;

const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
  
  &:hover {
    color: ${props => props.theme.accent};
    text-shadow: 0 2px 15px rgba(6, 182, 212, 0.5);
  }
`;

const Dot = styled.span`
  margin: 0 1rem;
  color: rgba(255, 255, 255, 0.5);
`;

const marqueeItems = [
  "Doctor Clinics",
  "Pharmacies",
  "Pharma Manufacturing",
  "Finance & Insurance",
  "Government & Education",
  "Retail & E-commerce",
  "Construction & Real Estate",
  "Manufacturing & Service Providers",
  "Small to Medium Businesses",
  "Esports, Travel & Tourism",
  "Doctor Clinics",
  "Pharmacies",
  "Pharma Manufacturing",
  "Finance & Insurance",
  "Government & Education",
  "Retail & E-commerce",
  "Construction & Real Estate",
  "Manufacturing & Service Providers",
  "Small to Medium Businesses",
  "Esports, Travel & Tourism",
];

const MarqueeSection = () => {
  return (
    <Section>
      <MarqueeContainer>
        <MarqueeContent>
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
              <MarqueeItem>{item}</MarqueeItem>
              {index < marqueeItems.length - 1 && <Dot>•</Dot>}
            </React.Fragment>
          ))}
        </MarqueeContent>
      </MarqueeContainer>
    </Section>
  );
};

export default MarqueeSection;
