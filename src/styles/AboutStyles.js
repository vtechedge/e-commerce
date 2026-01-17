import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background.primary};
`;

export const HeroSection = styled.section`
  position: relative;
  background: ${props => props.theme.gradients.hero};
  color: #ffffff;
  padding: 5rem 0;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${props => props.theme.text.inverse};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${props => props.theme.primary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
  font-weight: 300;
  color: ${props => props.theme.text.inverse};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.bgColor || "${props => props.theme.background.card}"};
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.mode === 'dark' ? '#ffffff' : props.theme.primary};
`;

export const SectionSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.mode === 'dark' ? '#ffffff' : props.theme.primary};
`;

export const ContentText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${props => props.theme.text.secondary};
  margin-bottom: 1.5rem;
`;

export const HighlightText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.6;
  color: ${props => props.theme.text.primary};
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background: ${props => props.theme.background.card};
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.mode === 'dark' ? '#ffffff' : props.theme.primary};
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
`;

export const ValuesGrid = styled.div`
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

export const ValueCard = styled.div`
  background: ${props => props.theme.background.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const ValueNumber = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.background.card};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
`;

export const ValueTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme.mode === 'dark' ? '#ffffff' : props.theme.primary};
  margin-bottom: 0.5rem;
`;

export const ValueDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  line-height: 1.5;
  font-size: 0.95rem;
`;

export const CTAButton = styled.button`
  background: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.background.card};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
`;

export const CTASection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

export const IndustryList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const IndustryItem = styled.li`
  background: ${props => props.theme.background.card};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${props => props.theme.primary};
`;

export const IndustryTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.mode === 'dark' ? '#ffffff' : props.theme.primary};
  margin-bottom: 0.5rem;
`;

export const IndustryDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 0.95rem;
  line-height: 1.5;
`;
