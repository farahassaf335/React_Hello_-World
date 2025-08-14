import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "../services/productService";

const BestSellers = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ["products", "smartphones"],
    queryFn: () => fetchProductsByCategory("smartphones", 4),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  const getOldPrice = (price, discountPercentage) => {
    if (!discountPercentage) return null;
    return (price / (1 - discountPercentage / 100)).toFixed(2);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={"full-" + i} style={{ color: "gold" }}>★</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" style={{ color: "gold" }}>☆</span>);
    }
    const emptyStars = totalStars - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={"empty-" + i} style={{ color: "#ccc" }}>★</span>);
    }
    return stars;
  };

  return (
    <div className="best-sellers">
      <h3>Best Sellers - Smartphones</h3>
      <ul className="best-sellers-list">
        {products.map((product) => {
          const oldPrice = getOldPrice(product.price, product.discountPercentage);
          return (
            <li key={product.id} className="best-seller-item">
              <img src={product.thumbnail} alt={product.title} />
              <div className="info">
                <p className="name">{product.title}</p>
               
                <p className="rating">{renderStars(product.rating)}</p>
             <p className="price">
                  {oldPrice && (
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "gray",
                      }}
                    >
                      ${oldPrice}
                    </span>
                  )}
                  ${product.price.toFixed(2)}{" "}
                 
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BestSellers;
