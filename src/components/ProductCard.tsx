/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { imageServer } from "@/utils/urlhandler";

function ProductCard({
  naira_price,
  euro_price,
  pounds_price,
  dollar_price,
  slug,
  name,
  description,
  image,
  hImage,
  showProduct,
  pData,
  sizes,
  lengths,
  images,
  des_full,
  requires_length,
  custom,
}: any) {
  //
  //
  const setProductDataHandler = (
    name: any,
    naira_price: any,
    euro_price: any,
    pounds_price: any,
    dollar_price: any,
    sizes: any,
    images: any,
    description: any,
    slug: any,
    requires_length: any,
    custom: any,
    lengths: any
  ) => {
    pData({
      name: name,
      naira_price,
      euro_price,
      pounds_price,
      dollar_price,
      sizes: sizes,
      images: images,
      description: description,
      slug: slug,
      requires_length,
      custom,
      lengths,
    });
    showProduct();
  };
  return (
    <div className="2xl:w-[25%] w-full mt-4">
      <section className="flex items-center flex-col">
        <div className="conn">
          <Link href={`/shop/product/${slug}`}>
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
                src={`${imageServer}${image}`}
                alt=""
                className="first_image 2xl:w-full lg:h-[540px] h-[400px] md:w-[360px] w-full object-cover"
              />
              <img
                src={`${imageServer}${hImage}`}
                alt=""
                className="2xl:w-full lg:h-[540px] h-[400px] w-[360px] object-cover second_image"
              />
            </div>
          </Link>
          <button
            onClick={() =>
              setProductDataHandler(
                name,
                naira_price,
                euro_price,
                pounds_price,
                dollar_price,
                sizes,
                images,
                des_full,
                slug,
                requires_length,
                custom,
                lengths
              )
            }
            className="md:block hidden"
          >
            QUICK VIEW
          </button>
        </div>
        <p className="mt-3 text-[16px] font-bold tracking-[0px] uppercase">
          {name}
        </p>
        <p className="text-[10px] font-medium tracking-[2px] text-center uppercase">
          {description} {requires_length}
        </p>
        {/* <p className="text-[#908B8B] font-bold">{price}</p> */}
      </section>
    </div>
  );
}

export default ProductCard;
