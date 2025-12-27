import styles from "./page.module.css";

export default function LuxuryProduct() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.visual}>
                    <div className={styles.productDisplay}>
                        N°5
                    </div>
                </div>

                <div className={styles.details}>
                    <div className={styles.subHeader}>Limited Edition</div>
                    <h1 className={styles.title}>The Golden Hour Elixir</h1>
                    <div className={styles.price}>$450.00</div>

                    <p className={styles.description}>
                        An olfactory masterpiece composed of rare ingredients sourced from the ends of the earth. Encased in hand-blown glass with 24k gold leaf accents.
                    </p>

                    <button className={styles.btn}>Acquire</button>
                </div>
            </main>
        </div>
    );
}
