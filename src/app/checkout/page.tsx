/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
//

"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useCart } from "@/components/CartContext";
import { useCurrency } from "@/components/CurrencyContext";
import StepsHelper from "@/components/StepsHelper";
import { GetRequest, PostRequest, imageServer } from "@/utils/urlhandler";
import Link from "next/link";
import countryList from "react-select-country-list";
import {
  isEmpty,
  numberWithCommas,
  validateEmail,
} from "@/utils/functionHelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStates } from "country-state-picker";
import Paystack from "@/components/Paystack";
import Stripe from "@/components/CheckoutForm";
import ShowStripe from "@/components/ShowStripe";
import * as countryData from "country-list-js";

// payment

function CheckOut() {
  const [step, setStep]: any = useState(1);
  const { cart, setCart } = useCart();
  const { currency, setCurrency } = useCurrency();
  const [showStripe, setShowStripe] = useState(false);
  const [paySuccessful, setPaySuccessful] = useState(false);
  const [paymentRef, setPaymentRef] = useState("");
  const allAmount = cart?.reduce((sum: any, obj: any) => {
    return sum + obj[`${currency?.name}_price`] * obj.quantity;
  }, 0);

  // endpoint data
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [post_code, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [continentS, setContinent] = useState("");
  const [deliveryTerms, setDeliveryTerms]: any = useState(false);
  const [payMethod, setPayMethod]: any = useState(false);
  const [shipFee, setShipFee]: any = useState(0);

  const handleContinue = () => {
    if (
      isEmpty(firstname) ||
      isEmpty(email) ||
      isEmpty(lastname) ||
      isEmpty(phone_number) ||
      isEmpty(address) ||
      isEmpty(city) ||
      isEmpty(country) ||
      isEmpty(post_code)
    ) {
      toast.error("Fill all the forms!", { position: "top-center" });
      // console.log("here!");
    } else if (!validateEmail(email)) {
      toast.error("Enter a valid email", { position: "top-center" });
    } else {
      setStep(step + 1);
    }
  };

  const handleToPayment = () => {
    if (!shipFee) {
      toast.error("Accept delivery", { position: "top-center" });
    } else {
      setStep(step + 1);
    }
  };

  const data = {
    payment_method: currency?.code === "NGN" ? "PayStack" : "Stripe",
    currency: currency?.code,
    sub_total: allAmount,
    shipping_price: shipFee,
    total: allAmount + shipFee,
    tracking_number: "heheheh",
    firstname: firstname,
    lastname: lastname,
    address: address,
    city: city,
    country: country,
    state: state,
    email: email,
    item: ["aarya"],
    quantity: 2,
    reference: paymentRef,
    phone_number: phone_number,
    post_code: post_code,
    discount_price: 0,
  };

  const handleSubmit = async () => {
    const response = await PostRequest("order", data);
    // console.log(response);
  };

  const [shipData, setShipData]: any = useState();
  const shipping = async () => {
    if (continentS === "Africa")
      if (country === "NG") {
        if (state === "Lagos State") {
          const shipRes = await GetRequest("shipping/standard-delivery-lagos");
          setShipData(parseFloat(shipRes.data[`${currency?.name}_price`]));
        } else {
          const shipRes = await GetRequest(
            "shipping/standard-delivery-nigeria"
          );
          setShipData(parseFloat(shipRes.data[`${currency?.name}_price`]));
        }
      } else {
        const shipRes = await GetRequest("shipping/standard-delivery-africa");
        setShipData(parseFloat(shipRes.data[`${currency?.name}_price`]));
      }
    else {
      const shipRes = await GetRequest(
        "shipping/standard-delivery-other-continent"
      );
      setShipData(parseFloat(shipRes.data[`${currency?.name}_price`]));
    }
  };

  // states and countries getter
  const options: any = useMemo(() => countryList().getData(), []);
  const [stateOptions, setStateOptions] = useState([]);

  useEffect(() => {
    const countryStates = getStates(country.toLowerCase());
    setStateOptions(countryStates);
  }, [country]);

  // for shiping data
  useEffect(() => {
    if (deliveryTerms) {
      setShipFee(shipData);
    } else {
      setShipFee(0);
    }
  }, [deliveryTerms]);

  // get cart
  useEffect(() => {
    const getCart: any = localStorage.getItem("amujCart");
    const parsedCart = JSON.parse(getCart);
    if (JSON.stringify(parsedCart) !== JSON.stringify(cart)) {
      setCart(parsedCart);
    }

    // console.log([cart?.map((obj: any) => obj)]);
  }, [cart, currency, setCart]);

  // get currency
  useEffect(() => {
    const getCurrency: any = localStorage.getItem("amujCurrency");
    const parsedCurrency = JSON.parse(getCurrency);
    if (JSON.stringify(parsedCurrency) != JSON.stringify(currency)) {
      setCurrency(JSON.parse(getCurrency));
    }
  }, []);

  // get continent and shipping price
  useEffect(() => {
    const found = countryData.findByIso2(country);
    setContinent(found?.continent);
    // console.log(found);
    shipping();
  }, [country, state]);

  useEffect(() => {
    if (paySuccessful) {
      // console.log("calling this!");
      // handleSubmit()
      if (showStripe) {
        setShowStripe(false);
      }
      localStorage.setItem("amujCart", JSON.stringify([]));
    }
  }, [paySuccessful]);

  return (
    <main>
      <ToastContainer />
      {showStripe && (
        <ShowStripe
          close={setShowStripe}
          amount={allAmount + shipFee}
          succesful={setPaySuccessful}
          payRef={setPaymentRef}
        />
      )}

      <div className="flex justify-center mt-14">
        <Link href={"/"}>
          <img
            src={`/amuj-logo-b.svg`}
            alt="amuj logo"
            className="phone:h-[40px] tablet:h-[50px] h-[35px]"
          />
        </Link>
      </div>
      {/* <Header /> */}

      {paySuccessful ? (
        <div className="text-center mt-10">
          <h1 className="text-2xl">Payment successful!</h1>
          <p>We are proceesing your order, you will recieve an email</p>
          <Link href={"/"} className="underline">
            Continue shoping
          </Link>
        </div>
      ) : (
        <section className="justify-end flex">
          <section className=" w-full tablet:w-[98%] lg:w-[92%] mt-10 tablet:flex-row flex-col-reverse flex justify-end">
            <aside className="lg:w-[45%] tablet:w-[47%] w-11/12 lg:m- m-auto tablet:mt-0 mt-12 lg:mr-20 tablet:mr-10">
              <StepsHelper step={step} />
              {/* inputs  step1 */}
              {step === 1 && (
                <div className="mt-5">
                  <div>
                    <div className="mt-4">
                      <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-[#908B8B] text-sm w-full h-12 px-3 py-5 mt-1 input"
                      />
                    </div>
                    <div className="mt-4 phone:flex block justify-between">
                      <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="First Name"
                        className="border border-[#908B8B] text-sm phone:w-[49%] w-full h-12 px-3 py-5 phone:mt-1 mt-4 input phone:flex block"
                      />
                      <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Last Name"
                        className="border border-[#908B8B] text-sm phone:w-[49%] w-full h-12 px-3 py-5 input phone:mt-1 mt-4"
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        type="text"
                        value={phone_number}
                        onChange={(e) =>
                          setPhoneNumber(e.target.value.replace(/[^0-9.]/g, ""))
                        }
                        placeholder="Phone Number"
                        className="border border-[#908B8B] text-sm w-full h-12 px-3 py-5 mt-1 input"
                      />
                    </div>
                    <div className="mt-4">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAdress(e.target.value)}
                        placeholder="Address"
                        className="border border-[#908B8B] text-sm w-full h-12 px-3 py-5 mt-1 input"
                      />
                    </div>

                    <div className="mt-4">
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="border border-[#908B8B] text-sm w-full h-12 px-3 py-5 mt-1 input"
                      />
                    </div>
                    <div className="mt-4 phone:flex block justify-between">
                      <select
                        className={`phone:mt-1 select ${
                          stateOptions
                            ? "phone:w-[32%] w-full"
                            : " phone:w-[49%] w-full"
                        } border-[#908B8B] border h-12 px-3`}
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                      >
                        <option value="" key="" className="text-[#908B8B]">
                          Select a country
                        </option>
                        {options.map((coun: any, index: any) => (
                          <option key={index} value={coun.value}>
                            {coun.label}
                          </option>
                        ))}
                      </select>
                      {/* <br className="phone:hidden block" /> */}

                      {stateOptions && (
                        <select
                          className={`phone:flex block phone:mt-1 mt-4 select ${
                            stateOptions
                              ? "phone:w-[32%] w-full"
                              : " phone:w-[49%] w-full"
                          } border-[#908B8B] border h-12 px-3`}
                          onChange={(e) => setState(e.target.value)}
                          value={state}
                        >
                          <option value="" key="" className="text-[#908B8B]">
                            Select a state
                          </option>
                          {stateOptions.map((state: any, index: any) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      )}
                      {/* <br className="phone:hidden block" /> */}
                      <input
                        type="text"
                        value={post_code}
                        onChange={(e) =>
                          setPostalCode(e.target.value.replace(/[^0-9.]/g, ""))
                        }
                        placeholder="Postal Code"
                        className={`border border-[#908B8B] text-sm ${
                          stateOptions
                            ? "phone:w-[32%] w-full"
                            : " phone:w-[49%] w-full"
                        }  h-12 px-3 py-5 phone:mt-1 mt-4 phone:flex block input`}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleContinue}
                    className="mt-7 bg-black text-white phone:w-auto w-full sm:py-4 phone:px-28 py-5 text-sm phone:text-base"
                  >
                    Continue to shipping
                  </button>
                </div>
              )}

              {/* step 2  */}
              {step === 2 && (
                <div className="mt-5">
                  <div className="border border-black mt-5 px-5">
                    <div className="flex justify-between py-4 border-b ">
                      <div className="w-[20%] phone:text-base text-sm">
                        Email
                      </div>
                      <div className="w-[60%] phone:text-base text-sm lowercase">
                        {email}
                      </div>
                      <button
                        className="phone:text-base text-sm"
                        onClick={() => {
                          setStep(1);
                          setDeliveryTerms(false);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="flex justify-between py-4">
                      <div className="w-[20%] phone:text-base text-sm">
                        Ship to
                      </div>
                      <div className="w-[60%] phone:text-base text-sm">
                        {address} {city}
                      </div>
                      <button
                        className="phone:text-base text-sm"
                        onClick={() => {
                          setStep(1);
                          setDeliveryTerms(false);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <h1 className="phone:text-base text-sm mt-3">
                    Shipping Method
                  </h1>
                  <div className=" phone:flex justify-between mt-4 border border-black p-5 items-start">
                    <div className="flex items-start w-full justify-between">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={deliveryTerms}
                        onChange={(e) => setDeliveryTerms(!deliveryTerms)}
                        className="mt-1"
                      />
                      <div className="phone:flex justify-between w-full items-start">
                        <div className="ml-2">
                          <h1 className="phone:text-base text-sm">
                            Standard Delivery
                          </h1>

                          <p className="text-xs mt-1">
                            Standard delivery operates weekdays Mon – Fri 9 am –
                            6 pm
                          </p>
                        </div>
                        <h1 className="phone:text-base text-sm ml-2">
                          {currency?.symbol}
                          {numberWithCommas(shipData)}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleToPayment}
                    // onClick={handleSubmit}
                    className="mt-7 bg-black text-white phone:w-auto w-full sm:py-4 phone:px-28 py-5 text-sm phone:text-base"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* step 3 */}
              {step === 3 && (
                <div className="mt-5">
                  <div className="border border-black mt-5 px-5">
                    <div className="flex justify-between py-4 border-b ">
                      <div className="w-[20%] phone:text-base text-sm">
                        Email
                      </div>
                      <div className="w-[60%] phone:text-base text-sm lowercase">
                        {email}
                      </div>
                      <button
                        onClick={() => {
                          setStep(1);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="flex justify-between py-4 border-b">
                      <div className="w-[20%] phone:text-base text-sm">
                        Ship to
                      </div>
                      <div className="w-[60%] phone:text-base text-sm">
                        {address} {city}
                      </div>
                      <button onClick={() => setStep(1)}>Edit</button>
                    </div>

                    <div className="flex justify-between py-4 ">
                      <div className="w-[20%] phone:text-base text-sm">
                        Shipping
                      </div>
                      <div className="w-[60%] phone:text-base text-sm">
                        Standard Delivery {currency?.symbol}
                        {numberWithCommas(shipFee)}
                      </div>
                      <button
                        className="phone:text-base text-sm"
                        onClick={() => setStep(2)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <h1 className="phone:text-base text-sm mt-8">
                    Payment Method
                  </h1>

                  <div className="flex mt-4 border border-black p-5 items-start">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={payMethod}
                      onChange={(e) => setPayMethod(!payMethod)}
                      className="mt-1"
                    />
                    <div className="ml-9">
                      <h1 className="phone:text-base text-sm">
                        {currency?.code === "NGN" ? "Paystack" : "Stripe"}
                      </h1>
                      <p className="phone:text-base text-sm mt-1">
                        Nigerian Banks or International Payments
                      </p>
                    </div>
                  </div>

                  {currency?.code === "NGN" ? (
                    <Paystack
                      amount={allAmount + shipFee}
                      email={email}
                      successful={setPaySuccessful}
                      payRef={setPaymentRef}
                    />
                  ) : (
                    <button
                      onClick={() => {
                        setShowStripe(true);
                      }}
                      className="mt-7 bg-black text-white sm:py-4 px-28 py-5"
                    >
                      Continue to Payment
                    </button>
                  )}
                </div>
              )}
            </aside>

            {/* other side  */}
            <aside className="p-5 tablet:w-[50%] w-full bg-[#F7F6F6] h-[100vh]">
              <div className="lg:w-[90%] w-full">
                <h1 className="font-semibold">Continue Shopping</h1>
                <div className="flex items-center mt-3 w-full">
                  <input
                    type="text"
                    placeholder="Discount Code"
                    className="border border-[#908B8B] text-sm w-[60%] h-10 px-3 py-5 input"
                  />
                  <button className="bg-black text-white py-[12px] ml-3 px-10 text-xs">
                    APPLY
                  </button>
                </div>
                <div className="w-full">
                  {cart?.map((obj: any, index) => (
                    <div key={index}>
                      <Card
                        name={obj.name}
                        size={obj.size}
                        length={obj.length}
                        quantity={obj.quantity}
                        amount={obj[`${currency?.name}_price`]}
                        image={obj.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="tablet:w-[85%] w-full mt-6 border-b border-[#00000037] pb-5">
                  <div className="flex justify-between mt-1">
                    <h1 className="phone:text-sm text-xs font-semibold">
                      SUBTOTAL
                    </h1>
                    <h1 className="phone:text-sm text-xs font-bold">
                      {currency?.symbol}
                      {numberWithCommas(allAmount)}
                    </h1>
                  </div>
                  <div className="flex justify-between mt-1">
                    <h1 className="phone:text-sm text-xs font-semibold">
                      DISCOUNT
                    </h1>
                    <h1 className="font-bold phone:text-sm text-xs">
                      -{currency?.symbol}0.00
                    </h1>
                  </div>
                  <div className="flex justify-between mt-1">
                    <h1 className="phone:text-sm text-xs font-semibold">
                      SHIPPING{" "}
                    </h1>
                    <h1 className="font-bold phone:text-sm text-xs">
                      {shipFee > 0 && currency?.symbol}
                      {shipFee > 0 ? numberWithCommas(shipFee) : "-"}
                    </h1>
                  </div>
                </div>

                <div className="tablet:w-[85%] w-full mt-6">
                  <div className="flex justify-between mt-1">
                    <h1 className="phone:text-sm text-xs font-bold">TOTAL</h1>
                    <h1 className="font-extrabold phone:text-sm text-xs">
                      {currency?.symbol}
                      {numberWithCommas(allAmount + shipFee)}
                    </h1>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </section>
      )}
    </main>
  );
}

export default CheckOut;

function Card({ name, size, length, quantity, amount, image }: any) {
  const { currency } = useCurrency();
  return (
    <div className="mt-5 tablet:w-[85%] w-full">
      <div className="flex items-center w-full border-b border-[#00000037] pb-5">
        <div className=" relative">
          <div className="h-4 w-4 rounded-full absolute right-[-6px] bg-black top-[-6px] flex justify-center items-center text-white ">
            <p className="text-xs">{quantity}</p>
          </div>
          <img
            src={`${imageServer}${image}`}
            alt={`${name}`}
            className="h-[90px] w-[80px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full ml-6 ">
          <div className="flex justify-between w-full">
            <h1 className="uppercase text-sm font-bold">{name}</h1>
            <h1 className="text-sm font-bold">
              {currency?.symbol}
              {numberWithCommas(amount * quantity)}
            </h1>
          </div>
          <div className="flex text-sm mt-3">
            <h1>Size: {size}</h1>
            <h1 className="ml-6">Length: {length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
