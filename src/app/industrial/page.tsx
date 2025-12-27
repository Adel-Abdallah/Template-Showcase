import Link from "next/link";
import styles from "./page.module.css";
const products = [
    { id: 1, name: "Midnight Oil Cold Brew", price: "$24.00", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&h=800&fit=crop" },
    { id: 2, name: "Espresso Concentrate", price: "$18.00", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=800&fit=crop" }
];
export default function IndustrialPLP() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CATALOG</h1>
            <div className={styles.grid}>
                {products.map((p) => (
                    <Link href="/industrial/product" key={p.id} className={styles.card}>
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
