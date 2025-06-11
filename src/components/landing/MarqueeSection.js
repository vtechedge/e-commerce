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
  padding: 3rem 0;
  background-color: #1e3888;
  overflow: hidden;
  margin: 100px 0;
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
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Dot = styled.span`
  margin: 0 1rem;
  color: rgba(255, 255, 255, 0.5);
`;

const marqueeItems = [
  "Cloud Solutions",
  "Network Security",
  "Data Analytics",
  "IT Consulting",
  "Managed Services",
  "Digital Transformation",
  "Cloud Solutions",
  "Network Security",
  "Data Analytics",
  "IT Consulting",
  "Managed Services",
  "Digital Transformation",
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
