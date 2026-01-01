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
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <div className="cart-item-row" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.5rem',
            borderBottom: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.02)'
        }}>
            <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
            </div>

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-actions">
                <div className="quantity-controls">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                    <Trash2 size={20} />
                </button>
            </div>

            <style>{`
                .cart-item-image {
                    width: 80px;
                    height: 80px;
                    flex-shrink: 0;
                    border-radius: var(--radius);
                    overflow: hidden;
                }
                .cart-item-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .cart-item-info {
                    flex: 1;
                }
                .cart-item-info h3 {
                    font-size: 1.05rem;
                    font-weight: bold;
                    margin-bottom: 0.25rem;
                    color: var(--text);
                }
                .cart-item-info p {
                    opacity: 0.7;
                    color: var(--text);
                }
                .cart-item-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .quantity-controls {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .quantity-controls button {
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--border);
                    border-radius: 4px;
                    background: transparent;
                    color: var(--text);
                    cursor: pointer;
                }
                .quantity-controls span {
                    width: 20px;
                    text-align: center;
                    color: var(--text);
                }
                .remove-btn {
                    padding: 0.5rem;
                    border-radius: 4px;
                    border: none;
                    background: transparent;
                    color: #ff4444;
                    cursor: pointer;
                }

                @media (max-width: 600px) {
                    .cart-item-row {
                        flex-wrap: wrap; /* Allow wrapping */
                        gap: 1rem !important;
                        padding: 1rem !important;
                    }
                    .cart-item-info {
                        min-width: calc(100% - 100px); /* Fill remaining space next to image */
                    }
                    .cart-item-actions {
                        width: 100%;
                        justify-content: space-between;
                        padding-top: 0.5rem;
                        border-top: 1px solid var(--border);
                        margin-top: 0.5rem;
                    }
                }
            `}</style>
        </div>
    );
}
