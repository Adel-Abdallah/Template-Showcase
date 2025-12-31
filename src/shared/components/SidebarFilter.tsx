'use client';

import React from 'react';

interface SidebarFilterProps {
    styles: Record<string, string>;
    categories?: string[];
    tags?: string[];
}

import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { useState } from 'react';

export default function SidebarFilter({ styles, categories, tags }: SidebarFilterProps) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        price: true,
        collections: true,
        availability: true
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside style={{ width: '260px', paddingRight: '1.5rem', display: 'none' }} className="sidebar-filter">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', opacity: 0.7 }}>
                <Filter size={20} />
                <span style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Filters</span>
            </div>

            {/* Price Range */}
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                <button
                    onClick={() => toggleSection('price')}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        marginBottom: '0.5rem',
                        alignItems: 'center'
                    }}
                >
                    Price Range
                    {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {openSections.price && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.8rem', paddingLeft: '0.5rem' }}>
                        {['Under $50', '$50 - $100', '$100 - $500', 'Over $500'].map((price) => (
                            <label key={price} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.9rem', opacity: 0.8 }}>
                                <input type="checkbox" style={{ accentColor: 'currentColor', transform: 'scale(1.1)' }} />
                                {price}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Collections / Tags */}
            {tags && tags.length > 0 && (
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <button
                        onClick={() => toggleSection('collections')}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            marginBottom: '0.5rem',
                            alignItems: 'center'
                        }}
                    >
                        Collections
                        {openSections.collections ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {openSections.collections && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.8rem' }}>
                            {tags.map(tag => (
                                <span key={tag} style={{
                                    padding: '0.4rem 0.8rem',
                                    border: '1px solid var(--border)',
                                    borderRadius: '8px',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    background: 'var(--card-bg, rgba(255,255,255,0.05))'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Availability */}
            <div style={{ marginBottom: '1.5rem' }}>
                <button
                    onClick={() => toggleSection('availability')}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        marginBottom: '0.5rem',
                        alignItems: 'center'
                    }}
                >
                    Availability
                    {openSections.availability ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openSections.availability && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.8rem', paddingLeft: '0.5rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.9rem', opacity: 0.8 }}>
                            <input type="checkbox" defaultChecked style={{ accentColor: 'currentColor', transform: 'scale(1.1)' }} /> In Stock
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.9rem', opacity: 0.8 }}>
                            <input type="checkbox" style={{ accentColor: 'currentColor', transform: 'scale(1.1)' }} /> Out of Stock
                        </label>
                    </div>
                )}
            </div>

            <style jsx>{`
                @media (min-width: 768px) {
                    .sidebar-filter {
                        display: block !important;
                    }
                }
            `}</style>
        </aside>
    );
}
