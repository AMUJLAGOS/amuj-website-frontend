/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-danger-with-children */
//
"use client";
import Header from "@/components/Header";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import Footer from "@/components/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useParams } from "next/navigation";
import { GetRequest, imageServer } from "@/utils/urlhandler";
import { allRoutes } from "@/utils/urlEnums";
import { numberWithCommas } from "@/utils/functionHelper";
import { useCart } from "@/components/CartContext";
import { useCurrency } from "@/components/CurrencyContext";
import { AddCart } from "@/utils/dataType";
import { toast } from "sonner";
import Shipping from "./_components/Shipping";

type StateType = {
  length: any[];
  size: any[];
};

function ProductDetails() {
  const { slug } = useParams() as { slug: string };
  const [showInfo, setShowInfo] = useState(false);
  const [current, setCurrent] = useState(0);
  const [images, setImages]: any = useState();
  const [length, setLength]: any = useState("");
  const [productData, setProductData]: any = useState();
  const { currency } = useCurrency();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize]: any = useState("");
  const [showShipping, setShowShipping] = useState(false);
  const { setCart } = useCart();
  const [state, setState] = useState<StateType>({
    length: [],
    size: [],
  });

  // for slider
  const indicators = (index: any) => (
    <div className="mt-[-50px] z-10">
      <div
        className={`w-7 h-[2px] ${
          index == current ? "bg-[#D9D9D9]" : "bg-[#b1aaaa6c]"
        }  mr-1`}
      ></div>
    </div>
  );

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

  // data fecthing
  const getProduct = useCallback(async () => {
    try {
      const response = await GetRequest(`${allRoutes.PRODUCT}${slug}`);
      setProductData(response.data);
      setImages(response.data?.images);
    } catch (error) {
      // Handle error appropriately
      // console.error("Error fetching product:", error);
    }
  }, [slug]);

  const getLengths = async () => {
    const response = await GetRequest(`${allRoutes.LENGTHS}`);
    if (response.status === 200) {
      setState((state: any) => ({ ...state, length: response.data }));
    }
  };

  const getSizes = async () => {
    const response = await GetRequest(`${allRoutes.SIZES}`);
    if (response.status === 200) {
      setState((state: any) => ({ ...state, size: response.data }));
    }
  };

  useEffect(() => {
    getProduct();
    getSizes();
    getLengths();
  }, [getProduct]);

  // quantity math functions
  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const add = () => {
    if (quantity < 2) {
      setQuantity(quantity + 1);
    }
  };

  // cart
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

  const addCart = () => {
    const getCart: any = localStorage.getItem("amujCart");
    const parseCart: any = JSON.parse(getCart);
    const check: any = parseCart.find(
      (obj: any) => obj["slug"] === newCart["slug"]
    );
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
    toast.success("Added to cart", {
      position: "top-center",
    });
  };

  return (
    <main className="box-border overflow-hidden">
      <Header />
      <Shipping
        show={showShipping}
        showFunc={() => setShowShipping(!showShipping)}
      />
      <section className="phone:mt-10 tablet:flex block lg:justify-normal justify-between lg:w-[1020px] tablet:w-[90%] phone:w-[400px] w-full m-auto">
        {productData && (
          <div className="lg:w-[400px] z-0 tablet:w-[300px] w-full">
            <Slide
              indicators={indicators}
              onChange={(oldIndex, newIndex) => {
                setCurrent(newIndex);
              }}
              duration={10000}
              {...properties}
            >
              {images?.map((image: any, index: number) => (
                <div
                  key={index}
                  className="lg:h-[550px] h-[500px] w-full relative"
                >
                  <Image
                    src={`${imageServer}${image}`}
                    alt={productData?.name}
                    layout="fill"
                    objectFit="cover"
                    quality={20}
                    // priority={true}
                    loading="lazy"
                  />
                </div>
              ))}
            </Slide>
          </div>
        )}

        <div className="tablet:ml-10 tablet:w-[60%] phone:w-full w-[90%] m-auto">
          <div className="flex justify-between pb-4 border-b border-[#908b8bbe] tablet:w-[90%] w-full">
            <div className="w-[60%]">
              <h1 className="text-lg tracking-[2px] font-bold uppercase">
                {productData?.name}
              </h1>
              <p className="text-[10px] font-light uppercase mt-2">
                {productData?.mini_description}
              </p>
            </div>
            <div className="flex flex-col items-end w-[30%]">
              <h1 className="text-normal font-medium ">
                {currency?.symbol}
                {numberWithCommas(
                  productData
                    ? parseFloat(productData[`${currency?.name}_price`])
                    : 0
                )}
              </h1>
              <Link
                href={""}
                className="border-b border-black text-[10px] font-light mt-2"
              >
                Size Chart
              </Link>
            </div>
          </div>
          <div className=" tablet:w-[90%] w-full mt-4">
            <p
              className="text-xs leading-[20px]"
              dangerouslySetInnerHTML={{ __html: productData?.description }}
            />
          </div>

          {!productData?.custom && (
            <div className="mt-4">
              <p className="text-sm">Select a size</p>
              <div className="relative tablet:w-[80%] w-full">
                <select
                  onChange={(e) => setSize(e.target.value)}
                  className="block appearance-none w-full outline-none !bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none"
                >
                  <option className="!bg-white text-black text-sm" value="">
                    size
                  </option>
                  {state.size?.map((obj: any, index: number) => (
                    <option
                      key={index}
                      disabled={!productData?.sizes.includes(obj)}
                      className="!bg-white text-black"
                      value={obj}
                    >
                      {productData?.sizes.includes(obj)
                        ? obj
                        : `${obj} (out of stock)`}
                    </option>
                  ))}
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
                  {state.length.map((obj, index: number) => (
                    <option
                      key={index}
                      className="!bg-white text-[#908B8B]"
                      value="Tall"
                      disabled={!productData?.lengths?.includes(obj)}
                    >
                      {productData?.lengths?.includes(obj)
                        ? obj
                        : `${obj} (out of stock)`}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          )}

          {!productData?.custom ? (
            <div className="mt-5">
              <p className="text-xs">Quantity</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => minus()}
                  className="border flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[45px] phone:w-[40px] h-[35px] w-[30px]"
                >
                  <AiOutlineMinus />
                </button>
                <div className="border text-sm flex justify-center items-center border-[#908B8B] ml-1 mr-1 phone:w-[55px] phone:h-[45px] h-[35px] w-[45px]">
                  {quantity}
                </div>
                <button
                  onClick={() => add()}
                  className="border  flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[45px] phone:w-[40px] h-[35px] w-[30px]"
                >
                  <AiOutlinePlus />
                </button>
                <p className="ml-14 font-semibold text-sm">
                  {currency?.symbol}
                  {numberWithCommas(
                    productData
                      ? productData[`${currency?.name}_price`] * quantity
                      : 0
                  )}
                </p>
              </div>
              <p className="mt-5 text-xs">
                <span className="border-b border-black">
                  <Link href={""}>Shipping</Link>
                </span>{" "}
                calculated at checkout
              </p>
              <button
                onClick={() => addCart()}
                disabled={
                  quantity == 0 ||
                  size == "" ||
                  (productData?.requires_length ? length == "" : false)
                }
                className="bg-black disabled:bg-[#000000b3] disabled:cursor-not-allowed text-white text-xs tablet:w-auto w-full py-3 px-12 mt-5"
              >
                ADD TO CART
              </button>
            </div>
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
          <div className="mt-5 tablet:w-[90%] w-full">
            <div
              className="border-b border-t border-[#908B8B] py-2 cursor-pointer"
              onClick={() => setShowInfo(!showInfo)}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xs">PRODUCT AND CARE</h1>
                <div>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
              </div>
              {showInfo && (
                <div
                  className="text-xs leading-[25px] mt-3"
                  dangerouslySetInnerHTML={{ __html: productData?.details }}
                ></div>
              )}
            </div>
            {/* <Link href={"/shipping"}> */}
            <div
              className="border-b border-[#908B8B] py-2 cursor-pointer"
              onClick={() => setShowShipping(true)}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xs">SHIPPING AND RETURNS</h1>
                <MdNavigateNext />
              </div>
            </div>
            {/* </Link> */}
            <Link href={"/faqs"}>
              <div
                className="border-b border-[#908B8B] py-2 cursor-pointer"
                onClick={() => {}}
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-xs">FREQUENTLY ASKED QUESTIONS</h1>
                  <MdNavigateNext />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ProductDetails;
