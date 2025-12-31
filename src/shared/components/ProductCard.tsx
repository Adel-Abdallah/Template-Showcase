'use client';

import Link from "next/link";
import React from "react";
import StarRating from "./StarRating";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";
import Button from "./ui/Button";

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    rating?: number;
};

type ProductCardProps = {
    product: Product;
    styles: Record<string, string>;
    slug: string;
};

export default function ProductCard({ product, styles, slug }: ProductCardProps) {
    const formattedRating = product.rating ? Math.round(product.rating) : 0;
    const addItemToCart = useCartStore((state) => state.addItem);
    const addItemToWishlist = useWishlistStore((state) => state.addItem);

    // Helper to get raw price number
    const getPriceNumber = (priceStr: string) => {
        return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItemToCart({
            id: product.id,
            name: product.name,
            price: getPriceNumber(product.price),
            image: product.image,
            quantity: 1
        });
        alert('Added to cart!');
    };

    const handleAddToWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItemToWishlist({
            id: product.id,
            name: product.name,
            price: getPriceNumber(product.price),
            image: product.image
        });
        alert('Added to wishlist!');
    };

    const handleBuyNow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItemToCart({
            id: product.id,
            name: product.name,
            price: getPriceNumber(product.price),
            image: product.image,
            quantity: 1
        });
        window.location.href = '/checkout';
    };

    return (
        <div className={`${styles.card} product-card-container`} style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* The clickable area for detailed view */}
            <Link href={`/universal/${slug}/product/${product.id}`} style={{ flex: 1, textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>

                {/* Image Container with Overlay */}
                <div className={styles.image} style={{ position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease' }}
                        className="product-image"
                    />

                    {/* Hover ACTION OVERLAY */}
                    <div className="product-actions" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '1rem',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        display: 'flex',
                        gap: '0.8rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: 0,
                        transform: 'translateY(100%)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                        <button
                            onClick={handleAddToWishlist}
                            className="action-btn"
                            title="Add to Wishlist"
                        >
                            <Heart size={18} />
                        </button>

                        <button
                            onClick={handleAddToCart}
                            className="action-btn"
                            title="Add to Cart"
                        >
                            <ShoppingCart size={18} />
                        </button>

                        <button
                            onClick={handleBuyNow}
                            className="buy-now-btn"
                            title="Buy Now"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <h3 className={styles.name} style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{product.name}</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                            {formattedRating > 0 && <StarRating rating={formattedRating} />}
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto' }}>
                        <p className={styles.price} style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>{product.price}</p>
                    </div>
                </div>
            </Link>

            <style jsx>{`
                .product-actions {
                    opacity: 0;
                    transform: translateY(20px);
                }
                div[class*="card"]:hover .product-actions {
                    opacity: 1;
                    transform: translateY(0);
                }
                div[class*="card"]:hover img {
                    transform: scale(1.08);
                }
                
                .action-btn {
                    background: var(--card-bg, white);
                    border: 1px solid var(--border, transparent);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: var(--text, black);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                    transition: transform 0.2s, background 0.2s, color 0.2s;
                }
                .action-btn:hover {
                    transform: scale(1.1);
                    background: var(--primary, black);
                    color: var(--on-primary, white);
                    border-color: var(--primary, black);
                }
                
                .buy-now-btn {
                    background: var(--primary, black);
                    color: var(--on-primary, white);
                    border: none;
                    border-radius: var(--radius, 8px);
                    padding: 0 1.2rem;
                    height: 40px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    transition: transform 0.2s, opacity 0.2s;
                    white-space: nowrap;
                }
                .buy-now-btn:hover {
                    transform: scale(1.05);
                    opacity: 0.95;
                }
            `}</style>
        </div>
    );
}
