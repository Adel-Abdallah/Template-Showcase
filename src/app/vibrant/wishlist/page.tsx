import styles from "./page.module.css";
const items = [{ id: 1, name: "Glow Mist", price: "$35.00" }];
export default function VibrantWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SAVED ITEMS</h1>
            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.image}>MIST</div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.price}>{item.price}</p>
                        <button className={styles.btn}>ADD TO BAG</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
