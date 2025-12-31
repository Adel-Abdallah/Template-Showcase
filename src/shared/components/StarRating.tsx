import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number; // 0 to 5
    size?: number;
    color?: string;
}

export default function StarRating({ rating, size = 16, color = "var(--star-color, #fbbf24)" }: StarRatingProps) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <Star
                key={i}
                size={size}
                fill={i <= rating ? color : "none"}
                stroke={color}
                style={{ marginRight: 2 }}
            />
        );
    }
    return <div style={{ display: 'flex', alignItems: 'center' }}>{stars}</div>;
}
