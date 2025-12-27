import Link from "next/link";
import styles from "./page.module.css";
const artworks = [
    { id: 1, name: "The Void I", artist: "A. Smith", price: "$4,200", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop" },
    { id: 2, name: "Emergence", artist: "M. Chen", price: "$6,800", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=800&fit=crop" },
    { id: 3, name: "Fragments", artist: "L. Noir", price: "$3,500", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=800&fit=crop" },
];
export default function ImmersivePLP() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>The Collection</h1>
                <p className={styles.subtitle}>Limited Edition Prints — 2025</p>
            </div>
            <div className={styles.grid}>
                {artworks.map((art) => (
                    <Link href="/immersive/product" key={art.id} className={styles.card}>
                        <div className={styles.artwork}>
                            <img src={art.image} alt={art.name} />
                        </div>
                        <div className={styles.info}>
                            <span className={styles.name}>{art.name}</span>
                            <span className={styles.artist}>{art.artist}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
