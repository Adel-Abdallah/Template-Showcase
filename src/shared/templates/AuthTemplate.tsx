'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import ThemeWrapper from '../components/ThemeWrapper';

interface AuthTemplateProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    slug: string;
    themeConfig: any;
    footerLink?: { label: string; href: string; text: string };
}

export default function AuthTemplate({
    title,
    subtitle,
    children,
    slug,
    themeConfig,
    footerLink
}: AuthTemplateProps) {

    // Background Image selection (Keeping this specific logic as it maps slugs to images, which isn't in config yet)
    let bgImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475'; // default tech
    if (slug === 'luxury') bgImage = 'https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1';
    if (slug === 'minimalist') bgImage = 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85';
    if (slug === 'organic') bgImage = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e';
    if (slug === 'glass') bgImage = 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e';

    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
                {/* Left Side - Image */}
                <div style={{
                    flex: 1,
                    position: 'relative',
                    display: 'flex',
                    minHeight: '300px'
                }} className="hidden md:flex">
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} />
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(to right, transparent, var(--bg))`,
                    }} />
                </div>

                {/* Right Side - Form */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '2rem',
                    maxWidth: '600px',
                    width: '100%'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <Link href={`/universal/${slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', opacity: 0.6 }}>
                            <ArrowLeft size={18} /> Back to Store
                        </Link>
                    </div>

                    <div
                        className={themeConfig?.cardStyle === 'blob' ? 'auth-blob' : ''}
                        style={{
                            padding: themeConfig?.cardStyle === 'blob' ? '3rem' : '0',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '0',
                            background: themeConfig?.cardStyle === 'blob' ? 'var(--card-bg)' : 'transparent',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 40px rgba(135, 206, 235, 0.2)' : 'none',
                            transition: 'all 0.4s ease'
                        }}>
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{title}</h1>
                            <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>{subtitle}</p>
                        </div>

                        {children}

                        {footerLink && (
                            <div style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.8 }}>
                                {footerLink.text} <Link href={footerLink.href} style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{footerLink.label}</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Simple responsive CSS override */}
                <style jsx global>{`
                    @media (max-width: 768px) {
                        .hidden.md\\:flex {
                            display: none !important;
                        }
                    }
                    
                    /* Blob Hover Animation */
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0px); }
                    }

                    .auth-blob {
                        transition: all 0.4s ease;
                        animation: float 6s ease-in-out infinite;
                    }
                    .auth-blob:hover {
                        border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                        transform: translateX(10px) scale(1.02);
                        box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                        background: #fff !important;
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </ThemeWrapper>
    );
}
