//
"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import { FaCaretDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function ProductDetails() {
  const [showInfo, setShowInfo] = useState(false);
  const [current, setCurrent] = useState(0);

  const indicators = (index: any) => (
    <div className="mt-[-50px] !z-[1000]">
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
  return (
    <main className="box-border overflow-hidden">
      <Header />

      <section className="mt-10 flex w-[1200px] m-auto">
        <div className="w-[450px]">
          <Slide
            indicators={indicators}
            onChange={(oldIndex, newIndex) => {
              console.log(newIndex);
              setCurrent(newIndex);
            }}
            duration={2000}
            {...properties}
          >
            <div className="h-[550px] w-[450px] relative">
              <Image
                src={"/product.png"}
                alt={""}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="h-[550px] w-[450px] relative">
              <Image
                src={"/bigslider.jpg"}
                alt={""}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="h-[550px] w-[450px] relative">
              <Image
                src={"/video.jpg"}
                alt={""}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </Slide>
        </div>

        <div className="ml-20 w-[70%]">
          <div className="flex justify-between pb-4 border-b border-[#908b8bbe] w-[90%]">
            <div className="w-[30%]">
              <h1 className="text-2xl tracking-[2px] font-bold">ALYA</h1>
              <p className="font-medium leading-[17px] mt-2 w-[50px]">
                ggggsgsgsgsgsgsgsghjdjdjdjdjdjdjdjdjdjdjdjdjd
              </p>
            </div>
            <div className="flex flex-col items-end w-[30%]">
              <h1 className="text-2xl font-medium">₦62,500.00</h1>
              <Link href={""} className="border-b border-black text-sm mt-2">
                Size Chart
              </Link>
            </div>
          </div>
          <div className="w-[90%] mt-4">
            <p className="text-sm">
              Jumai launched AMUJ in July 2022. Her goal was simple: Establish a
              continuous-experimentation fashion company that leads in
              innovative designs, quality and value, but has sexiness,
              confidence and the celebration of women as its main medium.
              Jumai’s visionary approach to creativity remains radical{" "}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm">Select a size</p>
            <div className="relative w-[60%]">
              <select className="block appearance-none w-full outline-none !bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
                <option className="!bg-white text-black" value="option1">
                  Option 1
                </option>
                <option className="!bg-white text-black" value="option2">
                  Option 2
                </option>
                <option className="!bg-white text-black" value="option3">
                  Option 3
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <IoIosArrowDown />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm">Quantity</p>
            <div className="flex items-center mt-2">
              <button className="border p-3 border-[#908B8B] text-[#908B8B] h-[45px]">
                <AiOutlineMinus />
              </button>
              <button className="border p-5 border-[#908B8B] ml-1 mr-1 flex items-center h-[45px]">
                1
              </button>
              <button className="border p-3 border-[#908B8B] text-[#908B8B] h-[45px]">
                <AiOutlineMinus />
              </button>
              <p className="ml-14 font-semibold text-sm">PRICE: ₦62,500.00</p>
            </div>
            <p className="mt-5 text-sm">
              <span className="border-b border-black">
                <Link href={""}>Shipping</Link>
              </span>{" "}
              calculated at checkout
            </p>
            <button className="bg-black text-white text-xs py-3 px-12 mt-5">
              ADD TO CART
            </button>
          </div>
          <div className="mt-5">
            <div
              className="border-b border-t border-[#908B8B] py-2 cursor-pointer"
              onClick={() => setShowInfo(!showInfo)}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xs">PRODUCT AND CARE</h1>
                <div>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
              </div>
              {showInfo && <div>info</div>}
            </div>
            <div
              className="border-b border-[#908B8B] py-2 cursor-pointer"
              onClick={() => {}}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xs">SHIPPING AND RETURNS</h1>
                <MdNavigateNext />
              </div>
            </div>

            <div
              className="border-b border-[#908B8B] py-2 cursor-pointer"
              onClick={() => {}}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xs">FREQUENTLY ASKED QUESTIONS</h1>
                <MdNavigateNext />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Spacer height={140} />
      <Footer />
      <Spacer height={100} />
    </main>
  );
}

export default ProductDetails;
