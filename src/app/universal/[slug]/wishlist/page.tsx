import { loadThemeData } from '../../../../shared/utils/themeLoader';
import WishlistView from './WishlistView';

// Server Component
export default async function WishlistPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <WishlistView slug={slug} themeConfig={themeData?.config} />
    );
}
