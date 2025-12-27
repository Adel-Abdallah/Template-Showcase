import Link from "next/link";
import styles from "./page.module.css";

const products = [
    { id: 1, name: "Neural Link MK-IX", price: "2,499 CR", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=600&fit=crop" },
    { id: 2, name: "Quantum Core V4", price: "3,999 CR", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=600&fit=crop" },
    { id: 3, name: "Cyber Optics X2", price: "1,299 CR", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop" },
    { id: 4, name: "Nano Shield", price: "899 CR", image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&h=600&fit=crop" },
];

export default function TechPLP() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>CATALOG_2025</h1>
                <p className={styles.heroSubtitle}>&gt; BROWSE ALL AVAILABLE UNITS</p>
            </section>

            <div className={styles.grid}>
                {products.map((product) => (
                    <Link href="/tech/product" key={product.id} className={styles.productCard}>
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
