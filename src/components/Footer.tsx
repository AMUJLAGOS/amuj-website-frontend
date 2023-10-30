import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import styles from "../styles/HeaderFooter.module.css";
import Link from "next/link";

function Footer() {
  return (
    <main>
      <div className="xl:w-[1200px] w-[95%] m-auto tablet:flex block justify-between">
        <section className="tablet:w-[45%] w-[90%]">
          <h1 className="phone:text-[16px] text-[14px] font-black">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p className="text-[#676464] font-[300] phone:text-[17px] text-[14px] mt-3 tracking-[1px]">
            Be the first to hear about our exclusive releases and offers
          </p>
          {/* subcribe  */}
          <div className="flex items-center border-b border-black mt-10">
            <input
              type="text"
              placeholder="Email Address"
              className="input w-[600px] py-3"
            />
            <button className="border border-black p-2 rounded-full">
              <GrLinkNext size={"17"} className="" />
            </button>
          </div>
          <div className="mt-8 hidden tablet:flex justify-between">
            <div className="flex justify-between w-[130px]">
              <button className="border border-black p-1 rounded-full">
                <GrTwitter size={20} />
              </button>
              <button className="border border-black p-1 rounded-full">
                <FaFacebookF size={20} />
              </button>
              <button className="border border-black p-1 rounded-full">
                <PiInstagramLogo size={20} />
              </button>
            </div>
            <div className="flex">
              <span>&copy;</span>
              <h1 className="font-black text-[16px] ml-2 tracking-[2px]">
                2023 Amuj Official
              </h1>
            </div>
          </div>
        </section>
        <section className="tablet:w-[45%] w-[100%] phone:flex block justify-between tablet:mt-0 mt-10">
          <div className="phone:w-[50%]">
            <div className="flex items-center">
              <h1 className="phone:text-[17px] text-[14px] font-bold">BRAND</h1>
              <div className="w-[90%] h-[1px] bg-[#67646421] ml-2"></div>
            </div>

            <div className="flex justify-between">
              <div className={`${styles.footer_link}`}>
                <Link href={""}>New In</Link>
                <Link href={""}>Custom</Link>
                <Link href={""}>Size Chart</Link>
              </div>
              <div className={`${styles.footer_link}`}>
                <Link href={""}>About Us</Link>
                <Link href={""}>Community</Link>
                <Link href={""}>FAQs</Link>
              </div>
            </div>
          </div>
          {/* policy  */}
          <div className="w-[35%] phone:mt-0 mt-6">
            <h1 className="phone:text-[17px] text-[14px] font-bold">
              POLICIES
            </h1>
            <div className="flex justify-between">
              <div className={`${styles.footer_link}`}>
                <Link href={""}>Privacy Policy</Link>
                <Link href={""}>Shipping Policy</Link>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-8 flex justify-between tablet:hidden w-[90%]">
          <div className="flex justify-between phone:w-[130px]">
            <button className="border border-black p-1 rounded-full phone:text-[20px]">
              <GrTwitter />
            </button>
            <button className="border border-black p-1 rounded-full phone:text-[20px]">
              <FaFacebookF />
            </button>
            <button className="border border-black p-1 rounded-full phone:text-[20px]">
              <PiInstagramLogo />
            </button>
          </div>
          <div className="flex items-center">
            <span>&copy;</span>
            <h1 className="font-black phone:text-[16px] text-[12px] ml-2 tracking-[2px]">
              2023 Amuj Official
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;
