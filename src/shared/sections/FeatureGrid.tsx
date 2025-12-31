'use client';

import React from 'react';
import * as Icons from 'lucide-react';

export interface Feature {
    title: string;
    description: string;
    iconName: keyof typeof Icons;
}

export interface FeatureGridProps {
    features: Feature[];
    columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
    features,
    columns = 3
}: FeatureGridProps) {

    const containerStyle: React.CSSProperties = {
        padding: '5rem 2rem',
        background: 'var(--bg)',
        color: 'var(--text)'
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
    };

    return (
        <section style={containerStyle}>
            <div style={gridStyle}>
                {features.map((feature, idx) => {
                    const Icon = Icons[feature.iconName] as React.ElementType || Icons.Star;

                    return (
                        <div key={idx} style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius, 16px)',
                            background: 'var(--card-bg, #f9f9f9)',
                            border: `1px solid var(--border)`,
                            transition: 'transform 0.2s',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'var(--card-bg)', // Simplified to card bg or could be specific accent-bg
                                border: '1px solid var(--border)',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{feature.title}</h3>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
