'use client';

import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    // Allow injecting theme-specific styles
    themeStyles?: {
        primary?: string;
        secondary?: string;
        text?: string;
        radius?: string;
    };
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = '',
    style,
    themeStyles = {},
    ...props
}: ButtonProps) {

    // Base styles
    const baseStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: themeStyles.radius || '8px',
        fontWeight: 600,
        cursor: props.disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: props.disabled || isLoading ? 0.7 : 1,
        transition: 'all 0.2s ease',
        border: '1px solid transparent',
        fontFamily: 'inherit',
        ...style
    };

    // Size styles
    const sizeStyles: Record<string, React.CSSProperties> = {
        ...style // Allow overriding
    };

    const variants: Record<string, React.CSSProperties> = {
        primary: {
            background: 'var(--primary, #000)',
            color: 'var(--on-primary, #fff)',
            borderColor: 'var(--primary, #000)',
        },
        secondary: {
            background: 'var(--secondary, #333)',
            color: 'var(--on-secondary, #fff)',
            borderColor: 'var(--secondary, #333)',
        },
        outline: {
            background: 'transparent',
            color: 'var(--text, #000)',
            borderColor: 'var(--border, #ccc)',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--text, #000)',
            borderColor: 'transparent',
        },
        danger: {
            background: '#ef4444',
            color: '#fff',
            borderColor: '#ef4444',
        }
    };

    const combinedStyle: React.CSSProperties = {
        ...baseStyle,
        ...sizeStyles[size],
        ...(variants[variant] || {}),
        width: fullWidth ? '100%' : 'auto',
    };

    return (
        <button
            style={combinedStyle}
            disabled={props.disabled || isLoading}
            className={className} // For Tailwind or CSS classes
            {...props}
        >
            {isLoading && <Loader2 className="animate-spin" size={size === 'sm' ? 14 : 18} />}
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
            {!isLoading && leftIcon}
            {children}
            {!isLoading && rightIcon}
        </button>
    );
}
