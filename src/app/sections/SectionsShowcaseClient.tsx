'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ThemeWrapper from '../../shared/components/ThemeWrapper';

// Sections
import HeroSection from '../../shared/sections/HeroSection';
import FeatureGrid from '../../shared/sections/FeatureGrid';
import NewsletterSection from '../../shared/sections/NewsletterSection';

interface SectionsShowcaseProps {
    availableThemes: { slug: string; config: any }[];
    currentSlug: string;
    themeConfig: any;
    themeStyles: any;
}

export default function SectionsShowcaseClient({ availableThemes, currentSlug, themeConfig, themeStyles }: SectionsShowcaseProps) {
    const router = useRouter();

    const handleThemeChange = (slug: string) => {
        router.push(`/sections?theme=${slug}`);
    };

    return (
        <ThemeWrapper config={themeConfig} className={themeStyles.container || ''}>
            <header style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                padding: '1rem 2rem',
                borderBottom: '1px solid var(--border)',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--bg)', // Ensure text is legible
                color: 'var(--text)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/" style={{ color: 'var(--text)' }}><ArrowLeft /></Link>
                    <h1 style={{ fontSize: '1.2rem', margin: 0 }}>Sections Library</h1>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', maxWidth: '60vw', paddingBottom: '0.5rem' }}>
                    {availableThemes.map(t => (
                        <button
                            key={t.slug}
                            onClick={() => handleThemeChange(t.slug)}
                            style={{
                                padding: '0.4rem 0.8rem',
                                background: currentSlug === t.slug ? 'var(--text)' : 'transparent',
                                color: currentSlug === t.slug ? 'var(--bg)' : 'var(--text)',
                                border: '1px solid var(--border)',
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

            <div style={{ paddingTop: '80px', color: 'var(--text)' }}>
                {/* Hero */}
                <HeroSection
                    title="Welcome to the Future"
                    subtitle="Premium Templates"
                    description="Explore our curated collection of high-performance e-commerce designs built for the modern web."
                    cta={{ label: "Get Started", href: "#" }}
                    secondaryCta={{ label: "View Demo", href: "#" }}
                    image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                    // Pass explicit props if sections expect specific style objects, 
                    // BUT ideally they should just consume CSS vars.
                    // If they use `themeStyles` prop for JS inline styles, we need to adapt them.
                    // For now, let's assume they might need refactoring or we pass a mock object derived from vars.
                    themeStyles={{
                        bg: 'var(--bg)',
                        text: 'var(--text)',
                        accent: 'var(--primary)'
                    }}
                />

                {/* Features */}
                <FeatureGrid
                    themeStyles={{
                        bg: 'var(--bg)',
                        text: 'var(--text)',
                        accent: 'var(--primary)',
                        cardBg: 'var(--card-bg)'
                    }}
                    features={[
                        { title: 'Lightning Fast', description: 'Optimized for speed with Next.js App Router.', iconName: 'Zap' },
                        { title: 'Fully Responsive', description: 'Looks amazing on every device, from mobile to desktop.', iconName: 'Smartphone' },
                        { title: 'Dark Mode', description: 'Native support for dark and light color schemes.', iconName: 'Moon' }
                    ]}
                />

                {/* Newsletter */}
                <NewsletterSection
                    themeStyles={{
                        bg: 'var(--bg)',
                        text: 'var(--text)',
                        accent: 'var(--primary)'
                    }}
                />
            </div>
        </ThemeWrapper>
    );
}
