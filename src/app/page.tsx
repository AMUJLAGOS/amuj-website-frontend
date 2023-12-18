/* eslint-disable @next/next/no-img-element */

//
"use client";

import Header from "@/components/Header";
import style from "../styles/HomePage.module.css";
import Link from "next/link";
import Spacer from "@/components/Spacer";
import ProductCard from "@/components/ProductCard";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import SocialImage from "@/components/SocialImage";
import Footer from "@/components/Footer";
import { GoArrowRight } from "react-icons/go";
import Cart from "@/components/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailCard from "@/components/ProductDetailCard";
import { GetRequest } from "@/utils/urlhandler";
import { allRoutes } from "@/utils/urlEnums";
import { Currency } from "@/utils/dataType";
import { useCurrency } from "@/components/CurrencyContext";

export default function Home() {
  const all = ["/collectionII_big.jpg", "/banner1.jpg"];
  const [newArrival, setNewArrival]: any = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    sizes: [],
    images: [],
    description: "",
    slug: "",
  });
  //
  //
  const { currency, setCurrency } = useCurrency();
  const getNewArrival = async () => {
    const response = await GetRequest(allRoutes.COLLECTION2);
    setNewArrival(response.data.products);
    console.log(response.data.products);
  };
  const showDetails = () => {
    setShowProduct(true);
    console.log(productDetails);
  };
  useEffect(() => {
    getNewArrival();
    const getCart = localStorage.getItem("amujCart");
    if (!getCart) {
      localStorage.setItem("amujCart", JSON.stringify([]));
    }
    const getCurrency = localStorage.getItem("amujCurrency");
    if (!getCurrency) {
      const newCurrency: Currency = {
        name: "naira",
        code: "NGN",
        symbol: "₦",
      };
      localStorage.setItem("amujCurrency", JSON.stringify(newCurrency));
    }
  }, []);

  return (
    <main className="box-border overflow-hidden">
      <Header home={"Yes"} />
      {showProduct && (
        <ProductDetailCard
          productData={productDetails}
          hideProduct={setShowProduct}
        />
      )}
      {/* <ProductDetailCard hideProduct={setShowProduct} /> */}
      <section className="flex absolute items-center  m-auto w-full top-0">
        {/* banner 1  */}
        <div
          className={`${style.banner} relative items-center justify-center sm:flex hidden`}
        >
          <img src="/banner1.jpg" alt="collection i image" />
          <div
            className={`absolute text-white flex flex-col items-center ${style.bannerText}`}
          >
            <h1 className=" text-4xl">COLLECTION I</h1>
            <Link
              href={"/shop/campaigns/collection-i"}
              className="text-lg underline"
            >
              Shop now
            </Link>
          </div>
        </div>
        {/* banner 2  */}
        <div
          className={`${style.banner} relative sm:flex hidden items-center justify-center`}
        >
          <img src="/banner2.jpg" alt="collection ii image" />
          <div
            className={`absolute text-white flex flex-col items-center ${style.bannerText}`}
          >
            <h1 className=" text-4xl">COLLECTION II</h1>
            <Link
              href={"/shop/campaigns/collection-ii"}
              className="text-lg underline"
            >
              Shop now
            </Link>
          </div>
        </div>

        {/* mobile  */}
        <div className="sm:hidden block h-[600px] w-full">
          <img
            src="/second_image.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="flex justify-center">
            <img
              src="/amuj-logo.svg"
              alt="amuj logo"
              className="h-[50px] absolute bottom-9"
            />
          </div>
        </div>
      </section>
      <section className="sm:mt-[640px] mt-[530px]">
        {/* <section className=""> */}
        {/* <section className="sm:mt-[-160px] mt-[-280px]"> */}
        {/* destop  */}
        <div
          className={`w-full relative ${style.collectionii} sm:block hidden`}
        >
          {/* <p>dd</p> */}

          <img
            src="/collectionII_big.jpg"
            alt="collection2"
            className="h-[380px] w-full object-cover object-center"
          />
          <div className="text-white absolute bottom-10 left-24">
            <p className="text-[12px] space-x-2 tracking-[5px]">
              NEWEST CAMPAIGN
            </p>
            <h1 className="text-[30px] tracking-[5px]">COLLECTION II</h1>
          </div>
        </div>
        {/* mobile  */}
        <div className="sm:hidden flex flex-col justify-center items-center">
          <div className="flex items-center">
            <h1 className="mr-3">CAMPAIGNS</h1>
            <GoArrowRight />
          </div>
          {/* collection  1  */}
          <div className="relative w-full flex justify-center items-center mt-[20px]">
            <img
              src="/banner1.jpg"
              alt="collection i image "
              className="h-[380px] w-full object-cover"
            />
            <div className="absolute flex flex-col items-center">
              <h1 className="text-[23px] text-white">COLLECTION I</h1>
              <button className="bg-[#ffffffb4] text-[15px] py-1 px-4 mt-2">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* collection  2  */}
          <div className="relative w-full flex justify-center items-center">
            <img
              src="/video.jpg"
              alt="collection i image "
              className="h-[380px] w-full object-cover"
            />
            <div className="absolute flex flex-col items-center">
              <h1 className="text-[23px] text-white">COLLECTION II</h1>
              <button className="bg-[#ffffffb4] text-[15px] py-1 px-4 mt-2">
                SHOP NOW
              </button>
            </div>
          </div>
          <div>
            <h1 className="tracking-[1px] py-4">COLLECTION II</h1>
          </div>
        </div>
      </section>
      {/* <Spacer height={10} /> */}
      <section className="3xl:w-[1700px] 2xl:w-[1500] w-full mt-[-16px] m-auto">
        <div className="md:flex block">
          {/* <ProductCard /> */}
          {newArrival.slice(0, 4).map((all: any, index: any) => (
            <div key={index}>
              <ProductCard
                name={all.name}
                image={all.images[0]}
                hImage={all.images[1]}
                description={all.mini_description}
                slug={all.slug}
                showProduct={showDetails}
                sizes={all.sizes}
                images={all.images}
                naira_price={all.naira_price}
                euro_price={all.euro_price}
                pounds_price={all.pounds_price}
                dollar_price={all.dollar_price}
                pData={setProductDetails}
                des_full={all.description}
                requires_length={all.requires_length}
              />
            </div>
          ))}
        </div>
        <div className="md:flex block lg:mt-[20px] mt-[0px]">
          {newArrival.slice(3, 5).map((all: any, index: any) => (
            <div key={index}>
              <ProductCard
                name={all.name}
                image={all.images[0]}
                hImage={all.images[1]}
                description={all.mini_description}
                slug={all.slug}
                showProduct={showDetails}
                sizes={all.sizes}
                images={all.images}
                naira_price={all.naira_price}
                euro_price={all.euro_price}
                pounds_price={all.pounds_price}
                dollar_price={all.dollar_price}
                pData={setProductDetails}
                des_full={all.description}
                requires_length={all.requires_length}
              />
            </div>
          ))}
          <div className="w-[50%] md:block hidden mt-4">
            <img
              src="/video.jpg"
              alt=""
              className="w-[100%] lg:h-[540px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* <Spacer height={80} /> */}
      <section className="lg:mt-[40px] mt-4">
        <div className="w-full relative">
          {/* <p>dd</p> */}
          <Slide arrows={false} indicators={true} duration={2000}>
            <div className="w-full">
              <img
                src="/bigslider.jpg"
                alt="collection2"
                className="h-[380px] w-full object-cover object-center"
              />
            </div>
            <div className="w-full">
              <img
                src="/video.jpg"
                alt="collection2"
                className="h-[380px] w-full object-cover object-center"
              />
            </div>

            <div className="w-full">
              <img
                src="/video.jpg"
                alt="collection2"
                className="h-[380px] w-full object-cover object-center"
              />
            </div>
          </Slide>
        </div>
      </section>
      <Spacer height={20} />
      <section>
        <div>
          <h1 className="text-[10px] tracking-[1px] text-center">
            TAG @AMUJOFFICIAL TO BE FEATURED ON OUR INSTAGRAM
          </h1>
          <Spacer height={20} />
          <div className="flex flex-wrap 3xl:w-[1700px] 2xl:w-[1500] xl:w-[1280px] w-[90%] justify-between m-auto">
            <SocialImage />
            <SocialImage />
            <SocialImage />
            <SocialImage />
          </div>
        </div>
      </section>

      <Spacer height={100} />
      <Footer />
      <Spacer height={100} />
      {/* <Slide
        arrows={false}
        indicators={true}
        autoplay={true}
        canSwipe={true}
        duration={1000}
      >
        {all.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </Slide> */}
    </main>
  );
}
