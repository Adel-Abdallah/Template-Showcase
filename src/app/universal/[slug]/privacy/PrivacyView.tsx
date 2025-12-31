'use client';

import React from 'react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';

interface PrivacyViewProps {
    slug: string;
    themeConfig: any;
}

export default function PrivacyView({ slug, themeConfig }: PrivacyViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Privacy Policy</h1>
                </section>

                <div style={{ padding: '3rem', background: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', lineHeight: '1.8' }}>
                    <p style={{ opacity: 0.6, marginBottom: '2rem' }}>Last updated: December 31, 2024</p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>1. Introduction</h3>
                    <p style={{ marginBottom: '1rem' }}>Welcome to our Privacy Policy. Your privacy is critically important to us.</p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>2. Information We Collect</h3>
                    <p style={{ marginBottom: '1rem' }}>We collect information you provide directly to us when you create an account, make a purchase, or communicate with us.</p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>3. Use of Data</h3>
                    <p style={{ marginBottom: '1rem' }}>We use your data to provide and improve our services, process transactions, and send you related information.</p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>4. Sharing of Data</h3>
                    <p style={{ marginBottom: '1rem' }}>We do not share your personal information with third parties except as described in this policy.</p>
                </div>
            </div>
        </ThemeWrapper>
    );
}
