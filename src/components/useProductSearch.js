import { useState } from "react";
import axios from "axios";

const useProductSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchProducts = (query) => {
    if (!query.trim()) return;

    axios
      .get(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => {
        setSearchResults(response.data.products);
        setShowResults(true);
      })
      .catch((error) => {
        console.error("Search Error:", error);
      });
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchResults([]);
  };

  return { searchResults, showResults, searchProducts, closeResults };
};

export default useProductSearch;
