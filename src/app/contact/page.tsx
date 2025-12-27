import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
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
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                    Interested in working together or have questions about the templates?
                    I'd love to hear from you.
                </p>

                <div className={styles.contactGrid}>
                    <div className={styles.info}>
                        <h2>Contact Information</h2>

                        <div className={styles.infoItem}>
                            <strong>Email</strong>
                            <a href="mailto:adelgafo@gmail.com">adelgafo@gmail.com</a>
                        </div>

                        <div className={styles.infoItem}>
                            <strong>Portfolio</strong>
                            <a href="https://adelgafo.website/" target="_blank" rel="noopener noreferrer">
                                adelgafo.website
                            </a>
                        </div>

                        <div className={styles.infoItem}>
                            <strong>Services</strong>
                            <a href="https://gafohive.io/" target="_blank" rel="noopener noreferrer">
                                gafohive.io
                            </a>
                        </div>

                        <div className={styles.services}>
                            <h3>Services I Offer</h3>
                            <ul>
                                <li>Custom Template Modifications</li>
                                <li>Full E-commerce Development</li>
                                <li>React & Next.js Development</li>
                                <li>WordPress Development</li>
                                <li>Web & Automation Services</li>
                                <li>Team Management & Consulting</li>
                            </ul>
                        </div>
                    </div>

                    <form
                        className={styles.form}
                        action="https://formsubmit.co/adelgafo@gmail.com"
                        method="POST"
                    >
                        <input type="hidden" name="_subject" value="New Contact from Template Showcase" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yoursite.com/thank-you" />

                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" name="subject" required>
                                <option value="">Select a topic</option>
                                <option value="Template Question">Template Question</option>
                                <option value="Custom Development">Custom Development</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Your message..." required></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>© 2025 Adel Abdallah. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <a href="https://adelgafo.website/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    <a href="https://gafohive.io/" target="_blank" rel="noopener noreferrer">GafoHive</a>
                    <Link href="/about">About</Link>
                </div>
            </footer>
        </div>
    );
}
