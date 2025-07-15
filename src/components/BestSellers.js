import React from "react";
import "../styles/BestSellers.css";

const bestSellers = [
  {
    id: 1,
    name: "Baby Fabric Shoes",
    price: 4.0,
    image: "/image/baby_shoes.jpg",
  },
  {
    id: 2,
    name: "Men's Hoodie ",
    price: 7.0,
    image: "/image/hoodie.jpg",
  },
  {
    id: 3,
    name: "Men's T-Shirt",
    price: 3.0,
    image: "/image/tshirt.jpg",
  },
  {
    id: 4,
    name: "Women Hat",
    price: 12.0,
    image: "/image/hat.jpg",
  },
];


const BestSellers = () => {
  return (
    <div className="best-sellers">
      <h3>Best Sellers</h3>
      <ul className="best-sellers-list">
        {bestSellers.map((product) => (
          <li key={product.id} className="best-seller-item">
<img src={product.image} alt={product.name} width={100} height={100} />

            <div className="info">
              <p className="name">{product.name}</p>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;

