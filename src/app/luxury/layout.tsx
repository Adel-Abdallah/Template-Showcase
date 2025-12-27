import Link from "next/link";
import styles from "./layout.module.css";

export default function LuxuryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <Link href="/luxury" className={styles.logo}>
                    NOIR.
                </Link>

                <nav className={styles.nav}>
                    <Link href="/luxury" className={styles.navLink}>Collection</Link>
                    <Link href="/luxury/product" className={styles.navLink}>Featured</Link>
                </nav>

                <div className={styles.navIcons}>
                    <Link href="/luxury/wishlist" className={styles.iconLink}>Wishlist</Link>
                    <Link href="/luxury/cart" className={styles.iconLink}>Cart</Link>
                </div>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                © 2025 NOIR. Luxury Redefined.
            </footer>
        </div>
    );
}
