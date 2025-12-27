import styles from "./page.module.css";

export default function TechProduct() {
    return (
        <div className={styles.container}>
            <main className={styles.mainGrid}>
                <aside className={styles.specs}>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>MODEL_ID</span>
                        <div className={styles.specValue}>MK-IX-2049</div>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>PROCESSOR</span>
                        <div className={styles.specValue}>QUANTUM CORE V4</div>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>MATERIAL</span>
                        <div className={styles.specValue}>CARBON / TITANIUM</div>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>STATUS</span>
                        <div className={styles.specValue} style={{ color: '#fff' }}>ONLINE</div>
                    </div>
                </aside>

                <section className={styles.visual}>
                    <div className={styles.modelViewer}>Q4</div>
                    <h1 className={styles.productTitle}>NEURAL LINK</h1>
                </section>

                <aside className={styles.actions}>
                    <div className={styles.priceDisplay}>
                        <span className={styles.priceLabel}>UNIT_COST</span>
                        <div className={styles.priceValue}>2,499 CR</div>
                    </div>
                    <button className={styles.btnPrimary}>INITIATE ORDER</button>
                </aside>
            </main>
        </div>
    );
}
