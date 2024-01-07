//
"use client";
import { useCart } from "@/components/CartContext";
import CheckoutCart from "@/components/CheckoutCart";
import { useCurrency } from "@/components/CurrencyContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { numberWithCommas } from "@/utils/functionHelper";
import Link from "next/link";
import React from "react";

function Cart({ quantity, amount, slug }: any) {
  const { cart } = useCart();
  const { currency } = useCurrency();
  const allAmount = cart?.reduce((sum: any, obj: any) => {
    return sum + obj[`${currency?.name}_price`] * obj.quantity;
  }, 0);
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <div className="text-center text-lg font-bold mt-8">
        <p>CHECKOUT</p>
      </div>
      <section className="w-[95%] m-auto mt-8 md:flex">
        <div className="md:w-[60%] phone:w-[90%] w-full m-auto">
          {cart?.map((obj: any, index) => (
            <CheckoutCart
              key={index}
              name={obj.name}
              slug={obj.slug}
              amount={obj[`${currency?.name}_price`]}
              size={obj.size}
              length={obj.length}
              quantity={obj.quantity}
              image={obj.image}
            />
          ))}
        </div>
        <div className="md:ml-28 mt-8 md:w-[35%] phone:w-[90%] w-full m-auto">
          <div className="flex justify-between">
            <h1 className="font-bold text-base">SUBTOTAL</h1>
            <h1 className="font-bold text-base">
              {currency?.symbol}
              {numberWithCommas(allAmount)}
            </h1>
          </div>
          <p className="text-sm mt-2">
            Taxes and shipping calculated at checkout
          </p>
          <Link href={"/checkout"}>
            <button className=" mt-4 w-full bg-black text-white sm:py-4  py-5">
              CHECKOUT
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Cart;
