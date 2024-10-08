//
"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { usePop } from "../context/SubscribePop";
import { PostRequest } from "@/utils/urlhandler";
import { allRoutes } from "@/utils/urlEnums";
import { toast } from "sonner";
import isEmail from "validator/lib/isEmail";
import Spinner from "../Spinner";

function Subscribe() {
  const { closePop } = usePop();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const data = {
    email,
    name,
  };
  const emailHandler = async () => {
    if (isEmail(email) && name !== "") {
      setLoading(true);
      const response = await PostRequest(allRoutes.SUBSCRIBE, data);
      if (response.status == 201) {
        setEmail("");
        setName("");
        toast.success("Thank you for subscribing", { position: "top-center" });
        setLoading(false);
        closePop();
      } else if (response.status == 400) {
        toast("Subscriber already exist!", { position: "top-center" });
        setLoading(false);
      } else {
        toast.error("Something went wrong!", { position: "top-center" });
        setLoading(false);
      }
    } else {
      toast.error("Enter a valid email and fill forms", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="bg-[#000000d3] h-screen w-full fixed z-[200] flex items-center justify-center">
      <div className="bg-white phone:w-[430px] w-[90%] h-[450px] rounded-2xl p-6">
        <div className="flex justify-end">
          <button onClick={closePop} className="">
            <RxCross2 size={25} />
          </button>
        </div>
        <div className="text-center mt-5 text-sm font-medium">
          <p className="font-semibold">OWN YOUR ALLURE</p>
          {/* <p className="mt-3">SUBSCRIBE & ENJOY</p> */}
          {/* <p className="text-2xl">10% OFF</p> */}
          {/* <p>YOUR FIRST PURCHASE</p> */}
          <p className="mt-5">
            Subscribe to our newsletter to be the first to hear about our
            exclusive releases and offers
          </p>
        </div>

        <div>
          <input
            value={name}
            type="text"
            placeholder="Name"
            className="border border-[#908B8B] mt-7 h-10 px-3 py-5 w-full input"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={email}
            type="text"
            placeholder="Email address"
            className="border border-[#908B8B] h-10 px-3 py-5 w-full input mt-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={emailHandler}
            className="bg-black disabled:bg-[#000000b3] disabled:cursor-not-allowed text-white text-xs py-3 px-12 mt-10 w-full"
          >
            {loading ? <Spinner /> : "SIGN UP"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
