//
"use client";
import { useCart } from "@/components/CartContext";
import CheckoutCart from "@/components/CheckoutCart";
import { useCurrency } from "@/components/CurrencyContext";
import Header from "@/components/Header";
import { numberWithCommas, updateQuantityByName } from "@/utils/functionHelper";
import image from "next/image";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function Cart({ quantity, amount, slug }: any) {
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <div className="text-center text-lg font-bold mt-8">
        <p>CHECKOUT</p>
      </div>
      <section className="w-[1200px] m-auto mt-8 flex">
        <div>
          <CheckoutCart />
          <CheckoutCart />
          <CheckoutCart />
        </div>
        <div className="ml-28 mt-8 w-[400px]">
          <div className="flex justify-between">
            <h1 className="font-bold text-base">SUBTOTAL</h1>
            <h1 className="font-bold text-base">N98,000</h1>
          </div>
          <p className="text-sm mt-2">
            Taxes and shipping calculated at checkout
          </p>
          <button className="mt-4 w-full bg-black text-white sm:py-4  py-5">
            CHECKOUT
          </button>
        </div>
      </section>
    </main>
  );
}

export default Cart;
