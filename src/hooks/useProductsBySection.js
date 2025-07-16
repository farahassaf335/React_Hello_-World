import { useEffect, useState } from "react";
import { ProductService } from "../services/getProductService";

export const useProductsSections = () => {
  const [topRated, setTopRated] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    ProductService.getAllProducts()
      .then((res) => {
        const products = res.data.products;

        const topRated = [...products]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);

        const newArrivals = [...products]
          .sort((a, b) => b.id - a.id)
          .slice(0, 4);

        const trending = [...products]
          .map(product => ({
            ...product,
            discountAmount: product.price * (product.discountPercentage / 100),
          }))
          .sort((a, b) => b.discountAmount - a.discountAmount)
          .slice(0, 4);

        setTopRated(topRated);
        setNewArrivals(newArrivals);
        setTrending(trending);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { topRated, newArrivals, trending, loading, error };
};
