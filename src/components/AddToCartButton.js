import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

function AddToCartButton({ product }) {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName = storedUser?.username;
  const handleAddToCart = () => {
    if (!storedUser) {
      alert("Please log in first");
      return;
    }
    dispatch(
      addItem({
        userName,
        item: { ...product, quantity: 1 },
      })
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button className="deal-add-to-cart" onClick={handleAddToCart}>
      {added ? "✔ Successfully Added" : "ADD TO CART"}
    </button>
  );
}

export default AddToCartButton;
