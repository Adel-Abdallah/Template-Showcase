import Link from "next/link";
import styles from "./page.module.css";

const products = [
    { id: 1, name: "Essential Low-Top", price: "$185.00", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop" },
    { id: 2, name: "Classic Sneaker", price: "$165.00", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop" },
    { id: 3, name: "Leather Loafer", price: "$220.00", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=600&fit=crop" },
    { id: 4, name: "Canvas Slip-On", price: "$95.00", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop" },
    { id: 5, name: "Running Trainer", price: "$145.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop" },
    { id: 6, name: "Suede Boot", price: "$280.00", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=600&fit=crop" },
];

export default function MinimalistPLP() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>The Collection</h1>
                <p className={styles.heroSubtitle}>Timeless essentials, crafted with care.</p>
            </section>

            <div className={styles.filters}>
                <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
                <button className={styles.filterBtn}>Sneakers</button>
                <button className={styles.filterBtn}>Boots</button>
                <button className={styles.filterBtn}>Loafers</button>
            </div>

            <div className={styles.grid}>
                {products.map((product) => (
                    <Link href="/minimalist/product" key={product.id} className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
