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

            // Semantic Colors (Defaulting to standard values if not in config)
            '--color-success': '#22c55e',
            '--color-success-bg': 'rgba(34, 197, 94, 0.1)',
            '--color-warning': '#eab308',
            '--color-warning-bg': 'rgba(234, 179, 8, 0.1)',
            '--color-error': '#ef4444',
            '--color-error-bg': 'rgba(239, 68, 68, 0.1)',
            '--color-info': '#3b82f6',
            '--color-info-bg': 'rgba(59, 130, 246, 0.1)',

            fontFamily: 'var(--font-main)',
            color: 'var(--text)',
            background: 'var(--bg)',
            minHeight: '100vh',
            transition: 'background 0.3s ease, color 0.3s ease'
        } as React.CSSProperties;

        // ANIMATIONS: Inject basic keyframes if enabled
        if (config.style.animations) {
            // We can't easily inject @keyframes into inline styles, but we can rely on global CSS
            // or we use a <style> block here.
        }
    } else {
        dynamicStyles = { minHeight: '100vh' };
    }

    const animationsEnabled = config?.style?.animations === true;

    return (
        <div className={className} style={dynamicStyles}>
            {animationsEnabled && (
                <style>{`
                    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                    @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
                    
                    /* Apply to common elements automatically if desired, or let specific views use them */
                    .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
                    .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
                `}</style>
            )}
            {children}
        </div>
    );
}
