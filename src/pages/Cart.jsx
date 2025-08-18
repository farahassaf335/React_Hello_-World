import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, userId } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth?.user?.id) {
      dispatch(fetchCart(auth.user.id));
    }
  }, [auth, dispatch]);

  return (
    <div>
      <h2>Your Cart</h2>
      {items?.length > 0 ? (
        items.map((p) => <p key={p.id}>{p.title} - {p.quantity}</p>)
      ) : (
        <p>No items in cart.</p>
      )}
    </div>
  );
};
export default Cart;
