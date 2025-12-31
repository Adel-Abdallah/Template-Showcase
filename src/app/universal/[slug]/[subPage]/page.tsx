import { notFound } from "next/navigation";
import { loadThemeData, getThemeVariables } from "../../../../shared/utils/themeLoader";

// Dynamic content maps could be externalized, but for this task we'll map simple content here.
const generateContent = (themeTitle: string, pageType: string) => {
    switch (pageType) {
        case 'about':
            return {
                title: `About ${themeTitle}`,
                body: `Welcome to the official ${themeTitle} experience. We are dedicated to providing the most immersive ${themeTitle.toLowerCase()} environment for our users. Our journey began with a simple idea: to make digital shopping not just transaction, but an adventure.`
            };
        case 'support':
            return {
                title: `${themeTitle} Support`,
                body: `Need help? Our ${themeTitle} support team is standing by 24/7. Whether you have questions about your order, technical issues, or just want to chat about the latest ${themeTitle.toLowerCase()} trends, we're here for you.`
            };
        case 'terms':
            return {
                title: 'Terms of Service',
                body: `By accessing ${themeTitle}, you agree to abide by our high-speed rules. No cheating, no hacking, and definitely no sluggish internet connections allowed.`
            };
        case 'leaderboard':
            return {
                title: 'Global Leaderboard',
                body: `Check out the top players in the ${themeTitle} universe. Currently under construction - start your engines and check back soon!`
            };
        default:
            return {
                title: pageType.charAt(0).toUpperCase() + pageType.slice(1),
                body: `Content for ${pageType} is currently being curated for ${themeTitle}.`
            };
    }
};

export default async function ThemeSubPage({
    params
}: {
    params: Promise<{ slug: string; subPage: string }>;
}) {
    const { slug, subPage } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) {
        return notFound();
    }

    const { config, styles } = themeData;
    const themeVariables = getThemeVariables(config);
    const content = generateContent(config.title, subPage);

    return (
        <div style={{
            ...themeVariables as React.CSSProperties,
            minHeight: '60vh', // Ensure it fills space above footer
            padding: '4rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            color: 'var(--text)',
            fontFamily: 'var(--font-main)'
        }}>
            <h1 className={styles.heroTitle} style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                {content.title}
            </h1>
            <div className={styles.card} style={{ padding: '3rem', lineHeight: '1.8' }}>
                <p style={{ fontSize: '1.2rem' }}>{content.body}</p>
                <br />
                <p>
                    <em>Stay tuned for more updates from the {config.title} team.</em>
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <button className={styles.button}>Contact Us</button>
                </div>
            </div>
        </div>
    );
}
