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
import ShowStripe from "@/components/ShowStripe";
import * as countryData from "country-list-js";
import { FaCheck } from "react-icons/fa6";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";

// payment

function CheckOut() {
  const [step, setStep]: any = useState(1);
  const { cart, setCart } = useCart();
  const { currency, setCurrency } = useCurrency();
  const [showStripe, setShowStripe] = useState(false);
  const [paySuccessful, setPaySuccessful] = useState(false);
  const [paymentRef, setPaymentRef] = useState("");
  const allAmount: number = cart?.reduce((sum: any, obj: any) => {
    return sum + obj[`${currency?.name}_price`] * obj.quantity;
  }, 0);
  const [openSummary, setOpenSummary] = useState(false);

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
  const [deliveryTerms, setDeliveryTerms] = useState<boolean>(false);
  const [payMethod, setPayMethod] = useState<boolean>(false);
  const [shipFee, setShipFee] = useState(0);
  const [orderDetails, setOrderDetails]: any = useState([]);

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

  const itemList = cart?.map((item: any) => {
    return {
      name: item.name,
      slug: item.slug.toLowerCase().replace(/\d+$/, ""),
      price: item[`${currency?.name}_price`],
      size: item.size,
      length: item.length,
      image: item.image,
      quantity: item.quantity,
    };
  });
  const data = {
    payment_method: currency?.code === "NGN" ? "PayStack" : "Stripe",
    currency: currency?.code,
    sub_total: allAmount,
    shipping_price: shipFee,
    total: allAmount + shipFee,
    tracking_number: "tracking_number",
    firstname: firstname,
    lastname: lastname,
    address: address,
    city: city,
    country: country,
    state: state,
    email: email,
    items: itemList,
    quantity: 2,
    phone_number: phone_number,
    reference: paymentRef,
    // reference: "HHHHHH",
    post_code: post_code,
    discount_price: 0,
  };

  const handleSubmit = async () => {
    const response = await PostRequest("order", data);
    if (response.status === 201) {
      setOrderDetails(response.data);
    }
  };

  const [shipData, setShipData]: any = useState();
  // for lagos only
  const [specialshipping, setSpecial]: any = useState();
  const [expressShipping, setExpress]: any = useState();
  const [useSpecial, setUseSpecial] = useState(false);
  const [useExpressD, setUseExpress] = useState(false);

  const shipping = async () => {
    if (continentS === "Africa")
      if (country === "NG") {
        if (state === "Lagos State") {
          const shipStandard = await GetRequest(
            "shipping/standard-delivery-lagos"
          );
          const shipExpress = await GetRequest(
            "shipping/express-delivery-lagos"
          );
          const shipSpecial = await GetRequest(
            "shipping/special-devlivery-lagos"
          );
          setShipData(parseFloat(shipStandard.data[`${currency?.name}_price`]));
          setSpecial(parseFloat(shipSpecial.data[`${currency?.name}_price`]));
          setExpress(parseFloat(shipExpress.data[`${currency?.name}_price`]));
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
    } else if (state === "Lagos State") {
      if (useExpressD) {
        setShipFee(expressShipping);
      } else if (useSpecial) {
        setShipFee(specialshipping);
      } else {
        setShipFee(0);
      }
    } else {
      setShipFee(0);
    }
  }, [deliveryTerms, useExpressD, useSpecial]);

  // get cart
  useEffect(() => {
    const getCart: any = localStorage.getItem("amujCart");
    const parsedCart = JSON.parse(getCart);
    if (JSON.stringify(parsedCart) !== JSON.stringify(cart)) {
      setCart(parsedCart);
    }
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
    shipping();
  }, [country, state]);

  useEffect(() => {
    if (paySuccessful) {
      handleSubmit();
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
        <div className="bg-[#edecec] py-5 mt-4">
          <div className="text-center w-[90%] m-auto">
            <h1 className="phone:text-2xl text-lg font-bold">
              Payment Successful!
            </h1>
            <p className="phone:text-base text-sm text-center">
              Thank you for your order! Please check your email for the
              confirmation details.
            </p>

            <div className="sm:w-[600px] w-[95%] m-auto mt-5">
              <div
                className="shadow-[0px_0px_5px_rgba(0,0,0,0.09)] p-5 text-sm mt-7"
                onClick={() => setOpenSummary(!openSummary)}
              >
                <div className="flex justify-between cursor-pointer font-semibold">
                  <h1 className="font-bold text-xs uppercase">Order Summary</h1>
                  <button>
                    {!openSummary ? (
                      <AiOutlinePlus size={17} />
                    ) : (
                      <AiOutlineMinus size={17} />
                    )}
                  </button>
                </div>
                {openSummary && (
                  <div className="mt-5">
                    <div className="">
                      {orderDetails.items?.map((data: any, index: number) => (
                        <div
                          key={index}
                          className="flex justify-between mt-5 items-center text-sm"
                        >
                          <img src={data.image} alt="" className="h-20" />
                          <h1>
                            <span className="font-bold">Size</span> -{" "}
                            <span className="text-xs">{data.size}</span>
                          </h1>
                          <h1>
                            <span className="font-bold">Qty</span> -{" "}
                            <span className="text-xs">{data.quantity}</span>
                          </h1>
                          <span className="text-xs">
                            {currency?.symbol}
                            {data.price}
                          </span>
                        </div>
                      ))}
                      <div>
                        <div className="flex justify-between mt-3 text-sm">
                          <h1>Subtotal:</h1>
                          <h1>
                            {currency?.symbol}
                            {orderDetails.sub_total}
                          </h1>
                        </div>
                        <div className="flex justify-between mt-3 text-sm">
                          <h1>Delivery:</h1>
                          <h1>
                            {currency?.symbol}
                            {orderDetails.shipping_price}
                          </h1>
                        </div>
                        <div className="flex justify-between mt-3 text-sm">
                          <h1>Total:</h1>
                          <h1>
                            {currency?.symbol}
                            {orderDetails.total}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <Link href={"/customer-care"}>
                  <div
                    className="border-b border-[#908B8B] py-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-center justify-between">
                      <h1 className="text-xs">NEED ASSISTANCE ?</h1>
                      <MdNavigateNext />
                    </div>
                  </div>
                </Link>
              </div>
              {/* <div className="mt-3">
                <Link href={"/shipping"}>
                  <div
                    className="border-b border-[#908B8B] py-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-center justify-between">
                      <h1 className="text-xs">SHIPPING AND RETURNS</h1>
                      <MdNavigateNext />
                    </div>
                  </div>
                </Link>
              </div> */}
            </div>

            <div className="mt-7">
              <Link href={"/"} className="">
                Shipping policy
              </Link>
            </div>
            <div className="mt-1">
              <Link href={"/shipping"} className="underline">
                Continue shoping
              </Link>
            </div>
          </div>
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
                      <div
                        className={`flex justify-center items-center h-4 w-4 mt-1 rounded-sm border border-black cursor-pointer ${
                          deliveryTerms && "bg-black"
                        } `}
                        onClick={() => {
                          setDeliveryTerms(!deliveryTerms);
                          setUseExpress(false);
                          setUseSpecial(false);
                        }}
                      >
                        {deliveryTerms && <FaCheck size={10} color={"#fff"} />}
                      </div>
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

                  {state === "Lagos State" && (
                    <div>
                      <div className=" phone:flex justify-between mt-4 border border-black p-5 items-start">
                        <div className="flex items-start w-full justify-between">
                          <div
                            className={`flex justify-center items-center h-4 w-4 mt-1 rounded-sm border border-black cursor-pointer ${
                              useExpressD && "bg-black"
                            } `}
                            onClick={() => {
                              setUseExpress(!useExpressD);
                              setUseSpecial(false);
                              setDeliveryTerms(false);
                            }}
                          >
                            {useExpressD && (
                              <FaCheck size={10} color={"#fff"} />
                            )}
                          </div>
                          <div className="phone:flex justify-between w-full items-start">
                            <div className="ml-2">
                              <h1 className="phone:text-base text-sm">
                                Express Delivery Lagos
                              </h1>

                              <p className="text-xs mt-1">
                                Express and Special delivery services are not
                                available for international orders.
                              </p>
                            </div>
                            <h1 className="phone:text-base text-sm ml-2">
                              {currency?.symbol}
                              {numberWithCommas(expressShipping)}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div className=" phone:flex justify-between mt-4 border border-black p-5 items-start">
                        <div className="flex items-start w-full justify-between">
                          <div
                            className={`flex justify-center items-center h-4 w-4 mt-1 rounded-sm border border-black cursor-pointer ${
                              useSpecial && "bg-black"
                            } `}
                            onClick={() => {
                              setUseSpecial(!useSpecial);
                              setUseExpress(false);
                              setDeliveryTerms(false);
                            }}
                          >
                            {useSpecial && <FaCheck size={10} color={"#fff"} />}
                          </div>
                          <div className="phone:flex justify-between w-full items-start">
                            <div className="ml-2">
                              <h1 className="phone:text-base text-sm">
                                Special Delivery (Weekends)
                              </h1>

                              <p className="text-xs mt-1">
                                Special weekend delivery orders must be placed
                                by 12pm on Friday to be received on Saturday
                              </p>
                            </div>
                            <h1 className="phone:text-base text-sm ml-2">
                              {currency?.symbol}
                              {numberWithCommas(specialshipping)}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

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
                    <div
                      className={`flex justify-center items-center h-4 w-4 mt-1 rounded-sm border border-black cursor-pointer ${
                        payMethod && "bg-black"
                      } `}
                      onClick={() => setPayMethod(!payMethod)}
                    >
                      {payMethod && <FaCheck size={10} color={"#fff"} />}
                    </div>

                    <div className="ml-9">
                      <h1 className="phone:text-base text-sm">
                        {currency?.code === "NGN" ? "Paystack" : "Stripe"}
                      </h1>
                      <p className="phone:text-base text-sm mt-1">
                        {currency?.code === "NGN"
                          ? "Nigerian Banks or International Payments"
                          : "International Payments"}
                      </p>
                    </div>
                  </div>

                  {/* <button onClick={() => setPaySuccessful(!paySuccessful)}>
                  Pay
                </button> */}

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
                      className="mt-7 bg-black text-white sm:py-4 phone:px-28 phone:w-auto w-full py-5"
                    >
                      Continue to Payment
                    </button>
                  )}
                </div>
              )}
            </aside>

            {/* other side  */}
            <aside className="p-5 tablet:w-[50%] w-full bg-[#F7F6F6] min-h-[30vh]">
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
