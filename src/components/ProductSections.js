import React, { useReducer } from "react";
import { useProductsSections } from "../hooks/useProductsBySection";

const sections = ["New Arrivals", "Trending", "Top Rated"];

const productReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    case "CLEAR_PRODUCT":
      return { ...state, selectedProduct: null };
    default:
      return state;
  }
};

const initialState = {
  selectedProduct: null,
};

const ProductSections = () => {
  const { topRated, newArrivals, trending, loading, error } = useProductsSections();

  
  const [state, dispatch] = useReducer(productReducer, initialState);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error-message">{error.message || error}</p>;

  const productsBySection = {
    "New Arrivals": newArrivals,
    "Trending": trending,
    "Top Rated": topRated,
  };

  return (
    <>
      <section className="product-sections container">
        <div className="section-container">
          {sections.map((section) => (
            <div className="section-column" key={section}>
              <h3>{section}</h3>
              {productsBySection[section]?.slice(0, 4).map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                  onClick={() =>
                    dispatch({ type: "SELECT_PRODUCT", payload: product })
                  }
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
                      {product.title.length > 30
                        ? product.title.slice(0, 30) + "..."
                        : product.title}
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

      {state.selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => dispatch({ type: "CLEAR_PRODUCT" })}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => dispatch({ type: "CLEAR_PRODUCT" })}
            >
              ×
            </button>
            <h2>{state.selectedProduct.title}</h2>
            <img
              src={state.selectedProduct.thumbnail}
              alt={state.selectedProduct.title}
              className="modal-image"
            />
            <p><strong>Category:</strong> {state.selectedProduct.category}</p>
            <p><strong>Description:</strong> {state.selectedProduct.description}</p>
            <p><strong>Price:</strong> ${state.selectedProduct.price.toFixed(2)}</p>
            <p><strong>Rating:</strong> {state.selectedProduct.rating}</p>
            <p><strong>Discount:</strong> {state.selectedProduct.discountPercentage}%</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSections;
