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
import { useEffect, useState } from "react";
import ProductDetailCard from "@/components/ProductDetailCard";
import { GetRequest } from "@/utils/urlhandler";
import { allRoutes } from "@/utils/urlEnums";
import { useCurrency } from "@/components/CurrencyContext";

export default function Home() {
  const all = ["/collectionII_big.jpg", "/banner1.jpg"];
  const [newArrival, setNewArrival]: any = useState([]);
  const [ig_image, setIgImage]: any = useState([]);
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

  const getNewArrival = async () => {
    const response = await GetRequest(allRoutes.HOME_PRODUCTS);
    // console.log(response);
    setNewArrival(response.data);
  };

  const getIgImage = async () => {
    const response = await GetRequest(allRoutes.IG_IMAGE);
    setIgImage(response.data);
  };

  useEffect(() => {
    getNewArrival();
    getIgImage();
  }, []);

  const showDetails = () => {
    setShowProduct(true);
    console.log(productDetails);
  };

  // useEffect(() => {
  //   if (arrange.length === 0 || arrange === undefined) {
  //     const filterProduct = ["alya", "aarya", "alora", "ava"];
  //     const filteredObjects = newArrival.filter((obj: any) =>
  //       filterProduct.includes(obj.slug)
  //     );
  //     const sortedFilteredObjects = filterProduct.map((slug) =>
  //       filteredObjects.find((obj: any) => obj.slug === slug)
  //     );
  //     setArranged(sortedFilteredObjects, () => {
  //       console.log(arrange); // Use arranged instead of arrange
  //     });
  //   }
  // }, [newArrival, arrange]);
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
      <section className="flex items-center m-auto w-full top-0">
        {/* banner 1  */}
        <div
          className={`${style.banner} items-center justify-center sm:flex hidden`}
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
          className={`${style.banner} sm:flex hidden items-center justify-center`}
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
        <div className="sm:hidden relative block h-[90vh] w-full">
          <img
            src="/mobile-banner.jpg"
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
      <section className="">
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
        <div className="sm:hidden block mt-5 ml-4">
          <div className="flex items-center">
            <h1 className="mr-3  mt-1 text-[10px] text-[#262626]">NEW IN</h1>
            <GoArrowRight color={"#262626"} className="text-sm" />
          </div>

          <div className="flex items-center text-left">
            <h1 className="mr-3 mt-1 text-[10px] text-[#262626]">CAMPAIGNS</h1>
            <GoArrowRight color={"#262626"} className="text-sm" />
          </div>
        </div>
        {/* collection  1  */}
        <div className="sm:hidden mt-4 flex flex-col justify-center items-center">
          <div className="relative w-full flex justify-center items-center mt-[20px]">
            <img
              src="/banner1.jpg"
              alt="collection i image "
              className="h-[380px] w-full object-cover"
            />
            <div className="absolute flex flex-col items-center">
              <h1 className="text-[20px] text-white">COLLECTION I</h1>
              <button className="bg-[#ffffffb4] text-[12px] py-1 px-4 mt-2">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* collection  2  */}
          <div className="relative w-full flex justify-center items-center">
            <img
              src="/shop_nav.jpg"
              alt="collection i image "
              className="h-[380px] w-full object-cover"
            />
            <div className="absolute flex flex-col items-center">
              <h1 className="text-[20px] text-white">COLLECTION II</h1>
              <button className="bg-[#ffffffb4] text-[12px] py-1 px-4 mt-2">
                SHOP NOW
              </button>
            </div>
          </div>
          <div>
            <h1 className="tracking-[1px] py-10 font-bold">COLLECTION II</h1>
          </div>
        </div>
      </section>
      {/* <Spacer height={10} /> */}
      <section className="3xl:w-[1700px] 2xl:w-[1500] w-full mt-[-32px] m-auto">
        <div className="md:flex block w-full">
          {/* <ProductCard /> */}
          {newArrival?.slice(0, 4).map((all: any, index: any) => (
            <div key={index}>
              <ProductCard
                name={all.name}
                image={all.campaignImages[0]}
                hImage={all.images[1]}
                description={all.mini_description}
                slug={all.slug}
                showProduct={showDetails}
                sizes={all.sizes}
                lengths={all.lengths}
                images={all.images}
                naira_price={all.naira_price}
                euro_price={all.euro_price}
                pounds_price={all.pounds_price}
                dollar_price={all.dollar_price}
                pData={setProductDetails}
                des_full={all.description}
                requires_length={all.requires_length}
                custom={all.custom}
              />
            </div>
          ))}
        </div>
        <div className="md:flex block lg:mt-[20px] mt-[0px]">
          {newArrival?.slice(4, 6).map((all: any, index: any) => (
            <div key={index}>
              <ProductCard
                name={all.name}
                image={all.campaignImages[0]}
                hImage={all.images[1]}
                description={all.mini_description}
                slug={all.slug}
                showProduct={showDetails}
                sizes={all.sizes}
                lengths={all.lengths}
                images={all.images}
                naira_price={all.naira_price}
                euro_price={all.euro_price}
                pounds_price={all.pounds_price}
                dollar_price={all.dollar_price}
                pData={setProductDetails}
                des_full={all.description}
                requires_length={all.requires_length}
                custom={all.custom}
              />
            </div>
          ))}
          <div className="w-[50%] md:block hidden mt-8">
            <img
              src="/video.jpg"
              alt=""
              className="w-[100%] lg:h-[540px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* <Spacer height={80} /> */}
      <section className="lg:mt-[40px] mt-8">
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
                src="/slider-2.jpg"
                alt="collection2"
                className="h-[380px] w-full object-cover object-center"
              />
            </div>

            <div className="w-full">
              <img
                src="/slider-3.jpg"
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
          <div className="socilMedia 3xl:w-[1700px] 2xl:w-[1500] w-full m-auto">
            {ig_image?.map((obj: any, index: any) => (
              <SocialImage key={index} image={obj.image} />
            ))}
            {/* <SocialImage />
            <SocialImage />
            <SocialImage />
            <SocialImage /> */}
          </div>
        </div>
      </section>
      <Footer />
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
