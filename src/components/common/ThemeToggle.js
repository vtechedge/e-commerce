/**
 * Theme Toggle Component
 * 
 * Allows users to switch between light and dark themes.
 * Can be placed in the header or anywhere in the UI.
 */

import React from 'react';
import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid ${props => props.theme.border.light};
  border-radius: 50%;
  background: ${props => props.theme.background.card};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.sm};

  &:hover {
    border-color: ${props => props.theme.border.accent};
    box-shadow: ${props => props.theme.shadows.md};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.text.primary};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${props => props.isAnimating ? 'rotate 0.5s ease' : 'none'};

  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(0.8);
      opacity: 0;
    }
    to {
      transform: rotate(360deg) scale(1);
      opacity: 1;
    }
  }
`;

const ThemeToggle = ({ className }) => {
  const { themeMode, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <ToggleButton 
      onClick={handleToggle}
      className={className}
      aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
    >
      <IconWrapper isAnimating={isAnimating}>
        {themeMode === 'light' ? <Moon /> : <Sun />}
      </IconWrapper>
    </ToggleButton>
  );
};

export default ThemeToggle;
