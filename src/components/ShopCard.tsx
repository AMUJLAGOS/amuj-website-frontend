import React from "react";
import Image from "next/image";
import Link from "next/link";

function ShopCard({ price }: any) {
  return (
    <div className=" md:w-[360px] w-full mt-4">
      <Link href={"/product"}>
        <div className="flex items-center flex-col">
          <div className="product w-full">
            <div className="first_image tablet:h-[540px] sm:h-[300px] h-[200px] w-[45%] md:w-[25%] object-cover">
              <Image
                src={"/product_image.jpg"}
                alt={"product-image"}
                objectFit="cover"
                layout="fill"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="second_image tablet:h-[540px] sm:h-[300px] h-[200px] w-[45%] md:w-[25%] object-cover">
              <Image
                src={"/second_image.jpg"}
                alt={"product-image"}
                objectFit="cover"
                layout="fill"
              />
            </div>

            <Link href={""} className="lg:block hidden">
              QUICK VIEW
            </Link>
          </div>
          <p className="mt-3 text-[15px] font-bold tracking-[1px]">ALYA</p>
          <p className="text-[10px] font-medium tracking-[0px] text-center">
            CUSTOM PRINT CORSET RUCHED MINI DRESS
          </p>
          <p className="text-[#908B8B] text-sm font-bold">{price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ShopCard;
