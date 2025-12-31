import React from 'react';
import { loadThemeData } from '../../../../../shared/utils/themeLoader';
import SettingsView from './SettingsView';

export default async function SettingsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <SettingsView slug={slug} themeConfig={themeData?.config} />
    );
}
