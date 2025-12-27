import Link from "next/link";
import styles from "./page.module.css";

const products = [
    { id: 1, name: "The Trench Reimagined", price: "$890.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop" },
    { id: 2, name: "Silk Evening Gown", price: "$1,450.00", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop" },
    { id: 3, name: "Structured Blazer", price: "$680.00", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop" },
];

export default function EditorialPLP() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <span className={styles.season}>Spring / Summer '25</span>
                <h1 className={styles.heroTitle}>The Collection</h1>
            </div>
            <div className={styles.grid}>
                {products.map((p) => (
                    <Link href="/editorial/product" key={p.id} className={styles.card}>
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
