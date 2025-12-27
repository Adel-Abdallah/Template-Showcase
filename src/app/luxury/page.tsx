import Link from "next/link";
import styles from "./page.module.css";

const products = [
    { id: 1, name: "Royal Chronograph", price: "$12,500", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop" },
    { id: 2, name: "Diamond Eternity", price: "$8,900", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop" },
    { id: 3, name: "Sapphire Collection", price: "$15,200", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop" },
];

export default function LuxuryPLP() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <span className={styles.season}>Winter Collection</span>
                <h1 className={styles.heroTitle}>Maison de Luxe</h1>
            </section>

            <div className={styles.grid}>
                {products.map((product) => (
                    <Link href="/luxury/product" key={product.id} className={styles.productCard}>
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
