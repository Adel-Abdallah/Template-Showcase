import Link from "next/link";
import styles from "./layout.module.css";

export default function EditorialLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <Link href="/editorial" className={styles.logo}>EDITION.</Link>
                <nav className={styles.nav}>
                    <Link href="/editorial" className={styles.navLink}>Shop</Link>
                    <Link href="/editorial/product" className={styles.navLink}>Featured</Link>
                    <Link href="/editorial/wishlist" className={styles.navLink}>Saved</Link>
                    <Link href="/editorial/cart" className={styles.navLink}>Bag</Link>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>© 2025 EDITION. All rights reserved.</footer>
        </div>
    );
}
