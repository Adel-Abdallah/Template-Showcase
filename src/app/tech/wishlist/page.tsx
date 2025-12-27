import styles from "./page.module.css";

const wishlistItems = [
    { id: 1, name: "Quantum Core V4", price: "3,999 CR" },
    { id: 2, name: "Nano Shield", price: "899 CR" },
];

export default function TechWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>&gt; SAVED_ITEMS</h1>

            <div className={styles.grid}>
                {wishlistItems.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <button className={styles.removeBtn}>[ X ]</button>
                        <div className={styles.image}>[ PREVIEW ]</div>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.price}>{item.price}</p>
                        <button className={styles.addToCart}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
