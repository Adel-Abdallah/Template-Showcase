import styles from "./page.module.css";
export default function ImmersiveCart() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Your Selection</h1>
                <div className={styles.item}>
                    <div className={styles.artwork}></div>
                    <div className={styles.info}>
                        <h3>The Void I</h3>
                        <p>Limited Print Edition</p>
                        <span className={styles.price}>$4,200</span>
                    </div>
                </div>
                <div className={styles.total}><span>Total</span><span>$4,200</span></div>
                <button className={styles.btn}>Acquire</button>
            </div>
        </div>
    );
}
