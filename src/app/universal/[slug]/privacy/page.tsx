import { loadThemeData } from "../../../../shared/utils/themeLoader";
import { notFound } from "next/navigation";

export default async function PrivacyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) return notFound();

    const { styles } = themeData;

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Privacy Policy</h1>
            </section>

            <div style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                <p>Last updated: December 31, 2024</p>
                <br />
                <h3>1. Introduction</h3>
                <p>Welcome to our Privacy Policy. Your privacy is critically important to us.</p>
                <br />
                <h3>2. Information We Collect</h3>
                <p>We collect information you provide directly to us when you create an account, make a purchase, or communicate with us.</p>
                <br />
                <h3>3. Use of Data</h3>
                <p>We use your data to provide and improve our services, process transactions, and send you related information.</p>
                <br />
                <h3>4. Sharing of Data</h3>
                <p>We do not share your personal information with third parties except as described in this policy.</p>
            </div>
        </div>
    );
}
