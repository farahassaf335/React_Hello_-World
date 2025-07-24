// src/components/NewProducts/NewProducts.js
import React from "react";
import "../styles/NewProducts.css";


const newProducts = [
  {
    id: 1,
    name: "Jacket",
    originalPrice: 70,
    currentPrice: 49.99,
    rating: 3,
    image: "/image/jacket.jpg",
  },
  {
    id: 2,
    name: "Shirt",
    originalPrice: 40,
    currentPrice: 29.99,
    rating: 3,
    image: "/image/shirt.jpg",
  },
  {
    id: 3,
    name: "Jacket",
    originalPrice: 80,
    currentPrice: 55.0,
    rating: 3,
    image: "/image/jacket2.jpg",
  },
  {
    id: 4,
    name: "Skirt",
    originalPrice: 35,
    currentPrice: 22.0,
    rating: 5,
    image: "/image/skirt.jpg",
  },
];

const NewProducts = () => {
  return (
    <div className="new-products">
      <h3>New Products</h3>
      <ul className="new-products-list">
        {newProducts.map((product) => (
          <li key={product.id} className="new-product-item">
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
            />
            <div className="info">
              <p className="name">{product.name}</p>
              <div className="price">
  <span className="original-price">
    ${product.originalPrice.toFixed(2)}
  </span>
  <span className="current-price">
    ${product.currentPrice.toFixed(2)}
  </span>
</div>

              <div className="rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewProducts;