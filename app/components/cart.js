"use client";
import React, { useContext } from "react";
import DarajContext from "@/context/daraj/mycontext";
import Image from "next/image";
const CartPreview = () => {
  const { cart } = useContext(DarajContext);

    return (
    <div className="cart-preview p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2">
              <div className="flex justify-between">
                <span>  <Image
            src={item.image}
            width={400}
            height={500}
            alt={item.title}
            className="w-20 h-20 rounded-md object-contain"
          /></span>
                <span>{item.title}</span>
                <span>Rs. {item.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity: {item.quantity}</span>
                <span>Total: Rs. {item.price * item.quantity}</span>
                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPreview;
