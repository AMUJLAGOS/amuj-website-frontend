//
"use client";
import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import styles from "../styles/HeaderFooter.module.css";
import Link from "next/link";
import { PostRequest } from "@/utils/urlhandler";
import { allRoutes } from "@/utils/urlEnums";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import { FaXTwitter } from "react-icons/fa6";
// import validator from "validator";

function Footer() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const data = {
    email,
  };
  const emailHandler = async () => {
    if (email != "") {
      setLoading(true);
      const response = await PostRequest(allRoutes.SUBSCRIBE, data);
      if (response.status == 201) {
        setEmail("");
        toast.success("Thank you for subscribing", { position: "top-center" });
        setLoading(false);
      } else if (response.status == 400) {
        toast.error("Subscriber already exist!", { position: "top-center" });
        setLoading(false);
      } else {
        toast.error("Something went wrong!", { position: "top-center" });
        setLoading(false);
      }
    } else {
      toast.error("Enter a valid email", { position: "top-center" });
    }
  };

  return (
    <main className="mt-32 mb-14">
      <ToastContainer />
      <div className="xl:w-[1200px] phone:w-[95%] w-[90%] m-auto tablet:flex block justify-between">
        <section className="tablet:w-[45%] w-[90%]">
          <h1 className="phone:text-[16px] tracking-[1px] text-[14px] font-black">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p className="text-[#676464] phone:text-[17px] text-[12px] mt-3 tracking-[0px]">
            Be the first to hear about our exclusive releases and offers
          </p>
          {/* subcribe  */}
          <div className="flex items-center border-b border-black mt-5">
            <input
              type="text"
              placeholder="Email Address"
              className="input email-i w-[600px] py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!loading ? (
              <button
                onClick={() => emailHandler()}
                className="border border-black phone:p-2 p-1 rounded-full"
              >
                <GrLinkNext size={"17"} className="" />
              </button>
            ) : (
              <Spinner />
            )}
          </div>
          <div className="mt-8 hidden tablet:flex justify-between">
            <div className="flex justify-between w-[130px]">
              <button className="border border-black p-1 rounded-full">
                <FaXTwitter size={20} />
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
              <h1 className="font-black text-[16px] ml-2 tracking-[0px]">
                2023 Amuj Official
              </h1>
            </div>
          </div>
        </section>
        <section className="tablet:w-[45%] w-[100%] phone:flex block justify-between tablet:mt-0 mt-10">
          <div className="phone:w-[50%]">
            <div className="flex items-center">
              <h1 className="phone:text-[17px] text-[14px] font-bold">BRAND</h1>
              {/* <div className="w-[90%] h-[1px] bg-[#67646421] ml-2"></div> */}
            </div>

            <div className="flex justify-between">
              <div className={`${styles.footer_link}`}>
                <Link href={"/new-in"}>New In</Link>
                <Link href={"/custom-orders"}>Custom</Link>
                <Link href={"/size-chart"}>Size Chart</Link>
              </div>
              <div className={`${styles.footer_link}`}>
                <Link href={"/brand"}>About Us</Link>
                <Link href={""}>Community</Link>
                <Link href={"/faqs"}>FAQs</Link>
              </div>
            </div>
          </div>
          {/* policy  */}
          <div className="w-[40%] phone:mt-0 mt-6">
            <h1 className="phone:text-[17px] text-[14px] font-bold">
              POLICIES
            </h1>
            <div className="flex justify-between">
              <div className={`${styles.footer_link}`}>
                <Link href={""}>Privacy Policy</Link>
                <Link href={"/shipping"}>Shipping Policy</Link>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-8 flex justify-between tablet:hidden w-[90%]">
          <div className="flex justify-between phone:w-[180px] w-[35%]">
            <button className="border border-black p-1 rounded-full phone:text-[20px]">
              <FaXTwitter />
            </button>
            <button className="border border-black p-1 rounded-full phone:text-[20px]">
              <FaFacebookF />
            </button>
            <button className="border border-black p-1 rounded-full phone:text-[20px]">
              <PiInstagramLogo />
            </button>
          </div>
          <div className="flex items-center">
            <h1 className="font-black phone:text-[16px] text-[12px] ml-2 tracking-[0px]"></h1>
          </div>
        </div>
      </div>

      <div className="text-[10px] text-center mt-5">
        Copyright <span>&copy;</span> 2023 AMUJ Official. All Rights Reserved
      </div>
    </main>
  );
}

export default Footer;
