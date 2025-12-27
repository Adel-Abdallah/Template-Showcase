import Link from "next/link";
import styles from "./page.module.css";

const products = [
    { id: 1, name: "Sculpted Vase No. 12", price: "$85.00", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop" },
    { id: 2, name: "Textured Bowl", price: "$65.00", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop" },
    { id: 3, name: "Ceramic Planter", price: "$95.00", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop" },
];

export default function OrganicPLP() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Collection</h1>
            <div className={styles.grid}>
                {products.map((p) => (
                    <Link href="/organic/product" key={p.id} className={styles.card}>
                        <div className={styles.imageBlob}>
                            <img src={p.image} alt={p.name} className={styles.productImg} />
                        </div>
                        <h3 className={styles.name}>{p.name}</h3>
                        <p className={styles.price}>{p.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
