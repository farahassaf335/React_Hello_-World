// src/services/categoryService2.js

export async function fetchCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}






