import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();


  const handelclearcart = () => {
    dispatch(clearCart());
  };
  console.log("Item", cartItems);

  return (
    <div className="p-2">
      <h1 className="font-bold text-3xl text">
        Cart Items -- {cartItems.length}
      </h1>
      <button className="bg-green-100 p-2" onClick={() => handelclearcart()}>
        Clearcart
      </button>
         <div className='flex flex-wrap align-center justify-center'>

        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
