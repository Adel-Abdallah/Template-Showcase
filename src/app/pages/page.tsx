import React from 'react';
import { loadConfigs } from '../../shared/utils/configLoader';
import { loadThemeData } from '../../shared/utils/themeLoader';
import PagesShowcaseClient from './PagesShowcaseClient';

export default async function PagesPage({ searchParams }: { searchParams: Promise<{ theme?: string }> }) {
    const allConfigs = await loadConfigs();
    const { theme } = await searchParams;
    const currentSlug = theme || 'tech';

    // Load config + styles for the current view
    const themeData = await loadThemeData(currentSlug);

    return (
        <PagesShowcaseClient
            availableThemes={allConfigs}
            currentSlug={currentSlug}
            themeConfig={themeData?.config || {}}
            themeStyles={themeData?.styles || {}}
        />
    );
}
