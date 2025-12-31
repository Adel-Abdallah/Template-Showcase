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
                    <div
                        className={themeConfig?.cardStyle === 'blob' ? 'account-blob' : ''}
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '50%',
                            background: 'var(--card-bg)',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 4px 15px rgba(135, 206, 235, 0.2)' : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text)',
                            transition: 'all 0.4s ease'
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
                    <Link href={`${baseUrl}/orders`}
                        className={themeConfig?.cardStyle === 'blob' ? 'account-blob' : ''}
                        style={{
                            padding: '2rem',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : 'var(--radius)',
                            background: 'var(--card-bg)',
                            textDecoration: 'none',
                            color: 'var(--text)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            transition: 'all 0.4s ease',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'var(--shadow-md)'
                        }}>
                        <Package size={32} opacity={0.8} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>My Orders</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>Track and view history</p>
                        </div>
                    </Link>

                    {/* Wishlist */}
                    <Link href={`${baseUrl}/wishlist`}
                        className={themeConfig?.cardStyle === 'blob' ? 'account-blob' : ''}
                        style={{
                            padding: '2rem',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '40% 60% 60% 40% / 40% 40% 60% 60%' : 'var(--radius)',
                            background: 'var(--card-bg)',
                            textDecoration: 'none',
                            color: 'var(--text)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            transition: 'all 0.4s ease',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'var(--shadow-md)'
                        }}>
                        <Heart size={32} opacity={0.8} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Wishlist</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>Your favorite items</p>
                        </div>
                    </Link>

                    {/* Settings */}
                    <Link href={`${baseUrl}/account/settings`}
                        className={themeConfig?.cardStyle === 'blob' ? 'account-blob' : ''}
                        style={{
                            padding: '2rem',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '60% 40% 30% 70% / 60% 30% 70% 40%' : 'var(--radius)',
                            background: 'var(--card-bg)',
                            textDecoration: 'none',
                            color: 'var(--text)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            transition: 'all 0.4s ease',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'var(--shadow-md)'
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

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                .account-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .account-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.05);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper >
    );
}
