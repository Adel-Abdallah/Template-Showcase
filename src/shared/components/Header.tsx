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
    slug?: string; // Need slug for links
};

export default function Header({ config, styles, title, slug }: HeaderProps) {
    const { items: cartItems } = useCartStore();
    const { items: wishlistItems } = useWishlistStore();

    // Simplify slug retrieval if not passed directly (fallback logic or just assume links cover it?)
    // Actually config.links already have hrefs like /universal/glass/...
    // But for the new icons we need to know where to go.
    // Let's parse the slug from the first link if possible, or expect it as prop.
    // For now, let's assume we can construct it or it's passed.
    // If slug is missing, we might have faulty links for the icons.
    // Let's try to grab it from the current URL structure in the links??
    // A safer bet is to update the parent to pass 'slug'.

    // Quick fix: extract slug from the first link href if needed: /universal/SLUG/...
    const derivedSlug = slug || config.links[0]?.href.split('/')[2] || 'glass';
    const baseUrl = `/universal/${derivedSlug}`;

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={baseUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {title}
                </Link>
            </div>
            <nav className={styles.nav}>
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
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            background: 'red',
                            color: 'white',
                            fontSize: '0.7rem',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {wishlistItems.length}
                        </span>
                    )}
                </Link>

                {/* Account */}
                <Link href={`${baseUrl}/account`} style={{ color: 'inherit', display: 'flex' }}>
                    <User size={24} />
                </Link>

                {/* Cart (conditionally shown via config but let's always show it with the new premium design) */}
                <Link href={`${baseUrl}/cart`} style={{ position: 'relative', color: 'inherit', display: 'flex' }}>
                    <ShoppingCart size={24} />
                    {cartItems.length > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            background: 'white',
                            color: 'black',
                            border: '1px solid black',
                            fontSize: '0.7rem',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {cartItems.length}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}
