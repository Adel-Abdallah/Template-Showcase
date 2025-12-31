import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import ThankYouView from './ThankYouView';

export default async function ThankYouPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <ThankYouView slug={slug} themeConfig={themeData?.config} />
    );
}
