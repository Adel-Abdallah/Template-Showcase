'use client';

import React, { useState } from 'react';
import { useCartStore } from '../../../../../shared/store/useCartStore';
import { useWishlistStore } from '../../../../../shared/store/useWishlistStore';
import { ShoppingCart, Heart } from 'lucide-react';
import Button from '../../../../../shared/components/ui/Button';

export default function AddToCartButton({ product }: { product: any }) {
    const { addItem } = useCartStore();
    const { addItem: addToWishlist, isInWishlist } = useWishlistStore();
    const [isLoading, setIsLoading] = useState(false);

    // Map API product to cart item
    const cartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1
    };

    const handleAddToCart = () => {
        setIsLoading(true);
        // Simulate network request for effect
        setTimeout(() => {
            addItem(cartItem);
            setIsLoading(false);
        }, 500);
    };

    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'stretch' }}>
            <div style={{ flex: 1 }}>
                <Button
                    fullWidth
                    onClick={handleAddToCart}
                    isLoading={isLoading}
                    leftIcon={<ShoppingCart size={20} />}
                    style={{ height: '56px', fontSize: '1.1rem' }} // Minimal overrides, let theme handle colors
                >
                    Add to Cart
                </Button>
            </div>

            <Button
                variant="outline"
                onClick={() => addToWishlist(cartItem)}
                style={{
                    width: '56px',
                    height: '56px',
                    padding: 0,
                    borderColor: 'var(--border, #ccc)' // Use theme border
                }}
            >
                <Heart
                    fill={isInWishlist(product.id) ? 'var(--primary, red)' : 'none'}
                    color={isInWishlist(product.id) ? 'var(--primary, red)' : 'currentColor'}
                />
            </Button>
        </div>
    );
}
