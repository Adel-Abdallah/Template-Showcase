'use client';

import React from 'react';
import { X, Download, FileJson, Layers } from 'lucide-react';
import Button from '@/shared/components/ui/Button';

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
    templateId: string;
    templateName: string;
}

export default function DownloadModal({ isOpen, onClose, templateId, templateName }: DownloadModalProps) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(5px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        }}>
            <div style={{
                background: '#111',
                border: '1px solid #333',
                borderRadius: '16px',
                padding: '2rem',
                width: '100%',
                maxWidth: '500px',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: '#666',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
                    Download {templateName}
                </h2>
                <p style={{ color: '#888', marginBottom: '2rem' }}>
                    Choose your preferred format for this template.
                </p>

                <div style={{ display: 'grid', gap: '1rem' }}>
                    {/* Next.js Option */}
                    <a
                        href={`/downloads/${templateId}-project.zip`}
                        download
                        style={{ textDecoration: 'none' }}
                        onClick={() => setTimeout(onClose, 1000)}
                    >
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: '12px',
                            background: '#1a1a1a',
                            border: '1px solid #333',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onMouseOut={(e) => e.currentTarget.style.borderColor = '#333'}
                        >
                            <div style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: '#3b82f6',
                                padding: '1rem',
                                borderRadius: '8px'
                            }}>
                                <FileJson size={32} />
                            </div>
                            <div>
                                <h3 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.25rem' }}>Next.js App</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>Full config-driven React application. Ready to deploy.</p>
                            </div>
                        </div>
                    </a>

                    {/* WordPress Option */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: '12px',
                        background: '#1a1a1a',
                        border: '1px solid #333',
                        opacity: 0.6,
                        cursor: 'not-allowed',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        position: 'relative'
                    }}>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#fff',
                            padding: '1rem',
                            borderRadius: '8px'
                        }}>
                            <Layers size={32} />
                        </div>
                        <div>
                            <h3 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '0.25rem' }}>WordPress Theme</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>Native WP Theme with block editor support.</p>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: '#333',
                            color: '#fff',
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px'
                        }}>
                            Coming Soon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
