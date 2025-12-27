import Link from "next/link";
import styles from "./layout.module.css";

export default function OrganicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <Link href="/organic" className={styles.logo}>CERAMIQUE.</Link>
                <nav className={styles.nav}>
                    <Link href="/organic" className={styles.navLink}>Shop</Link>
                    <Link href="/organic/product" className={styles.navLink}>Featured</Link>
                    <Link href="/organic/wishlist" className={styles.navLink}>Saved</Link>
                    <Link href="/organic/cart" className={styles.navLink}>Cart</Link>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>Handcrafted with care © 2025</footer>
        </div>
    );
}
