import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../services/productService";


const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory("smartphones", 4)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="best-sellers">
      <h3>Best Sellers - Smartphones</h3>
      <ul className="best-sellers-list">
        {products.map((product) => (
          <li key={product.id} className="best-seller-item">
            <img src={product.thumbnail} alt={product.title} />
            <div className="info">
              <p className="name">{product.title}</p>
              <p className="price">${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;




