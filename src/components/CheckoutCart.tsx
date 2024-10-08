/* eslint-disable @next/next/no-img-element */
//

import React, { useEffect, useState } from "react";
import { useCurrency } from "./CurrencyContext";
import { numberWithCommas, updateQuantityByName } from "@/utils/functionHelper";
import { useCart } from "./CartContext";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { imageServer } from "@/utils/urlhandler";

function CheckoutCart({
  name,
  slug,
  size,
  length,
  quantity,
  amount,
  image,
}: any) {
  const { currency } = useCurrency();
  const [cQuantity, setcQuantity] = useState(quantity);

  useEffect(() => {
    if (quantity != cQuantity) {
      setcQuantity(quantity);
    }
  }, [quantity, cQuantity]);

  const { cart, setCart } = useCart();

  const updateCart = (quantity: any) => {
    const update = updateQuantityByName(cart, slug, quantity);
    localStorage.setItem("amujCart", JSON.stringify(update));
    setCart(update);
  };
  const minus = () => {
    if (cQuantity > 0) {
      const updatedQuantity = cQuantity - 1;
      setcQuantity(updatedQuantity);
      updateCart(updatedQuantity);
    }
  };

  const add = () => {
    if (cQuantity < 2) {
      const updatedQuantity = cQuantity + 1;
      setcQuantity(updatedQuantity);
      updateCart(updatedQuantity);
    }
  };

  const remove = () => {
    const removeCart = cart?.filter((obj: any) => obj.slug !== slug);
    setCart(removeCart);
    localStorage.setItem("amujCart", JSON.stringify(removeCart));
  };

  return (
    <main className="mt-8 w-full">
      <div className="flex w-full">
        <div className="">
          <img
            src={`${imageServer}${image}`}
            alt={``}
            className="h-[150px] w-[150px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-4/5 phone:ml-14 ml-8">
          <div className="flex justify-between ">
            <h1 className="font-extrabold text-sm uppercase">{name}</h1>
            <button
              onClick={() => remove()}
              className="flex items-center text-sm text-[#908B8B]"
            >
              <RxCross2 className="mr-1" /> Remove
            </button>
          </div>
          <div className="phone:flex flex text-sm mt-3">
            <p>Size: {size}</p>
            {/* <p className="ml-5">Length: {length}</p> */}
          </div>
          <div className="border-b border-[#0000003f] my-7"></div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center text-sm">
              <button
                onClick={() => minus()}
                className="border flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[40px] phone:w-[40px] h-[30px] w-[30px]"
              >
                <AiOutlineMinus />
              </button>
              <div className="border flex justify-center items-center border-[#908B8B] ml-1 mr-1 phone:w-[55px] phone:h-[40px] h-[30px] w-[40px]">
                {cQuantity}
              </div>
              <button
                onClick={() => add()}
                className="border  flex justify-center items-center border-[#908B8B] text-[#908B8B] phone:h-[40px] phone:w-[40px] h-[30px] w-[30px]"
              >
                <AiOutlinePlus />
              </button>
            </div>
            <div className="text-sm ml-7 font-extrabold">
              <h1>
                {currency?.symbol}
                {numberWithCommas(amount * cQuantity)}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#d9d9d92e] h-5 w-full mt-4"></div>
    </main>
  );
}

export default CheckoutCart;
