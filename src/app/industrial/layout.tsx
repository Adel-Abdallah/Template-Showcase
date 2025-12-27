import Link from "next/link";
import styles from "./layout.module.css";
export default function IndustrialLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <div className={styles.brand}>ROAST_LAB</div>
                <nav className={styles.nav}>
                    <Link href="/industrial" className={styles.navLink}>SHOP</Link>
                    <Link href="/industrial/product" className={styles.navLink}>FEATURED</Link>
                    <Link href="/industrial/wishlist" className={styles.navLink}>SAVED</Link>
                    <Link href="/industrial/cart" className={styles.navLink}>CART</Link>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>ROAST_LAB © 2025</footer>
        </div>
    );
}
