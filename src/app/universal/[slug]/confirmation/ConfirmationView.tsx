'use client';

import React from 'react';
import Link from 'next/link';
import { Package, CheckCircle } from 'lucide-react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';
import Button from '../../../../shared/components/ui/Button';

interface ConfirmationViewProps {
    slug: string;
    themeConfig: any;
}

export default function ConfirmationView({ slug, themeConfig }: ConfirmationViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '3rem',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                    maxWidth: '500px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-md)'
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'var(--color-success-bg, rgba(75, 181, 67, 0.2))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto',
                        color: 'var(--color-success, #4bb543)'
                    }}>
                        <CheckCircle size={40} />
                    </div>

                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Order Confirmed!</h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.6' }}>
                        Thank you for your purchase. Your order <strong>#ORD-NEW-123</strong> has been received and is being processed.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Button
                            fullWidth
                            size="lg"
                            leftIcon={<Package size={20} />}
                            onClick={() => window.location.href = `/universal/${slug}/orders`}
                        >
                            Track Order Progress
                        </Button>

                        <Link href={`/universal/${slug}`} style={{
                            opacity: 0.7,
                            textDecoration: 'underline',
                            marginTop: '0.5rem',
                            color: 'var(--text)',
                            textAlign: 'center'
                        }}>
                            Return to Store
                        </Link>
                    </div>
                </div>
            </div>
        </ThemeWrapper>
    );
}
