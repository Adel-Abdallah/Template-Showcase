import styles from "./page.module.css";
const cartItems = [{ id: 1, name: "Vision Pro X", price: 3499 }];
export default function GlassCart() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Your Cart</h1>
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.image}>VR</div>
                        <div className={styles.info}><h3 className={styles.name}>{item.name}</h3><p className={styles.price}>${item.price}</p></div>
                    </div>
                ))}
                <div className={styles.summary}>
                    <div className={styles.total}><span>Total</span><span>${cartItems[0].price}</span></div>
                    <button className={styles.btn}>Pre-Order Now</button>
                </div>
            </div>
        </div>
    );
}
