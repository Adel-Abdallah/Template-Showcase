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
            border = 'currentColor';
            break;
        case 'success':
            bg = 'var(--color-success-bg, rgba(75, 181, 67, 0.15))';
            color = 'var(--color-success, #4bb543)';
            break;
        case 'warning':
            bg = 'var(--color-warning-bg, rgba(255, 193, 7, 0.15))';
            color = 'var(--color-warning, #ffc107)';
            break;
        case 'error':
            bg = 'var(--color-error-bg, rgba(239, 68, 68, 0.15))';
            color = 'var(--color-error, #ef4444)';
            break;
    }

    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.25rem 0.6rem',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 600,
            lineHeight: 1,
            backgroundColor: bg,
            color: color,
            border: `1px solid ${border}`,
            ...style
        }}>
            {children}
        </span>
    );
}
