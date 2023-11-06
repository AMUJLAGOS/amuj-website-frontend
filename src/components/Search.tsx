//
"use client";
import React from "react";
import { RiSearchLine, RiSearch2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { slideInUp } from "react-animations";

function Search({ searchFunc, show }: any) {
  return (
    // <section
    //   className={`fixed w-full z-[150] right-0 bg-[#000000ad] h-[100%] top-0 ${
    //     show ? "block" : "hidden"
    //   }`}
    // >
    <div
      className={`bg-[#fff] w-full absolute z-[150] transitioncss ${
        show ? "top-0 " : "top-[-400px]"
      }`}
    >
      <div
        onClick={() => searchFunc()}
        className="absolute phone:right-16 sm:text-[23px] text-[18px] right-10 mt-10 flex items-center border-[1.8px] border-black phone:p-2 p-1 rounded-[50%]"
      >
        <RxCross2 />
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center py-[120px] w-full">
          <h1 className="phone:text-[20px] text-[17px] font-bold mb-[60px]">
            SEARCH A PRODUCT
          </h1>
          <div className="flex items-center border-b border-black w-[95%] sm:w-[600px]">
            <input
              type="text"
              placeholder="Type Something Here"
              className="input w-[90%] sm:w-[600px] py-3"
            />
            <RiSearch2Line size={"28"} />
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
}

export default Search;
