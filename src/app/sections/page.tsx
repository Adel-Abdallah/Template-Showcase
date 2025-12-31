import React from 'react';
import { loadConfigs } from '../../shared/utils/configLoader';
import { loadThemeData } from '../../shared/utils/themeLoader';
import SectionsShowcaseClient from './SectionsShowcaseClient';

export default async function SectionsPage({ searchParams }: { searchParams: Promise<{ theme?: string }> }) {
    const allConfigs = await loadConfigs();
    const { theme } = await searchParams;
    const currentSlug = theme || 'tech';

    // Load config + styles
    const themeData = await loadThemeData(currentSlug);

    return (
        <SectionsShowcaseClient
            availableThemes={allConfigs}
            currentSlug={currentSlug}
            themeConfig={themeData?.config || {}}
            themeStyles={themeData?.styles || {}}
        />
    );
}
