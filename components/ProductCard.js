import React from "react";
import styles from "@/styles/plp.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card} title={product.title}>
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <div className={styles.cardInfo}>
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
