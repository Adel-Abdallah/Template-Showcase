'use client';

import React from 'react';
import { useCartStore } from '../../../../shared/store/useCartStore';
import CartItem from '../../../../shared/components/CartItem';
import Link from 'next/link';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';
import Button from '../../../../shared/components/ui/Button';

interface CartViewProps {
    slug: string;
    themeConfig: any;
}

export default function CartView({ slug, themeConfig }: CartViewProps) {
    const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text)' }}>Shopping Cart</h1>

                {items.length === 0 ? (
                    <div style={{ padding: '4rem', textAlign: 'center', minHeight: '50vh' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Your Cart is Empty</h2>
                        <Link href={`/universal/${slug}`} style={{ textDecoration: 'underline', color: 'var(--primary)' }}>Continue Shopping</Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {items.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onRemove={removeItem}
                                    onUpdateQuantity={updateQuantity}
                                />
                            ))}
                        </div>

                        <div
                            className={themeConfig?.cardStyle === 'blob' ? 'cart-blob' : ''}
                            style={{
                                padding: '2rem',
                                borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : 'var(--radius)',
                                background: 'var(--card-bg)',
                                border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                                height: 'fit-content',
                                boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'none',
                                transition: 'all 0.4s ease'
                            }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Summary</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span>Subtotal</span>
                                <span>${totalPrice().toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div style={{ height: '1px', background: 'var(--border)', margin: '1rem 0' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)' }}>
                                <span>Total</span>
                                <span>${totalPrice().toFixed(2)}</span>
                            </div>
                            <Link href={`/universal/${slug}/checkout`}>
                                <Button fullWidth>
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                .cart-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .cart-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper>
    );
}
