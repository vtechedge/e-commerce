/**
 * Global Styles with Theme Support
 * 
 * These styles are applied globally and respect the current theme.
 * Uses styled-components createGlobalStyle for dynamic theming.
 */

import { createGlobalStyle } from 'styled-components';
import { generateCSSVariables } from './cssVariables';

const GlobalStyles = createGlobalStyle`
  /* CSS Custom Properties (Design Tokens) */
  :root {
    ${props => generateCSSVariables(props.theme)}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.text.primary};
    background-color: ${props => props.theme.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.4s ease, color 0.4s ease;
    min-height: 100vh;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${props => props.theme.text.primary};
  }

  h1 {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3.5vw, 1.75rem);
  }

  h4 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
  }

  h5 {
    font-size: 1.125rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: ${props => props.theme.text.secondary};
  }

  /* Link styles */
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
      color: ${props => props.theme.primaryLight};
    }
  }

  /* Modern Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border: none;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
    white-space: nowrap;
  }

  .btn-primary {
    background: ${props => props.theme.gradients.primary};
    color: white;
    box-shadow: ${props => props.theme.shadows.primary};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.primaryHover};
    }
  }

  .btn-secondary {
    background-color: ${props => props.theme.background.card};
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.border.accent};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      background-color: ${props => props.theme.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.md};
    }
  }

  .btn-ghost {
    background-color: transparent;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.border.light};

    &:hover {
      background-color: ${props => props.theme.background.tertiary};
      border-color: ${props => props.theme.border.accent};
    }
  }

  /* Modern Cards */
  .card {
    background: ${props => props.theme.background.card};
    border: 1px solid ${props => props.theme.border.light};
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: ${props => props.theme.shadows.sm};
    transition: all 0.2s ease;

    &:hover {
      box-shadow: ${props => props.theme.shadows.lg};
      transform: translateY(-4px);
      border-color: ${props => props.theme.border.accent};
    }
  }

  .card-premium {
    background: ${props => props.theme.background.card};
    border: 1px solid ${props => props.theme.border.light};
    border-radius: 12px;
    padding: 2rem;
    box-shadow: ${props => props.theme.shadows.md};
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: ${props => props.theme.gradients.primary};
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      box-shadow: ${props => props.theme.shadows.xl};
      transform: translateY(-6px);
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .container-wide {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Grid System */
  .grid {
    display: grid;
    gap: 2rem;
  }

  .grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .grid-4 {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  /* Utility Classes */
  .text-gradient {
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-effect {
    background: ${props => props.theme.mode === 'light' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.2)'};
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.theme.border.light};
  }

  /* Loading States */
  .skeleton {
    background: linear-gradient(
      90deg,
      ${props => props.theme.background.secondary} 0%,
      ${props => props.theme.background.tertiary} 50%,
      ${props => props.theme.background.secondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 8px;
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }

  .animate-scale-in {
    animation: scaleIn 0.4s ease-out;
  }

  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Selection */
  ::selection {
    background-color: ${props => props.theme.primary};
    color: white;
  }

  /* Focus Visible */
  *:focus-visible {
    outline: 2px solid ${props => props.theme.primary};
    outline-offset: 2px;
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      font-size: 0.95rem;
    }
    
    .card {
      padding: 1.25rem;
    }
    
    .grid {
      gap: 1.5rem;
    }
  }
`;

export default GlobalStyles;
