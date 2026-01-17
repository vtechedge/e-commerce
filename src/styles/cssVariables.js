/**
 * CSS Custom Properties Generator
 * 
 * Converts theme tokens to CSS custom properties for runtime theming.
 * This enables dynamic theme switching without rebuilding.
 */

export const generateCSSVariables = (theme) => {
  return `
    /* Primary Colors */
    --color-primary: ${theme.primary};
    --color-primary-light: ${theme.primaryLight};
    --color-primary-dark: ${theme.primaryDark};
    --color-primary-hover: ${theme.primaryHover};
    
    /* Accent Colors */
    --color-accent: ${theme.accent};
    --color-accent-light: ${theme.accentLight};
    --color-accent-dark: ${theme.accentDark};
    
    /* Semantic Colors */
    --color-success: ${theme.success};
    --color-warning: ${theme.warning};
    --color-error: ${theme.error};
    --color-info: ${theme.info};
    
    /* Background Colors */
    --bg-primary: ${theme.background.primary};
    --bg-secondary: ${theme.background.secondary};
    --bg-tertiary: ${theme.background.tertiary};
    --bg-accent: ${theme.background.accent};
    --bg-card: ${theme.background.card};
    
    /* Text Colors */
    --text-primary: ${theme.text.primary};
    --text-secondary: ${theme.text.secondary};
    --text-tertiary: ${theme.text.tertiary};
    --text-muted: ${theme.text.muted};
    --text-inverse: ${theme.text.inverse};
    --text-accent: ${theme.text.accent};
    
    /* Border Colors */
    --border-light: ${theme.border.light};
    --border-medium: ${theme.border.medium};
    --border-dark: ${theme.border.dark};
    --border-accent: ${theme.border.accent};
    --border-focus: ${theme.border.focus};
    
    /* Shadows */
    --shadow-sm: ${theme.shadows.sm};
    --shadow-md: ${theme.shadows.md};
    --shadow-lg: ${theme.shadows.lg};
    --shadow-xl: ${theme.shadows.xl};
    --shadow-primary: ${theme.shadows.primary};
    --shadow-primary-hover: ${theme.shadows.primaryHover};
  `;
};

export default generateCSSVariables;
