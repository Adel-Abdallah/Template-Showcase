'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem', textAlign: 'center' }}>
            <CheckCircle size={80} color="#4bb543" style={{ marginBottom: '1.5rem' }} />
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You!</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem', maxWidth: '500px' }}>
                Your order has been placed successfully. We will send you an email confirmation shortly.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href={`/universal/${slug}/orders`}>
                    <button style={{ padding: '1rem 2rem', borderRadius: '8px', border: '1px solid #ccc', background: 'transparent', cursor: 'pointer' }}>
                        View Orders
                    </button>
                </Link>
                <Link href={`/universal/${slug}`}>
                    <button style={{ padding: '1rem 2rem', borderRadius: '8px', border: 'none', background: '#333', color: '#fff', cursor: 'pointer' }}>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
}
