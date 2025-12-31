'use client';

import React from 'react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';

interface AboutViewProps {
    slug: string;
    themeConfig: any;
}

export default function AboutView({ slug, themeConfig }: AboutViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', padding: '4rem 1rem' }}>
                <section style={{ textAlign: 'center', marginBottom: '4rem', animation: 'fadeIn 0.8s ease-out' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>About {themeConfig.title}</h1>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
                </section>

                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '2rem', animation: 'slideUp 0.8s ease-out 0.2s backwards' }}>
                        Welcome to <strong>{themeConfig.title}</strong>, where we redefine the template experience.
                        Our mission is to provide you with the most immersive, high-quality, and performant
                        templates on the market.
                    </p>
                    <p style={{ marginBottom: '2rem', animation: 'slideUp 0.8s ease-out 0.4s backwards' }}>
                        Founded in 2024, we started with a simple idea: that websites should be both beautiful
                        and functional. Whether you are looking for a minimal e-commerce store, a high-tech
                        digital agency showcase, or an immersive portfolio, we have crafted a solution for you.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '5rem', textAlign: 'center' }}>
                        <div
                            className={themeConfig?.cardStyle === 'blob' ? 'about-blob' : ''}
                            style={{
                                padding: '2rem',
                                background: 'var(--card-bg)',
                                borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : 'var(--radius)',
                                border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                                boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'none',
                                animation: 'zoomIn 0.6s ease-out 0.6s backwards',
                                transition: 'all 0.4s ease'
                            }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--primary)' }}>10+</h3>
                            <p style={{ opacity: 0.8 }}>Premium Templates</p>
                        </div>
                        <div
                            className={themeConfig?.cardStyle === 'blob' ? 'about-blob' : ''}
                            style={{
                                padding: '2rem',
                                background: 'var(--card-bg)',
                                borderRadius: themeConfig?.cardStyle === 'blob' ? '40% 60% 60% 40% / 40% 40% 60% 60%' : 'var(--radius)',
                                border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                                boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'none',
                                animation: 'zoomIn 0.6s ease-out 0.7s backwards',
                                transition: 'all 0.4s ease'
                            }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--primary)' }}>100%</h3>
                            <p style={{ opacity: 0.8 }}>Responsive Design</p>
                        </div>
                        <div
                            className={themeConfig?.cardStyle === 'blob' ? 'about-blob' : ''}
                            style={{
                                padding: '2rem',
                                background: 'var(--card-bg)',
                                borderRadius: themeConfig?.cardStyle === 'blob' ? '60% 40% 30% 70% / 60% 30% 70% 40%' : 'var(--radius)',
                                border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                                boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'none',
                                animation: 'zoomIn 0.6s ease-out 0.8s backwards',
                                transition: 'all 0.4s ease'
                            }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--primary)' }}>24/7</h3>
                            <p style={{ opacity: 0.8 }}>Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                .about-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .about-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.05);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper>
    );
}
