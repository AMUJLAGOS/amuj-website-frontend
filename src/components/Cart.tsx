/* eslint-disable @next/next/no-img-element */
//

import React from "react";
import CartCard from "./CartCard";
import { RxCross2 } from "react-icons/rx";

function Cart({ hideCart, show }: any) {
  return (
    <div
      // className="bg-white absolute top-0 left-[2000px]"
      className={`absolute z-[500] h-full w-[600px] bg-white top-0 ${
        show ? "right-0" : "right-[-600px]"
      }  flex items-center flex-col transitioncss`}
    >
      <div
        onClick={() => hideCart()}
        className="absolute phone:rleft-16 sm:text-[23px] text-[18px] left-10 mt-10 flex items-center border-[1.8px] border-black  p-1 rounded-[50%]"
      >
        <RxCross2 />
      </div>
      <h1 className="mt-[40px]">YOUR BAG (2)</h1>
      <div className="w-full flex flex-col items-center h-[67%] mt-8 overflow-scroll">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>

      <div className="border-b mt-2 border-black w-[85%]"></div>
      <div className="flex  justify-between w-[85%] items-center mt-5">
        <h1 className="text-[16px] font-semibold">TOTAL</h1>
        <h1 className="text-2xl font-bold">N98,000</h1>
      </div>
      <div className="mt-7 flex justify-between w-[80%] text-[15px]">
        <button className="border border-black py-1 px-6">
          CONTINUE SHOPPING
        </button>
        <button className="bg-black text-white py-1 px-14">CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
