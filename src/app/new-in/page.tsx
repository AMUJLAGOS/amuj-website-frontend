/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CheckHelper from "@/components/CheckHelper";
import { useCurrency } from "@/components/CurrencyContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductDetailCard from "@/components/ProductDetailCard";
import RadioHelper from "@/components/RadioHelper";
import ShopCard from "@/components/ShopCard";
import Spacer from "@/components/Spacer";
import { arraysEqual, sortByProperty } from "@/utils/functionHelper";
import { allRoutes } from "@/utils/urlEnums";
import { GetRequest } from "@/utils/urlhandler";
import React, { useEffect, useState } from "react";

function NewIn() {
  const [newIn, setNewIn]: any = useState();
  const [newInProducts, setNewInProducts]: any = useState();
  const [filterCategory, setFilterCategory] = useState("");
  const [filter, setFilter] = useState(["category", "color"]);
  const [filterByCategory, setByCategory] = useState<any>([]);
  const [filterByColor, setByColor] = useState<any>([]);
  const [filterByOrder, setByOrder] = useState<any>([]);
  const [filterBy, setFilterBy] = useState<any>([]);
  const [showFilter, setShowFilter] = useState(false);
  // const { currency } = useCurrency();
  const [showProduct, setShowProduct] = useState(false);
  const [filtered, setFiltered]: any = useState();
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    sizes: [],
    images: [],
    description: "",
    slug: "",
  });

  const getNewIn = async () => {
    const response = await GetRequest(allRoutes.COLLECTION2);
    setNewIn(response.data);
    setNewInProducts(response.data.products);
  };

  useEffect(() => {
    getNewIn();
  }, []);

  useEffect(() => {
    if (filterByCategory.length !== 0 && filterCategory === "category") {
      const filteredCategory = newInProducts.filter((obj: any) =>
        filterByCategory.includes(obj.category)
      );

      if (!arraysEqual(filtered, filteredCategory)) {
        setFiltered(filteredCategory);
      }
    } else if (filterByColor.length !== 0 && filterCategory === "colors") {
      const filteredColor = filtered.filter((obj: any) =>
        filterByColor.includes(obj.color)
      );

      if (!arraysEqual(filtered, filteredColor)) {
        setFiltered(filteredColor);
      }
    } else if (filterCategory === "order by") {
      const sortedObjects = [...filtered].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      if (!arraysEqual(filtered, sortedObjects)) {
        setFiltered(sortedObjects);
      }
    } else {
      setFiltered(newInProducts);
    }
  }, [
    filterByCategory,
    newInProducts,
    setFiltered,
    filtered,
    filterByColor,
    // filterCategory,
  ]);

  // Utility function to compare arrays

  //
  return (
    <main className="box-border overflow-hidden">
      <Header />
      {showProduct && (
        <ProductDetailCard
          hideProduct={setShowProduct}
          productData={productDetails}
        />
      )}
      <h1 className="mt-14 font-bold text-[16px] text-center">
        LATEST ARRIVALS
      </h1>
      <section className="w-[97%] mt-3 3xl:w-[1700px] 2xl:w-[1500] xl:w-[1280px] m-auto">
        <div>
          <h1
            onClick={() => setShowFilter(!showFilter)}
            className="font-normal  p-4 cursor-pointer text-[12px]"
          >
            FILTER BY {showFilter ? "-" : "+"}
          </h1>
          {showFilter && (
            <div className="border-t border-[#908b8b50]  ">
              <div className="text-xs font-bold flex flex-wrap p-4  phone:w-[430px] w-[230px] justify-between">
                <div className="relative">
                  <h1
                    onClick={() =>
                      setFilterCategory(
                        filterCategory == "category" ? "" : "category"
                      )
                    }
                    className="cursor-pointer"
                  >
                    SHOP BY STYLE +
                  </h1>
                  {filterCategory == "category" && (
                    <div className="flex items-center  bottom-[-90px] z-10 p-1  flex-wrap w-[340px] absolute bg-white">
                      <CheckHelper
                        label="DRESSES"
                        checkName="dresses"
                        filterList={filterByCategory}
                        setValue={setByCategory}
                      />
                      <CheckHelper
                        label="TOPS"
                        checkName="dresses"
                        filterList={filterByCategory}
                        setValue={setByCategory}
                      />
                      <CheckHelper
                        label="BOTTOMS"
                        checkName="dresses"
                        filterList={filterByCategory}
                        setValue={setByCategory}
                      />
                      <CheckHelper
                        label="JUMPSUITS"
                        checkName="dresses"
                        filterList={filterByCategory}
                        setValue={setByCategory}
                      />
                      <CheckHelper
                        label="COORDS"
                        checkName="dresses"
                        filterList={filterByCategory}
                        setValue={setByCategory}
                      />
                    </div>
                  )}
                </div>
                <div className="relative">
                  <h1
                    onClick={() =>
                      setFilterCategory(
                        filterCategory == "colors" ? "" : "colors"
                      )
                    }
                    className="cursor-pointer"
                  >
                    COLOR+
                  </h1>
                  {filterCategory == "colors" && (
                    <div className="flex items-center  bottom-[-90px] z-10 p-1  flex-wrap w-[340px] absolute bg-white">
                      <CheckHelper
                        label="BLACK"
                        checkName="black"
                        filterList={filterByColor}
                        setValue={setByColor}
                      />
                      <CheckHelper
                        label="PINK"
                        checkName="pink"
                        filterList={filterByColor}
                        setValue={setByColor}
                      />
                      <CheckHelper
                        label="BROWN"
                        checkName="brown"
                        filterList={filterByColor}
                        setValue={setByColor}
                      />
                      <CheckHelper
                        label="GREEN"
                        checkName="green"
                        filterList={filterByColor}
                        setValue={setByColor}
                      />
                      <CheckHelper
                        label="BLUE"
                        checkName="blue"
                        filterList={filterByColor}
                        setValue={setByColor}
                      />
                    </div>
                  )}
                </div>
                <div className="relative">
                  <h1
                    onClick={() =>
                      setFilterCategory(
                        filterCategory == "order by" ? "" : "order by"
                      )
                    }
                    className="phone:mt-0 mt-5 cursor-pointer"
                  >
                    ORDER BY+
                  </h1>

                  {filterCategory == "order by" && (
                    <div className="flex items-center  bottom-[-90px] z-10 p-1  flex-wrap w-[340px]  absolute bg-white">
                      <RadioHelper
                        label="ALPHABETICALLY (A-Z)"
                        checkName="order"
                        filterList={filterBy}
                        setValue={setFilterBy}
                      />
                      <RadioHelper
                        label="PRICE (LOW TO HIGH)"
                        checkName="order"
                        filterList={filterBy}
                        setValue={setFilterBy}
                      />
                      <RadioHelper
                        label="ALPHABETICALLY (Z-A)"
                        checkName="order"
                        filterList={filterBy}
                        setValue={setFilterBy}
                      />
                      <RadioHelper
                        label="PRICE (HIGH TO LOW)"
                        checkName="order"
                        filterList={filterBy}
                        setValue={setFilterBy}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {filtered?.length !== 0 ? (
          <div className="shopFlex">
            {filtered?.map((obj: any, index: any) => (
              <ShopCard
                key={index}
                name={obj.name}
                slug={obj.slug}
                description={obj.mini_description}
                naira_price={obj.naira_price}
                euro_price={obj.euro_price}
                pounds_price={obj.pounds_price}
                dollar_price={obj.dollar_price}
                image={obj.images[1]}
                hImage={obj.images[0]}
                showProduct={setShowProduct}
                images={obj.images}
                sizes={obj.sizes}
                des_full={obj.description}
                pData={setProductDetails}
                requires_length={obj.requires_length}
                custom={obj.custom}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">No item found</div>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default NewIn;
