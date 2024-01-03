//
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";
import styles from "../styles/HeaderFooter.module.css";
import { BsHandbag } from "react-icons/bs";
import { useCart } from "./CartContext";
import { numberWithCommas } from "@/utils/functionHelper";
import { useCurrency } from "./CurrencyContext";
import { Currency } from "@/utils/dataType";

function NavBar({ searchFunc, sideBarFunc, cartFunc, home }: any) {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [scrollShow, setScroll]: any = useState(false);
  // const [cart, setCart]: any = useState();
  const { cart, setCart } = useCart();
  const [cartLength, setCartLength] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const refShop: any = useRef();
  const refCurrency: any = useRef();
  const { currency, setCurrency } = useCurrency();

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

  // currency

  // cart

  useEffect(() => {
    const getCart: any = localStorage.getItem("amujCart");
    const parsedCart = JSON.parse(getCart);
    // setCart(JSON.parse(getCart));
    if (JSON.stringify(parsedCart) !== JSON.stringify(cart)) {
      setCart(parsedCart);
    }

    const allItems = cart?.reduce((sum: any, obj: any) => {
      return sum + obj.quantity;
    }, 0);
    setCartLength(allItems);
    const allAmount = cart?.reduce((sum: any, obj: any) => {
      return sum + parseFloat(obj[`${currency?.name}_price`]) * obj.quantity;
    }, 0);
    setCartAmount(allAmount);
  }, [cart, currency, setCart]);

  useEffect(() => {
    const getCurrency: any = localStorage.getItem("amujCurrency");
    const parsedCurrency = JSON.parse(getCurrency);
    if (JSON.stringify(parsedCurrency) != JSON.stringify(currency)) {
      setCurrency(JSON.parse(getCurrency));
    }
  });

  const changeCurrency = (name: any, code: any, symbol: any) => {
    const newCurrency: Currency = {
      name,
      code,
      symbol,
    };
    localStorage.setItem("amujCurrency", JSON.stringify(newCurrency));
    setCurrency(newCurrency);
  };

  const toggleVisible = () => {
    if (typeof window !== "undefined") {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 380) {
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
      className={`w-full top-0 text-[12px] ${
        scrollShow ? "fixed" : home ? "absolute" : ""
      } font-medium ${
        home
          ? "bg-gradient-to-b from-black to-[#00000000] text-white"
          : "bg-[white] text-black border-b border-[#908b8b26]"
      } `}
    >
      <nav className="">
        <section
          className={`${
            scrollShow ? "tablet:hidden block" : ""
          } flex justify-between items-center w-[90%] xl:w-[1200px] m-auto py-4`}
        >
          <div onClick={() => sideBarFunc()} className="tablet:hidden block">
            <VscMenu size={23} />
          </div>
          {/* the dropdown */}
          <div
            ref={refCurrency}
            className="cursor-pointer tablet:block hidden"
            onClick={() => setShowCurrency(!showCurrency)}
          >
            <div className="flex items-center relative px-1">
              <p>
                {currency?.code} ({currency?.symbol})
              </p>
              <IoIosArrowDown size={"18"} />
            </div>

            {showCurrency && (
              <div
                className={`bg-[#fff] z-50 absolute flex flex-col items-center text-[black] font-medium mt-3 shadow-lg ${styles.currency_drowpdown}`}
              >
                <li onClick={() => changeCurrency("naira", "NGN", "₦")}>
                  NGN ₦
                </li>
                <li onClick={() => changeCurrency("dollar", "USD", "$")}>
                  USD $
                </li>
                <li onClick={() => changeCurrency("pounds", "GBP", "£")}>
                  GBP £
                </li>
                <li onClick={() => changeCurrency("euro", "EUR", "€")}>
                  EUR €
                </li>
              </div>
            )}
          </div>

          {/* amuj logo  */}
          <div>
            <Link href={"/"}>
              <img
                src={`${home ? "/amuj-logo.svg" : "/amuj-logo-b.svg"} `}
                alt="amuj logo"
                className="phone:h-[40px] tablet:h-[50px] h-[20px] phone:ml-0 ml-7"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <p className="px-1 tablet:block hidden">{cartLength}</p>
            {/* <img
              src="/cart.svg"
              alt="cart"
              className="h-[25px] tablet:mr-0 mr-3"
              onClick={() => cartFunc()}
            /> */}
            <BsHandbag
              size={20}
              className="tablet:mr-0 mr-3 font-bold"
              onClick={() => cartFunc()}
            />
            <p className="px-3 tablet:block hidden">-</p>
            <p className="px-1 tablet:block hidden">{currency?.code}</p>

            <p className="px-[6px] tablet:block hidden">
              {currency?.symbol}
              {numberWithCommas(cartAmount)}
            </p>
            <div onClick={() => searchFunc()}>
              <RiSearch2Line size={"25"} />
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
                          <Link href={"/shop/category/dresses"}>DRESSES</Link>
                        </li>
                        <li>
                          <Link href={"/shop/category/tops"}>TOPS</Link>
                        </li>
                        <li>
                          <Link href={"/shop/category/bottoms"}>BOTTOMS</Link>
                        </li>
                        <li>
                          <Link href={"/shop/category/jumpsuits"}>
                            JUMPSUITS
                          </Link>
                        </li>
                        <li>
                          <Link href={"/shop/category/coords"}>COORDS</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3">
                      <h1>CAMPAIGNS</h1>
                      <ul>
                        <li>
                          <Link href={"/shop/campaigns/collection-i"}>
                            COLLECTION I
                          </Link>
                        </li>
                        <li>
                          <Link href={"/shop/campaigns/collection-ii"}>
                            COLLECTION II
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-[60%]">
                    <img
                      src="/shop_nav.jpg"
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
