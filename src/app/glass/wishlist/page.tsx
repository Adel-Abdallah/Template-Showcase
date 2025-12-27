import styles from "./page.module.css";
const items = [{ id: 1, name: "AirPods Max 2", price: "$599" }];
export default function GlassWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Saved Items</h1>
            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.image}>MAX</div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.price}>{item.price}</p>
                        <button className={styles.btn}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
