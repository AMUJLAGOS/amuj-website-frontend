/* eslint-disable @next/next/no-img-element */
//
"use client";
import { numberWithCommas, updateQuantityByName } from "@/utils/functionHelper";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "./CartContext";
import { imageServer } from "@/utils/urlhandler";
import { useCurrency } from "./CurrencyContext";

function CartCard({ name, size, length, quantity, amount, slug, image }: any) {
  // const [cAmount, setAmount] = useState(amount);
  const [cQuantity, setcQuantity] = useState(quantity);
  const { cart, setCart } = useCart();
  const { currency } = useCurrency();

  useEffect(() => {
    if (quantity != cQuantity) {
      setcQuantity(quantity);
    }
  }, [quantity, cQuantity]);

  const updateCart = (quantity: any) => {
    const update = updateQuantityByName(cart, slug, quantity);
    localStorage.setItem("amujCart", JSON.stringify(update));
    setCart(update);
  };

  const minus = () => {
    if (cQuantity > 0) {
      const updatedQuantity = cQuantity - 1;
      setcQuantity(updatedQuantity);
      updateCart(updatedQuantity);
    }
  };

  const add = () => {
    if (cQuantity < 2) {
      const updatedQuantity = cQuantity + 1;
      setcQuantity(updatedQuantity);
      updateCart(updatedQuantity);
    }
  };

  const remove = () => {
    const removeCart = cart?.filter((obj: any) => obj.slug !== slug);
    setCart(removeCart);
    localStorage.setItem("amujCart", JSON.stringify(removeCart));
  };

  return (
    <div className="bg-white mt-2 mb-2 w-[95%] phone:w-[85%] h-[150px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] flex items-center rounded-sm p-5">
      <div className="w-1/4 h-full">
        <img
          src={`${imageServer}${image}`}
          alt={`${slug}`}
          className="h-[100px] w-[100px] object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-[80%] p-5">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-sm uppercase">{name}</h1>
          <button
            onClick={() => remove()}
            className="flex items-center text-sm text-[#908B8B]"
          >
            <RxCross2 className="mr-1" /> Remove
          </button>
        </div>
        <div className="items-end justify-between font-medium text-sm mt-5">
          <div className="phone:flex flex text-sm">
            <p>Size: {size}</p>
            <p className="ml-5">Length: {length}</p>
          </div>
          <div className="flex justify-between items-center w-[100%] phone:w-[60%] mt-2">
            <div className="flex items-center text-sm">
              <button
                onClick={() => minus()}
                className="border flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[40px] phone:w-[40px] h-[30px] w-[30px]"
              >
                <AiOutlineMinus />
              </button>
              <div className="border flex justify-center items-center border-[#908B8B] ml-1 mr-1 phone:w-[55px] phone:h-[40px] h-[30px] w-[40px]">
                {cQuantity}
              </div>
              <button
                onClick={() => add()}
                className="border  flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[40px] phone:w-[40px] h-[30px] w-[30px]"
              >
                <AiOutlinePlus />
              </button>
            </div>
            <div className="text-sm ml-7 font-extrabold">
              <h1>
                {currency?.symbol}
                {numberWithCommas(amount * cQuantity)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
