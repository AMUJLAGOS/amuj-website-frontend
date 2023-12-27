/* eslint-disable @next/next/no-img-element */
//

"use client";

import React, { useState } from "react";
import CartCard from "./CartCard";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "./CartContext";
import Link from "next/link";
import { useCurrency } from "./CurrencyContext";
import { numberWithCommas } from "@/utils/functionHelper";

function Cart({ hideCart, show }: any) {
  const { cart, setCart } = useCart();
  const { currency, setCurrency } = useCurrency();
  const [cartAmount, setCartAmount] = useState(0);

  const allAmount = cart?.reduce((sum: any, obj: any) => {
    return sum + obj[`${currency?.name}_price`] * obj.quantity;
  }, 0);
  return (
    <div
      className={`fixed z-[5000] h-full w-full sm:w-[600px] bg-white top-0 ${
        show ? "right-0" : "right-[-600px]"
      }  flex items-center flex-col transitioncss overflow-scroll`}
    >
      <div
        onClick={() => hideCart()}
        className="absolute phone:left-16 sm:text-[23px] text-[18px] right-4 mt-5 phone:mt-8 flex items-center border-[1.8px] border-black w-[30px] h-[30px] justify-center rounded-[50%]"
      >
        <RxCross2 size={15} />
      </div>
      <h1 className="mt-[30px]">
        YOUR BAG {cart?.length !== 0 ? `(${cart?.length})` : ""}
      </h1>
      {cart?.length === 0 ? (
        <div className="mt-14">
          <h1>
            Your cart is empty,{" "}
            <Link
              onClick={() => hideCart()}
              href={""}
              className="border-b border-[black]"
            >
              continue shopping
            </Link>
          </h1>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center phone:h-[67%] h-[900px] mt-5 overflow-scroll">
          {cart?.map((obj: any, index: any) => (
            <CartCard
              key={index}
              name={obj.name}
              size={obj.size}
              length={obj.length}
              quantity={obj.quantity}
              amount={obj[`${currency?.name}_price`]}
              slug={obj.slug}
              image={obj.image}
            />
          ))}
        </div>
      )}

      {cart?.length !== 0 && (
        <>
          <div className="border-b mt-2 border-black w-[85%]"></div>
          <div className="flex  justify-between w-[85%] items-center mt-5">
            <h1 className="text-[16px] font-semibold">TOTAL</h1>
            <h1 className="text-xl font-bold">
              {currency?.symbol}
              {numberWithCommas(allAmount)}
            </h1>
          </div>
          <div className="mt-7 sm:flex-row flex-col flex justify-between w-[80%] text-[15px]">
            <button
              onClick={() => hideCart()}
              className="border border-black sm:py-1 py-2 sm:px-12"
            >
              CONTINUE SHOPPING
            </button>
            <Link
              href={"/cart"}
              className="sm:mt-0 mt-4 bg-black text-white text-center sm:py-1 py-2 sm:px-14"
            >
              CHECKOUT
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
