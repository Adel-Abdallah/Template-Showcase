'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface ProductSliderProps {
    title: string;
    products: any[];
    styles: any;
    slug: string;
}

export default function ProductSlider({ title, products, styles, slug }: ProductSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    if (!products || products.length === 0) return null;

    return (
        <section style={{ margin: '4rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => scroll('left')} style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid #ddd', cursor: 'pointer' }}>
                        <ChevronLeft />
                    </button>
                    <button onClick={() => scroll('right')} style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid #ddd', cursor: 'pointer' }}>
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    padding: '0 2rem 2rem',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                {products.map((product) => (
                    <div key={product.id} style={{ minWidth: '280px', scrollSnapAlign: 'start' }}>
                        <ProductCard product={product} styles={styles} slug={slug} />
                    </div>
                ))}
            </div>
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
