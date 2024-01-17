import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../redux/action";
import HandleCart from "../components/HandleCart";

const CartPage = () => {
  return (
    <div>
      <HandleCart></HandleCart>
    </div>
  );
};

export default CartPage;
