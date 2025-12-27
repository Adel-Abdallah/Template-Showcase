import Link from "next/link";
import styles from "./layout.module.css";
export default function GlassLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.blobs}>
                <div className={styles.blob} style={{ top: '-10%', left: '-10%', background: 'linear-gradient(180deg, #ff9a9e 0%, #fecfef 100%)' }}></div>
                <div className={styles.blob} style={{ bottom: '-10%', right: '-10%', background: 'linear-gradient(180deg, #a18cd1 0%, #fbc2eb 100%)' }}></div>
            </div>
            <header className={styles.header}>
                <Link href="/glass" className={styles.logo}>AURA.</Link>
                <nav className={styles.nav}>
                    <Link href="/glass" className={styles.navLink}>Shop</Link>
                    <Link href="/glass/product" className={styles.navLink}>Featured</Link>
                    <Link href="/glass/wishlist" className={styles.navLink}>Saved</Link>
                    <Link href="/glass/cart" className={styles.navLink}>Cart</Link>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
}
