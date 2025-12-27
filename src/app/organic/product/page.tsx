import styles from "./page.module.css";

export default function OrganicProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.imageBlob}>
                    <img
                        src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop"
                        alt="Sculpted Vase"
                        className={styles.productImg}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.category}>Ceramics</div>
                    <h1 className={styles.title}>The Sculpted Vase No. 12</h1>
                    <div className={styles.price}>$85.00</div>
                    <p className={styles.desc}>Each piece is wheel-thrown and hand-altered, creating a unique, organic form that feels alive.</p>
                    <button className={styles.btn}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
