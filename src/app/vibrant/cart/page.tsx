import styles from "./page.module.css";
const cartItems = [{ id: 1, name: "Supernova Serum", price: 65 }];
export default function VibrantCart() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>YOUR BAG</h1>
            <div className={styles.grid}>
                <div className={styles.items}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.image}>SERUM</div>
                            <div className={styles.info}><h3 className={styles.name}>{item.name}</h3><p className={styles.price}>${item.price}.00</p></div>
                        </div>
                    ))}
                </div>
                <div className={styles.summary}>
                    <div className={styles.row}><span>Subtotal</span><span>$65.00</span></div>
                    <div className={styles.total}><span>Total</span><span>$65.00</span></div>
                    <button className={styles.btn}>GET IT NOW</button>
                </div>
            </div>
        </div>
    );
}
