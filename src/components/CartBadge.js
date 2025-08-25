import React from "react";
import { useSelector } from "react-redux";

export default function CartBadge() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName = storedUser?.username ;

  const items = useSelector((state) => state.cart.cart[userName] || []);
  const count = items.length;

  return <span className="">{count > 0 ? count : "0"}</span>;
}
