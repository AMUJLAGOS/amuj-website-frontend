/* eslint-disable @next/next/no-img-element */
//

"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Image from "next/image";
import { GetRequest, imageServer } from "@/utils/urlhandler";

function Campaign() {
  const [collection1Img, setCollection1Img] = useState("");
  const [collection2Img, setCollection2Img] = useState("");
  const getImage = async () => {
    const response1 = await GetRequest(`collection-i/campaigns`);
    const response2 = await GetRequest(`collection-ii/campaigns`);
    // console.log(response.data.campaigns);
    setCollection1Img(response1.data?.campaigns[0]);
    setCollection2Img(response2.data?.campaigns[0]);
  };

  useEffect(() => {
    getImage();
  }, []);
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <section className="flex flex-col items-center">
        {/* <div className="relative h-[550px] sm:w-full w-[90%]">
          <Image
            src={"/campaign1.png"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        <Link href={"/campaign/collection-i"} className="w-full">
          <div className="w-full">
            <img
              src={`${imageServer}${collection1Img}`}
              className="object-cover h-[90vh] w-full"
              alt=""
            />
          </div>
        </Link>

        {/* <img src="/campaign1.png" alt="" /> */}
        <h1 className="font-extrabold tracking-[2px] mt-6">COLLECTION I</h1>
        <div className="mt-6">
          <Link
            href={"/shop/campaigns/collection-i"}
            className="tracking-[2px] bg-black text-white text-xs py-4 px-10"
          >
            SHOP COLLECTION
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center mt-14">
        {/* <div className="relative h-[550px] sm:w-full w-[90%]">
          <Image
            src={"/campaign2.png"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        <Link href={"/campaign/collection-ii"} className="w-full">
          <div className="w-full">
            <img
              src={`${imageServer}${collection2Img}`}
              className="object-cover h-[90vh] w-full"
              alt=""
            />
          </div>
        </Link>
        {/* <img src="/campaign2.png" alt="" /> */}
        <h1 className="font-extrabold tracking-[2px] mt-6">COLLECTION II</h1>
        <div className="mt-6">
          <Link
            href={"/shop/campaigns/collection-ii"}
            className="tracking-[2px] bg-black text-white text-xs py-4 px-10"
          >
            SHOP COLLECTION
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Campaign;
