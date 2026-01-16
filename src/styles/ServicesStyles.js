import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

export const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 6rem 0 5rem;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(102, 126, 234, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.95;
  font-weight: 300;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.bgColor || "white"};
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e3888;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #666;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f0f0f0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(180deg, #1e3888, #2d4ba8);
    transition: height 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(30, 56, 136, 0.15);
    border-color: rgba(30, 56, 136, 0.2);

    &::before {
      height: 100%;
    }
  }
`;

export const ServiceIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(30, 56, 136, 0.1), rgba(45, 75, 168, 0.15));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  svg {
    width: 30px;
    height: 30px;
    color: #1e3888;
  }

  ${ServiceCard}:hover & {
    background: linear-gradient(135deg, #1e3888, #2d4ba8);
    transform: scale(1.1);

    svg {
      color: white;
    }
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e3888;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

export const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
`;

export const ServiceFeature = styled.li`
  color: #555;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #1e3888;
    font-weight: 700;
  }
`;

export const LearnMoreButton = styled.button`
  margin-top: 1.5rem;
  background: transparent;
  color: #1e3888;
  border: 2px solid #1e3888;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;

  &:hover {
    background: #1e3888;
    color: white;
    transform: translateX(3px);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;


export const CTASection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%);
  border-radius: 20px;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3888;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

export const CTAButton = styled.button`
  background: linear-gradient(135deg, #1e3888 0%, #2d4ba8 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(30, 56, 136, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 56, 136, 0.4);
    background: linear-gradient(135deg, #2d4ba8 0%, #3557c2 100%);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #1e3888;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;
