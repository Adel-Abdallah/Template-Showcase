import Link from "next/link";
import styles from "./page.module.css";

const cartItems = [
    { id: 1, name: "Essential Low-Top", variant: "White / Size 42", price: 185, qty: 1 },
    { id: 2, name: "Leather Loafer", variant: "Black / Size 41", price: 220, qty: 1 },
];

export default function MinimalistCart() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = 15;
    const total = subtotal + shipping;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart</h1>

            <div className={styles.cartGrid}>
                <div className={styles.items}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.itemImage}>IMG</div>
                            <div className={styles.itemInfo}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemVariant}>{item.variant}</p>
                                <div className={styles.itemActions}>
                                    <div className={styles.quantity}>
                                        <button className={styles.qtyBtn}>-</button>
                                        <span>{item.qty}</span>
                                        <button className={styles.qtyBtn}>+</button>
                                    </div>
                                    <span className={styles.itemPrice}>${item.price}.00</span>
                                </div>
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
                        <span>${shipping}.00</span>
                    </div>
                    <div className={styles.summaryTotal}>
                        <span>Total</span>
                        <span>${total}.00</span>
                    </div>
                    <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                    <Link href="/minimalist" className={styles.continueShopping}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
