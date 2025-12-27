import Link from "next/link";
import styles from "./page.module.css";

const cartItems = [{ id: 1, name: "The Trench Reimagined", variant: "Cream / M", price: 890 }];

export default function EditorialCart() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Bag</h1>
            <div className={styles.grid}>
                <div className={styles.items}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.image}>IMG</div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{item.name}</h3>
                                <p className={styles.variant}>{item.variant}</p>
                                <p className={styles.price}>${item.price}.00</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.summary}>
                    <div className={styles.row}><span>Subtotal</span><span>$890.00</span></div>
                    <div className={styles.row}><span>Shipping</span><span>Calculated at checkout</span></div>
                    <div className={styles.total}><span>Total</span><span>$890.00</span></div>
                    <button className={styles.checkoutBtn}>Checkout</button>
                </div>
            </div>
        </div>
    );
}
