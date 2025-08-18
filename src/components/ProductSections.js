import React, { useState } from "react";
import { useProductsSections } from "../hooks/useProductsBySection";
import ProductModal from "./ProductModal";

const ProductSections = () => {
  const { topRated, newArrivals, trending, loading, error } =
    useProductsSections();

  const [selectedProduct, setSelectedProduct] = useState(null);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error-message">{error.message}</p>;

  const productsBySection = {
    "New Arrivals": newArrivals,
    "Trending": trending,
    "Top Rated": topRated,
  };

  const calculateOriginalPrice = (price, discountPercentage) => {
    return (price / (1 - discountPercentage / 100)).toFixed(2);
  };

  return (
    <>
      <section className="product-sections container">
        <div className="section-container">
          {Object.entries(productsBySection).map(([section, products]) => (
            <div className="section-column" key={section}>
              <h3>{section}</h3>
              {products.slice(0, 4).map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                >
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
                      {product.discountPercentage > 0 && (
                        <span className="old-price">
                          $
                          {calculateOriginalPrice(product.price, product.discountPercentage)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};

export default ProductSections;
