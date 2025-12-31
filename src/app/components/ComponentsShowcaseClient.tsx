'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Search, Bell } from 'lucide-react';

// Imports from Atomic UI (Refactored to use CSS Vars)
import Button from '../../shared/components/ui/Button';
import Input from '../../shared/components/ui/Input';
import Alert from '../../shared/components/ui/Alert';
import Badge from '../../shared/components/ui/Badge';
import Modal from '../../shared/components/ui/Modal';

// Types
interface ThemeConfig {
    slug: string;
    config: any;
}

interface ComponentsShowcaseProps {
    availableThemes: ThemeConfig[]; // Renamed to match parent
    currentSlug: string;
    themeStyles: any; // The CSS Module object
    themeConfig: any;
}

export default function ComponentsShowcaseClient({ availableThemes, currentSlug, themeStyles, themeConfig }: ComponentsShowcaseProps) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Apply the theme container class which defines all CSS variables (--primary, --bg, etc.)
    // If the theme loader failed or styles are missing, fallback might be needed, but we assume styles exist.
    // Dynamic Style Extraction from JSON Config
    let dynamicStyles: React.CSSProperties = {};
    if (themeConfig && themeConfig.style) {
        dynamicStyles = {
            '--primary': themeConfig.style.colors.primary,
            '--on-primary': themeConfig.style.colors.onPrimary,
            '--secondary': themeConfig.style.colors.secondary,
            '--on-secondary': themeConfig.style.colors.onSecondary,
            '--bg': themeConfig.style.colors.background,
            '--text': themeConfig.style.colors.text,
            '--border': themeConfig.style.colors.border,
            '--card-bg': themeConfig.style.colors.cardBg,
            '--radius': themeConfig.style.shape.borderRadius,
            '--border-width': themeConfig.style.shape.borderWidth,
            '--shadow-md': themeConfig.style.effects?.shadow || 'none',
            '--font-main': themeConfig.style.typography.fontFamily,
            '--font-heading': themeConfig.style.typography.headingsFamily || themeConfig.style.typography.fontFamily,
            fontFamily: 'var(--font-main)',
            // Transition for smooth theme switching
            transition: 'all 0.3s ease',
            minHeight: '100vh',
            paddingBottom: '4rem',
            // Default explicit background to prevent white flash
            backgroundColor: themeConfig.style.colors.background
        } as React.CSSProperties;
    } else {
        // Fallback or just standard object
        dynamicStyles = { minHeight: '100vh', paddingBottom: '4rem' };
    }

    const rootClass = themeStyles.container || '';

    // Helpers to handle theme switching via URL
    const handleThemeChange = (slug: string) => {
        router.push(`/components?theme=${slug}`);
    };

    return (
        <div className={rootClass} style={dynamicStyles}>
            <header className={themeStyles.header || ''} style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/" style={{ color: 'var(--text)' }}><ArrowLeft /></Link>
                    <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text)' }}>UI Components Library</h1>
                </div>

                {/* Theme Toggler */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', maxWidth: '600px', justifyContent: 'flex-end' }}>
                    <span style={{ fontSize: '0.9rem', opacity: 0.7, color: 'var(--text)' }}>Theme:</span>
                    {availableThemes.map(t => (
                        <button
                            key={t.slug}
                            onClick={() => handleThemeChange(t.slug)}
                            style={{
                                padding: '0.4rem 0.8rem',
                                background: currentSlug === t.slug ? 'var(--text)' : 'transparent',
                                color: currentSlug === t.slug ? 'var(--bg)' : 'var(--text)',
                                border: '1px solid var(--border)',
                                borderRadius: '4px', // This is UI for the showcase itself, can be independent or use var(--radius)
                                cursor: 'pointer',
                                textTransform: 'capitalize',
                                fontSize: '0.8rem'
                            }}
                        >
                            {t.slug}
                        </button>
                    ))}
                </div>
            </header>

            <main style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* Buttons Section */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', color: 'var(--text)' }}>Buttons</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                        {/* No explicit themeStyles passed! They should inherit vars from .container */}
                        <Button>Primary Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="danger">Danger</Button>
                        <Button isLoading>Loading</Button>
                        <Button leftIcon={<Save size={18} />}>With Icon</Button>
                    </div>
                </section>

                {/* Inputs Section */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', color: 'var(--text)' }}>Inputs</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <Input label="Email Address" placeholder="name@example.com" leftIcon={<Search size={18} />} />
                        <Input label="Password" type="password" placeholder="••••••••" />
                        <Input label="Error State" error="Invalid input provided" defaultValue="Wrong Value" />
                        <Input label="With Helper" helperText="We will never share your email." placeholder="Enter email" />
                    </div>
                </section>

                {/* Alerts Section */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', color: 'var(--text)' }}>Alerts</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Alert variant="success" title="Success">Your changes have been saved successfully.</Alert>
                        <Alert variant="warning" title="Warning">Your account is pending verification.</Alert>
                        <Alert variant="error" title="Critical Error">Failed to connect to the database.</Alert>
                        <Alert variant="info">Here is some useful information without a title.</Alert>
                    </div>
                </section>

                {/* Badges & Modals */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', color: 'var(--text)' }}>Badges & Modals</h2>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Badge variant="success">Active</Badge>
                            <Badge variant="warning">Pending</Badge>
                            <Badge variant="error">Failed</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>

                        <div style={{ height: '40px', width: '1px', background: 'var(--border)' }} />

                        <Button onClick={() => setIsModalOpen(true)}>
                            Open Modal Demo
                        </Button>
                    </div>
                </section>

            </main>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Modal Component"
                // Pass theme styles to modal overlay if needed, or ensure modal portal is inside provider
                // Since modal uses portal to body, checking if it inherits vars... 
                // Usually Portal roots require re-applying the theme class or passing styles.
                // For now, let's pass a safe fallback if vars aren't available globally
                themeStyles={{ bg: 'var(--card-bg)', text: 'var(--text)' }}
            >
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                        <Bell size={48} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>This is a reusable modal!</h3>
                    <p style={{ opacity: 0.7, marginBottom: '2rem', color: 'var(--text)' }}>
                        It supports portals, focus management, and automatic body scroll locking.
                        It also inherits the current theme styles.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button onClick={() => setIsModalOpen(false)}>Confirm Action</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
