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
    mode?: 'drawer' | 'horizontal' | 'dropdowns';
    position?: 'left' | 'right';
    themeStyle?: React.CSSProperties;
}

export default function SidebarFilter({ styles, categories, tags, isOpen, onClose, themeStyle, mode = 'drawer', position = 'right' }: SidebarFilterProps) {
    const [mounted, setMounted] = useState(false);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        price: true,
        collections: true,
        availability: true
    });

    useEffect(() => {
        setMounted(true);
        if (mode === 'drawer') {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, mode]);

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    if (!mounted) return null;

    if (mode === 'horizontal') {
        return (
            <div style={{
                display: 'flex',
                gap: '2rem',
                padding: '1.5rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                flexWrap: 'wrap',
                alignItems: 'start'
            }}>
                {/* Price */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>PRICE</span>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['Under $50', '$50 - $100', 'Over $100'].map(p => (
                            <label key={p} style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <input type="checkbox" /> {p}
                            </label>
                        ))}
                    </div>
                </div>
                {/* Divide */}
                <div style={{ width: '1px', height: '50px', background: 'var(--border)' }}></div>

                {/* Collections */}
                {tags && tags.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>TAGS</span>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {tags.slice(0, 5).map(tag => (
                                <span key={tag} style={{
                                    padding: '0.2rem 0.6rem',
                                    border: '1px solid var(--border)',
                                    borderRadius: '50px',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer'
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    if (mode === 'dropdowns') {
        return (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem', background: 'var(--card-bg)', borderRadius: 'var(--radius)' }}>
                {Object.keys(openSections).map(section => (
                    <div key={section} style={{ position: 'relative' }}>
                        <button
                            onClick={() => toggleSection(section)}
                            style={{
                                padding: '0.5rem 1rem',
                                border: '1px solid var(--border)',
                                background: 'var(--bg)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)} <ChevronDown size={14} />
                        </button>
                        {openSections[section] && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                marginTop: '0.5rem',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--border)',
                                padding: '1rem',
                                borderRadius: '4px',
                                zIndex: 50,
                                minWidth: '200px',
                                boxShadow: 'var(--shadow-md)'
                            }}>
                                <div style={{ fontSize: '0.9rem' }}>Filter options for {section}...</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

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
                    ...themeStyle,
                    position: 'fixed',
                    top: 0,
                    [position]: 0,
                    bottom: 0,
                    width: '320px',
                    maxWidth: '85vw',
                    background: 'var(--card-bg, #fff)',
                    zIndex: 9999,
                    padding: '2rem',
                    overflowY: 'auto',
                    transform: isOpen ? 'translateX(0)' : `translateX(${position === 'left' ? '-100%' : '100%'})`,
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderRight: position === 'left' ? '1px solid var(--border)' : 'none',
                    borderLeft: position === 'right' ? '1px solid var(--border)' : 'none',
                    boxShadow: position === 'left' ? '4px 0 20px rgba(0,0,0,0.1)' : '-4px 0 20px rgba(0,0,0,0.1)',
                    color: 'var(--text)',
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

                <style>{`
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
