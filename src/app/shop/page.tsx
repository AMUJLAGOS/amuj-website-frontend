import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Spacer from "@/components/Spacer";
import React from "react";

function Shop() {
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <h1 className="mt-14 font-extrabold text[20px] text-center">SHOP ALL</h1>
      <p className="mt-2 font-normal text[13px] text-center">
        Shop from all our collections
      </p>
      <section className="w-[97%] m-auto">
        <div>
          <h1 className="font-bold p-4 cursor-pointer">FILTER BY -</h1>
          <div className="border-t border-[#908b8b50]">
            <div className="text-xs font-bold flex p-4  w-[450px] justify-between">
              <h1>SHOP BY STYLE +</h1>
              <h1>COLOR+</h1>
              <h1>ORDER BY+</h1>
            </div>
          </div>
        </div>
        <div className="flexspace">
          <ProductCard price={"₦62,500.00"} />
          <ProductCard price={"₦62,500.00"} />
          <ProductCard price={"₦62,500.00"} />
          <ProductCard price={"₦62,500.00"} />
          <ProductCard price={"₦62,500.00"} />
          <ProductCard price={"₦62,500.00"} />
        </div>
      </section>
      <Spacer height={100} />
      <Footer />
      <Spacer height={100} />
    </main>
  );
}

export default Shop;
