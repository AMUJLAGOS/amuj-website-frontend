//
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import styles from "../styles/HeaderFooter.module.css";

function NavBar({ searchFunc }: any) {
  const [showCurrency, setShowCurrency] = useState(false);

  const showCurrencyHandler = () => {
    setShowCurrency(!showCurrency);
    // console.log('called too')
  };
  const hideCurrencyHandler = () => {
    setShowCurrency(false);
  };

  return (
    <header className="text-[12px] font-medium text-white">
      <nav>
        <section className="flex justify-between items-center w-[1200px] m-auto  py-4">
          {/* the dropdown */}
          <div className="cursor-pointer" onClick={() => showCurrencyHandler()}>
            <div className="flex items-center relative px-1">
              <p>NGN ( ₦ )</p>
              <IoIosArrowDown size={"18"} />
            </div>

            {showCurrency && (
              <div
                className={`bg-[#fff] absolute flex flex-col items-center text-[black] font-medium mt-3 shadow-lg ${styles.currency_drowpdown}`}
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
            <img src="/amuj-logo.svg" alt="amuj logo" className="h-[60px]" />
          </div>
          <div className="flex items-center">
            <p className="px-1">0</p>
            <img src="/cart.svg" alt="cart" className="h-[25px]" />
            <p className="px-3">-</p>
            <p className="px-1">NGN</p>

            <p className="px-[6px]">₦0.00</p>
            <div onClick={() => searchFunc()}>
              <RiSearchLine size={"25"} />
            </div>
          </div>
        </section>
        <br />
        <section className="w-[1000px] m-auto  py-4">
          <ul className={`flex justify-between ${styles.nav_list}`}>
            <li>
              <Link href={""}>NEW IN</Link>
            </li>
            <li>
              <Link href={""}>SHOP</Link>
            </li>
            <li>
              <Link href={""}>BRAND</Link>
            </li>
            <li>
              <Link href={""}>CAMPAIGN</Link>
            </li>
            <li>
              <Link href={""}>COMMUNITY</Link>
            </li>
            <li>
              <Link href={""}>CUSTOMER CARE</Link>
            </li>
          </ul>
        </section>
      </nav>
      <nav></nav>
    </header>
  );
}

export default NavBar;
