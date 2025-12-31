import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import PrivacyView from './PrivacyView';

export default async function PrivacyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <PrivacyView slug={slug} themeConfig={themeData?.config} />
    );
}
