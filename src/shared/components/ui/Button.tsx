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
    ...props
}: ButtonProps) {

    // Base styles
    const baseStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: 'var(--radius, 8px)',
        fontWeight: 600,
        cursor: props.disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: props.disabled || isLoading ? 0.7 : 1,
        transition: 'all 0.2s ease',
        border: 'var(--border-width, 1px) solid transparent',
        fontFamily: 'inherit',
        ...style
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
        sm: { padding: '0.4rem 0.8rem', fontSize: '0.8rem' },
        md: { padding: '0.6rem 1.2rem', fontSize: '1rem' },
        lg: { padding: '0.8rem 1.5rem', fontSize: '1.1rem' }
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
            background: 'var(--color-error, #ef4444)',
            color: '#fff',
            borderColor: 'var(--color-error, #ef4444)',
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
            {isLoading && <Loader2 className={`animate-spin ${className}`} size={size === 'sm' ? 14 : 18} />}
            {!isLoading && leftIcon}
            {children}
            {!isLoading && rightIcon}
        </button>
    );
}
