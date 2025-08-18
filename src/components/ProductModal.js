import React from 'react';
import AddToCartButton from './AddToCartButton';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{product.title}</h2>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="modal-image"
        />
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
};

export default ProductModal;
