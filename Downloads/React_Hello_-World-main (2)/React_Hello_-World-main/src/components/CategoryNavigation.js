import React from "react";
import "./CategoryNavigation.css";

const categories = [
  "Clothes",
  "Footwear",
  "Jewelry",
  "Perfume",
  "Bags",
  "Cosmetics",
  "Glasses",
];

const CategoryNavigation = () => {
  return (
    <div className="category-nav">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavigation;

