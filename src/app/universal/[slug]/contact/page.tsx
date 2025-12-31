import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import ContactView from './ContactView';

export default async function ContactPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <ContactView slug={slug} themeConfig={themeData?.config} />
    );
}
