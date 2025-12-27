import Link from "next/link";
import styles from "./page.module.css";

export default function MinimalistProduct() {
    return (
        <div className={styles.container}>
            <main className={styles.grid}>
                <div className={styles.imageContainer}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#ccc', letterSpacing: '2px' }}>PRODUCT IMAGE</span>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.category}>Footwear</div>
                    <h1 className={styles.title}>The Essential Low-Top</h1>
                    <div className={styles.price}>$185.00</div>

                    <p className={styles.description}>
                        Handcrafted in Portugal using premium Italian leather. A timeless silhouette re-engineered for modern comfort. Features a memory foam insole and recycled rubber outsole.
                    </p>

                    <div className={styles.actions}>
                        <button className={styles.buttonPrimary}>Add to Cart</button>
                        <button className={styles.buttonSecondary}>Size Guide</button>
                    </div>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <h4>Composition</h4>
                            <p>Italian Leather</p>
                        </div>
                        <div className={styles.metaItem}>
                            <h4>Origin</h4>
                            <p>Portugal</p>
                        </div>
                        <div className={styles.metaItem}>
                            <h4>Fit</h4>
                            <p>True to size</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
