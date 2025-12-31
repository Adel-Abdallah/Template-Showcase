'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closeOnOverlayClick?: boolean;
    portalStyles?: React.CSSProperties; // To inject theme variables into the portal
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
    closeOnOverlayClick = true,
    portalStyles
}: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent body scroll when open
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';

        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    // Size logic
    const maxWidth = {
        sm: '400px',
        md: '600px',
        lg: '800px',
        xl: '1000px',
        full: '95vw'
    }[size];

    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)', // Standard overlay
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
    };

    const modalStyle: React.CSSProperties = {
        background: 'var(--card-bg, #1a1a1a)',
        color: 'var(--text, inherit)',
        borderRadius: 'var(--radius, 16px)',
        width: '100%',
        maxWidth,
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-md, 0 25px 50px -12px rgba(0, 0, 0, 0.5))',
        border: '1px solid var(--border)',
        position: 'relative',
        animation: 'modalSlideUp 0.3s ease-out'
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };

    return createPortal(
        <div style={{ ...overlayStyle, ...portalStyles }} onClick={handleOverlayClick}>
            <div style={modalStyle}>
                {/* Header */}
                <div style={{
                    padding: '1.5rem',
                    borderBottom: '1px solid rgba(128,128,128,0.2)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {title && <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>{title}</h2>}
                    <button
                        onClick={onClose}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'inherit',
                            cursor: 'pointer',
                            opacity: 0.7,
                            padding: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                    {children}
                </div>
            </div>

        </div>,
        document.body
    );
}
