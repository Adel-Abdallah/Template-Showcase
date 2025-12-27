import Link from "next/link";
import styles from "./page.module.css";

const templates = [
    {
        id: "minimalist",
        name: "Minimalist",
        desc: "Clean lines, whitespace, essentialism.",
        bg: "#ffffff",
        text: "#111111",
        descColor: "#666666",
        pillBg: "#111111",
        pillText: "#ffffff",
        font: "'Helvetica Neue', sans-serif",
        border: "none"
    },
    {
        id: "luxury",
        name: "Luxury",
        desc: "Dark mode, gold accents, serif typography.",
        bg: "#050505",
        text: "#e0e0e0",
        descColor: "#bf9b30",
        pillBg: "#bf9b30",
        pillText: "#000000",
        font: "Georgia, serif",
        border: "none"
    },
    {
        id: "tech",
        name: "Tech",
        desc: "Cyberpunk, grid lines, neon accents.",
        bg: "#000000",
        text: "#00ff00",
        descColor: "#00ff00",
        pillBg: "#00ff00",
        pillText: "#000000",
        font: "'Courier New', monospace",
        border: "1px solid #00ff00"
    },
    {
        id: "editorial",
        name: "Editorial",
        desc: "Magazine layout, bold typography.",
        bg: "#f4ecdf",
        text: "#1a1a1a",
        descColor: "#555555",
        pillBg: "#1a1a1a",
        pillText: "#f4ecdf",
        font: "'Helvetica', sans-serif",
        border: "none"
    },
    {
        id: "organic",
        name: "Organic",
        desc: "Soft shapes, earth tones, natural.",
        bg: "#f7f5f2",
        text: "#2c2925",
        descColor: "#5a544b",
        pillBg: "#4a453f",
        pillText: "#f7f5f2",
        font: "'Gill Sans', sans-serif",
        border: "none"
    },
    {
        id: "vibrant",
        name: "Vibrant",
        desc: "Bold gradients, playful energy.",
        bg: "linear-gradient(135deg, #ff00cc 0%, #3333ff 100%)",
        text: "#ffffff",
        descColor: "#ffffff",
        pillBg: "rgba(255,255,255,0.3)",
        pillText: "#ffffff",
        font: "'Arial Black', sans-serif",
        border: "none"
    },
    {
        id: "industrial",
        name: "Industrial",
        desc: "Brutalist, raw materials, dashed lines.",
        bg: "#2b2b2b",
        text: "#ffffff",
        descColor: "#ff3300",
        pillBg: "#ff3300",
        pillText: "#000000",
        font: "'Arial Narrow', sans-serif",
        border: "2px solid #ff3300"
    },
    {
        id: "glass",
        name: "Glassmorphism",
        desc: "Translucent, blur, pastel gradients.",
        bg: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
        text: "#ffffff",
        descColor: "#ffffff",
        pillBg: "rgba(255,255,255,0.4)",
        pillText: "#a05a7a",
        font: "-apple-system, sans-serif",
        border: "none"
    },
    {
        id: "saas",
        name: "SaaS",
        desc: "Functional split-screen, modern UI.",
        bg: "#fafafa",
        text: "#1a1a1a",
        descColor: "#666666",
        pillBg: "#667eea",
        pillText: "#ffffff",
        font: "-apple-system, sans-serif",
        border: "1px solid #eee"
    },
    {
        id: "immersive",
        name: "Immersive",
        desc: "Full-screen, scroll-snapping, art.",
        bg: "#000000",
        text: "#ffffff",
        descColor: "#888888",
        pillBg: "#ffffff",
        pillText: "#000000",
        font: "'Times New Roman', serif",
        border: "1px solid #333"
    },
];

export default function Home() {
    return (
        <div className={styles.page}>
            {/* Navigation */}
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLogo}>Template Showcase</Link>
                <div className={styles.navLinks}>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className={styles.hero}>
                <h1 className={styles.title}>E-commerce Template Collection</h1>
                <p className={styles.subtitle}>10 Complete, Production-Ready Templates</p>
                <p className={styles.intro}>
                    A curated collection of modern e-commerce templates built with <strong>Next.js</strong> and <strong>Vanilla CSS</strong>.
                    Each template includes a product list page, product detail page, cart, and wishlist —
                    all with unique design systems and fully responsive layouts.
                </p>
                <div className={styles.heroActions}>
                    <a href="#templates" className={styles.heroBtnPrimary}>Browse Templates</a>
                    <Link href="/about" className={styles.heroBtnSecondary}>Learn More</Link>
                </div>
            </header>

            {/* How to Use */}
            <section className={styles.howTo}>
                <h2 className={styles.sectionTitle}>How to Use</h2>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>Preview</h3>
                        <p>Click on any template card to explore the full demo with all pages.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>Download</h3>
                        <p>Use the download button to get the source code for your chosen template.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3>Customize</h3>
                        <p>Modify colors, fonts, and content to match your brand.</p>
                    </div>
                </div>
            </section>

            {/* Templates Grid */}
            <section id="templates" className={styles.templatesSection}>
                <h2 className={styles.sectionTitle}>The Collection</h2>
                <div className={styles.grid}>
                    {templates.map((t) => (
                        <div key={t.id} className={styles.cardWrapper}>
                            <Link
                                href={`/${t.id}`}
                                className={styles.card}
                                style={{
                                    background: t.bg,
                                    fontFamily: t.font,
                                    border: t.border
                                }}
                            >
                                <h2 className={styles.cardTitle} style={{ color: t.text, fontFamily: t.font }}>
                                    {t.name}
                                </h2>
                                <p className={styles.cardDesc} style={{ color: t.descColor }}>
                                    {t.desc}
                                </p>
                                <div className={styles.pages}>
                                    <span style={{ background: t.pillBg, color: t.pillText }}>PLP</span>
                                    <span style={{ background: t.pillBg, color: t.pillText }}>PDP</span>
                                    <span style={{ background: t.pillBg, color: t.pillText }}>Cart</span>
                                    <span style={{ background: t.pillBg, color: t.pillText }}>Wishlist</span>
                                </div>
                            </Link>
                            <div className={styles.cardActions}>
                                <Link href={`/${t.id}`} className={styles.previewBtn}>Preview</Link>
                                <a href={`/downloads/${t.id}-project.zip`} download className={styles.downloadBtn}>Download</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>Built by <a href="https://adelgafo.website/" target="_blank" rel="noopener noreferrer">Adel Abdallah</a></p>
                    <div className={styles.footerLinks}>
                        <a href="https://gafohive.io/" target="_blank" rel="noopener noreferrer">GafoHive</a>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
