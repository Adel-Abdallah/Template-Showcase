'use client';
import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';

import CartView from './CartView';

export default async function CartPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) {
        return <div>Theme not found</div>;
    }

    return (
        <CartView
            slug={slug}
            themeConfig={themeData.config}
            themeStyles={themeData.styles}
        />
    );
}
