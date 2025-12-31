'use client';

import React from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Mail } from 'lucide-react';

export interface NewsletterSectionProps {
    title?: string;
    description?: string;
    themeStyles?: {
        bg: string;
        text: string;
        accent: string;
    };
}

export default function NewsletterSection({
    title = "Join our Newsletter",
    description = "Subscribe to get the latest updates and offers.",
    themeStyles = { bg: '#111', text: '#fff', accent: '#3b82f6' }
}: NewsletterSectionProps) {

    return (
        <section style={{
            padding: '5rem 2rem',
            background: themeStyles.bg,
            color: themeStyles.text,
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{
                    display: 'inline-flex',
                    padding: '1rem',
                    borderRadius: '50%',
                    background: `${themeStyles.accent}20`,
                    color: themeStyles.accent,
                    marginBottom: '1.5rem'
                }}>
                    <Mail size={32} />
                </div>

                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h2>
                <p style={{ opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.6, fontSize: '1.1rem' }}>
                    {description}
                </p>

                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '1rem', flexDirection: 'row', alignItems: 'stretch' }}>
                    <div style={{ flex: 1 }}>
                        <Input
                            placeholder="Enter your email"
                            type="email"
                            fullWidth
                            themeStyles={{ borderRadius: '50px' }}
                            style={{ borderRadius: '50px', paddingLeft: '1.5rem', height: '100%' }}
                        />
                    </div>
                    <Button
                        size="lg"
                        themeStyles={{ primary: themeStyles.accent, radius: '50px' }}
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    );
}
