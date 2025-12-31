import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import AccountView from './AccountView';

export default async function AccountPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <AccountView slug={slug} themeConfig={themeData?.config} />
    );
}
