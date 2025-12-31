'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SecondaryNavbarProps {
    categories: string[];
    slug: string;
    styles: Record<string, string>;
}

export default function SecondaryNavbar({ categories, slug, styles }: SecondaryNavbarProps) {
    // Determine active via query param or just simple links
    // Ideally we pass current category as prop, but for now simple links

    return (
        <div style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '1rem 0',
            borderBottom: '1px solid rgba(128,128,128,0.2)',
            marginBottom: '2rem',
            display: 'flex',
            gap: '1.5rem',
            // Hide scrollbar
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
        }} className="secondary-nav">
            <Link
                href={`/universal/${slug}`}
                style={{
                    opacity: 1,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: 'inherit'
                }}
            >
                All
            </Link>
            {categories.map((cat) => (
                <Link
                    key={cat}
                    href={`/universal/${slug}?category=${encodeURIComponent(cat)}`}
                    style={{
                        opacity: 0.7,
                        fontWeight: 'normal',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'opacity 0.2s'
                    }}
                >
                    {cat}
                </Link>
            ))}
            <style jsx>{`
                .secondary-nav::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
