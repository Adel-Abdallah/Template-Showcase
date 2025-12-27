import styles from "./page.module.css";
export default function GlassProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageArea}><div className={styles.productVisual}>VR</div></div>
                <div className={styles.info}>
                    <h1 className={styles.title}>Vision Pro X</h1>
                    <div className={styles.price}>$3,499</div>
                    <p className={styles.desc}>Experience reality like never before. Immersive visuals, spatial sound, and seamless connectivity.</p>
                    <button className={styles.btn}>Pre-Order Now</button>
                </div>
            </div>
        </div>
    );
}
