import styles from "./page.module.css";
export default function ImmersiveProduct() {
    return (
        <div className={styles.page}>
            <section className={styles.section}>
                <div className={styles.artworkLarge}></div>
                <div className={styles.details}>
                    <span className={styles.edition}>Limited Edition — 1 of 50</span>
                    <h1 className={styles.title}>The Void I</h1>
                    <p className={styles.artist}>A. Smith, 2025</p>
                </div>
            </section>
            <section className={styles.section} style={{ background: '#0a0a0a' }}>
                <div className={styles.content}>
                    <p className={styles.quote}>"Art is not what you see, but what you make others see."</p>
                    <div className={styles.price}>$4,200.00</div>
                    <button className={styles.btn}>Acquire</button>
                </div>
            </section>
        </div>
    );
}
