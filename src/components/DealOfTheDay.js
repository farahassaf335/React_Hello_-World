import React, { useEffect, useState } from "react";
import "../styles/DealOfTheDay.css";

const DealOfTheDay = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 360,
    hours: 24,
    minutes: 59,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="deal-of-the-day">
      <div className="deal-image">
        <img src="/image/photo1.jpg" alt="Deal Product" />
      </div>
      <div className="deal-info">
        <div className="deal-rating">
          <span>★★★★☆</span>
        </div>
        <h3>Beautiful Summer Hat</h3>
        <p>Nice offer on this special piece.</p>
        <div className="deal-pricing">
          <span className="deal-price">$150.00</span>
          <span className="deal-old-price">$200.00</span>
        </div>
        <button className="deal-add-to-cart">ADD TO CART</button>
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
