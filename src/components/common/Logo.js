import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Theme-Aware Logo Component
 * 
 * Automatically switches between light and dark mode logos
 * based on the current theme.
 */
const Logo = ({ width = 120, height = 120, className = '', ...props }) => {
    const { themeMode } = useTheme();

    // Use appropriate logo based on theme
    const logoSrc = themeMode === 'dark' ? '/logo-dark.png' : '/logo-light.png';

    return (
        <Image
            src={logoSrc}
            alt="VTechEdge"
            width={width}
            height={height}
            className={className}
            priority
            {...props}
        />
    );
};

export default Logo;
