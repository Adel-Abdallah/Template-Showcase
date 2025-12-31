'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Search, Bell, Heart, User, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../shared/store/useCartStore';
import { useWishlistStore } from '../../shared/store/useWishlistStore';

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
    const { items: cartItems } = useCartStore();
    const { items: wishlistItems } = useWishlistStore();

    const wishlistCount = wishlistItems.length;
    const cartCount = cartItems.length;
    const currentConfig = themeConfig; // Alias for consistency with pasted code

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
            background: themeConfig.style.colors.background
        } as React.CSSProperties;
    } else {
        // Fallback or just standard object
        dynamicStyles = { minHeight: '100vh', paddingBottom: '4rem' };
    }

    const rootClass = themeStyles.container || '';
    const animationsEnabled = themeConfig?.style?.animations === true;

    // Helpers to handle theme switching via URL
    const handleThemeChange = (slug: string) => {
        router.push(`/components?theme=${slug}`);
    };

    return (
        <div className={rootClass} style={dynamicStyles}>
            {/* Premium Floating Header */}
            <header style={{
                position: 'sticky',
                top: '1rem',
                zIndex: 50,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0.8rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255, 255, 255, 0.05)', // Super subtle
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '100px', // Pill shape
                border: '1px solid rgba(255,255,255,0.1)', // Very faint border
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                animation: animationsEnabled ? 'slideUp 0.6s ease-out' : 'none'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h1 style={{ width: '200px', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em', fontStyle: 'italic', margin: 0 }}>
                        {currentConfig.title}
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex" style={{ gap: '2rem', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {['Templates', 'Pages', 'Sections', 'Components'].map((item) => (
                        <a key={item} href="#" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s' }}>{item}</a>
                    ))}
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <nav className="hidden md:flex" style={{ gap: '1.5rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {currentConfig.header?.links?.map((link: any, i: number) => (
                            <a key={i} href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>{link.label}</a>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(128,128,128,0.2)' }}>
                        {/* Wishlist Icon */}
                        <Link href={`/universal/${currentSlug}/wishlist`} style={{ position: 'relative', color: 'inherit' }}>
                            <Heart size={20} />
                            {wishlistCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    background: 'var(--color-error, red)',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid var(--bg)' // Cutout effect
                                }}>
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                            <User size={20} />
                        </button>
                        <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-5px',
                                    background: 'var(--text)',
                                    color: 'var(--bg)',
                                    borderRadius: '50%',
                                    width: '16px',
                                    height: '16px',
                                    fontSize: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}>
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
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
                portalStyles={dynamicStyles}
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
