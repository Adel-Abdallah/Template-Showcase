import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import TermsView from './TermsView';

export default async function TermsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <TermsView slug={slug} themeConfig={themeData?.config} />
    );
}
