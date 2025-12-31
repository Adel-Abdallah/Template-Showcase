'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

interface SidebarFilterProps {
    styles: Record<string, string>;
    categories?: string[];
    tags?: string[];
    isOpen?: boolean;
    onClose?: () => void;
    themeStyle?: React.CSSProperties; // Pass raw CSS variables
}

export default function SidebarFilter({ styles, categories, tags, isOpen, onClose, themeStyle }: SidebarFilterProps) {
    const [mounted, setMounted] = useState(false);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        price: true,
        collections: true,
        availability: true
    });

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    if (!mounted) return null;

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(2px)',
                    zIndex: 9998,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease'
                }}
            />

            {/* Drawer */}
            <aside
                style={{
                    ...themeStyle, // Apply CSS variables first
                    position: 'fixed',
                    top: 0,
                    right: 0, // Right side drawer
                    bottom: 0,
                    width: '320px',
                    maxWidth: '85vw',
                    background: 'var(--card-bg, #fff)',
                    zIndex: 9999,
                    padding: '2rem',
                    overflowY: 'auto',
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderLeft: '1px solid var(--border)',
                    boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
                    color: 'var(--text)', // Ensure text color is set
                }}
                className="sidebar-filter"
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
                        <Filter size={20} />
                        <span style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-heading)' }}>Filters</span>
                    </div>
                    <button
                        onClick={onClose}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', color: 'inherit' }}
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Price Range */}
                <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
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
                            fontWeight: '700',
                            fontSize: '1rem',
                            marginBottom: '1rem',
                            alignItems: 'center',
                            fontFamily: 'var(--font-heading, inherit)'
                        }}
                    >
                        Price Range
                        {openSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {openSections.price && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {['Under $50', '$50 - $100', '$100 - $500', 'Over $500'].map((price) => (
                                <label key={price} className="custom-checkbox" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.95rem', opacity: 0.9 }}>
                                    <input type="checkbox" style={{ display: 'none' }} />
                                    <span className="checkbox-box" style={{
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s'
                                    }}>
                                        <span className="check-mark" style={{ width: '10px', height: '10px', background: 'var(--text)', borderRadius: '2px', opacity: 0, transform: 'scale(0)' }} />
                                    </span>
                                    {price}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Collections / Tags */}
                {tags && tags.length > 0 && (
                    <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
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
                                fontWeight: '700',
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                alignItems: 'center',
                                fontFamily: 'var(--font-heading, inherit)'
                            }}
                        >
                            Collections
                            {openSections.collections ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {openSections.collections && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                                {tags.map(tag => (
                                    <span key={tag} style={{
                                        padding: '0.3rem 0.8rem',
                                        border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius, 8px)',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        background: 'transparent',
                                        opacity: 0.8,
                                        fontWeight: 500
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'var(--text)';
                                            e.currentTarget.style.color = 'var(--bg)';
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = 'inherit';
                                            e.currentTarget.style.opacity = '0.8';
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
                            fontWeight: '700',
                            fontSize: '1rem',
                            marginBottom: '1rem',
                            alignItems: 'center',
                            fontFamily: 'var(--font-heading, inherit)'
                        }}
                    >
                        Availability
                        {openSections.availability ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {openSections.availability && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {['In Stock', 'Out of Stock'].map((status) => (
                                <label key={status} className="custom-checkbox" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.95rem', opacity: 0.9 }}>
                                    <input type="checkbox" style={{ display: 'none' }} />
                                    <span className="checkbox-box" style={{
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s'
                                    }}>
                                        <span className="check-mark" style={{ width: '10px', height: '10px', background: 'var(--text)', borderRadius: '2px', opacity: 0, transform: 'scale(0)' }} />
                                    </span>
                                    {status}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <style jsx>{`
                    .custom-checkbox input:checked + .checkbox-box {
                        border-color: var(--text);
                    }
                    .custom-checkbox input:checked + .checkbox-box .check-mark {
                        opacity: 1;
                        transform: scale(1);
                    }
                `}</style>
            </aside>
        </>,
        document.body
    );
}
