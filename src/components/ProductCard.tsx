/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function ProductCard({ price }: any) {
  return (
    <div className=" md:w-[360px] w-full mt-4">
      <div className="flex items-center flex-col">
        <div className="product w-full">
          <img
            src="./product_image.jpg"
            alt=""
            className="first_image lg:h-[540px] h-[400px] md:w-[360px] w-full object-cover"
          />
          <img
            src="./second_image.jpg"
            alt=""
            className="h-[540px] w-[360px] object-cover second_image"
          />
          <Link href={""}>QUICK VIEW</Link>
        </div>
        <p className="mt-3 text-[16px] font-bold tracking-[5px]">ALYA</p>
        <p className="text-[10px] font-medium tracking-[2px] text-center">
          CUSTOM PRINT CORSET RUCHED MINI DRESS
        </p>
        <p className="text-[#908B8B] font-bold">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
