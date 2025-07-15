import React from "react";
import "../styles/MainCategories.css";

const categories = [
  {
    title: "Dress & Frock",
    image: "/image/dress.jpg"
  },
  {
    title: "Winter Wear",
    image: "/image/winter wear.jpg"
  },
  {
    title: "Glasses & Lens",
    image: "/image/glass.jpg"
  },
  {
    title: "Shorts & Jeans",
    image: "/image/jeans.jpg"
  }
];

const MainCategories = () => {
  return (
    <section className="main-categories-wrapper">
      <div className="main-categories-grid">
        {categories.map((cat, index) => (
          <div className="category-item" key={index}>
            <img src={cat.image} alt={cat.title} />
            <div className="category-info">
              <span className="category-title">{cat.title}</span>
              <a href="/categories" className="category-show-all">Show All</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainCategories;
