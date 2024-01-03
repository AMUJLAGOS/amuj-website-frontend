/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCurrency } from "./CurrencyContext";
import { numberWithCommas } from "@/utils/functionHelper";
import { imageServer } from "@/utils/urlhandler";

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
  showProduct,
  pData,
  sizes,
  des_full,
  images,
  requires_length,
  custom,
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
    requires_length: any,
    custom: any
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
    });
    showProduct(true);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center flex-col">
        <div className="shop_conn w-full">
          <Link href={`/shop/product/${slug}`} className="w-full">
            <div className="shop w-full">
              <img
                src={`${imageServer}${hImage}`}
                alt={name}
                className="shop_image1 tablet:h-[540px] sm:h-[300px] h-[220px] object-cover"
              />
              <img
                src={`${imageServer}${image}`}
                alt={name}
                className="shop_image2 tablet:h-[540px] sm:h-[300px] h-[220px] object-cover"
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
                custom
              )
            }
            className="md:block hidden"
          >
            QUICK VIEW
          </button>
        </div>
        <p className="mt-3 phone:text-[13px] text-[11px] font-bold tracking-[1px] uppercase">
          {name}
        </p>
        <p className=" phone:text-[10px] text-[8px] phone:w-auto w-[140px] mt-1 font-light tracking-[1px] text-center uppercase">
          {description}
        </p>
        <p className="phone:text-sm text-xs mt-1">
          {currency?.symbol}
          {currency?.name == "naira"
            ? numberWithCommas(parseFloat(naira_price))
            : currency?.name == "dollar"
            ? numberWithCommas(parseFloat(dollar_price))
            : currency?.name == "euro"
            ? numberWithCommas(parseFloat(euro_price))
            : numberWithCommas(parseFloat(pounds_price))}
        </p>
      </div>
    </div>
  );
}

export default ShopCard;
