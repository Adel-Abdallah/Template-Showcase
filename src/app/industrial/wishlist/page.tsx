import styles from "./page.module.css";
const items = [{ id: 1, name: "Espresso Concentrate", price: "$18.00" }];
export default function IndustrialWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SAVED</h1>
            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.image}>DARK</div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.price}>{item.price}</p>
                        <button className={styles.btn}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
