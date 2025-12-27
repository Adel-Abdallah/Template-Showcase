import Link from "next/link";
import styles from "./page.module.css";
const products = [
    { id: 1, name: "Supernova Serum", price: "$65.00", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop" },
    { id: 2, name: "Glow Mist", price: "$35.00", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&h=600&fit=crop" },
    { id: 3, name: "Radiance Cream", price: "$45.00", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop" }
];
export default function VibrantPLP() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE GLOW COLLECTION</h1>
            <div className={styles.grid}>
                {products.map((p) => (
                    <Link href="/vibrant/product" key={p.id} className={styles.card}>
                        <div className={styles.image}>
                            <img src={p.image} alt={p.name} />
                        </div>
                        <h3 className={styles.name}>{p.name}</h3>
                        <p className={styles.price}>{p.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
