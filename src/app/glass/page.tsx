import Link from "next/link";
import styles from "./page.module.css";
const products = [
    { id: 1, name: "Vision Pro X", price: "$3,499", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=600&fit=crop" },
    { id: 2, name: "AirPods Max 2", price: "$599", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop" }
];
export default function GlassPLP() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Collection</h1>
            <div className={styles.grid}>
                {products.map((p) => (
                    <Link href="/glass/product" key={p.id} className={styles.card}>
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
