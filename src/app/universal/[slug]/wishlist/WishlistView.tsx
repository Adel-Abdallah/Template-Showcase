'use client';

import React from 'react';
import { useWishlistStore } from '../../../../shared/store/useWishlistStore';
import { useCartStore } from '../../../../shared/store/useCartStore';
import Link from 'next/link';
import { Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';
import Button from '../../../../shared/components/ui/Button';

interface WishlistViewProps {
    slug: string;
    themeConfig: any;
}

export default function WishlistView({ slug, themeConfig }: WishlistViewProps) {
    const { items, removeItem } = useWishlistStore();
    const { addItem } = useCartStore();

    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Link href={`/universal/${slug}`} style={{ color: 'var(--text)' }}>
                        <ArrowLeft />
                    </Link>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>Wishlist</h1>
                </header>

                {items.length === 0 ? (
                    <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh', border: '1px dashed var(--border)', borderRadius: 'var(--radius)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Your Wishlist is Empty</h2>
                        <Button onClick={() => window.location.href = `/universal/${slug}`}>
                            Explore Products
                        </Button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                        {items.map((item) => (
                            <div key={item.id} style={{
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius)',
                                overflow: 'hidden',
                                background: 'var(--card-bg)',
                                transition: 'transform 0.2s',
                            }}>
                                <div style={{ height: '300px', overflow: 'hidden', background: '#f0f0f0' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</h3>
                                    <p style={{ opacity: 0.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>${Number(item.price).toFixed(2)}</p>
                                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                                        <Button
                                            fullWidth
                                            leftIcon={<ShoppingCart size={16} />}
                                            onClick={() => addItem({ ...item, quantity: 1, id: item.id, name: item.name, price: Number(item.price), image: item.image })}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => removeItem(item.id)}
                                            style={{ padding: '0.6rem' }}
                                        >
                                            <Trash2 size={20} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ThemeWrapper>
    );
}
