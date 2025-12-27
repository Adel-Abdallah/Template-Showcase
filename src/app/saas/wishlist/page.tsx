import styles from "./page.module.css";
const templates = [{ id: 1, name: "SaaS Dashboard", type: "Dashboard" }, { id: 2, name: "Landing Page", type: "Marketing" }];
export default function SaasWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Saved Templates</h1>
            <div className={styles.grid}>
                {templates.map((t) => (
                    <div key={t.id} className={styles.card}>
                        <div className={styles.preview}>PREVIEW</div>
                        <h3 className={styles.name}>{t.name}</h3>
                        <span className={styles.type}>{t.type}</span>
                        <button className={styles.btn}>Use Template</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
