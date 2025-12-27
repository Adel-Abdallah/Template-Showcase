import styles from "./page.module.css";
const cartItems = [{ id: 1, name: "Midnight Oil Cold Brew", price: 24 }];
export default function IndustrialCart() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CART</h1>
            <div className={styles.grid}>
                <div className={styles.items}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.image}>DARK</div>
                            <div className={styles.info}><h3 className={styles.name}>{item.name}</h3><span className={styles.price}>${item.price}.00</span></div>
                        </div>
                    ))}
                </div>
                <div className={styles.summary}>
                    <div className={styles.row}><span>SUBTOTAL</span><span>$24.00</span></div>
                    <div className={styles.total}><span>TOTAL</span><span>$24.00</span></div>
                    <button className={styles.btn}>SHIP IT</button>
                </div>
            </div>
        </div>
    );
}
