//

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/HeaderFooter.module.css";
import { RxCross2 } from "react-icons/rx";

function SideBar({ showFunc, show }: any) {
  const [showShopOpts, setShowShopOpts] = useState(false);
  const [showCampaignOpts, setShowCampaignOpts] = useState(false);
  const [showBrandOpts, setShowBrandOpts] = useState(false);
  const [showCurrencyOpts, setCurrencyOpts] = useState(false);
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
          <Link href={""}>NEW IN</Link>
        </li>
        <li>
          <div
            className="flex items-center justify-between "
            onClick={() => setShowShopOpts(!showShopOpts)}
          >
            <Link href={""}>SHOP</Link>
            {!showShopOpts ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>
          {showShopOpts && (
            <div className={`${styles.sidebarOptions}`}>
              <li>
                <Link href={""}>VIEW ALL</Link>
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
            </div>
          )}
        </li>
        <li>
          <div
            className="flex items-center justify-between"
            onClick={() => setShowCampaignOpts(!showCampaignOpts)}
          >
            <Link href={""}>CAMPAIGNS</Link>
            {!showCampaignOpts ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>

          {showCampaignOpts && (
            <div className={`${styles.sidebarOptions}`}>
              <li>
                <Link href={""}>COLLECTION I</Link>
              </li>
              <li>
                <Link href={""}>COLLECTION II</Link>
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
                <Link href={""}>ABOUT US</Link>
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
            className="flex items-center justify-between"
            onClick={() => setCurrencyOpts(!showCurrencyOpts)}
          >
            <Link href={""}>CURRENCY</Link>
            {!showCurrencyOpts ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>
          {showCurrencyOpts && (
            <div className={`${styles.sidebarOptions}`}>
              <li>NGN ₦</li>
              <li>USD $</li>
              <li>GDP £</li>
              <li>EUR €</li>
            </div>
          )}
        </li>
        <li className="flex items-center justify-between">
          <Link href={""}>CUSTOMER CARE</Link>
          {/* <AiOutlinePlus /> */}
        </li>
        <li className="flex items-center justify-between">
          <Link href={""}>SIZE GUDE</Link>
          {/* <AiOutlinePlus /> */}
        </li>
        <li className="flex items-center justify-between">
          <Link href={""}>CUSTOM ORDER</Link>
          {/* <AiOutlinePlus /> */}
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
