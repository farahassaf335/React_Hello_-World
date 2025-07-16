import { useState, useCallback } from "react";
import { SearchService } from "../services/searchService";

const useProductSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchProducts = useCallback((query) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    SearchService.searchProduct(query)
      .then((response) => {
        setSearchResults(response.data.products);
      })
      .catch((err) => {
        console.error("Search Error:", err);
        setError("Something went wrong while searching.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const clearResults = useCallback(() => {
    setSearchResults([]);
  }, []);

  return {
    searchResults,
    searchProducts,
    clearResults,
    loading,
    error,
  };
};

export default useProductSearch;
