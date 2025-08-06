import React, { useEffect, useState } from "react";

import { fetchCategories } from "../services/categoryService2";

const categoryImages = {
  beauty: "/image/beauty.jpg",
  fragrances: "/image/fragrances.jpg",
  furniture: "/image/furniture.jpg", 
  groceries: "/image/groceries.jpg",
};

const MainCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        console.log("Fetched categories:", data);
        setCategories(data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <section className="main-categories-wrapper">
      <div className="main-categories-grid">
        {categories.map((cat, index) => {
          const { slug, name } = cat;

          return (
            <div className="category-item" key={index}>
              <img
                src={categoryImages[slug] || "/images/default.jpg"}
                alt={name}
              />
              <div className="category-info">
                <span className="category-title">{name}</span>
                <a href={`/categories/${slug}`} className="category-show-all">
                  Show All
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainCategories;


















