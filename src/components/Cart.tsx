/* eslint-disable @next/next/no-img-element */
//

import React from "react";

function Cart() {
  return (
    <div
      className={`absolute z-[500] w-[700px] bg-white top-0 right-0 flex items-center flex-col`}
    >
      <h1>YOUR BAG (2)</h1>
      <div className="bg-white w-[80%] shadow-md flex h-[200px] rounded-xl">
        <div className="w-1/4 h-full">
          <img
            src="/ig_image.jpg"
            alt=""
            className="h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
