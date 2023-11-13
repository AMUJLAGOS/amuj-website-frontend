//
"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import SideBar from "./SideBar";
import Cart from "./Cart";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // for search
  const showSearchHandler = () => {
    setShowSearch(true);
  };

  const hideSearchHandler = () => {
    setShowSearch(false);
  };

  // for side bar
  const showSideBarHandler = () => {
    setShowSideBar(true);
  };

  const hideSideBarHandler = () => {
    setShowSideBar(false);
  };

  // for cart
  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showClass =
    "w-full z-[150] fixed right-0 bg-[#000000ad] h-[100%] top-0 ";

  return (
    <div className="z-[50] relative h-full ">
      <section className={`${showSearch ? showClass : ""}`}>
        <Search searchFunc={hideSearchHandler} show={showSearch} />
      </section>
      <NavBar
        searchFunc={showSearchHandler}
        sideBarFunc={showSideBarHandler}
        cartFunc={showCartHandler}
      />
      <section className={`${showSideBar ? showClass : ""}`}>
        <SideBar showFunc={hideSideBarHandler} show={showSideBar} />
      </section>
      <section className={`${showCart ? showClass : ""}`}>
        <Cart hideCart={hideCartHandler} show={showCart} />
      </section>
    </div>
  );
}

export default Header;
