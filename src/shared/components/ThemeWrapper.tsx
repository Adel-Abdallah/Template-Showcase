'use client';

import React from 'react';

interface ThemeWrapperProps {
    config: any; // The full theme config
    children: React.ReactNode;
    className?: string; // To pass the css module class
}

export default function ThemeWrapper({ config, children, className = '' }: ThemeWrapperProps) {
    // Dynamic Style Extraction from JSON Config
    let dynamicStyles: React.CSSProperties = {};
    if (config && config.style) {
        dynamicStyles = {
            '--primary': config.style.colors.primary,
            '--on-primary': config.style.colors.onPrimary,
            '--secondary': config.style.colors.secondary,
            '--on-secondary': config.style.colors.onSecondary,
            '--bg': config.style.colors.background,
            '--text': config.style.colors.text,
            '--border': config.style.colors.border,
            '--card-bg': config.style.colors.cardBg,
            '--radius': config.style.shape.borderRadius,
            '--border-width': config.style.shape.borderWidth,
            '--shadow-md': config.style.effects?.shadow || 'none',
            '--font-main': config.style.typography.fontFamily,
            '--font-heading': config.style.typography.headingsFamily || config.style.typography.fontFamily,
            fontFamily: 'var(--font-main)',
            color: 'var(--text)',
            backgroundColor: 'var(--bg)',
            minHeight: '100vh',
            transition: 'background 0.3s ease, color 0.3s ease'
        } as React.CSSProperties;
    } else {
        dynamicStyles = { minHeight: '100vh' };
    }

    return (
        <div className={className} style={dynamicStyles}>
            {children}
        </div>
    );
}
