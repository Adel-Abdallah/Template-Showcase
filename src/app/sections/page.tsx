import React from 'react';
import { loadConfigs } from '../../shared/utils/configLoader';
import SectionsShowcase from './SectionsShowcase';

export default async function SectionsPage() {
    const themes = await loadConfigs();
    return <SectionsShowcase themes={themes} />;
}
