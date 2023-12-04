/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";

function ProductCard({ price }: any) {
  return (
    <div className="2xl:w-[25%] md:w-[360px] w-full mt-4">
      <Link href={"/product"}>
        <div className="flex items-center flex-col">
          <div className="product w-full">
            {/* <div className="first_image lg:h-[540px] h-[400px] md:w-[360px] w-full object-cover">
              <Image
                src={"/product_image.jpg"}
                alt={"product-image"}
                objectFit="cover"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="first_image lg:h-[540px] h-[400px] md:w-[360px] w-full object-cover second_image">
              <Image
                src={"/second_image.jpg"}
                alt={"product-image"}
                objectFit="cover"
                layout="fill"
              />
            </div> */}

            <img
              src="./product_image.jpg"
              alt=""
              className="first_image 2xl:w-full lg:h-[540px] h-[400px] md:w-[360px] w-full object-cover"
            />
            <img
              src="./second_image.jpg"
              alt=""
              className="2xl:w-full lg:h-[540px] h-[400px] w-[360px] object-cover second_image"
            />
            <Link href={""}>QUICK VIEW</Link>
          </div>
          <p className="mt-3 text-[16px] font-bold tracking-[5px]">ALYA</p>
          <p className="text-[10px] font-medium tracking-[2px] text-center">
            CUSTOM PRINT CORSET RUCHED MINI DRESS
          </p>
          <p className="text-[#908B8B] font-bold">{price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
