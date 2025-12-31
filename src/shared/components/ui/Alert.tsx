'use client';

import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export type AlertVariant = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children: React.ReactNode;
    onClose?: () => void;
    style?: React.CSSProperties;
}

export default function Alert({
    variant = 'info',
    title,
    children,
    onClose,
    style
}: AlertProps) {

    // Config based on variant
    const config = {
        success: {
            bg: 'var(--color-success-bg, rgba(75, 181, 67, 0.1))',
            border: 'var(--color-success, #4bb543)',
            color: 'var(--color-success, #4bb543)',
            icon: <CheckCircle size={20} />
        },
        error: {
            bg: 'var(--color-error-bg, rgba(239, 68, 68, 0.1))',
            border: 'var(--color-error, #ef4444)',
            color: 'var(--color-error, #ef4444)',
            icon: <XCircle size={20} />
        },
        warning: {
            bg: 'var(--color-warning-bg, rgba(255, 193, 7, 0.1))',
            border: 'var(--color-warning, #ffc107)',
            color: 'var(--color-warning, #ffc107)',
            icon: <AlertCircle size={20} />
        },
        info: {
            bg: 'var(--color-info-bg, rgba(59, 130, 246, 0.1))',
            border: 'var(--color-info, #3b82f6)',
            color: 'var(--color-info, #3b82f6)',
            icon: <Info size={20} />
        }
    };

    const currentConfig = config[variant];

    const alertStyle: React.CSSProperties = {
        padding: '1rem',
        borderRadius: 'var(--radius, 8px)',
        background: currentConfig.bg,
        border: `var(--border-width, 1px) solid ${currentConfig.border}`,
        color: currentConfig.color,
        display: 'flex',
        gap: '0.8rem',
        alignItems: 'flex-start',
        position: 'relative',
        ...style
    };

    return (
        <div style={alertStyle} role="alert">
            <div style={{ marginTop: '2px' }}>
                {currentConfig.icon}
            </div>
            <div style={{ flex: 1 }}>
                {title && <h4 style={{ fontWeight: 'bold', marginBottom: '0.2rem', color: 'inherit' }}>{title}</h4>}
                <div style={{ opacity: 0.9, fontSize: '0.95rem', color: 'inherit' }}>
                    {children}
                </div>
            </div>
            {onClose && (
                <button
                    onClick={onClose}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        padding: '0.2rem',
                        opacity: 0.7
                    }}
                >
                    <XCircle size={18} />
                </button>
            )}
        </div>
    );
}
