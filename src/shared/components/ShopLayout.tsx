'use client';

import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import SidebarFilter from './SidebarFilter';

interface ShopLayoutProps {
    styles: Record<string, string>;
    children: React.ReactNode;
    themeStyle?: React.CSSProperties; // Receive theme variables
    sidebarProps: {
        tags?: string[];
        categories?: string[];
        styles: Record<string, string>;
    };
}

export default function ShopLayout({ styles, children, sidebarProps, themeStyle }: ShopLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Filter Trigger Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="filter-trigger-btn"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.5rem',
                        background: 'transparent',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius, 4px)',
                        color: 'var(--text)',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-main)',
                        fontWeight: 500,
                        transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--text)';
                        e.currentTarget.style.color = 'var(--bg)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--text)';
                    }}
                >
                    <Filter size={18} />
                    <span>FILTERS</span>
                </button>
            </div>

            <SidebarFilter
                {...sidebarProps}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                themeStyle={themeStyle}
            />

            {/* Main Content Grid */}
            <div style={{ flex: 1, minWidth: 0 }}>
                {children}
            </div>
        </div>
    );
}
