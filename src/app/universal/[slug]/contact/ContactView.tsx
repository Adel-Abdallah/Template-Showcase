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
                    <div style={{ padding: '2.5rem', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}>
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
        </ThemeWrapper>
    );
}
