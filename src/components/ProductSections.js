import React, { useState } from "react";
import { useProductsSections } from "../hooks/useProductsBySection";

const ProductSections = () => {
  const { topRated, newArrivals, trending, loading, error } = useProductsSections();

  const [selectedProduct, setSelectedProduct] = useState(null);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error-message">{error.message}</p>;

  const productsBySection = {
    "New Arrivals": newArrivals,
    "Trending": trending,
    "Top Rated": topRated,
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
<h4 title={product.title}>
  {product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}
</h4>
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

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <h2>{selectedProduct.title}</h2>
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="modal-image"
            />
            <p><strong>Category:</strong> {selectedProduct.category}</p>
            <p><strong>Description:</strong> {selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
            <p><strong>Rating:</strong> {selectedProduct.rating}</p>
            <p><strong>Discount:</strong> {selectedProduct.discountPercentage}%</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSections;
