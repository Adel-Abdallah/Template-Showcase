import Link from "next/link";
import styles from "./layout.module.css";
export default function SaasLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <Link href="/saas" className={styles.logo}>Flowbase</Link>
                <nav className={styles.nav}>
                    <Link href="/saas" className={styles.navLink}>Pricing</Link>
                    <Link href="/saas/product" className={styles.navLink}>Features</Link>
                    <Link href="/saas/wishlist" className={styles.navLink}>Templates</Link>
                    <Link href="/saas/cart" className={styles.navLink}>Checkout</Link>
                </nav>
                <button className={styles.ctaBtn}>Start Free Trial</button>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>© 2025 Flowbase. Supercharge your workflow.</footer>
        </div>
    );
}
