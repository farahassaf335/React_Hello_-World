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
    <div>
      <h2>Best Sellers - Smartphones</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} width={100} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;



