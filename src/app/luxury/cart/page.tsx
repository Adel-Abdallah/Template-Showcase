import Link from "next/link";
import styles from "./page.module.css";

const cartItems = [
    { id: 1, name: "Golden Hour Elixir", variant: "100ml", price: 450 },
    { id: 2, name: "Velvet Rose", variant: "50ml", price: 395 },
];

export default function LuxuryCart() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Selection</h1>

            <div className={styles.cartGrid}>
                <div className={styles.items}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.itemImage}>IMG</div>
                            <div className={styles.itemInfo}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemVariant}>{item.variant}</p>
                                <span className={styles.itemPrice}>${item.price}.00</span>
                                <button className={styles.removeBtn}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <div className={styles.summaryRow}>
                        <span>Subtotal</span>
                        <span>${subtotal}.00</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Shipping</span>
                        <span>Complimentary</span>
                    </div>
                    <div className={styles.summaryTotal}>
                        <span>Total</span>
                        <span>${total}.00</span>
                    </div>
                    <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}
