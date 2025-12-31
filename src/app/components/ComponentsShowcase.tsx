'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Search, Bell } from 'lucide-react';

// Imports from Atomic UI
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
    themes: ThemeConfig[];
}

export default function ComponentsShowcase({ themes }: ComponentsShowcaseProps) {
    const [currentSlug, setCurrentSlug] = useState('tech');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Helper to extract styles from the config roughly since we don't have CSS modules here in the showcase easily
    // We are simulating the *visuals* by reading props if possible, or we might need to load CSS variables.
    // However, the previous implementation simulated colors.
    // The REAL way is to load the CSS module. But CSS modules are built at compile time.
    // For this showcase, we will try to infer colors from the Config if available, 
    // OR just rely on basic mapping, but at least the list of themes is real.
    // Wait, the configs don't have color codes usually, they have data. 
    // The Styles are in CSS modules.
    // PROPER FIX: We can't Dynamic Import CSS modules on the client easily for specific classes on the fly without a map.
    // But we already have a `stylesMap` in `themeLoader.ts`. 
    // Since this is a Client Component, we can't use `themeLoader` (server/async).
    // workaround: We'll stick to a robust simulation map for now, OR valid CSS variables if we switch to that.
    // Let's use the provided mapping for colors to prove the point, but use the `themes` list from props to populate the buttons.

    // Better: Extend the hardcoded map with any new themes found in props.
    const colorMap: Record<string, any> = {
        tech: { primary: '#00ff00', bg: '#000', text: '#fff' },
        luxury: { primary: '#d4af37', bg: '#111', text: '#f9f9f9', overlay: 'rgba(20,20,10,0.8)' },
        glass: { primary: '#ff00ff', bg: '#222', text: '#fff' },
        minimalist: { primary: '#000', bg: '#fff', text: '#000' },
        editorial: { primary: '#e53935', bg: '#fff', text: '#111' },
        organic: { primary: '#795548', bg: '#fbf7f5', text: '#3e2723' },
        vibrant: { primary: '#ff4081', bg: '#ea80fc', text: '#fff' },
        industrial: { primary: '#ff5722', bg: '#212121', text: '#fff' },
        saas: { primary: '#2196f3', bg: '#f5f7fa', text: '#1a365d' },
        immersive: { primary: '#651fff', bg: '#000', text: '#fff' },
    };

    const currentTheme = colorMap[currentSlug] || colorMap['tech'];

    return (
        <div style={{ minHeight: '100vh', background: currentTheme.bg, color: currentTheme.text, fontFamily: 'sans-serif', transition: 'background 0.3s' }}>
            <header style={{ padding: '1.5rem', borderBottom: `1px solid ${currentTheme.text}20`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/" style={{ color: 'inherit' }}><ArrowLeft /></Link>
                    <h1 style={{ fontSize: '1.5rem', margin: 0 }}>UI Components Library</h1>
                </div>

                {/* Theme Toggler */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', maxWidth: '600px', justifyContent: 'flex-end' }}>
                    <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Theme:</span>
                    {themes.map(t => (
                        <button
                            key={t.slug}
                            onClick={() => setCurrentSlug(t.slug)}
                            style={{
                                padding: '0.4rem 0.8rem',
                                background: currentSlug === t.slug ? currentTheme.text : 'transparent',
                                color: currentSlug === t.slug ? currentTheme.bg : currentTheme.text,
                                border: `1px solid ${currentTheme.text}40`,
                                borderRadius: '6px',
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: `1px solid ${currentTheme.text}20`, paddingBottom: '0.5rem' }}>Buttons</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                        <Button themeStyles={{ primary: currentTheme.primary, text: currentSlug === 'minimalist' || currentSlug === 'editorial' ? '#fff' : '#000' }}>Primary Button</Button>
                        <Button variant="secondary" themeStyles={{ primary: currentTheme.primary, secondary: `${currentTheme.text}20` }}>Secondary</Button>
                        <Button variant="outline" themeStyles={{ primary: currentTheme.primary }}>Outline</Button>
                        <Button variant="ghost" themeStyles={{ primary: currentTheme.primary }}>Ghost</Button>
                        <Button variant="danger">Danger</Button>
                        <Button isLoading themeStyles={{ primary: currentTheme.primary }}>Loading</Button>
                        <Button leftIcon={<Save size={18} />} themeStyles={{ primary: currentTheme.primary }}>With Icon</Button>
                    </div>
                </section>

                {/* Inputs Section */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: `1px solid ${currentTheme.text}20`, paddingBottom: '0.5rem' }}>Inputs</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <Input label="Email Address" placeholder="name@example.com" leftIcon={<Search size={18} />} themeStyles={{ focusBorderColor: currentTheme.primary, borderColor: `${currentTheme.text}30` }} />
                        <Input label="Password" type="password" placeholder="••••••••" themeStyles={{ focusBorderColor: currentTheme.primary, borderColor: `${currentTheme.text}30` }} />
                        <Input label="Error State" error="Invalid input provided" defaultValue="Wrong Value" />
                        <Input label="With Helper" helperText="We will never share your email." placeholder="Enter email" themeStyles={{ focusBorderColor: currentTheme.primary, borderColor: `${currentTheme.text}30` }} />
                    </div>
                </section>

                {/* Alerts Section */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: `1px solid ${currentTheme.text}20`, paddingBottom: '0.5rem' }}>Alerts</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Alert variant="success" title="Success">Your changes have been saved successfully.</Alert>
                        <Alert variant="warning" title="Warning">Your account is pending verification.</Alert>
                        <Alert variant="error" title="Critical Error">Failed to connect to the database.</Alert>
                        <Alert variant="info">Here is some useful information without a title.</Alert>
                    </div>
                </section>

                {/* Badges & Modals */}
                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: `1px solid ${currentTheme.text}20`, paddingBottom: '0.5rem' }}>Badges & Modals</h2>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Badge variant="success">Active</Badge>
                            <Badge variant="warning">Pending</Badge>
                            <Badge variant="error">Failed</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>

                        <div style={{ height: '40px', width: '1px', background: `${currentTheme.text}20` }} />

                        <Button onClick={() => setIsModalOpen(true)} themeStyles={{ primary: currentTheme.primary, text: currentSlug === 'minimalist' ? '#fff' : '#000' }}>
                            Open Modal Demo
                        </Button>
                    </div>
                </section>

            </main>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Modal Component" themeStyles={{ bg: currentTheme.cardBg || currentTheme.bg, text: currentTheme.text, overlay: currentTheme.overlay }}>
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ marginBottom: '1rem', color: currentTheme.primary }}>
                        <Bell size={48} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>This is a reusable modal!</h3>
                    <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
                        It supports portals, focus management, and automatic body scroll locking.
                        It also inherits the current theme styles.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Button variant="outline" onClick={() => setIsModalOpen(false)} themeStyles={{ primary: currentTheme.primary }}>Cancel</Button>
                        <Button onClick={() => setIsModalOpen(false)} themeStyles={{ primary: currentTheme.primary, text: currentSlug === 'minimalist' ? '#fff' : '#000' }}>Confirm Action</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
