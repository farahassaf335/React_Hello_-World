import React, { useState } from "react";
import useCartStore from "../store/useCartStore";

function AddToCartButton({ product }) {
  const [added, setAdded] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName = storedUser?.username;
  const useCart = useCartStore(userName);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    if (!storedUser) {
alert("Please log in first");
      return;
    }

    addItem({ ...product, userName });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000); 
  };

  return (
    <button
      className="deal-add-to-cart"
      onClick={handleAddToCart}
      
    >
      {added ? "✔ Successfully Added" : " ADD TO CART"}
    </button>
  );
}

export default AddToCartButton;
