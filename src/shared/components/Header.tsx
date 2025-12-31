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
};

export default function Header({ config, styles, title, slug }: HeaderProps) {
    const { items: cartItems } = useCartStore();
    const { items: wishlistItems } = useWishlistStore();

    const derivedSlug = slug || (config.links[0]?.href.split('/')[2]) || 'glass';
    const baseUrl = `/universal/${derivedSlug}`;

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={baseUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {title}
                </Link>
            </div>

            {/* Main Navigation */}
            <nav className={styles.nav} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                {/* Requested Static Links */}
                <Link href="/templates" className={styles.navLink || ''} style={{ color: 'inherit', textDecoration: 'none' }}>Templates</Link>
                <Link href="/pages" className={styles.navLink || ''} style={{ color: 'inherit', textDecoration: 'none' }}>Pages</Link>
                <Link href="/sections" className={styles.navLink || ''} style={{ color: 'inherit', textDecoration: 'none' }}>Sections</Link>
                <Link href="/components" className={styles.navLink || ''} style={{ color: 'inherit', textDecoration: 'none' }}>Components</Link>

                <div style={{ width: '1px', height: '20px', background: 'currentColor', opacity: 0.3, margin: '0 0.5rem' }}></div>

                {/* Dynamic Theme Links */}
                {config.links.map((link, index) => (
                    <Link key={index} href={link.href} className={styles.navLink}>
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className={styles.cart} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                {/* Wishlist */}
                <Link href={`${baseUrl}/wishlist`} style={{ position: 'relative', color: 'inherit', display: 'flex' }}>
                    <Heart size={24} />
                    {wishlistItems.length > 0 && (
                        <span style={{
                            position: 'absolute', top: -8, right: -8,
                            background: 'red', color: 'white',
                            fontSize: '0.7rem', width: '18px', height: '18px',
                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {wishlistItems.length}
                        </span>
                    )}
                </Link>

                {/* Account */}
                <Link href={`${baseUrl}/account`} style={{ color: 'inherit', display: 'flex' }}>
                    <User size={24} />
                </Link>

                {/* Cart */}
                <Link href={`${baseUrl}/cart`} style={{ position: 'relative', color: 'inherit', display: 'flex' }}>
                    <ShoppingCart size={24} />
                    {cartItems.length > 0 && (
                        <span style={{
                            position: 'absolute', top: -8, right: -8,
                            background: 'white', color: 'black', border: '1px solid black',
                            fontSize: '0.7rem', width: '18px', height: '18px',
                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {cartItems.length}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}
