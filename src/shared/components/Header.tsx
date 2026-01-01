'use client';

import Link from "next/link";
import React from "react";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";

type HeaderProps = {
    config: {
        links: { label: string; href: string }[];
        cartIcon: boolean;
    };
    styles: Record<string, string>;
    title: string;
    slug?: string;
    themeConfig?: any;
};

export default function Header({ config, styles, title, slug, themeConfig }: HeaderProps) {
    const { items: cartItems } = useCartStore();
    const { items: wishlistItems } = useWishlistStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Derived slug & Base URL logic
    const derivedSlug = slug || (config.links[0]?.href.split('/')[2]) || 'glass';
    const baseUrl = `/universal/${derivedSlug}`;

    const animationsEnabled = themeConfig?.style?.animations === true;

    // Premium Header Styles
    const headerStyle: React.CSSProperties = animationsEnabled ? {
        position: 'sticky',
        top: '1rem',
        zIndex: 100,
        maxWidth: '95%',
        margin: '0 auto',
        padding: '0.8rem 1.5rem', // Smaller padding on mobile by default
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderRadius: '100px',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        animation: 'slideDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        color: 'var(--text, inherit)'
    } : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        position: 'relative',
        zIndex: 50
    };

    return (
        <>
            <style>{`
                @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                @keyframes fadeInNav { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }

                .mobile-menu-trigger {
                    display: none;
                }
                .desktop-nav {
                    display: flex;
                }
                @media (max-width: 768px) {
                    .mobile-menu-trigger {
                        display: block;
                        cursor: pointer;
                        z-index: 101;
                    }
                    .desktop-nav {
                        display: none !important;
                    }
                }
            `}</style>

            <header className={!animationsEnabled ? styles.header : undefined} style={headerStyle}>

                {/* Logo Area */}
                <div className={styles.logo} style={{ flexShrink: 0, zIndex: 102 }}>
                    <Link href={baseUrl} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.03em', fontStyle: 'italic' }}>
                        {title}
                    </Link>
                </div>

                {/* Desktop Nav (Hidden on Mobile) */}
                <nav className={`desktop-nav ${styles.nav}`} style={{
                    gap: '2rem',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center',
                    animation: animationsEnabled ? 'fadeInNav 0.8s ease-out 0.2s backwards' : 'none'
                }}>
                    {config?.links.map((link, index) => (
                        <Link key={index} href={link.href} className={styles.navLink} style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            letterSpacing: '0.05em'
                        }}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Icons & Hamburger Wrapper */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 102 }}>

                    {/* Always visible icons: Cart/Wishlist (Maybe hide text/count on super small?) */}
                    <div className={styles.cart} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Link href={`${baseUrl}/wishlist`} style={{ position: 'relative', color: 'inherit', display: 'flex' }}>
                            <Heart size={22} strokeWidth={2.5} />
                            {wishlistItems.length > 0 && (
                                <span style={{
                                    position: 'absolute', top: -5, right: -5,
                                    background: 'var(--primary, red)', color: 'var(--on-primary, white)',
                                    fontSize: '0.6rem', width: '14px', height: '14px',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}>{wishlistItems.length}</span>
                            )}
                        </Link>
                        <Link href={`${baseUrl}/cart`} style={{ position: 'relative', color: 'inherit', display: 'flex' }}>
                            <ShoppingCart size={22} strokeWidth={2.5} />
                            {cartItems.length > 0 && (
                                <span style={{
                                    position: 'absolute', top: -5, right: -5,
                                    background: 'var(--text, black)', color: 'var(--bg, white)',
                                    fontSize: '0.6rem', width: '14px', height: '14px',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}>{cartItems.length}</span>
                            )}
                        </Link>
                    </div>

                    {/* Hamburger Trigger */}
                    <div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'var(--bg, #fff)',
                    zIndex: 99,
                    paddingTop: '80px', // clear header
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    animation: 'fadeInNav 0.3s ease-out',
                    color: 'var(--text, #000)'
                }}>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {config?.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    borderBottom: '1px solid var(--border, #eee)',
                                    paddingBottom: '0.5rem'
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={`${baseUrl}/account`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                borderBottom: '1px solid var(--border, #eee)',
                                paddingBottom: '0.5rem'
                            }}
                        >
                            <User size={24} /> My Account
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
