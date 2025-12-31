'use client';

import React from 'react';
import { Trash2, Heart } from 'lucide-react';

interface CartItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        image: string;
        quantity: number;
    };
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
    styles: Record<string, string>;
}

export default function CartItem({ item, onUpdateQuantity, onRemove, styles }: CartItemProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.5rem',
            borderBottom: '1px solid rgba(128,128,128,0.2)',
            background: 'rgba(255,255,255,0.02)'
        }}>
            <div style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden' }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.name}</h3>
                <p style={{ opacity: 0.7 }}>${item.price.toFixed(2)}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    style={{
                        width: '30px', height: '30px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid rgba(128,128,128,0.3)', borderRadius: '4px',
                        background: 'transparent', color: 'inherit', cursor: 'pointer'
                    }}
                >
                    -
                </button>
                <span style={{ width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    style={{
                        width: '30px', height: '30px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid rgba(128,128,128,0.3)', borderRadius: '4px',
                        background: 'transparent', color: 'inherit', cursor: 'pointer'
                    }}
                >
                    +
                </button>
            </div>

            <button
                onClick={() => onRemove(item.id)}
                style={{
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: 'none',
                    background: 'transparent',
                    color: '#ff4444',
                    cursor: 'pointer'
                }}
            >
                <Trash2 size={20} />
            </button>
        </div>
    );
}
