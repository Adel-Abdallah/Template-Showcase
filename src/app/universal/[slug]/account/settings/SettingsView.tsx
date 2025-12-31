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
                    <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card-bg)' }}>
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
                    <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card-bg)' }}>
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
                    <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--card-bg)' }}>
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
        </ThemeWrapper>
    );
}
