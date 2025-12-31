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

                <div
                    className={themeConfig?.cardStyle === 'blob' ? 'privacy-blob' : ''}
                    style={{
                        padding: themeConfig?.cardStyle === 'blob' ? '4rem' : '3rem',
                        background: 'var(--card-bg)',
                        borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : 'var(--radius)',
                        border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                        lineHeight: '1.8',
                        boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'none',
                        transition: 'all 0.4s ease'
                    }}>
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
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                .privacy-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .privacy-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper>
    );
}
