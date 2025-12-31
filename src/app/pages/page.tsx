import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Layout, ShoppingCart, CreditCard, FileText } from 'lucide-react';

export default function PagesPage() {
    // Hardcoded themes for now to avoid dependency on missing server utils
    const themes = ["tech", "luxury", "glass", "minimalist", "editorial", "organic", "vibrant", "industrial", "saas", "immersive"];

    const pageTypes = [
        { name: 'Home / PLP', path: '', icon: <Layout size={20} /> },
        { name: 'Product Detail', path: '/product/1', icon: <FileText size={20} /> },
        { name: 'Cart', path: '/cart', icon: <ShoppingCart size={20} /> },
        { name: 'Checkout', path: '/checkout', icon: <CreditCard size={20} /> },
    ];

    return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff', padding: '2rem' }}>
            <Link href="/" style={{ color: '#aaa', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                <ArrowLeft size={18} /> Back to Home
            </Link>

            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Pages Directory</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '4rem', maxWidth: '600px' }}>
                Quick access to every page type across all 10 templates.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {themes.map(theme => (
                    <div key={theme} style={{
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        background: '#111'
                    }}>
                        <h2 style={{ textTransform: 'capitalize', fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>
                            {theme}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {pageTypes.map(page => (
                                <Link
                                    key={page.name}
                                    href={`/universal/${theme}${page.path}`}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        background: 'rgba(255,255,255,0.03)',
                                        color: '#ccc',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    {page.icon}
                                    {page.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
