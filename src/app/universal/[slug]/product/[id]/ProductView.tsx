'use client';

import React from 'react';
import StarRating from '../../../../../shared/components/StarRating';
import AddToCartButton from './AddToCartButton';
import ThemeWrapper from '../../../../../shared/components/ThemeWrapper';

interface ProductViewProps {
    product: any;
    themeConfig: any;
}

export default function ProductView({ product, themeConfig }: ProductViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', minHeight: '80vh' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    {/* Image Gallery */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div
                            className={themeConfig?.cardStyle === 'blob' ? 'pdp-blob' : ''}
                            style={{
                                borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '16px',
                                overflow: 'hidden',
                                border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                                aspectRatio: '1/1',
                                background: 'var(--card-bg)',
                                boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'none',
                                padding: themeConfig?.cardStyle === 'blob' ? '2rem' : '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.4s ease'
                            }}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: themeConfig?.cardStyle === 'blob' ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' : 'none'
                                }}
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                            {product.images?.slice(0, 4).map((img: string, i: number) => (
                                <div key={i}
                                    className={themeConfig?.cardStyle === 'blob' ? 'pdp-blob' : ''}
                                    style={{
                                        borderRadius: themeConfig?.cardStyle === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '8px',
                                        overflow: 'hidden',
                                        border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                                        aspectRatio: '1/1',
                                        boxShadow: themeConfig?.cardStyle === 'blob' ? '0 4px 10px rgba(135, 206, 235, 0.2)' : 'none',
                                        background: 'var(--card-bg)',
                                        padding: themeConfig?.cardStyle === 'blob' ? '0.5rem' : '0',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s ease'
                                    }}>
                                    <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', color: 'var(--text)' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>{product.title}</h1>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <StarRating rating={Math.round(product.rating)} />
                            <span style={{ opacity: 0.6 }}>({product.reviews?.length || 0} reviews)</span>
                        </div>

                        <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--primary)' }}>${product.price}</p>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8, marginBottom: '2rem' }}>
                            {product.description}
                        </p>

                        <AddToCartButton product={product} />

                        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Category</h4>
                                <p style={{ opacity: 0.7 }}>{product.category}</p>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Availability</h4>
                                <p style={{ opacity: 0.7, color: 'var(--primary)' }}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                .pdp-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .pdp-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper >
    );
}
