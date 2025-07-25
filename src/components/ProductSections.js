import React from "react";
import "../styles/ProductSections.css";
import { useProductsSections } from "../hooks/useProductsBySection";

const sections = ["New Arrivals", "Trending", "Top Rated"];

const ProductSections = () => {
  const { topRated, newArrivals, trending, loading, error } = useProductsSections();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error-message">{error}</p>;

  const productsBySection = {
    "Top Rated": topRated,
    "New Arrivals": newArrivals,
    "Trending": trending,
  };

  return (
    <section className="product-sections container">
      <div className="section-container">
        {sections.map((section) => (
          <div className="section-column" key={section}>
            <h3>{section}</h3>
            {productsBySection[section]?.slice(0, 4).map((product) => (
              <div className="product-card" key={product.id}>
                <div className="image-container">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="text-container">
                  <h4>{product.title}</h4>
                  <p className="product-category">{product.category}</p>
                  <div className="price">
                    ${product.price.toFixed(2)}
                    <span className="old-price">
                      ${(product.price * 1.2).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSections;
