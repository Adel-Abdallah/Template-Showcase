import styles from "./page.module.css";
export default function EditorialProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.imageCol}><div className={styles.image}>IMAGE</div></div>
                <div className={styles.infoCol}>
                    <span className={styles.category}>Spring / Summer '25</span>
                    <h1 className={styles.title}>The Trench <span>Reimagined</span></h1>
                    <div className={styles.price}>$890.00</div>
                    <p className={styles.desc}>Defined by its exaggerated proportions and crisp architectural lines, this trench coat challenges traditional tailoring.</p>
                    <button className={styles.btn}>Add to Bag</button>
                </div>
            </div>
        </div>
    );
}
