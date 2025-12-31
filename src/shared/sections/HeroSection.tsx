'use client';

import React from 'react';
import Button from '../components/ui/Button';

export interface HeroSectionProps {
    title: string;
    subtitle?: string;
    description?: string;
    cta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    image?: string;
    overlayOpacity?: number;

}

export default function HeroSection({
    title,
    subtitle,
    description,
    cta,
    secondaryCta,
    image,
    overlayOpacity = 0.5
}: HeroSectionProps) {

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        minHeight: '600px', // Can be var(--hero-height) if needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg)',
        color: 'var(--text)',
        overflow: 'hidden'
    };

    const bgImageStyle: React.CSSProperties = image ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
    } : {};

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: image ? `rgba(0,0,0,${overlayOpacity})` : 'transparent',
        zIndex: 1
    };

    const contentStyle: React.CSSProperties = {
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px'
    };

    return (
        <section style={containerStyle}>
            {image && <div style={bgImageStyle} />}
            {image && <div style={overlayStyle} />}

            <div style={contentStyle}>
                {subtitle && (
                    <span style={{
                        display: 'inline-block',
                        marginBottom: '1rem',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '20px',
                        background: 'rgba(255,255,255,0.1)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        color: 'var(--primary)'
                    }}>
                        {subtitle}
                    </span>
                )}

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                    fontFamily: 'var(--font-heading)'
                }}>
                    {title}
                </h1>

                {description && (
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.9,
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.6
                    }}>
                        {description}
                    </p>
                )}

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {cta && (
                        <Button
                            size="lg"
                            onClick={() => window.location.href = cta.href}
                        >
                            {cta.label}
                        </Button>
                    )}
                    {secondaryCta && (
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.location.href = secondaryCta.href}
                        >
                            {secondaryCta.label}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}
