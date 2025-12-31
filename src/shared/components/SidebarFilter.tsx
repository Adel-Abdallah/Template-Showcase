'use client';

import React from 'react';

interface SidebarFilterProps {
    styles: Record<string, string>;
    categories?: string[];
    tags?: string[];
}

export default function SidebarFilter({ styles, categories, tags }: SidebarFilterProps) {
    return (
        <aside style={{ width: '250px', paddingRight: '2rem', display: 'none' }} className="sidebar-filter">
            {/* Categories (Vertical List if needed, or keeping secondary nav for that) 
                 Let's stick to Price/Tags here for sidebar */
            }

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Price Range</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="checkbox" /> Under $50
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="checkbox" /> $50 - $100
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="checkbox" /> $100 - $500
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="checkbox" /> Over $500
                    </label>
                </div>
            </div>

            {tags && tags.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Collections</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {tags.map(tag => (
                            <span key={tag} style={{
                                padding: '0.4rem 0.8rem',
                                border: '1px solid rgba(128,128,128,0.3)',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                opacity: 0.8
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Availability</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="checkbox" defaultChecked /> In Stock
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="checkbox" /> Out of Stock
                    </label>
                </div>
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
