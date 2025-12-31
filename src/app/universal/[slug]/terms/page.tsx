import { loadThemeData } from "../../../../shared/utils/themeLoader";
import { notFound } from "next/navigation";

export default async function TermsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) return notFound();

    const { styles } = themeData;

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Terms of Service</h1>
            </section>

            <div style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                <p>Last updated: December 31, 2024</p>
                <br />
                <h3>1. Agreement to Terms</h3>
                <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                <br />
                <h3>2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>
                <br />
                <h3>3. Disclaimer</h3>
                <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>
            </div>
        </div>
    );
}
