'use client';

import React from 'react';
import Link from 'next/link';
import { CreditCard } from 'lucide-react';

export default function CheckoutPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', minHeight: '80vh' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Checkout</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                <section style={{ padding: '2rem', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '12px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Shipping Information</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <input type="text" placeholder="First Name" style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                            <input type="text" placeholder="Last Name" style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                        </div>
                        <input type="text" placeholder="Address" style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                            <input type="text" placeholder="City" style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                            <input type="text" placeholder="State" style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                            <input type="text" placeholder="ZIP" style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
                        </div>
                    </form>
                </section>

                <section style={{ padding: '2rem', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '12px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Payment</h2>
                    <div style={{
                        padding: '1.5rem',
                        border: '1px solid rgba(128,128,128,0.3)',
                        borderRadius: '8px',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                        <CreditCard size={24} style={{ opacity: 0.8 }} />
                        <div>
                            <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>Credit Card</p>
                            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Secure payment via Stripe (Mock)</p>
                        </div>
                    </div>
                    <Link href={`/universal/${slug}/confirmation`}>
                        <button style={{ width: '100%', padding: '1.2rem', borderRadius: '8px', border: 'none', background: '#333', color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                            Place Order
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    );
}
