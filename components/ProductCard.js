import React from "react";
import styles from "@/styles/plp.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card} title={product.title}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          style={{ width: "17vw" }}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productCategory}>{product.category}</p>
        <p className={styles.productPrice}>₹{product.price}</p>
        <button className={styles.addBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
