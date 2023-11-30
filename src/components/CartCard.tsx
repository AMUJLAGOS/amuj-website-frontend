/* eslint-disable @next/next/no-img-element */
//

import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function CartCard() {
  return (
    <div className="bg-white mt-2 mb-2 w-[95%] phone:w-[85%] h-[150px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] flex items-center rounded-xl p-5">
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
        <div className="phone:flex block items-end justify-between font-medium text-sm mt-5">
          <div className="phone:block flex ">
            <p>Size: 8</p>
            <p className="phone:ml-0 ml-5">Length: Tall</p>
          </div>
          <div className="flex justify-between items-center w-[100%] phone:w-[60%] phone:mt-0 mt-2">
            <div className="flex items-center text-sm">
              <button className="flex items-center phone:rounded-md phone:px-[2px] phone:p-0 p-2 border border-[#908B8B] text-[#908B8B]  phone:mr-3 mr-1">
                <GrFormSubtract color={"#908B8B"} />
              </button>
              <p className="phone:border-none phone:px-[0px] phone:p-0 px-5 phone:py-0 py-[6px] border border-[#908B8B]">
                2
              </p>
              <button className="phone:rounded-md phone:px-[2px] phone:p-0 p-2 border border-[#908B8B] text-[#908B8B] phone:ml-3 ml-1">
                <IoMdAdd />
              </button>
            </div>
            <div className="text-sm font-extrabold">
              <h1>N500,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
