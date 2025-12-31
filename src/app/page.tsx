import Link from "next/link";
import styles from "./page.module.css";

import TemplatesGrid from "../components/TemplatesGrid";

export default function Home() {
    return (
        <div className={styles.page}>
            {/* Navigation */}
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLogo}>Template Showcase</Link>
                <div className={styles.navLinks}>
                    <Link href="/templates" className={styles.navLink}>Templates</Link>
                    <Link href="/pages" className={styles.navLink}>Pages</Link>
                    <Link href="/sections" className={styles.navLink}>Sections</Link>
                    <Link href="/components" className={styles.navLink}>Components</Link>
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
                    <Link href="/templates" className={styles.heroBtnPrimary}>Browse Templates</Link>
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
                <TemplatesGrid />
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
