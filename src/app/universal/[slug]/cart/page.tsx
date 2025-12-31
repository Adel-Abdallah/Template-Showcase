'use client';

import React from 'react';
import { useCartStore } from '../../../../shared/store/useCartStore';
import CartItem from '../../../../shared/components/CartItem';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CartPage({ params }: { params: { slug: string } }) {
    // Note: In client component we can't use async loadThemeData directly in render usually
    // But since this is a page, we receive params.
    // However, to keep it simple with styles, we might need a wrapper or pass styles prop.
    // For this architecture, I will fetch styles in a Server Component wrapper or use a trick.
    // BETTER: Make this a Server Component that imports a Client Component for the list.
    // But `useCartStore` is client side. 
    // Let's make this file a Client Component and assume styles are passed or we use global/module.
    // Actually, to get theme styles, we need server side or client side context.
    // Given the previous pattern, let's make this page Server Component and pass data to Client View.
    return <CartView slug={params.slug} />;
}

// Client View Wrapper
import { useEffect, useState } from 'react';

function CartView({ slug }: { slug?: string }) {
    const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
    const [themeStyles, setThemeStyles] = useState<Record<string, string>>({});
    const pathname = usePathname();

    // Fallback: derive slug from pathname if prop is missing/undefined
    // Path: /universal/[slug]/cart -> split gives ['', 'universal', 'slug', 'cart']
    const safeSlug = slug || pathname?.split('/')[2] || 'tech';

    // Quick hack to load styles on client for now, normally would pass from server parent
    useEffect(() => {
        // Ideally we fetch this or pass it. 
        // For now, let's just rely on global styles or basic inline. 
        // Real implementation should pass styles from server page.
    }, [slug]);

    if (items.length === 0) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Cart is Empty</h1>
                <Link href={`/universal/${safeSlug}`} style={{ textDecoration: 'underline' }}>Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Shopping Cart</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={removeItem}
                            onUpdateQuantity={updateQuantity}
                            styles={themeStyles}
                        />
                    ))}
                </div>

                <div style={{
                    padding: '2rem',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(128,128,128,0.2)',
                    height: 'fit-content'
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
                    <div style={{ height: '1px', background: 'rgba(128,128,128,0.2)', margin: '1rem 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        <span>Total</span>
                        <span>${totalPrice().toFixed(2)}</span>
                    </div>
                    <Link href={`/universal/${safeSlug}/checkout`}>
                        <button style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#333',
                            color: '#fff',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
