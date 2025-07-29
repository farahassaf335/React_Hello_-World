import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const fetchProductsByCategory = async (category, limit = 4) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/${category}?limit=${limit}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};
