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

    // Use single logo with CSS filter for dark mode
    const logoSrc = '/logo-light.png';

    return (
        <Image
            src={logoSrc}
            alt="VTechEdge"
            width={width}
            height={height}
            className={className}
            priority
            style={{
                background: 'transparent',
                objectFit: 'contain',
                filter: themeMode === 'dark'
                    ? 'brightness(0) invert(1) brightness(1.5) drop-shadow(0 0 2px rgba(255,255,255,0.3))'
                    : 'none',
                transition: 'filter 0.3s ease',
                ...props.style
            }}
            {...props}
        />
    );
};

export default Logo;
