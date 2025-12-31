'use client';

import React from 'react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';
import Input from '../../../../shared/components/ui/Input';
import Button from '../../../../shared/components/ui/Button';

interface ContactViewProps {
    slug: string;
    themeConfig: any;
}

export default function ContactView({ slug, themeConfig }: ContactViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', padding: '4rem 1rem' }}>
                <section style={{ textAlign: 'center', marginBottom: '4rem', animation: 'fadeIn 0.8s ease-out' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Get in Touch</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>We'd love to hear from you.</p>
                </section>

                <div style={{ maxWidth: '600px', margin: '0 auto', animation: 'slideUp 0.8s ease-out 0.2s backwards' }}>
                    <div
                        className={themeConfig?.cardStyle === 'blob' ? 'contact-blob' : ''}
                        style={{
                            padding: themeConfig?.cardStyle === 'blob' ? '4rem' : '2.5rem',
                            background: 'var(--card-bg)',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : 'var(--radius)',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 40px rgba(135, 206, 235, 0.2)' : 'var(--shadow-md)',
                            transition: 'all 0.4s ease'
                        }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <Input label="Name" placeholder="Your Name" />
                                <Input label="Email" type="email" placeholder="your@email.com" />
                            </div>
                            <Input label="Subject" placeholder="How can we help?" />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Message</label>
                                <textarea rows={5} style={{
                                    padding: '1rem',
                                    borderRadius: 'var(--radius)',
                                    border: '1px solid var(--border)',
                                    background: 'transparent', // inputs often have their own bg, but ensuring contrast
                                    color: 'inherit',
                                    fontFamily: 'inherit',
                                    resize: 'vertical'
                                }} placeholder="Write your message here..." />
                            </div>

                            <Button size="lg" fullWidth style={{ marginTop: '1rem' }}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
            <style jsx>{`
                .contact-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .contact-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper >
    );
}
