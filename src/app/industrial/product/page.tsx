import styles from "./page.module.css";
export default function IndustrialProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.imageSection}><div className={styles.productMock}>DARK</div></div>
                <div className={styles.infoSection}>
                    <div className={styles.meta}><span>BATCH: #4829</span><span>ORIGIN: ETHIOPIA</span></div>
                    <h1 className={styles.productName}>Midnight Oil<br />Cold Brew</h1>
                    <div className={styles.priceStrip}>$24.00 / 6-PACK</div>
                    <p className={styles.description}>Extracted for 24 hours in cold filtration systems. Zero acidity. Maximum caffeine content.</p>
                    <button className={styles.actionBtn}>SHIP IT</button>
                </div>
            </div>
        </div>
    );
}
