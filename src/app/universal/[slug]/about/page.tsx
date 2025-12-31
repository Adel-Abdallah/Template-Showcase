import { loadThemeData } from "../../../../shared/utils/themeLoader";
import { notFound } from "next/navigation";

export default async function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) return notFound();

    const { styles, config } = themeData;

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>About {config.title}</h1>
            </section>

            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Welcome to <strong>{config.title}</strong>, where we redefine the template experience.
                    Our mission is to provide you with the most immersive, high-quality, and performant
                    templates on the market.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Founded in 2024, we started with a simple idea: that websites should be both beautiful
                    and functional. Whether you are looking for a minimal e-commerce store, a high-tech
                    digital agency showcase, or an immersive portfolio, we have crafted a solution for you.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '4rem', textAlign: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>10+</h3>
                        <p style={{ opacity: 0.8 }}>Premium Templates</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>100%</h3>
                        <p style={{ opacity: 0.8 }}>Responsive Design</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>24/7</h3>
                        <p style={{ opacity: 0.8 }}>Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
