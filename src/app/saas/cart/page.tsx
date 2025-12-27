import styles from "./page.module.css";
export default function SaasCart() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Checkout</h1>
                <div className={styles.planSummary}>
                    <h2>Pro Plan</h2>
                    <span className={styles.price}>$29/month</span>
                </div>
                <div className={styles.features}>
                    <p>✓ Unlimited Projects</p>
                    <p>✓ Advanced Analytics</p>
                    <p>✓ Priority Support</p>
                </div>
                <div className={styles.total}><span>Total Due Today</span><span>$29.00</span></div>
                <button className={styles.btn}>Subscribe Now</button>
                <p className={styles.note}>Cancel anytime. No questions asked.</p>
            </div>
        </div>
    );
}
