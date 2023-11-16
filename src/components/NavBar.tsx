//
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";
import styles from "../styles/HeaderFooter.module.css";

function NavBar({ searchFunc, sideBarFunc, cartFunc, home }: any) {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [scrollShow, setScroll]: any = useState(false);

  const refShop: any = useRef();
  const refCurrency: any = useRef();

  useEffect(() => {
    const hideShop = (e: any) => {
      if (!refShop.current.contains(e.target)) {
        setShowShop(false);
      }
    };
    if (typeof window === "object") {
      document.addEventListener("mousedown", hideShop);
    }
    return () => {
      document.removeEventListener("mousedown", hideShop);
    };
  });

  useEffect(() => {
    const hideCurrency = (e: any) => {
      if (!refCurrency.current.contains(e.target)) {
        setShowCurrency(false);
      }
    };
    if (typeof window === "object") {
      document.addEventListener("mousedown", hideCurrency);
    }
    return () => {
      document.removeEventListener("mousedown", hideCurrency);
    };
  });

  const toggleVisible = () => {
    if (typeof window !== "undefined") {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 180) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  };
  // toggleVisible()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <header
      className={`w-full text-[12px] ${scrollShow ? "fixed" : ""} font-medium ${
        home
          ? "bg-gradient-to-b from-black to-[#00000000] text-white"
          : "bg-[white] text-black border-b border-[#908b8b26]"
      }  `}
    >
      <nav>
        <section
          className={`${
            scrollShow ? "hidden" : ""
          } flex justify-between items-center w-[90%] xl:w-[1200px] m-auto py-4`}
        >
          <div onClick={() => sideBarFunc()} className="tablet:hidden block">
            <VscMenu size={35} />
          </div>
          {/* the dropdown */}
          <div
            className="cursor-pointer tablet:block hidden"
            onClick={() => setShowCurrency(!showCurrency)}
          >
            <div ref={refCurrency} className="flex items-center relative px-1">
              <p>NGN ( ₦ )</p>
              <IoIosArrowDown size={"18"} />
            </div>

            {showCurrency && (
              <div
                className={`bg-[#fff] z-50 absolute flex flex-col items-center text-[black] font-medium mt-3 shadow-lg ${styles.currency_drowpdown}`}
              >
                <li>NGN ₦</li>
                <li>USD $</li>
                <li>GDP £</li>
                <li>EUR €</li>
              </div>
            )}
          </div>

          {/* amuj logo  */}
          <div>
            {/* <Image alt='amuj logo' src={'amuj-logo.png'} width={100} height={100}></Image> */}
            <Link href={"/"}>
              <img
                src={`${home ? "/amuj-logo.svg" : "amuj-logo-b.svg"} `}
                alt="amuj logo"
                className="phone:h-[50px] tablet:h-[60px] h-[35px]"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <p className="px-1 tablet:block hidden">0</p>
            <img
              src="/cart.svg"
              alt="cart"
              className="h-[25px] tablet:mr-0 mr-3"
              onClick={() => cartFunc()}
            />
            <p className="px-3 tablet:block hidden">-</p>
            <p className="px-1 tablet:block hidden">NGN</p>

            <p className="px-[6px] tablet:block hidden">₦0.00</p>
            <div onClick={() => searchFunc()}>
              <RiSearchLine size={"25"} />
            </div>
          </div>
        </section>
        <br />
        <section className="xl:w-[1000px] tablet:block w-[85%] m-auto hidden py-4">
          <ul className={`flex justify-between ${styles.nav_list}`}>
            <li>
              <Link
                href={"/new-in"}
                className={`${home ? "before:bg-white" : "before:bg-black"}`}
              >
                NEW IN
              </Link>
            </li>
            <li ref={refShop}>
              <Link
                href={""}
                onClick={() => setShowShop(!showShop)}
                className={`${home ? "before:bg-white" : "before:bg-black"}`}
              >
                SHOP
              </Link>
              {showShop && (
                <div
                  className={`w-[100%] left-0 top-[165px] text-[black] p-10 h-[400px] ${styles.shop_link}`}
                >
                  <div className="w-[30%] pl-10 flex justify-between">
                    <div className="p-3">
                      <h1>CLOTHING</h1>
                      <ul>
                        <li className="">
                          <Link href={"/shop"}> VIEW ALL</Link>
                        </li>
                        <li>
                          <Link href={""}>DRESSES</Link>
                        </li>
                        <li>
                          <Link href={""}>TOPS</Link>
                        </li>
                        <li>
                          <Link href={""}>BOTTOMS</Link>
                        </li>
                        <li>
                          <Link href={""}>JUMPSUITS</Link>
                        </li>
                        <li>
                          <Link href={""}>COORDS</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3">
                      <h1>CAMPAIGNS</h1>
                      <ul>
                        <li>
                          <Link href={""}>COLLECTION I</Link>
                        </li>
                        <li>
                          <Link href={""}> COLLECTION II</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-[60%]">
                    <img
                      src="shop_nav.jpg"
                      alt=""
                      className="h-[320px] w-full object-cover"
                    />
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                href={"/brand"}
                className={`${home ? "before:bg-white" : "before:bg-black"}`}
              >
                BRAND
              </Link>
            </li>
            <li>
              <Link
                href={"/campaign"}
                className={`${home ? "before:bg-white" : "before:bg-black"}`}
              >
                CAMPAIGN
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className={`${home ? "before:bg-white" : "before:bg-black"}`}
              >
                COMMUNITY
              </Link>
            </li>
            <li>
              <Link
                href={"/customer-care"}
                className={`${home ? "before:bg-white" : "before:bg-black"}`}
              >
                CUSTOMER CARE
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <nav></nav>
    </header>
  );
}

export default NavBar;
