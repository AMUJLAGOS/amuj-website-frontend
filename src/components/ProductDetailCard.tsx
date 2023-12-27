//
"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { numberWithCommas } from "@/utils/functionHelper";
import { toast } from "react-toastify";
import { useCart } from "./CartContext";
import { useCurrency } from "./CurrencyContext";
import { AddCart } from "@/utils/dataType";
import "react-slideshow-image/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { imageServer } from "@/utils/urlhandler";

function ProductDetailCard({ productData, hideProduct }: any) {
  const [current, setCurrent] = useState(0);
  const { cart, setCart } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [size, setSize]: any = useState("");
  const [length, setLength]: any = useState("");
  const { currency, setCurrency } = useCurrency();
  const properties = {
    prevArrow: (
      <button className="ml-5 text-2xl text-[#F0F0F0]">
        <MdOutlineArrowBackIos />
      </button>
    ),
    nextArrow: (
      <button className="mr-5 text-2xl text-[#F0F0F0]">
        <MdOutlineArrowForwardIos />
      </button>
    ),
  };

  const indicators = (index: any) => (
    <div className="mt-[-50px] !z-[1000]">
      <div
        className={`w-7 h-[2px] ${
          index == current ? "bg-[#D9D9D9]" : "bg-[#b1aaaa6c]"
        }  mr-1`}
      ></div>
    </div>
  );
  const newCart: AddCart = {
    name: productData?.name,
    image: productData?.images[0],
    slug: `${productData?.name}${size}`,
    size: size,
    length: productData?.requires_length ? length : "-",
    naira_price: productData?.naira_price,
    dollar_price: productData?.dollar_price,
    euro_price: productData?.euro_price,
    pounds_price: productData?.pounds_price,
    quantity: quantity,
  };

  const minus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    console.log("here");
  };

  const add = () => {
    if (quantity < 2) {
      setQuantity(quantity + 1);
    }
  };
  const addCart = () => {
    const getCart: any = localStorage.getItem("amujCart");
    const parseCart: any = JSON.parse(getCart);
    const check: any = parseCart.find(
      (obj: any) => obj["slug"] === newCart["slug"]
    );
    console.log(check);
    if (check !== undefined) {
      if (check["size"] === newCart["size"]) {
        const updatedCart = parseCart.map((obj: any) =>
          obj["slug"] === newCart["slug"]
            ? { ...obj, quantity: obj["quantity"] + newCart["quantity"] }
            : obj
        );
        localStorage.setItem("amujCart", JSON.stringify(updatedCart));
        setCart(updatedCart);
      } else {
        const updatedCart = [...parseCart, newCart];
        localStorage.setItem("amujCart", JSON.stringify(updatedCart));
        setCart(updatedCart);
      }
    } else {
      const updatedCart = [...parseCart, newCart];
      localStorage.setItem("amujCart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
    toast.success("Added to cart", { position: "top-center" });
  };

  return (
    <main className="bg-[#0000004a] w-full h-full fixed top-0 z-[150] flex items-center justify-center box-border overflow-hidden">
      <section className="bg-white flex items-center pt-5 px-5 justify-center w-[900px] relative">
        <div className="lg:w-[400px] tablet:w-[300px] w-full ">
          <button
            onClick={() => hideProduct(false)}
            className="absolute top-5 right-6"
          >
            <RxCross2 size={30} />
          </button>
          <Slide
            indicators={indicators}
            onChange={(oldIndex, newIndex) => {
              setCurrent(newIndex);
            }}
            duration={2000}
            {...properties}
          >
            {productData?.images.map((image: any, index: any) => (
              <div
                key={index}
                className="lg:h-[550px] h-[400px] w-full relative"
              >
                <Image
                  src={`${imageServer}${image}`}
                  alt={"ffff"}
                  layout="fill"
                  objectFit="cover"
                  quality={20}
                  priority={true}
                  loading="eager"
                />
              </div>
            ))}
          </Slide>
        </div>
        <div className="tablet:ml-10 tablet:w-[60%] w-[90%] m-auto">
          <div className="flex justify-between pb-4 tablet:w-[90%] w-full">
            <div className="w-[60%]">
              <h1 className="text-lg tracking-[2px] font-bold uppercase">
                {productData?.name}
                {/* Alya */}
              </h1>
              <h1 className="text-lg text-[#908B8B] font-medium">
                {currency?.symbol}
                {numberWithCommas(productData![`${currency?.name}_price`])}
              </h1>
            </div>

            <div className="">
              <Link
                href={"/size-chart"}
                className="border-b border-black text-sm mt-2"
              >
                Size Chart
              </Link>
            </div>
          </div>

          {!productData?.custom && (
            <div className="mt-4">
              <p className="text-sm">Select a size</p>
              <div className="relative tablet:w-[80%] w-full">
                <select
                  onChange={(e) => setSize(e.target.value)}
                  className="block appearance-none w-full outline-none !bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none"
                >
                  <option className="!bg-white text-[#908B8B]" value="">
                    Select a size
                  </option>
                  <option
                    disabled={!productData?.sizes.includes("4")}
                    className="!bg-white text-black"
                    value="4"
                  >
                    {productData?.sizes.includes("4") ? "4" : "4(out of stock)"}
                  </option>
                  <option
                    disabled={!productData?.sizes.includes("6")}
                    className="!bg-white text-black"
                    value="6"
                  >
                    {productData?.sizes.includes("6")
                      ? "6"
                      : "6 (out of stock)"}
                  </option>
                  <option
                    disabled={!productData?.sizes.includes("8")}
                    className="!bg-white text-black"
                    value="8"
                  >
                    {productData?.sizes.includes("8")
                      ? "8"
                      : "8 (out of stock)"}
                  </option>
                  <option
                    disabled={!productData?.sizes.includes("10")}
                    className="!bg-white text-black"
                    value="10"
                  >
                    {productData?.sizes.includes("10")
                      ? "10"
                      : "10 (out of stock)"}
                  </option>
                  <option
                    disabled={!productData?.sizes.includes("12")}
                    className="!bg-white text-black"
                    value="12"
                  >
                    {productData?.sizes.includes("12")
                      ? "12"
                      : "12 (out of stock)"}
                  </option>
                  <option
                    disabled={!productData?.sizes.includes("14")}
                    className="!bg-white text-black"
                    value="14"
                  >
                    {productData?.sizes.includes("14")
                      ? "14"
                      : "14 (out of stock)"}
                  </option>
                  <option
                    disabled={!productData?.sizes.includes("16")}
                    className="!bg-white text-black"
                    value="16"
                  >
                    {productData?.sizes.includes("16")
                      ? "16"
                      : "16 (out of stock)"}
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          )}

          {productData?.requires_length && (
            <div className="mt-4">
              <p className="text-sm">Length</p>
              <div className="relative tablet:w-[80%] w-full">
                <select
                  onChange={(e) => setLength(e.target.value)}
                  className="block appearance-none w-full outline-none !bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none"
                >
                  <option className="!bg-white text-[#908B8B]" value="">
                    Select a length
                  </option>
                  <option className="!bg-white text-[#908B8B]" value="Tall">
                    Tall
                  </option>
                  <option className="!bg-white text-[#908B8B]" value="Short">
                    Short
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          )}
          <div className="mt-5">
            {!productData?.custom && <p className="text-sm">Quantity</p>}
            {!productData?.custom && (
              <div className="flex items-center mt-2">
                <button
                  onClick={() => minus()}
                  className="border flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[40px] phone:w-[40px] h-[35px] w-[30px]"
                >
                  <AiOutlineMinus />
                </button>
                <button className="border flex justify-center items-center border-[#908B8B] ml-1 mr-1 phone:w-[50px] phone:h-[40px] h-[35px] w-[45px]">
                  {quantity}
                </button>
                <button
                  onClick={() => add()}
                  className="border  flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[40px] phone:w-[40px] h-[35px] w-[30px]"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            )}
            <div className=" tablet:w-[90%] w-full mt-4">
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: productData?.description }}
              />
            </div>

            <div className="mt-2 font-medium text-sm underline">
              <Link href={`/shop/product/${productData?.slug}`}>
                More Details
              </Link>
            </div>
            {!productData?.custom ? (
              <button
                disabled={
                  quantity == 0 ||
                  size == "" ||
                  (productData?.requires_length ? length == "" : false)
                }
                onClick={() => addCart()}
                className="bg-black disabled:bg-[#000000b3] disabled:cursor-not-allowed text-white text-xs tablet:w-auto w-full py-3 px-12 mt-5"
              >
                ADD TO CART
              </button>
            ) : (
              <div className="mt-5">
                <Link
                  className="bg-black text-white text-xs tablet:w-auto w-full py-3 px-12 mt-5"
                  href={"/custom-orders"}
                >
                  CUSTOM ORDER
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailCard;
