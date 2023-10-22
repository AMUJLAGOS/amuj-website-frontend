/* eslint-disable @next/next/no-img-element */

//

import Header from "@/components/Header";
import style from "../styles/HomePage.module.css";
import Link from "next/link";
import Spacer from "@/components/Spacer";

export default function Home() {
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
        <div className="w-full relative">
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

      <div className="h-[540px] w-[360px]">
        <div className="flex items-center flex-col">
          <div className="product">
            <img
              src="./product_image.jpg"
              alt=""
              className="h-[540px] w-[360px] object-cover"
            />
            <div className="absolute top-0">
              <Link href={""}>QUICK VIEW</Link>
            </div>
          </div>
          <p className="mt-3 text-[16px] font-bold tracking-[5px]">ALYA</p>
          <p className="text-[10px] font-medium tracking-[2px] text-center">
            CUSTOM PRINT CORSET RUCHED MINI DRESS
          </p>
        </div>
      </div>

      <Spacer height={650} />
    </main>
  );
}
