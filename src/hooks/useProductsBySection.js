import { useState, useEffect } from "react";
import { ProductService } from "../services/getProductService";

const useProductsBySection = () => {
  const [productsBySection, setProductsBySection] = useState({
    "New Arrivals": [],
    "Trending": [],
    "Top Rated": []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    ProductService.getAllProducts()
      .then((response) => {
        const allProducts = response.data.products;

        const sectionSize = Math.ceil(allProducts.length / 3);
        setProductsBySection({
          "New Arrivals": allProducts.slice(0, sectionSize),
          "Trending": allProducts.slice(sectionSize, sectionSize * 2),
          "Top Rated": allProducts.slice(sectionSize * 2)
        });
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { productsBySection, loading, error };
};

export default useProductsBySection;
