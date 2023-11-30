/* eslint-disable @next/next/no-img-element */
//

import React from "react";
import CartCard from "./CartCard";
import { RxCross2 } from "react-icons/rx";

function Cart({ hideCart, show }: any) {
  return (
    <div
      // className="bg-white absolute top-0 left-[2000px]"
      className={`fixed z-[5000] h-full w-full sm:w-[600px] bg-white top-0 ${
        show ? "right-0" : "right-[-600px]"
      }  flex items-center flex-col transitioncss overflow-scroll`}
    >
      <div
        onClick={() => hideCart()}
        className="absolute phone:left-16 sm:text-[23px] text-[18px] right-4 mt-5 phone:mt-10 flex items-center border-[1.8px] border-black  p-1 rounded-[50%]"
      >
        <RxCross2 />
      </div>
      <h1 className="mt-[30px]">YOUR BAG (2)</h1>
      <div className="w-full flex flex-col items-center phone:h-[67%] h-[900px] mt-5 overflow-scroll">
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
        <h1 className="text-xl font-bold">N98,000</h1>
      </div>
      <div className="mt-7 sm:flex-row flex-col flex justify-between w-[80%] text-[15px]">
        <button className="border border-black sm:py-1 py-2 px-6">
          CONTINUE SHOPPING
        </button>
        <button className="sm:mt-0 mt-4 bg-black text-white sm:py-1 py-2 px-14">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Cart;
