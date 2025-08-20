import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore"; 

function CartPage() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName = storedUser?.username;

  const useCart = useCartStore(userName);
  const items = useCart((state) => state.cart);
  const clearCart = useCart((state) => state.clearCart);
  const updateItemQuantity = useCart((state) => state.updateItemQuantity);
  const removeItem = useCart((state) => state.removeItem);

  const mergedItems = items.reduce((acc, item) => {
    const existing = acc.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      acc.push({ ...item, quantity: item.quantity || 1 });
    }
    return acc;
  }, []);

  const totalItems = mergedItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = mergedItems.reduce(
    (sum, item) => sum + item.quantity * item.price * (1 - (item.discountPercentage || 0) / 100),
    0
  );



  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {mergedItems.length === 0 ? (
        <>
          <p className="cart-empty">Your cart is empty.</p>
          <div className="action-buttons">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="back-home-btn" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </>
      ) : (
        <ul className="cart-list">
          {mergedItems.map((item) => {
            const discountedPrice = item.price * (1 - (item.discountPercentage || 0) / 100);
            return (
              <li key={item.id} className="cart-item">
                <img
                  src={item.thumbnail || item.image?.[0]}
                  alt={item.title}
                  className="item-img"
                />
                <div className="item-body">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-desc">{item.description}</p>
                  <p className="item-price">Unit Price: ${item.price.toFixed(2)}</p>

                
<p className="item-quantity-label">Quantity: {item.quantity}</p>


                  <p className="item-subtotal item-subtotal2">
                    Subtotal (before discount): <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                  <p className="item-subtotal">
                    Subtotal (after discount): <strong>${(discountedPrice * item.quantity).toFixed(2)}</strong>
                  </p>

                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Remove Product
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {mergedItems.length > 0 && (
        <div className="cart-summary">
          <p>Total items: {totalItems}</p>
          <p>Total price: ${cartTotal.toFixed(2)}</p>
          <div className="action-buttons">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="back-home-btn" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
