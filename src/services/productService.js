const BASE_URL = "https://dummyjson.com";

export async function fetchProductsByCategory(category, limit = 4) {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}?limit=${limit}`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products; 
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}


