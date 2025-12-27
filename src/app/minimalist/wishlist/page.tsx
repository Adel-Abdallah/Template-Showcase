import styles from "./page.module.css";

const wishlistItems = [
    { id: 1, name: "Essential Low-Top", price: "$185.00" },
    { id: 2, name: "Canvas Slip-On", price: "$95.00" },
    { id: 3, name: "Suede Boot", price: "$280.00" },
];

export default function MinimalistWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Wishlist</h1>

            <div className={styles.grid}>
                {wishlistItems.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <button className={styles.removeBtn}>✕</button>
                        <div className={styles.image}>PRODUCT IMAGE</div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{item.name}</h3>
                            <p className={styles.price}>{item.price}</p>
                            <button className={styles.addToCart}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
