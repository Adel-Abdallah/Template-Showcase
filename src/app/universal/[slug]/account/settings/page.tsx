import React from 'react';
import { loadThemeData } from '../../../../../shared/utils/themeLoader';
import { User, Lock, Bell, Save } from 'lucide-react';

export default async function SettingsPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);
    const styles = themeData ? themeData.styles : {};

    return (
        <div className={styles.container} style={{ minHeight: '80vh', padding: '4rem 1rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Account Settings</h1>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Profile Section */}
                    <div style={{ padding: '2rem', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <User size={24} />
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Profile Information</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>Full Name</label>
                                <input type="text" defaultValue="Guest User" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(128,128,128,0.3)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'inherit'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>Email Address</label>
                                <input type="email" defaultValue="user@example.com" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(128,128,128,0.3)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'inherit'
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Security Section */}
                    <div style={{ padding: '2rem', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <Lock size={24} />
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Security</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>Current Password</label>
                                <input type="password" placeholder="••••••••" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(128,128,128,0.3)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'inherit'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>New Password</label>
                                <input type="password" placeholder="••••••••" style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(128,128,128,0.3)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'inherit'
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Notifications Section */}
                    <div style={{ padding: '2rem', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <Bell size={24} />
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Notifications</h2>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <input type="checkbox" id="promo" style={{ width: '20px', height: '20px' }} defaultChecked />
                            <label htmlFor="promo" style={{ cursor: 'pointer' }}>Receive promotional emails</label>
                        </div>
                    </div>

                    <button type="button" style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        background: 'green',
                        color: 'white',
                        border: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}>
                        <Save size={20} /> Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
