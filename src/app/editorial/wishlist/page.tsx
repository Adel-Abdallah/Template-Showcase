import styles from "./page.module.css";
const items = [{ id: 1, name: "Silk Evening Gown", price: "$1,450.00" }];
export default function EditorialWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Saved Items</h1>
            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.image}>IMAGE</div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.price}>{item.price}</p>
                        <button className={styles.btn}>Add to Bag</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
