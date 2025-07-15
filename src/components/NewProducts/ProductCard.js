// src/components/NewProducts/ProductCard.js
import React from 'react';
import "../styles/ProductCard.module.css";


const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? styles.filledStar : styles.emptyStar}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.rating}>{renderStars(product.rating)}</div>
      <div className={styles.price}>
        <span className={styles.originalPrice}>
          ${product.originalPrice.toFixed(2)}
        </span>
        <span className={styles.currentPrice}>
          ${product.currentPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;