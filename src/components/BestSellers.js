import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "../services/productService";


const BestSellers = () => {
  const { data: products, error, isLoading } = useQuery(
    {
      queryKey: ["products", "smartphones"],
      queryFn: () => fetchProductsByCategory("smartphones", 4)
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

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




