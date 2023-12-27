//
import React from "react";

function StepsHelper({ step }: any) {
  return (
    <div className="flex items-center w-full">
      {/* step 2  */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center w-full">
          <div className="border-b border-black w-1/2"></div>
          <div className="w-6 h-6 bg-black rounded-full text-white flex justify-center items-center text-sm">
            1
          </div>
          <div className="border-b border-black w-1/2"></div>
        </div>
        <p className="font-semibold text-xs phone:text-sm mt-2">
          <span>Contact </span>{" "}
          {/* <span className="phone:block hidden "> Information</span> */}
        </p>
      </div>
      {/* step 2  */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center w-full">
          <div className="border-b border-black w-1/2"></div>
          <div
            className={`${
              step > 1 ? "w-6 h-6" : "w-4 h-4"
            }  bg-black rounded-full text-white flex justify-center items-center text-sm`}
          >
            {step > 1 && 2}
          </div>
          <div className="border-b border-black w-1/2"></div>
        </div>
        <p
          className={`font-semibold text-xs phone:text-sm  mt-2 ${
            step > 1 ? "text-black" : "text-[#908B8B]"
          }`}
        >
          Shipping
        </p>
      </div>
      {/* step 3  */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center w-full">
          <div className="border-b border-black w-1/2"></div>
          <div
            className={`${
              step > 2 ? "w-6 h-6" : "w-4 h-4"
            }  bg-black rounded-full text-white flex justify-center items-center text-sm`}
          >
            {step > 2 && 3}
          </div>
          <div className="border-b border-black w-1/2"></div>
        </div>
        <p
          className={`font-semibold text-xs phone:text-sm mt-2 ${
            step > 2 ? "text-black" : "text-[#908B8B]"
          }`}
        >
          Payment
        </p>
      </div>
    </div>
  );
}

export default StepsHelper;
