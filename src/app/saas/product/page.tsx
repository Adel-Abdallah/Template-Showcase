import styles from "./page.module.css";
export default function SaasProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span className={styles.badge}>New Feature</span>
                <h1 className={styles.title}>Advanced Analytics Dashboard</h1>
                <p className={styles.desc}>Track your metrics in real-time with our powerful analytics suite. Get insights that matter.</p>
                <div className={styles.actions}>
                    <button className={styles.btnPrimary}>Start Free Trial</button>
                    <button className={styles.btnSecondary}>View Demo</button>
                </div>
            </div>
            <div className={styles.visual}>
                <div className={styles.mockup}>DASHBOARD PREVIEW</div>
            </div>
        </div>
    );
}
