'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalLoader() {
    const pathname = usePathname();

    // Extract theme from path: /universal/[theme]/...
    const parts = pathname?.split('/') || [];
    const theme = parts[2] || 'default';

    // Theme-specific styles
    const getLoaderContent = () => {
        switch (theme) {
            case 'tech':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        fontFamily: 'monospace',
                        color: '#00ff00'
                    }}>
                        <div style={{
                            fontSize: '1.5rem',
                            letterSpacing: '0.2rem',
                            animation: 'glitch 1s infinite'
                        }}>
                            SYSTEM_LOADING...
                        </div>
                        <div style={{
                            width: '200px',
                            height: '4px',
                            background: '#003300',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '50%',
                                background: '#00ff00',
                                animation: 'sidebar-loading 1s infinite linear'
                            }} />
                        </div>
                        <style jsx>{`
                            @keyframes sidebar-loading {
                                0% { left: -50%; }
                                100% { left: 100%; }
                            }
                        `}</style>
                    </div>
                );
            case 'luxury':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem',
                        color: '#d4af37'
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            fontFamily: 'Playfair Display, serif',
                            letterSpacing: '0.1rem',
                            textTransform: 'uppercase'
                        }}>
                            Please Wait
                        </div>
                        <div style={{
                            width: '100px',
                            height: '1px',
                            background: '#d4af37',
                            animation: 'expand 2s infinite ease-in-out'
                        }} />
                        <style jsx>{`
                            @keyframes expand {
                                0% { width: 0px; opacity: 0; }
                                50% { width: 100px; opacity: 1; }
                                100% { width: 0px; opacity: 0; }
                            }
                        `}</style>
                    </div>
                );
            case 'vibrant':
                return (
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem'
                    }}>
                        {[0, 1, 2].map((i) => (
                            <div key={i} style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: i === 0 ? '#ff00ff' : i === 1 ? '#00ffff' : '#ffff00',
                                animation: `bounce 0.6s infinite alternate ${i * 0.2}s`
                            }} />
                        ))}
                        <style jsx>{`
                            @keyframes bounce {
                                to { transform: translateY(-20px); }
                            }
                        `}</style>
                    </div>
                );
            case 'glass':
                return (
                    <div style={{
                        padding: '2rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '4px solid rgba(255,255,255,0.3)',
                            borderTopColor: 'white',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }} />
                        <div style={{ color: 'white', opacity: 0.8 }}>Loading...</div>
                        <style jsx>{`
                            @keyframes spin {
                                to { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                );
            default:
                // Minimalist / Standard
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'white'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '3px solid rgba(255,255,255,0.2)',
                            borderTopColor: 'white',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite'
                        }} />
                        <style jsx>{`
                            @keyframes spin {
                                to { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                );
        }
    };

    // Global background based on theme (optional override or just dark overlay)
    // Actually we want a "Portal" feel, so a dim backdrop is good.
    // For 'tech', maybe a pure black background. For 'glass', a blurry one.

    let containerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.8)', // Default dim
        backdropFilter: 'blur(5px)'
    };

    if (theme === 'tech') {
        containerStyle.background = 'black';
        containerStyle.backdropFilter = 'none';
    } else if (theme === 'luxury') {
        containerStyle.background = '#0a0a0a';
    } else if (theme === 'glass') {
        containerStyle.background = 'rgba(0,0,0,0.4)'; // Let the vibrant bg show through a bit
    }

    return (
        <div style={containerStyle}>
            {getLoaderContent()}
        </div>
    );
}
