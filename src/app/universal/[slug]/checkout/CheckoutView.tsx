'use client';
// Force Refresh

import React from 'react';
import Link from 'next/link';
import { CreditCard } from 'lucide-react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';
import Button from '../../../../shared/components/ui/Button';
import Input from '../../../../shared/components/ui/Input';

interface CheckoutViewProps {
    slug: string;
    themeConfig: any;
}

export default function CheckoutView({ slug, themeConfig }: CheckoutViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', minHeight: '80vh' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text)' }}>Checkout</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    <section style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card-bg)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Shipping Information</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                            </div>
                            <Input placeholder="Address" />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <Input placeholder="City" />
                                <Input placeholder="State" />
                                <Input placeholder="ZIP" />
                            </div>
                        </form>
                    </section>

                    <section style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card-bg)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Payment</h2>
                        <div style={{
                            padding: '1.5rem',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            background: 'var(--card-bg)' // Replaced rgba with card-bg for consistency or could add a secondary-bg var
                        }}>
                            <CreditCard size={24} style={{ opacity: 0.8, color: 'var(--text)' }} />
                            <div>
                                <p style={{ fontWeight: 'bold', marginBottom: '0.2rem', color: 'var(--text)' }}>Credit Card</p>
                                <p style={{ fontSize: '0.85rem', opacity: 0.6, color: 'var(--text)' }}>Secure payment via Stripe (Mock)</p>
                            </div>
                        </div>
                        <Link href={`/universal/${slug}/confirmation`}>
                            <Button fullWidth size="lg">
                                Place Order
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>
        </ThemeWrapper>
    );
}
