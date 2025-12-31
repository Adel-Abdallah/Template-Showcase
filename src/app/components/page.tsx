import React from 'react';
import { loadConfigs } from '../../shared/utils/configLoader';
import { loadThemeData } from '../../shared/utils/themeLoader';
import ComponentsShowcaseClient from './ComponentsShowcaseClient';

// This is a Server Component
export default async function ComponentsPage({ searchParams }: { searchParams: { theme?: string } }) {
    // 1. Load all available themes for the switcher
    const allConfigs = await loadConfigs();

    // 2. Determine current theme from URL or default
    const themes = await searchParams;
    const currentSlug = themes.theme || 'tech';

    // 3. Load the ACTUAL Theme Data (CSS Modules + Config)
    const themeData = await loadThemeData(currentSlug);

    // 4. Pass everything to the client wrapper
    // We pass the `styles` object which contains the CSS Module class names.
    // The Client Component will apply `styles.container` (or similar root class) 
    // to the main wrapper, which should define all the CSS variables (--primary, etc).

    return (
        <ComponentsShowcaseClient
            availableThemes={allConfigs}
            currentSlug={currentSlug}
            themeStyles={themeData?.styles || {}}
            themeConfig={themeData?.config || {}}
        />
    );
}
