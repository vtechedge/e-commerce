/**
 * Theme Context Provider
 * 
 * Manages theme state (light/dark) and provides theme switching functionality
 * across the entire application.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Check for saved theme preference or default to 'light'
  const [themeMode, setThemeMode] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', themeMode);
      // Update document class for CSS variables
      document.documentElement.setAttribute('data-theme', themeMode);
    }
  }, [themeMode, mounted]);

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setLightTheme = () => setThemeMode('light');
  const setDarkTheme = () => setThemeMode('dark');

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        themeMode, 
        toggleTheme, 
        setLightTheme, 
        setDarkTheme,
        isDark: themeMode === 'dark',
        isLight: themeMode === 'light',
      }}
    >
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
