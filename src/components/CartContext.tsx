//
"use client";
import { AddCart } from "@/utils/dataType";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cart: AddCart[] | undefined;
  setCart: React.Dispatch<React.SetStateAction<any>>;
};
export const CartContexxt = createContext<CartContextType>(
  {} as CartContextType
);
function CartContext({ children }: any) {
  const [cart, setCart] = useState<AddCart[]>();

  useEffect(() => {});
  return (
    <CartContexxt.Provider value={{ cart, setCart }}>
      {children}
    </CartContexxt.Provider>
  );
}

export default CartContext;

export const useCart = () => useContext(CartContexxt);
