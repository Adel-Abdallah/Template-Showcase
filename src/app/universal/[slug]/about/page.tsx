import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import AboutView from './AboutView';

export default async function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <AboutView slug={slug} themeConfig={themeData?.config} />
    );
}
