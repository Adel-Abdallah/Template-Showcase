import Link from "next/link";
import styles from "./layout.module.css";

export default function MinimalistLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <Link href="/minimalist" className={styles.logo}>
                    MINIMALIST.
                </Link>

                <nav className={styles.nav}>
                    <Link href="/minimalist" className={styles.navLink}>Shop</Link>
                    <Link href="/minimalist/product" className={styles.navLink}>Featured</Link>
                </nav>

                <div className={styles.navIcons}>
                    <Link href="/minimalist/wishlist" className={styles.iconLink}>Wishlist</Link>
                    <Link href="/minimalist/cart" className={styles.iconLink}>Cart (0)</Link>
                </div>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                © 2025 Minimalist. All rights reserved.
            </footer>
        </div>
    );
}
