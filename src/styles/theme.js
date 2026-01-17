/**
 * Centralized Theme Configuration
 * 
 * This is the SINGLE SOURCE OF TRUTH for all colors in the application.
 * To change the color scheme, modify values here only.
 * All components will automatically update.
 * 
 * Supports both Light and Dark themes.
 */

const commonColors = {
  // Semantic Colors (same for both themes)
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// ═══════════════════════════════════════════════════════════════════════
// THEME OPTION 1: ORIGINAL MUTED SLATE BLUE (Eye-Friendly)
// ═══════════════════════════════════════════════════════════════════════
// Uncomment this section to use the original muted blue theme
// Professional, eye-friendly, 65% saturation reduction for comfort
// ═══════════════════════════════════════════════════════════════════════

/* 
export const lightTheme = {
  // Primary Brand Colors - TRULY Desaturated & Muted (Following UX Research)
  // Saturation reduced by 40-50%, Brightness at comfortable 60-70%
  primary: '#5b7fa8',        // Muted slate blue (40% less saturated than #3b82f6)
  primaryLight: '#7a9fc4',   // Soft grayish blue
  primaryDark: '#476688',    // Deeper muted blue
  primaryHover: '#658bb5',   // Gentle hover state
  
  // Accent Colors - Bright Cyan (High-tech, Security)
  // Cyan represents technology, digital security, innovation
  accent: '#00d4ff',         // Bright cyan (tech/security standard)
  accentLight: '#33ddff',    // Lighter cyan
  accentDark: '#00a8cc',     // Deeper cyan
  
  // Gradients - Deep Navy to Cyan (High-Tech Security Look)
  // Creates depth and modern tech aesthetic
  gradients: {
    primary: 'linear-gradient(135deg, #0f2942 0%, #00d4ff 100%)',        // Navy to cyan
    primaryReverse: 'linear-gradient(135deg, #00d4ff 0%, #0f2942 100%)', // Cyan to navy
    primaryVertical: 'linear-gradient(180deg, #0f2942 0%, #1a4971 100%)', // Navy vertical
    primaryHorizontal: 'linear-gradient(90deg, #0f2942 0%, #00d4ff 100%)', // Navy to cyan horizontal
    subtle: 'linear-gradient(135deg, #0f2942 0%, #1a4971 100%)',        // Subtle navy gradient
    hero: 'linear-gradient(135deg, #071b2e 0%, #0f2942 100%)',          // Deep navy for heroes
  },
  
  // Background Colors - Clean White (Professional, Enterprise)
  // White conveys cleanliness, security, professionalism
  background: {
    primary: '#ffffff',        // Pure white (enterprise standard)
    secondary: '#f7f9fc',      // Very light blue-gray
    tertiary: '#ecf1f7',       // Light blue-gray
    accent: '#e6f4ff',         // Light cyan tint
    card: '#ffffff',           // White cards for clarity
  },
  
  // Text Colors - Strong Contrast (Clear, Professional)
  // Dark text ensures readability and authority
  text: {
    primary: '#0a1929',        // Very dark blue-gray (professional)
    secondary: '#1a3a52',      // Dark blue-gray
    tertiary: '#4a5f7a',       // Medium blue-gray
    muted: '#7890a8',          // Lighter blue-gray
    inverse: '#ffffff',        // Pure white for dark backgrounds
    accent: '#00d4ff',         // Cyan accent text
  },
  
  // Border Colors - Clean & Precise
  border: {
    light: '#e2e8f0',      // Very light blue-gray
    medium: '#cbd5e0',     // Light blue-gray
    dark: '#a0aec0',       // Medium blue-gray
    accent: '#00d4ff',     // Cyan accent borders
    focus: '#33ddff',      // Bright cyan for focus states
  },
  
  // Shadows - Subtle & Professional
  shadows: {
    sm: '0 1px 3px 0 rgb(15 41 66 / 0.08)',              // Subtle shadow
    md: '0 4px 8px -2px rgb(15 41 66 / 0.12)',           // Medium shadow
    lg: '0 12px 20px -4px rgb(15 41 66 / 0.15)',         // Large shadow
    xl: '0 20px 32px -8px rgb(15 41 66 / 0.18)',         // XL shadow
    primary: '0 4px 16px rgba(0, 212, 255, 0.3)',        // Cyan glow for primary buttons
    primaryHover: '0 8px 24px rgba(0, 212, 255, 0.4)',   // Stronger cyan glow on hover
  },
  
  // Common colors
  ...commonColors,
  
  // Theme mode
  mode: 'light',
};
*/

// ═══════════════════════════════════════════════════════════════════════
// THEME OPTION 2: SECURITY & TRUST (Professional, Corporate) - ACTIVE
// ═══════════════════════════════════════════════════════════════════════
// Deep navy blues with cyan accents - conveys security, trust, professionalism
// Inspired by: Cloudflare, Microsoft Security, IBM Security
// Perfect for: Security companies, cybersecurity, enterprise solutions
// ═══════════════════════════════════════════════════════════════════════

export const lightTheme = {
  // Primary Brand Colors - Deep Navy (Security & Trust)
  // Navy blue conveys security, reliability, and professionalism
  primary: '#0f2942',        // Deep navy blue (security standard)
  primaryLight: '#1a4971',   // Medium navy
  primaryDark: '#071b2e',    // Very deep navy
  primaryHover: '#2563a0',   // Brighter on hover for clarity

  // Accent Colors - Bright Cyan (High-tech, Security)
  // Cyan represents technology, digital security, innovation
  accent: '#00d4ff',         // Bright cyan (tech/security standard)
  accentLight: '#33ddff',    // Lighter cyan
  accentDark: '#00a8cc',     // Deeper cyan

  // Gradients - Deep Navy to Cyan (High-Tech Security Look)
  // Creates depth and modern tech aesthetic
  gradients: {
    primary: 'linear-gradient(135deg, #0f2942 0%, #00d4ff 100%)',        // Navy to cyan
    primaryReverse: 'linear-gradient(135deg, #00d4ff 0%, #0f2942 100%)', // Cyan to navy
    primaryVertical: 'linear-gradient(180deg, #0f2942 0%, #1a4971 100%)', // Navy vertical
    primaryHorizontal: 'linear-gradient(90deg, #0f2942 0%, #00d4ff 100%)', // Navy to cyan horizontal
    subtle: 'linear-gradient(135deg, #0f2942 0%, #1a4971 100%)',        // Subtle navy gradient
    hero: 'linear-gradient(135deg, #071b2e 0%, #0f2942 100%)',          // Deep navy for heroes
  },

  // Background Colors - Clean White (Professional, Enterprise)
  // White conveys cleanliness, security, professionalism
  background: {
    primary: '#ffffff',        // Pure white (enterprise standard)
    secondary: '#f7f9fc',      // Very light blue-gray
    tertiary: '#ecf1f7',       // Light blue-gray
    accent: '#e6f4ff',         // Light cyan tint
    card: '#ffffff',           // White cards for clarity
  },

  // Text Colors - Strong Contrast (Clear, Professional)
  // Dark text ensures readability and authority
  text: {
    primary: '#0a1929',        // Very dark blue-gray (professional)
    secondary: '#1a3a52',      // Dark blue-gray
    tertiary: '#4a5f7a',       // Medium blue-gray
    muted: '#7890a8',          // Lighter blue-gray
    inverse: '#ffffff',        // Pure white for dark backgrounds
    accent: '#00d4ff',         // Cyan accent text
  },

  // Border Colors - Clean & Precise
  border: {
    light: '#e2e8f0',      // Very light blue-gray
    medium: '#cbd5e0',     // Light blue-gray
    dark: '#a0aec0',       // Medium blue-gray
    accent: '#00d4ff',     // Cyan accent borders
    focus: '#33ddff',      // Bright cyan for focus states
  },

  // Shadows - Subtle & Professional
  shadows: {
    sm: '0 1px 3px 0 rgb(15 41 66 / 0.08)',              // Subtle shadow
    md: '0 4px 8px -2px rgb(15 41 66 / 0.12)',           // Medium shadow
    lg: '0 12px 20px -4px rgb(15 41 66 / 0.15)',         // Large shadow
    xl: '0 20px 32px -8px rgb(15 41 66 / 0.18)',         // XL shadow
    primary: '0 4px 16px rgba(0, 212, 255, 0.3)',        // Cyan glow for primary buttons
    primaryHover: '0 8px 24px rgba(0, 212, 255, 0.4)',   // Stronger cyan glow on hover
  },

  // Common colors
  ...commonColors,

  // Theme mode
  mode: 'light',
};

// ═══════════════════════════════════════════════════════════════════════
// DARK THEME: SECURITY & TRUST
// ═══════════════════════════════════════════════════════════════════════
// Deep dark backgrounds with bright cyan accents for high-tech feel
// Inspired by: Cyberpunk aesthetics, Security dashboards, Terminal UIs
// ═══════════════════════════════════════════════════════════════════════

export const darkTheme = {
  // Primary Brand Colors - Bright Navy for Dark Mode
  // Visible on dark backgrounds while maintaining security aesthetic
  primary: '#3b5f8f',        // Medium navy (visible on dark)
  primaryLight: '#4d7fb8',   // Brighter navy
  primaryDark: '#2a4a6f',    // Deeper navy
  primaryHover: '#5a8ec7',   // Bright on hover

  // Accent Colors - Bright Cyan (Glowing Tech Effect)
  // Creates high-tech, security dashboard aesthetic
  accent: '#00e5ff',         // Bright glowing cyan
  accentLight: '#66edff',    // Very bright cyan
  accentDark: '#00b8d4',     // Deeper cyan

  // Gradients - Deep Dark with Cyan Highlights
  // Creates depth and high-tech security aesthetic
  gradients: {
    primary: 'linear-gradient(135deg, #0a1929 0%, #00e5ff 100%)',        // Dark to cyan
    primaryReverse: 'linear-gradient(135deg, #00e5ff 0%, #0a1929 100%)', // Cyan to dark
    primaryVertical: 'linear-gradient(180deg, #0a1929 0%, #1a2f42 100%)', // Dark vertical
    primaryHorizontal: 'linear-gradient(90deg, #0a1929 0%, #00e5ff 100%)', // Dark to cyan horizontal
    subtle: 'linear-gradient(135deg, #0a1929 0%, #1a2f42 100%)',        // Subtle dark gradient
    hero: 'linear-gradient(135deg, #020a12 0%, #0a1929 100%)',          // Very deep for heroes
  },

  // Background Colors - Deep Security Dark
  // Very dark backgrounds create professional security aesthetic
  background: {
    primary: '#0a1929',       // Deep navy dark (security standard)
    secondary: '#0f2438',     // Slightly lighter navy
    tertiary: '#1a2f42',      // Medium navy dark
    accent: '#0d2438',        // Accent dark navy
    card: '#0f2438',          // Card backgrounds
  },

  // Text Colors - High Contrast for Clarity
  // Bright text on dark backgrounds for security dashboards
  text: {
    primary: '#ffffff',       // Pure white (maximum clarity)
    secondary: '#b8c9e0',     // Light blue-white
    tertiary: '#8fa3bf',      // Medium blue-gray
    muted: '#6a7e99',         // Muted blue-gray
    inverse: '#ffffff',       // Pure white (for dark hero sections with gradient backgrounds)
    accent: '#00e5ff',        // Bright cyan accent text
  },

  // Border Colors - Visible on Dark
  border: {
    light: '#1a3a52',      // Dark blue-gray border
    medium: '#2a4a6f',     // Medium navy border
    dark: '#3b5f8f',       // Brighter navy border
    accent: '#00e5ff',     // Bright cyan accent borders
    focus: '#66edff',      // Very bright cyan for focus
  },

  // Shadows - Glowing Cyan Effect (High-Tech)
  shadows: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.4)',                  // Subtle shadow
    md: '0 4px 8px -2px rgb(0 0 0 / 0.5)',               // Medium shadow
    lg: '0 12px 20px -4px rgb(0 0 0 / 0.6)',             // Large shadow
    xl: '0 20px 32px -8px rgb(0 0 0 / 0.7)',             // XL shadow
    primary: '0 4px 20px rgba(0, 229, 255, 0.4)',        // Glowing cyan effect
    primaryHover: '0 8px 32px rgba(0, 229, 255, 0.6)',   // Strong glow on hover
  },

  // Common colors
  ...commonColors,

  // Theme mode
  mode: 'dark',
};

// Border Radius
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

// Transitions
export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
};

// Breakpoints
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Media queries helper
export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
};

// Default export
export const theme = lightTheme;

export default theme;
