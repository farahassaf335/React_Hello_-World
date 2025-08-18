import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import { useSelector } from 'react-redux';
import cartService from '../services/cartService'; 

const ProductCard = ({ product }) => {
  const { user, token } = useSelector((state) => state.auth);

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < roundedRating ? styles.filledStar : styles.emptyStar}
      >
        ★
      </span>
    ));
  };

  const handleAddToCart = async () => {
    if (!token) {
      alert('Please login to add items to cart');
      return;
    }
    try {
      await cartService.addToCart(
        user.id,
        [{ id: product.id, quantity: 1 }],
        token
      );
      alert('Product added to cart!');
    } catch (err) {
      console.error(err);
      alert('Failed to add to cart');
    }
  };

  const imageUrl = product.thumbnail || product.image;
  const name = product.title || product.name;
  const currentPrice = product.currentPrice ?? product.price;
  const originalPrice = product.originalPrice;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} className={styles.productImage} />
      </div>
      <div className={styles.productName}>{name}</div>
      <div className={styles.rating}>{renderStars(product.rating)}</div>
      <div className={styles.price}>
        {originalPrice && (
          <span className={styles.originalPrice}>
            ${originalPrice.toFixed(2)}
          </span>
        )}
        <span className={styles.currentPrice}>
          ${currentPrice.toFixed(2)}
        </span>
      </div>
      <button className={styles.addToCartBtn} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number,
    currentPrice: PropTypes.number,
    originalPrice: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
