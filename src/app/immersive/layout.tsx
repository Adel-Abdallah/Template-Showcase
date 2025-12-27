import Link from "next/link";
import styles from "./layout.module.css";
export default function ImmersiveLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            <nav className={styles.nav}>
                <Link href="/immersive" className={styles.navLink}>GALLERY</Link>
                <Link href="/" className={styles.logo}>VOID</Link>
                <Link href="/immersive/cart" className={styles.navLink}>ACQUIRE</Link>
            </nav>
            <main className={styles.main}>{children}</main>
        </div>
    );
}
