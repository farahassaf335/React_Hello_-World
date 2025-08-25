import React, { useEffect, useState } from "react";
import { ProductService } from "../services/productApi";

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    setLoading(true);
    ProductService.getLatestProducts(1000)
      .then((res) => {
        setProducts(res.data.products);
      })
      .finally(() => setLoading(false));
  }, []);

  const getDiscountedPrice = (price, discount) =>
    (price - (price * discount) / 100).toFixed(2);

  if (loading) return <p className="loading">Loading products...</p>;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="latest-products">
      <h3 className="latest-products-title">New Products</h3>

      <div className="products-grid">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <p className="product-name">{product.title}</p>

              <div className="product-price">
                <span className="original-price">${product.price.toFixed(2)}</span>
                <span className="current-price">
                  ${getDiscountedPrice(product.price, product.discountPercentage)}
                </span>
              </div>

              {product.discountPercentage > 0 && (
                <div className="product-discount">
                  {product.discountPercentage}% OFF
                </div>
              )}

              <div className="product-rating">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {pages.map((p) => (
          <button
            key={p}
            className={p === page ? "active" : ""}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
