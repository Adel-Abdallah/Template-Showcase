import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLogo}>Template Showcase</Link>
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Templates</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>
            </nav>

            <main className={styles.main}>
                <div className={styles.hero}>
                    <h1 className={styles.name}>Adel Abdallah</h1>
                    <p className={styles.role}>Software Engineer</p>
                </div>

                <section className={styles.section}>
                    <h2>About This Project</h2>
                    <p>
                        This template showcase is a collection of complete, production-ready e-commerce templates
                        built with Next.js and Vanilla CSS. Each template includes a product list page, product detail page,
                        cart, and wishlist — all with unique design systems and fully responsive layouts.
                    </p>
                    <p>
                        Whether you're building a luxury brand, a tech startup, or a minimalist fashion label,
                        there's a template here to match your vision.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Professional Summary</h2>
                    <p>
                        Full-stack Developer with 5+ years of experience creating user-friendly and visually appealing
                        websites and applications using React. Specialized in JavaScript, React, Redux, and modern web technologies.
                    </p>
                    <p>
                        Proven track record in full-stack development, team management, and delivering scalable solutions
                        for e-commerce, content management, and web applications.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Technical Skills</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillCategory}>
                            <h3>Frontend</h3>
                            <ul>
                                <li>React & Next.js</li>
                                <li>Redux & Redux Saga</li>
                                <li>JavaScript (ES6+)</li>
                                <li>Tailwind CSS</li>
                                <li>Styled-Components</li>
                            </ul>
                        </div>
                        <div className={styles.skillCategory}>
                            <h3>Backend & Tools</h3>
                            <ul>
                                <li>Node.js & Express.js</li>
                                <li>MySQL</li>
                                <li>Docker</li>
                                <li>WordPress</li>
                                <li>REST APIs</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Recent Clients</h2>
                    <div className={styles.clients}>
                        <div className={styles.client}>
                            <strong>Investing Snacks</strong>
                            <span>Financial Technology Platform</span>
                        </div>
                        <div className={styles.client}>
                            <strong>ClickCatalyst</strong>
                            <span>Marketing Automation Platform</span>
                        </div>
                        <div className={styles.client}>
                            <strong>Outlink Pro</strong>
                            <span>Link Management Solution</span>
                        </div>
                    </div>
                </section>

                <div className={styles.cta}>
                    <a href="https://adelgafo.website/" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                        Visit My Portfolio
                    </a>
                    <a href="https://gafohive.io/" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                        GafoHive Services
                    </a>
                    <Link href="/contact" className={styles.ctaBtnSecondary}>
                        Get in Touch
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>© 2025 Adel Abdallah. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <a href="https://adelgafo.website/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    <a href="https://gafohive.io/" target="_blank" rel="noopener noreferrer">GafoHive</a>
                    <Link href="/contact">Contact</Link>
                </div>
            </footer>
        </div>
    );
}
