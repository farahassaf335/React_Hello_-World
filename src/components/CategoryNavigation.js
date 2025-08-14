
import React, { createContext, useReducer, useContext } from "react";
import {
  GiDress,
  GiConverseShoe,
  GiDiamondRing,
  GiPerfumeBottle,
  GiShoppingBag,
  GiLipstick,
  GiSunglasses,
} from "react-icons/gi";



const CategoryContext = createContext();

const initialState = {
  selectedCategory: null,
};

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);
  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);

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
  const { state, dispatch } = useCategory();

  const handleSelect = (cat) => {
    dispatch({ type: "SELECT_CATEGORY", payload: cat });
  };

  return (
    <div className="category-nav sidebar-section">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat, index) => (
          <li
            key={index}
            className={`category-item ${state.selectedCategory === cat ? "selected" : ""}`}
            onClick={() => handleSelect(cat)}
          >
            <span className="icon">{getCategoryIcon(cat)}</span>
            <span>{cat}</span>
            <span
              className="plus-sign"
              style={{
                opacity: 1,
                visibility: "visible",
                display: "inline",
                color: "#ff9800",
              }}
            >
              +
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavigation;












