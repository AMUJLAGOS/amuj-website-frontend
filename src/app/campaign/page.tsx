/* eslint-disable @next/next/no-img-element */
//
import React from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Image from "next/image";

function Campaign() {
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <section className="flex flex-col items-center">
        <div className="relative h-[450px] sm:w-full w-[90%]">
          <Image
            src={"/campaign1.png"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <img src="/campaign1.png" alt="" /> */}
        <h1 className="font-extrabold tracking-[2px] mt-6">COLLECTION I</h1>
        <div className="mt-6">
          <Link
            href={""}
            className="tracking-[2px] bg-black text-white text-xs py-4 px-10"
          >
            SHOP COLLECTION
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center mt-14">
        <div className="relative h-[450px] sm:w-full w-[90%]">
          <Image
            src={"/campaign2.png"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <img src="/campaign2.png" alt="" /> */}
        <h1 className="font-extrabold tracking-[2px] mt-6">COLLECTION II</h1>
        <div className="mt-6">
          <Link
            href={""}
            className="tracking-[2px] bg-black text-white text-xs py-4 px-10"
          >
            SHOP COLLECTION
          </Link>
        </div>
      </section>
      <Spacer height={100} />
      <Footer />
      <Spacer height={100} />
    </main>
  );
}

export default Campaign;
