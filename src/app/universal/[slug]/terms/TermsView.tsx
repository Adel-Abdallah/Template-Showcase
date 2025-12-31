'use client';

import React from 'react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';

interface TermsViewProps {
    slug: string;
    themeConfig: any;
}

export default function TermsView({ slug, themeConfig }: TermsViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Terms of Service</h1>
                </section>

                <div style={{ padding: '3rem', background: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', lineHeight: '1.8' }}>
                    <p style={{ opacity: 0.6, marginBottom: '2rem' }}>Last updated: December 31, 2024</p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>1. Agreement to Terms</h3>
                    <p style={{ marginBottom: '1rem' }}>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>2. Use License</h3>
                    <p style={{ marginBottom: '1rem' }}>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>3. Disclaimer</h3>
                    <p style={{ marginBottom: '1rem' }}>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>
                </div>
            </div>
        </ThemeWrapper>
    );
}
