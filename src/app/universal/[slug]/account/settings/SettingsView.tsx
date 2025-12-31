'use client';

import React from 'react';
import { User, Lock, Bell, Save } from 'lucide-react';
import ThemeWrapper from '../../../../../shared/components/ThemeWrapper';
import Input from '../../../../../shared/components/ui/Input';
import Button from '../../../../../shared/components/ui/Button';

interface SettingsViewProps {
    slug: string;
    themeConfig: any;
}

export default function SettingsView({ slug, themeConfig }: SettingsViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', padding: '4rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Account Settings</h1>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Profile Section */}
                    <div
                        className={themeConfig?.cardStyle === 'blob' ? 'settings-blob' : ''}
                        style={{
                            padding: themeConfig?.cardStyle === 'blob' ? '3rem' : '2rem',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : 'var(--radius)',
                            background: 'var(--card-bg)',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 40px rgba(135, 206, 235, 0.2)' : 'none',
                            transition: 'all 0.4s ease'
                        }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            <User size={24} />
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Profile Information</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Input label="Full Name" defaultValue="Guest User" fullWidth />
                            <Input label="Email Address" defaultValue="user@example.com" fullWidth />
                        </div>
                    </div>

                    {/* Security Section */}
                    <div
                        className={themeConfig?.cardStyle === 'blob' ? 'settings-blob' : ''}
                        style={{
                            padding: themeConfig?.cardStyle === 'blob' ? '3rem' : '2rem',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '40% 60% 60% 40% / 40% 40% 60% 60%' : 'var(--radius)',
                            background: 'var(--card-bg)',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 40px rgba(135, 206, 235, 0.2)' : 'none',
                            transition: 'all 0.4s ease'
                        }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            <Lock size={24} />
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Security</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Input label="Current Password" type="password" placeholder="••••••••" fullWidth />
                            <Input label="New Password" type="password" placeholder="••••••••" fullWidth />
                        </div>
                    </div>

                    {/* Notifications Section */}
                    <div
                        className={themeConfig?.cardStyle === 'blob' ? 'settings-blob' : ''}
                        style={{
                            padding: themeConfig?.cardStyle === 'blob' ? '3rem' : '2rem',
                            border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                            borderRadius: themeConfig?.cardStyle === 'blob' ? '60% 40% 30% 70% / 60% 30% 70% 40%' : 'var(--radius)',
                            background: 'var(--card-bg)',
                            boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 40px rgba(135, 206, 235, 0.2)' : 'none',
                            transition: 'all 0.4s ease'
                        }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            <Bell size={24} />
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Notifications</h2>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.5rem 0' }}>
                            <input type="checkbox" id="promo" style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} defaultChecked />
                            <label htmlFor="promo" style={{ cursor: 'pointer' }}>Receive promotional emails</label>
                        </div>
                    </div>

                    <Button
                        type="button"
                        size="lg"
                        leftIcon={<Save size={20} />}
                        fullWidth
                    >
                        Save Changes
                    </Button>
                </form>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
            <style jsx>{`
                .settings-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .settings-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper >
    );
}
