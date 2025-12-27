import Link from "next/link";
import styles from "./page.module.css";

const cartItems = [
    { id: 1, name: "Neural Link MK-IX", price: 2499 },
    { id: 2, name: "Cyber Optics X2", price: 1299 },
];

export default function TechCart() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>&gt; CART_CONTENTS</h1>

            <div className={styles.cartGrid}>
                <div className={styles.items}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.itemImage}>[ IMG ]</div>
                            <div className={styles.itemInfo}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <span className={styles.itemPrice}>{item.price} CR</span>
                                <button className={styles.removeBtn}>[ REMOVE ]</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <div className={styles.summaryRow}>
                        <span>SUBTOTAL</span>
                        <span>{subtotal} CR</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>SHIPPING</span>
                        <span>FREE</span>
                    </div>
                    <div className={styles.summaryTotal}>
                        <span>TOTAL</span>
                        <span>{total} CR</span>
                    </div>
                    <button className={styles.checkoutBtn}>INITIATE CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}
