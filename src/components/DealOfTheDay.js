import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from "@tanstack/react-query";
import { fetchDealOfTheDay } from "../services/productService";
import { addToCart } from "../store/cartslice";

const DealOfTheDay = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // المؤقت
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // جلب المنتج
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["dealOfTheDay"],
    queryFn: fetchDealOfTheDay,
  });

  const handleAddToCart = () => {
    if (!token) {
      alert('Please login to add items to cart');
      return;
    }
    if (product) {
      dispatch(addToCart({
        userId: user.id,
        products: [{ id: product.id, quantity: 1 }]
      }));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="deal-of-the-day">
      <div className="deal-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="deal-info">
        <div className="deal-rating">
          <span>★★★★☆</span>
        </div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="deal-pricing">
          <span className="deal-price">${product.price}</span>
          <span className="deal-old-price">${Math.round(product.price * 1.3)}</span>
        </div>
        <button className="deal-add-to-cart" onClick={handleAddToCart}>
          ADD TO CART
        </button>
        <div className="deal-meta">
          <span>ALREADY SOLD: <b>20</b></span>
          <span>AVAILABLE: <b>40</b></span>
        </div>
        <div className="deal-timer">
          <div><b>{timeLeft.days}</b> Days</div>
          <div><b>{timeLeft.hours}</b> Hrs</div>
          <div><b>{timeLeft.minutes}</b> Min</div>
          <div><b>{timeLeft.seconds}</b> Sec</div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
