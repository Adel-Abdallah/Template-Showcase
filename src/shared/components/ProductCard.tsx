import Link from "next/link";
import React from "react";
import StarRating from "./StarRating";

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

    return (
        <Link href={`/universal/${slug}/product/${product.id}`} className={styles.card}>
            <div className={styles.image}>
                <img src={product.image} alt={product.name} />
            </div>
            <h3 className={styles.name}>{product.name}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                {formattedRating > 0 && <StarRating rating={formattedRating} />}
                <p className={styles.price}>{product.price}</p>
            </div>
        </Link>
    );
}
