
import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import CheckoutView from './CheckoutView';

export default async function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) {
        return <div>Theme not found</div>;
    }

    return (
        <CheckoutView
            slug={slug}
            themeConfig={themeData.config}
        />
    );
}
