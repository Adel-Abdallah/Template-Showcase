import Link from "next/link";
import styles from "./layout.module.css";

export default function TechLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.bgGrid} />

            <header className={styles.header}>
                <Link href="/tech" className={styles.logo}>
                    CYBER_SYSTEMS
                </Link>

                <nav className={styles.nav}>
                    <Link href="/tech" className={styles.navLink}>[ SHOP ]</Link>
                    <Link href="/tech/product" className={styles.navLink}>[ FEATURED ]</Link>
                </nav>

                <div className={styles.navIcons}>
                    <Link href="/tech/wishlist" className={styles.iconLink}>WISHLIST</Link>
                    <Link href="/tech/cart" className={styles.iconLink}>CART</Link>
                </div>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                CYBER_SYSTEMS © 2025 | ALL SYSTEMS OPERATIONAL
            </footer>
        </div>
    );
}
