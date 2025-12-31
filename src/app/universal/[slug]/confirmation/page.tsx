import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import ConfirmationView from './ConfirmationView';

export default async function ConfirmationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <ConfirmationView slug={slug} themeConfig={themeData?.config} />
    );
}
