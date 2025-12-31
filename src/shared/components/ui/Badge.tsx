'use client';

import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'success' | 'warning' | 'error';
    style?: React.CSSProperties;
}

export default function Badge({ children, variant = 'default', style }: BadgeProps) {
    let bg = 'rgba(128,128,128,0.2)';
    let color = 'inherit';
    let border = 'transparent';

    switch (variant) {
        case 'outline':
            bg = 'transparent';
            border = 'var(--border, currentColor)';
            color = 'var(--text, inherit)';
            break;
        case 'success':
            bg = 'rgba(75, 181, 67, 0.15)';
            color = '#4bb543';
            border = 'rgba(75, 181, 67, 0.3)';
            break;
        case 'warning':
            bg = 'rgba(255, 193, 7, 0.15)';
            color = '#ffc107';
            border = 'rgba(255, 193, 7, 0.3)';
            break;
        case 'error':
            bg = 'rgba(239, 68, 68, 0.15)';
            color = '#ef4444';
            border = 'rgba(239, 68, 68, 0.3)';
            break;
    }

    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.35rem 0.8rem',
            borderRadius: 'var(--radius, 12px)',
            fontSize: 'var(--font-size-sm, 0.75rem)',
            fontFamily: 'var(--font-main, inherit)',
            fontWeight: 600,
            lineHeight: 1,
            backgroundColor: bg,
            color: color,
            border: `1px solid ${border}`,
            letterSpacing: '0.02em',
            ...style
        }}>
            {children}
        </span>
    );
}
