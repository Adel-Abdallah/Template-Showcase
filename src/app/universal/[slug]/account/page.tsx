import React from 'react';
import Link from 'next/link';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import { Package, Heart, Settings, LogOut, User } from 'lucide-react';

export default async function AccountPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);
    const styles = themeData ? themeData.styles : {};

    const baseUrl = `/universal/${slug}`;

    return (
        <div className={styles.container} style={{ minHeight: '80vh', padding: '4rem 1rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(128,128,128,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <User size={40} opacity={0.7} />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome, User</h1>
                        <p style={{ opacity: 0.7 }}>member since 2024</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    {/* Orders */}
                    <Link href={`${baseUrl}/orders`} style={{
                        padding: '2rem',
                        border: '1px solid rgba(128,128,128,0.2)',
                        borderRadius: '16px',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        transition: 'transform 0.2s'
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
                        border: '1px solid rgba(128,128,128,0.2)',
                        borderRadius: '16px',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
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
                        border: '1px solid rgba(128,128,128,0.2)',
                        borderRadius: '16px',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <Settings size={32} opacity={0.8} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Settings</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>Password and profile</p>
                        </div>
                    </Link>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid rgba(128,128,128,0.1)' }}>
                    <Link href={`${baseUrl}/login`} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#ff4444',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}>
                        <LogOut size={20} />
                        Sign Out
                    </Link>
                </div>
            </div>
        </div>
    );
}
