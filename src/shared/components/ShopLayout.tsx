'use client';

import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import SidebarFilter from './SidebarFilter';

interface ShopLayoutProps {
    styles: Record<string, string>;
    children: React.ReactNode;
    themeStyle?: React.CSSProperties; // Receive theme variables
    gridLayout?: 'grid' | 'list' | 'masonry' | 'slider';
    filterLayout?: 'sidebar-left' | 'sidebar-right' | 'top-bar' | 'modal' | 'dropdowns';
    sidebarProps: {
        tags?: string[];
        categories?: string[];
        styles: Record<string, string>;
    };
}

export default function ShopLayout({ styles, children, sidebarProps, themeStyle, gridLayout = 'grid', filterLayout = 'sidebar-right' }: ShopLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Filter Trigger or Top Bar */}
            {filterLayout === 'top-bar' ? (
                <div style={{ marginBottom: '1rem' }}>
                    <SidebarFilter
                        {...sidebarProps}
                        isOpen={true}
                        onClose={() => { }}
                        themeStyle={themeStyle}
                        mode="horizontal"
                    />
                </div>
            ) : (
                <>
                    <div style={{
                        display: 'flex',
                        justifyContent: filterLayout === 'sidebar-left' ? 'flex-start' : 'flex-end',
                        marginBottom: '1rem'
                    }}>
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
                        mode={filterLayout === 'dropdowns' ? 'dropdowns' : 'drawer'}
                        position={filterLayout === 'sidebar-left' ? 'left' : 'right'}
                    />
                </>
            )}

            {/* Main Content Grid */}
            <div
                className={`product-grid ${gridLayout === 'list' ? 'list-view' : ''}`}
                style={{
                    flex: 1,
                    minWidth: 0,
                    // If masonry, we might need special logic, but for now CSS grid/flex
                }}
            >
                {children}
            </div>

            <style>{`
                .list-view .grid {
                    grid-template-columns: 1fr !important;
                }
            `}</style>
        </div>
    );
}
