import styles from "./page.module.css";
export default function VibrantProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.visual}>
                    <div className={styles.circle} style={{ width: '300px', height: '300px', background: '#ff00cc', top: '20%', left: '10%' }}></div>
                    <div className={styles.circle} style={{ width: '400px', height: '400px', background: '#3333ff', bottom: '10%', right: '10%' }}></div>
                    <div className={styles.productImage}>SERUM</div>
                </div>
                <div className={styles.info}>
                    <span className={styles.tag}>Best Seller</span>
                    <h1 className={styles.title}>Supernova Brightening Serum</h1>
                    <div className={styles.price}>$65.00</div>
                    <p className={styles.desc}>A powerful blend of Vitamin C and Hyaluronic Acid that instantly illuminates and hydrates.</p>
                    <button className={styles.btn}>GET IT NOW</button>
                    <div className={styles.pills}>
                        <span className={styles.pill}>Vitamin C</span>
                        <span className={styles.pill}>Vegan</span>
                        <span className={styles.pill}>Cruelty Free</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
