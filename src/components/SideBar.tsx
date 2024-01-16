//

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/HeaderFooter.module.css";
import { RxCross2 } from "react-icons/rx";
import { Currency } from "@/utils/dataType";
import { useCurrency } from "./CurrencyContext";

function SideBar({ showFunc, show }: any) {
  const [showShopOpts, setShowShopOpts] = useState(false);
  const [showCampaignOpts, setShowCampaignOpts] = useState(false);
  const [showBrandOpts, setShowBrandOpts] = useState(false);
  const [showCurrencyOpts, setCurrencyOpts] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const changeCurrency = (name: any, code: any, symbol: any) => {
    const newCurrency: Currency = {
      name,
      code,
      symbol,
    };
    localStorage.setItem("amujCurrency", JSON.stringify(newCurrency));
    setCurrency(newCurrency);
  };
  return (
    <div
      className={` h-full overflow-scroll w-[300px] top-0 ${
        show ? "left-0" : "left-[-300px]"
      }  ${styles.sidebar}`}
    >
      <div
        onClick={() => showFunc()}
        className="absolute text-[18px] right-5 top-3 flex items-center border-[1.8px] border-black p-1 rounded-[50%]"
      >
        <RxCross2 />
      </div>
      <br />
      <ul>
        <li>
          <Link href={"/new-in"}>NEW IN</Link>
        </li>
        <li>
          <div
            className="flex mt-5 items-center justify-between "
            onClick={() => setShowShopOpts(!showShopOpts)}
          >
            <Link href={""}>SHOP</Link>
            {!showShopOpts ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>
          {showShopOpts && (
            <div className={`${styles.sidebarOptions}`}>
              <li>
                <Link href={"/shop"}>VIEW ALL</Link>
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
                <Link href={"/shop/category/jumpsuits"}>JUMPSUITS</Link>
              </li>
              <li>
                <Link href={"/shop/category/coords"}>COORDS</Link>
              </li>
            </div>
          )}
        </li>
        <li>
          <div
            className="flex items-center justify-between"
            onClick={() => setShowCampaignOpts(!showCampaignOpts)}
          >
            {/* <Link href={"/campaign"}>CAMPAIGNS</Link> */}
            <Link href={""}>CAMPAIGNS</Link>
            {!showCampaignOpts ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>

          {showCampaignOpts && (
            <div className={`${styles.sidebarOptions}`}>
              <li>
                <Link href={"/campaign/collection-ii"}>COLLECTION II</Link>
              </li>
              <li>
                <Link href={"/campaign/collection-i"}>COLLECTION I</Link>
              </li>
            </div>
          )}
        </li>
        <li>
          <div
            className="flex items-center justify-between"
            onClick={() => setShowBrandOpts(!showBrandOpts)}
          >
            <Link href={""}>BRAND</Link>
            {!showBrandOpts ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>
          {showBrandOpts && (
            <div className={`${styles.sidebarOptions}`}>
              <li>
                <Link href={"/brand"}>ABOUT US</Link>
              </li>
              <li>
                <Link href={""}>COMMUNITY</Link>
              </li>
              <li>
                <Link href={""}>POLICIES</Link>
              </li>
            </div>
          )}
        </li>
      </ul>
      <div className="border-b"></div>
      <ul>
        <li>
          <div
            className="flex items-center justify-between font-normal"
            onClick={() => setCurrencyOpts(!showCurrencyOpts)}
          >
            <Link href={""}>CURRENCY</Link>
            {!showCurrencyOpts ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>
          {showCurrencyOpts && (
            <div className={`${styles.sidebarOptions}`}>
              <li
                onClick={() => {
                  changeCurrency("naira", "NGN", "₦");
                  showFunc();
                }}
              >
                NGN ₦
              </li>
              <li
                onClick={() => {
                  changeCurrency("dollar", "USD", "$");
                  showFunc();
                }}
              >
                USD $
              </li>
              <li
                onClick={() => {
                  changeCurrency("pounds", "GDP", "£");
                  showFunc();
                }}
              >
                GDP £
              </li>
              <li
                onClick={() => {
                  changeCurrency("euro", "EUR", "€");
                  showFunc();
                }}
              >
                EUR €
              </li>
            </div>
          )}
        </li>
        <li className="flex items-center justify-between font-normal">
          <Link href={"/customer-care"}>CUSTOMER CARE</Link>
          {/* <AiOutlinePlus /> */}
        </li>
        <li className="flex items-center justify-between font-normal">
          <Link href={"/size-chart"}>SIZE GUIDE</Link>
          {/* <AiOutlinePlus /> */}
        </li>
        <li className="flex items-center justify-between font-normal">
          <Link href={"/custom-orders"}>CUSTOM</Link>
          {/* <AiOutlinePlus /> */}
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
