import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/categoryService2";

const categoryImages = {
  beauty: "/image/beauty.jpg",
  fragrances: "/image/fragrances.jpg",
  furniture: "/image/furniture.jpg",
  groceries: "/image/groceries.jpg",
};

const MainCategories = () => {
  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    select: (data) => data.slice(0, 4), 
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching categories</p>;

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


















