import React from "react";
import "../styles/CategoryNavigation.css";
import { GiDress } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { GiDiamondRing } from "react-icons/gi";
import { GiPerfumeBottle } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { GiSunglasses } from "react-icons/gi";

const categories = [
  "Clothes",
  "Footwear",
  "Jewelry",
  "Perfume",
  "Bags",
  "Cosmetics",
  "Glasses",
];

const getCategoryIcon = (categoryName) => {
  switch (categoryName) {
    case "Clothes":
      return <GiDress color="#e91e63" size={18} />;
    case "Footwear":
      return <GiConverseShoe color="#9c27b0" size={18} />;
    case "Jewelry":
      return <GiDiamondRing color="#fbc02d" size={18} />;
    case "Perfume":
      return <GiPerfumeBottle color="#3f51b5" size={18} />;
    case "Bags":
      return <GiShoppingBag color="#ff9800" size={18} />;
    case "Cosmetics":
      return <GiLipstick color="#d81b60" size={18} />;
    case "Glasses":
      return <GiSunglasses color="#009688" size={18} />;
    default:
      return <span role="img" aria-label="dot">📌</span>;
  }
};

const CategoryNavigation = () => {
  return (
<div className="category-nav sidebar-section">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat, index) => (
          <li key={index} className="category-item">
            <span className="icon">{getCategoryIcon(cat)}</span>
            <span>{cat}</span>
            <span className="plus-sign">+</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavigation;












