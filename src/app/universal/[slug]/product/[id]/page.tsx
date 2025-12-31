import { notFound } from "next/navigation";
import { loadThemeData } from "../../../../../shared/utils/themeLoader";
import { fetchProductById } from "../../../../../shared/services/dummyJson";
import ProductView from "./ProductView";

export default async function ProductPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
    const { slug, id } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) return notFound();

    const product = await fetchProductById(Number(id));
    if (!product) return notFound();

    return (
        <ProductView
            product={product}
            themeConfig={themeData.config}
            themeStyles={themeData.styles}
        />
    );
}
