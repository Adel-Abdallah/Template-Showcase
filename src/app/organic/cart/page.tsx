import Link from "next/link";
import styles from "./page.module.css";
const cartItems = [{ id: 1, name: "Sculpted Vase No. 12", price: 85 }];
export default function OrganicCart() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart</h1>
            <div className={styles.grid}>
                <div className={styles.items}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.image}></div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{item.name}</h3>
                                <p className={styles.price}>${item.price}.00</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.summary}>
                    <div className={styles.row}><span>Subtotal</span><span>$85.00</span></div>
                    <div className={styles.row}><span>Shipping</span><span>$8.00</span></div>
                    <div className={styles.total}><span>Total</span><span>$93.00</span></div>
                    <button className={styles.btn}>Checkout</button>
                </div>
            </div>
        </div>
    );
}
