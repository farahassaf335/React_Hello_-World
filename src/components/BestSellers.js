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



