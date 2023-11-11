/* eslint-disable @next/next/no-img-element */
//

import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function CartCard() {
  return (
    <div className="bg-white mt-2 mb-2 w-[85%] h-[150px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] flex items-center rounded-xl p-5">
      <div className="w-1/4 h-full">
        <img
          src="/ig_image.jpg"
          alt=""
          className="h-[100px] w-[100px] object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-[80%] p-5">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-sm">ALYA</h1>
          <button className="flex items-center text-sm text-[#908B8B]">
            <RxCross2 className="mr-1" /> Remove
          </button>
        </div>
        <div className="flex items-end justify-between font-medium text-sm mt-5">
          <div>
            <p>Size: 8</p>
            <p>Length: Tall</p>
          </div>
          <div className="flex items-center text-sm">
            <button className="flex items-center rounded-md px-[2px] border border-[#908B8B] text-[#908B8B] mr-3">
              <GrFormSubtract />
            </button>
            <p>2</p>
            <button className="px-[2px] rounded-md border border-[#908B8B] text-[#908B8B] ml-3">
              <IoMdAdd />
            </button>
          </div>
          <div className="text-sm font-extrabold">
            <h1>N500,000</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
