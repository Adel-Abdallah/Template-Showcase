'use client';

import Link from "next/link";
import React from "react";
import { ShoppingCart, Heart, User } from "lucide-react";
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
        padding: '1rem 2.5rem',
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
    } : {};

    // Use existing class if not premium, or mix them? 
    // If animationsEnabled, we completely override the standard 'styles.header' layout logic for the container
    // but we can still keep the class for potential specificity if needed, though inline styles win.

    return (
        <>
            {animationsEnabled && (
                <style jsx global>{`
                    @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                    @keyframes fadeInNav { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
                `}</style>
            )}

            <header className={!animationsEnabled ? styles.header : undefined} style={headerStyle}>
                <div className={styles.logo} style={{ flexShrink: 0 }}>
                    <Link href={baseUrl} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.03em', fontStyle: 'italic' }}>
                        {title}
                    </Link>
                </div>

                {/* Main Navigation */}
                <nav className={styles.nav} style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center',
                    animation: animationsEnabled ? 'fadeInNav 0.8s ease-out 0.2s backwards' : 'none'
                }}>
                    {/* Theme Links Only */}

                    {/* Theme Links */}
                    {config.links.map((link, index) => (
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

                <div className={styles.cart} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexShrink: 0 }}>
                    {/* Wishlist */}
                    <Link href={`${baseUrl}/wishlist`} style={{ position: 'relative', color: 'inherit', display: 'flex', transition: 'transform 0.2s', transform: 'scale(1)' }}>
                        <Heart size={22} strokeWidth={2.5} />
                        {wishlistItems.length > 0 && (
                            <span style={{
                                position: 'absolute', top: -6, right: -6,
                                background: 'var(--primary, red)', color: 'var(--on-primary, white)',
                                fontSize: '0.6rem', width: '16px', height: '16px',
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                            }}>
                                {wishlistItems.length}
                            </span>
                        )}
                    </Link>

                    {/* Account */}
                    <Link href={`${baseUrl}/account`} style={{ color: 'inherit', display: 'flex' }}>
                        <User size={22} strokeWidth={2.5} />
                    </Link>

                    {/* Cart */}
                    <Link href={`${baseUrl}/cart`} style={{ position: 'relative', color: 'inherit', display: 'flex' }}>
                        <ShoppingCart size={22} strokeWidth={2.5} />
                        {cartItems.length > 0 && (
                            <span style={{
                                position: 'absolute', top: -6, right: -6,
                                background: 'var(--text, black)', color: 'var(--bg, white)',
                                fontSize: '0.6rem', width: '16px', height: '16px',
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                </div>
            </header>
        </>
    );
}
