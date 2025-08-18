import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartslice';

const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.cart);
  const { token, user } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (!token) {
      alert('Please login to add items to cart');
      return;
    }

    dispatch(addToCart({
      userId: user.id,
      products: [{ id: productId, quantity: 1 }]
    }));
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Adding...' : 'Add to Cart'}
      </button>
      {error && <div className="error">{error.message || 'Failed to add item to cart.'}</div>}
    </div>
  );
};

export default AddToCartButton;
