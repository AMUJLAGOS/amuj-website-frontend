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

export default function Home() {
  const all = ["/collectionII_big.jpg", "/banner1.jpg"];
  return (
    <main>
      <Header />
      <section className="absolute flex items-center w-full top-0">
        {/* banner 1  */}
        <div
          className={`${style.banner} relative flex items-center justify-center`}
        >
          <img src="/banner1.jpg" alt="collection i image" />
          <div
            className={`absolute text-white flex flex-col items-center ${style.bannerText}`}
          >
            <h1 className=" text-4xl">COLLECTION I</h1>
            <Link href={""} className="text-lg underline">
              Shop now
            </Link>
          </div>
        </div>
        {/* banner 2  */}
        <div
          className={`${style.banner} relative flex items-center justify-center`}
        >
          <img src="/banner1.jpg" alt="collection ii image" />
          <div
            className={`absolute text-white flex flex-col items-center ${style.bannerText}`}
          >
            <h1 className=" text-4xl">COLLECTION II</h1>
            <Link href={""} className="text-lg underline">
              Shop now
            </Link>
          </div>
        </div>
      </section>
      <Spacer height={650} />
      <section>
        <div className={`w-full relative ${style.collectionii}`}>
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
      </section>
      <Spacer height={10} />
      <section>
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Spacer height={80} />
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <div className="w-[50%]">
            <img
              src="/video.jpg"
              alt=""
              className="w-[100%] h-[540px] object-cover"
            />
          </div>
        </div>
      </section>
      <Spacer height={80} />
      <section>
        <div className="w-full relative">
          {/* <p>dd</p> */}
          <img
            src="/bigslider.jpg"
            alt="collection2"
            className="h-[380px] w-full object-cover object-center"
          />
        </div>
      </section>
      <Spacer height={20} />
      <section>
        <div>
          <h1 className="text-[10px] tracking-[1px] text-center">
            TAG @AMUJOFFICIAL TO BE FEATURED ON OUR INSTAGRAM
          </h1>
          <Spacer height={20} />
          <div className="flex flex-wrap">
            <SocialImage />
            <SocialImage />
            <SocialImage />
            <SocialImage />
          </div>
        </div>
      </section>

      <Spacer height={650} />
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
