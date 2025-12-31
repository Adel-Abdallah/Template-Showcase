'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface SecondaryNavbarProps {
    categories: string[];
    slug: string;
    styles: Record<string, string>;
    layout?: 'default' | 'tabs' | 'pills' | 'minimal' | 'bar';
    themeStyle?: React.CSSProperties;
}

export default function SecondaryNavbar({ categories, slug, styles, layout = 'default', themeStyle }: SecondaryNavbarProps) {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category');

    const baseStyle: React.CSSProperties = {
        padding: '1rem 0',
        display: 'flex',
        gap: '1rem',
        overflowX: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        alignItems: 'center',
        ...((layout === 'bar') ? {
            background: 'var(--card-bg)',
            padding: '1rem 2rem',
            justifyContent: 'center',
            borderBottom: '1px solid var(--border)'
        } : {})
    };

    const getLinkStyle = (cat: string | null): React.CSSProperties => {
        const isActive = activeCategory === (cat === 'All' ? null : cat) || (cat === 'All' && !activeCategory);

        switch (layout) {
            case 'pills':
                return {
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    background: isActive ? 'var(--primary)' : 'transparent',
                    color: isActive ? 'var(--on-primary)' : 'var(--text)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                };
            case 'tabs':
                return {
                    padding: '0.5rem 1.5rem',
                    borderBottom: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                    color: isActive ? 'var(--text)' : 'var(--text)',
                    opacity: isActive ? 1 : 0.7,
                    textDecoration: 'none',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                };
            case 'bar':
                return {
                    padding: '0.5rem 1rem',
                    color: isActive ? 'var(--accent)' : 'var(--text)',
                    textDecoration: 'none',
                    fontWeight: isActive ? 800 : 500,
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap'
                };
            default: // minimal
                return {
                    padding: '0.5rem',
                    color: 'var(--text)',
                    opacity: isActive ? 1 : 0.6,
                    textDecoration: isActive ? 'underline' : 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    whiteSpace: 'nowrap'
                };
        }
    };

    return (
        <div style={baseStyle} className="secondary-nav">
            <Link href={`/universal/${slug}`} style={getLinkStyle('All')}>
                All
            </Link>
            {categories.map((cat) => (
                <Link
                    key={cat}
                    href={`/universal/${slug}?category=${encodeURIComponent(cat)}`}
                    style={getLinkStyle(cat)}
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
