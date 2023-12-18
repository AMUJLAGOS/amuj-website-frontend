/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "./CurrencyContext";
import { numberWithCommas } from "@/utils/functionHelper";
import ProductDetailCard from "./ProductDetailCard";

function ShopCard({
  naira_price,
  euro_price,
  pounds_price,
  dollar_price,
  name,
  slug,
  description,
  image,
  hImage,
  key,
  showProduct,
  pData,
  sizes,
  des_full,
  images,
  requires_length,
}: any) {
  //
  const { currency } = useCurrency();
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
    requires_length: any
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
    });
    showProduct(true);
  };

  return (
    <div className="mt-4" key={key}>
      <div className="flex items-center flex-col">
        <div className="shop_conn w-full">
          <Link href={`/shop/product/${slug}`}>
            <div className="shop w-full">
              {/* <div className="relative shop_image1 tablet:h-[540px] sm:h-[300px] h-[200px] object-cover">
                <Image
                  src={`http://127.0.0.1:8000${hImage}`}
                  alt={"product-image"}
                  objectFit="cover"
                  layout="fill"
                  className="shop_image1"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative shop_image2 tablet:h-[540px] sm:h-[300px] h-[200px] object-cover">
                <Image
                  src={`http://127.0.0.1:8000${image}`}
                  alt={"product-image"}
                  objectFit="cover"
                  layout="fill"
                  className="shop_image2"
                />
              </div> */}
              <img
                src={`http://127.0.0.1:8000${hImage}`}
                alt=""
                className="shop_image1 tablet:h-[540px] sm:h-[300px] h-[200px] object-cover"
              />
              <img
                src={`http://127.0.0.1:8000${image}`}
                alt=""
                className="shop_image2 tablet:h-[540px] sm:h-[300px] h-[200px] object-cover"
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
                requires_length
              )
            }
            className="md:block hidden"
          >
            QUICK VIEW
          </button>
        </div>
        <p className="mt-3 text-[15px] font-bold tracking-[1px] uppercase">
          {name}
        </p>
        <p className="text-[10px] font-medium tracking-[0px] text-center uppercase">
          {description}
        </p>
        <p className="text-[#908B8B] text-sm font-bold">
          {currency?.symbol}
          {currency?.name == "naira"
            ? numberWithCommas(naira_price)
            : currency?.name == "dollar"
            ? numberWithCommas(dollar_price)
            : currency?.name == "euro"
            ? numberWithCommas(euro_price)
            : numberWithCommas(pounds_price)}
        </p>
      </div>
    </div>
  );
}

export default ShopCard;
