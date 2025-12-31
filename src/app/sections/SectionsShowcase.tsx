'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Sections
import HeroSection from '../../shared/sections/HeroSection';
import FeatureGrid from '../../shared/sections/FeatureGrid';
import NewsletterSection from '../../shared/sections/NewsletterSection';

// Types
interface ThemeConfig {
    slug: string;
    config: any;
}

interface SectionsShowcaseProps {
    themes: ThemeConfig[];
}

export default function SectionsShowcase({ themes }: SectionsShowcaseProps) {
    const [currentSlug, setCurrentSlug] = useState('tech');

    // Color Mapping (Simulated styles until we have generic CSS var system)
    const colorMap: Record<string, any> = {
        tech: { bg: '#000', text: '#fff', accent: '#00ff00', cardBg: '#111' },
        luxury: { bg: '#101010', text: '#f0e6d2', accent: '#d4af37', cardBg: '#1a1a1a' },
        glass: { bg: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', text: '#333', accent: '#ff00ff', cardBg: 'rgba(255,255,255,0.8)' },
        minimalist: { bg: '#fff', text: '#000', accent: '#000', cardBg: '#fafafa' },
        editorial: { bg: '#f9f9f9', text: '#111', accent: '#e53935', cardBg: '#fff' },
        organic: { bg: '#fbf7f5', text: '#5d4037', accent: '#795548', cardBg: '#efebe9' },
        vibrant: { bg: '#8e2de2', text: '#fff', accent: '#ff00cc', cardBg: 'rgba(255,255,255,0.1)' },
        industrial: { bg: '#212121', text: '#bdbdbd', accent: '#ff5722', cardBg: '#424242' },
        saas: { bg: '#f5f7fa', text: '#1a365d', accent: '#2196f3', cardBg: '#fff' },
        immersive: { bg: '#000', text: '#fff', accent: '#651fff', cardBg: '#111' },
    };

    const currentTheme = colorMap[currentSlug] || colorMap['tech'];

    return (
        <div style={{ minHeight: '100vh', background: currentTheme.bg }}>
            <header style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                padding: '1rem 2rem',
                background: typeof currentTheme.bg === 'string' && currentTheme.bg.includes('linear') ? 'rgba(255,255,255,0.9)' : currentTheme.bg,
                backdropFilter: 'blur(10px)',
                borderBottom: `1px solid ${currentTheme.text}20`,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: currentTheme.text
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/" style={{ color: 'inherit' }}><ArrowLeft /></Link>
                    <h1 style={{ fontSize: '1.2rem', margin: 0 }}>Sections Library</h1>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', maxWidth: '60vw', paddingBottom: '0.5rem' }}>
                    {themes.map(t => (
                        <button
                            key={t.slug}
                            onClick={() => setCurrentSlug(t.slug)}
                            style={{
                                padding: '0.4rem 0.8rem',
                                background: currentSlug === t.slug ? currentTheme.text : 'transparent',
                                color: currentSlug === t.slug ? (currentTheme.bg.includes('linear') ? '#fff' : currentTheme.bg) : currentTheme.text,
                                border: `1px solid ${currentTheme.text}40`,
                                borderRadius: '4px',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                fontSize: '0.8rem',
                                textTransform: 'capitalize'
                            }}
                        >
                            {t.slug}
                        </button>
                    ))}
                </div>
            </header>

            <div style={{ paddingTop: '80px' }}>
                {/* Hero */}
                <HeroSection
                    title="Welcome to the Future"
                    subtitle="Premium Templates"
                    description="Explore our curated collection of high-performance e-commerce designs built for the modern web."
                    cta={{ label: "Get Started", href: "#" }}
                    secondaryCta={{ label: "View Demo", href: "#" }}
                    image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                    themeStyles={currentTheme}
                />

                {/* Features */}
                <FeatureGrid
                    themeStyles={currentTheme}
                    features={[
                        { title: 'Lightning Fast', description: 'Optimized for speed with Next.js App Router.', iconName: 'Zap' },
                        { title: 'Fully Responsive', description: 'Looks amazing on every device, from mobile to desktop.', iconName: 'Smartphone' },
                        { title: 'Dark Mode', description: 'Native support for dark and light color schemes.', iconName: 'Moon' }
                    ]}
                />

                {/* Newsletter */}
                <NewsletterSection
                    themeStyles={{ bg: currentTheme.bg, text: currentTheme.text, accent: currentTheme.accent }}
                />
            </div>
        </div>
    );
}
