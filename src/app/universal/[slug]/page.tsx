import { notFound, redirect } from "next/navigation";
import { loadThemeData } from "../../../shared/utils/themeLoader";
import ProductCard from "../../../shared/components/ProductCard";
import { fetchProducts, fetchCategories } from "../../../shared/services/dummyJson";
import Pagination from "../../../shared/components/Pagination";
import ProductSlider from "../../../shared/components/ProductSlider";
import SidebarFilter from "../../../shared/components/SidebarFilter";
import SecondaryNavbar from "../../../shared/components/SecondaryNavbar";
import Link from "next/link";

// Define the shape of product from DummyJSON
interface ApiProduct {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    images: string[];
    rating: number;
    tags: string[];
    category: string;
}

export default async function UniversalPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string; category?: string }>;
}) {
    const { slug } = await params;
    const { page, category } = await searchParams;
    const themeData = await loadThemeData(slug);

    if (!themeData) {
        return notFound();
    }

    const { config, styles } = themeData;
    let products = config.products || [];
    let total = 0;
    const currentPage = Number(page) || 1;
    const limit = 8;
    const skip = (currentPage - 1) * limit;

    // Fetch from API if configured
    let bestSellers = [];
    let dynamicCategories: string[] = [];
    let dynamicTags: string[] = [];

    if (config.apiConfig) {
        // Main Products
        let apiEndpoint = config.apiConfig.endpoint;
        let apiParams = { ...config.apiConfig.params, limit, skip };

        // If category selected, override endpoint
        if (category && category !== 'All') {
            // Ensure category is slug-friendly (lowercase) for API
            apiEndpoint = `products/category/${category.toLowerCase()}`;
            // keep other params if needed, but remove 'q' if it's search
        }

        const apiData = await fetchProducts(apiEndpoint, apiParams);

        if (apiData && apiData.products) {
            products = apiData.products.map((p: ApiProduct) => ({
                id: p.id,
                name: p.title,
                price: `$${p.price}`,
                image: p.thumbnail,
                rating: p.rating,
                tags: p.tags,       // Pass tags through
                category: p.category // Pass category through
            }));
            total = apiData.total;

            // Extract dynamic taxonomies from the CURRENT fetched batch
            // (Note: In a real app, you'd fetch all categories/tags separately,
            // but for this template, deriving from page 1 data or specific endpoint is a smart "mock" approach)

            // 1. Get all categories (mocking a "fetch all categories" by just using what we see + some defaults if needed)
            // But better: let's actually just fetch pure categories from API if we want "Smart" global nav
            // OR derive from the products we found.
            // Let's derive from current products to be "context aware"
            const uniqueCats = new Set<string>();
            const uniqueTags = new Set<string>();

            // Also fetch a larger batch just to get more tags for the sidebar (Smart Trick)
            // const allProductsData = await fetchProducts('products', { limit: 100 });
            // Ideally we don't spam api, but for "template feel" let's just use what we have + maybe hardcoded fallbacks are gone now.

            products.forEach((p: any) => {
                if (p.category) uniqueCats.add(p.category);
                if (p.tags) p.tags.forEach((t: string) => uniqueTags.add(t));
            });

            // If we are viewing a specific category, we might want to see related tags
            dynamicCategories = Array.from(uniqueCats);
            // Capitalize for display
            dynamicCategories = dynamicCategories.map(c => c.charAt(0).toUpperCase() + c.slice(1));

            dynamicTags = Array.from(uniqueTags);
        }

        // Feature: If the list is too small (e.g. only 8 products),
        // fetch categories from API to ensure Navbar isn't empty if we are on a filtered view
        if (dynamicCategories.length < 2) {
            const cats = await fetchCategories();
            if (cats && cats.length > 0) {
                // Clean mapping for both string array (old api) and object array (new api)
                dynamicCategories = cats.slice(0, 8).map((c: any) => {
                    if (typeof c === 'string') return c.charAt(0).toUpperCase() + c.slice(1);
                    if (typeof c === 'object' && c.name) return c.name;
                    return 'General';
                });
            }
        }

        // Best Sellers (Mock logic)
        const bestSellerData = await fetchProducts('products', { limit: 8, skip: 10 });
        if (bestSellerData && bestSellerData.products) {
            bestSellers = bestSellerData.products.map((p: ApiProduct) => ({
                id: p.id,
                name: p.title,
                price: `$${p.price}`,
                image: p.thumbnail,
                rating: p.rating
            }));
        }
    }

    const totalPages = Math.ceil(total / limit);

    // Dynamic Style Extraction
    const dynamicStyles: React.CSSProperties = config.style ? {
        '--primary': config.style.colors.primary,
        '--on-primary': config.style.colors.onPrimary,
        '--secondary': config.style.colors.secondary,
        '--on-secondary': config.style.colors.onSecondary,
        '--bg': config.style.colors.background,
        '--text': config.style.colors.text,
        '--border': config.style.colors.border,
        '--card-bg': config.style.colors.cardBg,
        '--radius': config.style.shape.borderRadius,
        '--border-width': config.style.shape.borderWidth,
        '--shadow-md': config.style.effects?.shadow || 'none',
        '--font-main': config.style.typography.fontFamily,
        '--font-heading': config.style.typography.headingsFamily || config.style.typography.fontFamily,
        fontFamily: 'var(--font-main)', // Apply immediately
        color: 'var(--text)',
        background: 'var(--bg)'
    } as React.CSSProperties : {};

    return (
        <div className={styles.container} style={dynamicStyles}>
            {/* Hero Section */}
            <section className={styles.hero}>
                {config.subtitle && (
                    <span className={styles.heroSubtitle}>{config.subtitle}</span>
                )}
                <h1 className={styles.heroTitle}>{config.title}</h1>
            </section>

            {/* Secondary Navigation (Dynamic) */}
            {config.apiConfig && (
                <SecondaryNavbar
                    categories={dynamicCategories}
                    slug={slug}
                    styles={styles}
                />
            )}

            {/* Best Sellers Slider */}
            {bestSellers.length > 0 && !category && (
                <ProductSlider title="Best Sellers" products={bestSellers} styles={styles} slug={slug} />
            )}

            <div style={{ display: 'flex' }}>
                {/* Sidebar Filter (Dynamic Tags) */}
                <SidebarFilter styles={styles} tags={dynamicTags} categories={dynamicCategories} />

                {/* Main Grid */}
                <div style={{ flex: 1 }}>
                    <div className={styles.grid} id="shop">
                        {products.map((p: any) => (
                            <ProductCard key={p.id} product={p} styles={styles} slug={slug} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                        {currentPage > 1 && (
                            <Link href={`/universal/${slug}?page=${currentPage - 1}${category ? `&category=${category}` : ''}#shop`}>
                                <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Previous</button>
                            </Link>
                        )}
                        <span style={{ padding: '0.5rem' }}>Page {currentPage}</span>
                        {currentPage < totalPages && (
                            <Link href={`/universal/${slug}?page=${currentPage + 1}${category ? `&category=${category}` : ''}#shop`}>
                                <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Next</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
