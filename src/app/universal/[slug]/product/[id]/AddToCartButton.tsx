'use client';

import React from 'react';
import { useCartStore } from '../../../../../shared/store/useCartStore';
import { useWishlistStore } from '../../../../../shared/store/useWishlistStore';
import { ShoppingCart, Heart } from 'lucide-react';

export default function AddToCartButton({ product }: { product: any }) {
    const { addItem } = useCartStore();
    const { addItem: addToWishlist, isInWishlist } = useWishlistStore();

    // Map API product to cart item
    const cartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1
    };

    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <button
                onClick={() => addItem(cartItem)}
                style={{
                    flex: 1,
                    padding: '1.2rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#333',
                    color: '#fff',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem'
                }}
            >
                <ShoppingCart /> Add to Cart
            </button>
            <button
                onClick={() => addToWishlist(cartItem)}
                style={{
                    padding: '1.2rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(128,128,128,0.3)',
                    background: 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Heart fill={isInWishlist(product.id) ? 'red' : 'none'} color={isInWishlist(product.id) ? 'red' : 'currentColor'} />
            </button>
        </div>
    );
}
