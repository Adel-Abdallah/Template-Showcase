import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import OrdersView from './OrdersView';

export default async function OrdersPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <OrdersView slug={slug} themeConfig={themeData?.config} />
    );
}
