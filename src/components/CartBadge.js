import React, { useEffect, useState } from "react";

export default function CartBadge({ userKey }) {
  const [count, setCount] = useState(null); 

  useEffect(() => {
    const updateCount = () => {
      if (!userKey) {
        setCount(null); 
        return;
      }
      const cartData = localStorage.getItem(userKey);
            if (cartData) {
        try {
          const parsed = JSON.parse(cartData);
          const length = parsed?.state?.cart?.length || 0;
          setCount(length);
        } catch (e) {
          setCount(0);
        }
      } else {
        setCount(0); 
      }
    };

    updateCount(); 
    const interval = setInterval(updateCount, 1000); 

    return () => clearInterval(interval);
  }, [userKey]); 

  return (
    <span className="">
      {count !== null ? count : ""} 
    </span>
  );
}
