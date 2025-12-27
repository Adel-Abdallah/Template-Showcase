import styles from "./page.module.css";
const saved = [{ id: 1, name: "Emergence", artist: "M. Chen" }];
export default function ImmersiveWishlist() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Saved Works</h1>
            <div className={styles.grid}>
                {saved.map((art) => (
                    <div key={art.id} className={styles.card}>
                        <div className={styles.artwork}></div>
                        <div className={styles.info}>
                            <span className={styles.name}>{art.name}</span>
                            <span className={styles.artist}>{art.artist}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
