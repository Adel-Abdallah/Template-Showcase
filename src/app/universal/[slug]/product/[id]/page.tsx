import { notFound } from "next/navigation";
import { loadThemeData } from "../../../../../shared/utils/themeLoader";
import { fetchProductById } from "../../../../../shared/services/dummyJson";
import StarRating from "../../../../../shared/components/StarRating";
import AddToCartButton from "./AddToCartButton";

export default async function ProductPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
    const { slug, id } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) return notFound();
    const { styles } = themeData;

    const product = await fetchProductById(Number(id));
    if (!product) return notFound();

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', minHeight: '80vh' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                {/* Image Gallery */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(128,128,128,0.1)',
                        aspectRatio: '1/1'
                    }}>
                        <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                        {product.images?.slice(0, 4).map((img: string, i: number) => (
                            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(128,128,128,0.2)', aspectRatio: '1/1' }}>
                                <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>{product.title}</h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <StarRating rating={Math.round(product.rating)} />
                        <span style={{ opacity: 0.6 }}>({product.reviews?.length || 0} reviews)</span>
                    </div>

                    <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>${product.price}</p>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8, marginBottom: '2rem' }}>
                        {product.description}
                    </p>

                    <AddToCartButton product={product} />

                    <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(128,128,128,0.2)', paddingTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Category</h4>
                            <p style={{ opacity: 0.7 }}>{product.category}</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Availability</h4>
                            <p style={{ opacity: 0.7, color: '#4bb543' }}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
