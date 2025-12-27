import styles from "./page.module.css";

const wishlistItems = [
    { id: 1, name: "Midnight Essence", price: "$380.00" },
    { id: 2, name: "Imperial Oud", price: "$520.00" },
];

export default function LuxuryWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Wishlist</h1>

            <div className={styles.grid}>
                {wishlistItems.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <button className={styles.removeBtn}>✕</button>
                        <div className={styles.image}>PRODUCT IMAGE</div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.price}>{item.price}</p>
                        <button className={styles.addToCart}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
