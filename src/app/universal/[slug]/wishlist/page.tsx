'use client';

import React from 'react';
import { useWishlistStore } from '../../../../shared/store/useWishlistStore';
import { useCartStore } from '../../../../shared/store/useCartStore';
import Link from 'next/link';
import { Trash2, ShoppingCart } from 'lucide-react';

export default function WishlistPage({ params }: { params: { slug: string } }) {
    const { items, removeItem } = useWishlistStore();
    const { addItem } = useCartStore();
    const { slug } = params;

    if (items.length === 0) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Wishlist is Empty</h1>
                <Link href={`/universal/${slug}`} style={{ textDecoration: 'underline' }}>Explore Products</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Wishlist</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                {items.map((item) => (
                    <div key={item.id} style={{
                        border: '1px solid rgba(128,128,128,0.2)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <div style={{ height: '300px', overflow: 'hidden' }}>
                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.name}</h3>
                            <p style={{ opacity: 0.8, marginBottom: '1rem' }}>${Number(item.price).toFixed(2)}</p>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button
                                    onClick={() => addItem({ ...item, quantity: 1, id: item.id, name: item.name, price: Number(item.price), image: item.image })}
                                    style={{ flex: 1, padding: '0.8rem', borderRadius: '6px', border: 'none', background: '#333', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <ShoppingCart size={16} /> Add
                                </button>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid rgba(128,128,128,0.3)', background: 'transparent', cursor: 'pointer', color: '#ff4444' }}
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
