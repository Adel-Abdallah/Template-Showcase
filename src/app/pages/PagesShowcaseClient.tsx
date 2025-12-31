'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Layout, ShoppingCart, CreditCard, FileText } from 'lucide-react';
import ThemeWrapper from '../../shared/components/ThemeWrapper';

interface PagesShowcaseProps {
    availableThemes: { slug: string; config: any }[];
    currentSlug: string;
    themeConfig: any;
    themeStyles: any;
}

export default function PagesShowcaseClient({ availableThemes, currentSlug, themeConfig, themeStyles }: PagesShowcaseProps) {
    const router = useRouter();

    const pageTypes = [
        { name: 'Home / PLP', path: '', icon: <Layout size={20} /> },
        { name: 'Product Detail', path: '/product/1', icon: <FileText size={20} /> },
        { name: 'Cart', path: '/cart', icon: <ShoppingCart size={20} /> },
        { name: 'Checkout', path: '/checkout', icon: <CreditCard size={20} /> },
    ];

    const handleThemeChange = (slug: string) => {
        router.push(`/pages?theme=${slug}`);
    };

    return (
        <ThemeWrapper config={themeConfig} className={themeStyles.container || ''}>
            <div style={{ minHeight: '100vh', padding: '2rem', color: 'var(--text)' }}>
                <Link href="/" style={{ color: 'var(--text)', opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary)' }}>Pages Directory</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '600px' }}>
                            Quick access to every page type. Viewing in <strong>{currentSlug}</strong> style.
                        </p>
                    </div>

                    {/* Theme Selector */}
                    <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', maxWidth: '400px', paddingBottom: '0.5rem' }}>
                        {availableThemes.map(t => (
                            <button
                                key={t.slug}
                                onClick={() => handleThemeChange(t.slug)}
                                style={{
                                    padding: '0.4rem 0.8rem',
                                    background: currentSlug === t.slug ? 'var(--primary)' : 'transparent',
                                    color: currentSlug === t.slug ? 'var(--on-primary)' : 'var(--text)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.8rem',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {t.slug}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {availableThemes.map(theme => (
                        <div key={theme.slug} style={{
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)',
                            padding: '1.5rem',
                            background: 'var(--card-bg)'
                        }}>
                            <h2 style={{ textTransform: 'capitalize', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>
                                {theme.slug}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {pageTypes.map(page => (
                                    <Link
                                        key={page.name}
                                        href={`/universal/${theme.slug}${page.path}`}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.8rem',
                                            padding: '0.8rem',
                                            borderRadius: 'var(--radius)',
                                            background: 'rgba(255,255,255,0.03)',
                                            color: 'var(--text)',
                                            textDecoration: 'none',
                                            transition: 'background 0.2s',
                                            border: '1px solid transparent'
                                        }}
                                    >
                                        <span style={{ color: 'var(--primary)' }}>{page.icon}</span>
                                        {page.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ThemeWrapper>
    );
}
