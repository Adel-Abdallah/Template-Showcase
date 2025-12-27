import Link from "next/link";
import styles from "./layout.module.css";

export default function VibrantLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <Link href="/vibrant" className={styles.logo}>GLOW.CO</Link>
                <nav className={styles.nav}>
                    <Link href="/vibrant" className={styles.navLink}>Shop</Link>
                    <Link href="/vibrant/product" className={styles.navLink}>Featured</Link>
                    <Link href="/vibrant/wishlist" className={styles.navLink}>Saved</Link>
                    <Link href="/vibrant/cart" className={styles.navLink}>Cart</Link>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>© 2025 GLOW.CO. Get your glow on.</footer>
        </div>
    );
}
