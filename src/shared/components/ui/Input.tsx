'use client';

import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    // Allow injecting theme-specific styles
    themeStyles?: {
        borderColor?: string;
        focusBorderColor?: string;
        borderRadius?: string;
    };
}

export default function Input({
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    fullWidth = true,
    className = '',
    style,
    themeStyles = {},
    ...props
}: InputProps) {

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'inherit',
        marginBottom: error || helperText ? '1rem' : '0.5rem',
        ...style
    };

    const inputWrapperStyle: React.CSSProperties = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    };

    const borderColor = error ? '#ef4444' : (themeStyles.borderColor || 'rgba(128,128,128,0.3)');
    const radius = themeStyles.borderRadius || '8px';

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.6rem 1rem',
        paddingLeft: leftIcon ? '2.5rem' : '1rem',
        paddingRight: rightIcon ? '2.5rem' : '1rem',
        borderRadius: 'var(--radius, 8px)',
        border: `1px solid ${error ? '#ef4444' : 'var(--border, #ccc)'}`,
        background: 'var(--card-bg, rgba(255,255,255,0.05))',
        color: 'var(--text, #000)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
    };

    return (
        <div style={containerStyle} className={className}>
            {label && (
                <label style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    opacity: 0.9,
                    color: error ? '#ef4444' : 'inherit'
                }}>
                    {label}
                </label>
            )}

            <div style={inputWrapperStyle}>
                {leftIcon && (
                    <span style={{ position: 'absolute', left: '0.8rem', opacity: 0.5 }}>
                        {leftIcon}
                    </span>
                )}

                <input
                    style={inputStyle}
                    {...props}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = themeStyles.focusBorderColor || '#3b82f6';
                        if (props.onFocus) props.onFocus(e);
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = borderColor;
                        if (props.onBlur) props.onBlur(e);
                    }}
                />

                {rightIcon && (
                    <span style={{ position: 'absolute', right: '0.8rem', opacity: 0.5 }}>
                        {rightIcon}
                    </span>
                )}
            </div>

            {error && (
                <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.1rem' }}>
                    {error}
                </span>
            )}
            {!error && helperText && (
                <span style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.1rem' }}>
                    {helperText}
                </span>
            )}
        </div>
    );
}
