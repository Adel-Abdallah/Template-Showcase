import Link from "next/link";
import styles from "./page.module.css";
const plans = [
    { id: 1, name: "Starter", price: "$0/mo", features: ["5 Projects", "Basic Analytics", "Community Support"] },
    { id: 2, name: "Pro", price: "$29/mo", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"] },
    { id: 3, name: "Enterprise", price: "Custom", features: ["Custom Integrations", "Dedicated Manager", "SLA"] },
];
export default function SaasPLP() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}><h1 className={styles.title}>Simple, transparent pricing</h1><p className={styles.subtitle}>Choose the plan that's right for your team</p></div>
            <div className={styles.grid}>
                {plans.map((plan) => (
                    <div key={plan.id} className={`${styles.card} ${plan.id === 2 ? styles.featured : ''}`}>
                        <h3 className={styles.planName}>{plan.name}</h3>
                        <div className={styles.planPrice}>{plan.price}</div>
                        <ul className={styles.features}>{plan.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                        <Link href="/saas/cart" className={styles.btn}>{plan.id === 2 ? 'Get Started' : 'Choose Plan'}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
