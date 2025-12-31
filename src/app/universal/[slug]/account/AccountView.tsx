'use client';

import React from 'react';
import Link from 'next/link';
import { Package, Heart, Settings, LogOut, User } from 'lucide-react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';

interface AccountViewProps {
    slug: string;
    themeConfig: any;
}

export default function AccountView({ slug, themeConfig }: AccountViewProps) {
    const baseUrl = `/universal/${slug}`;

    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text)'
                    }}>
                        <User size={40} opacity={0.7} />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Welcome, User</h1>
                        <p style={{ opacity: 0.7 }}>member since 2024</p>
                    </div>
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>

                    {/* Orders */}
                    <Link href={`${baseUrl}/orders`} style={{
                        padding: '2rem',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        background: 'var(--card-bg)',
                        textDecoration: 'none',
                        color: 'var(--text)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        transition: 'transform 0.2s',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <Package size={32} opacity={0.8} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>My Orders</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>Track and view history</p>
                        </div>
                    </Link>

                    {/* Wishlist */}
                    <Link href={`${baseUrl}/wishlist`} style={{
                        padding: '2rem',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        background: 'var(--card-bg)',
                        textDecoration: 'none',
                        color: 'var(--text)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <Heart size={32} opacity={0.8} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Wishlist</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>Your favorite items</p>
                        </div>
                    </Link>

                    {/* Settings */}
                    <Link href={`${baseUrl}/account/settings`} style={{
                        padding: '2rem',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        background: 'var(--card-bg)',
                        textDecoration: 'none',
                        color: 'var(--text)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <Settings size={32} opacity={0.8} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Settings</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>Password and profile</p>
                        </div>
                    </Link>
                </div>

                {/* Sign Out */}
                <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--border)' }}>
                    <Link href={`${baseUrl}/login`} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-error, #ff4444)',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}>
                        <LogOut size={20} />
                        Sign Out
                    </Link>
                </div>
            </div>
        </ThemeWrapper>
    );
}
