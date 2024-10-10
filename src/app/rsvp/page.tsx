/* eslint-disable @next/next/no-img-element */
//
"use client";
import Spinner from "@/components/Spinner";
import { PostRequest } from "@/utils/urlhandler";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "sonner";

function RSVP() {
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordHandler = async () => {
    if (password.length > 0) {
      setLoading(true);
      const response = await PostRequest("rsvp/confirm-pass", { password });
      if (response.status === 201) {
        setConfirmed(response.data.data);
        setLoading(false);
      } else {
        toast.error(response.data.error, {
          position: "top-center",
        });
        setLoading(false);
      }
      // console.log(response);
    } else {
      toast.error("Password cannot be empty", {
        position: "top-center",
      });
    }
  };
  return (
    <main className="rsvp_bg h-screen overflow-y-scroll">
      <div className="flex items-center justify-center pt-10 gap-9">
        <img
          src="/amuj-logo.svg"
          className="h-8"
          loading="lazy"
          alt="amuj-logo"
        />
        <img
          src="/seki_logo.png"
          className="h-10 -mt-3"
          loading="lazy"
          alt="amuj-logo"
        />
        <img
          src="/mc_logo1.png"
          className="h-12"
          loading="lazy"
          alt="mc-logo"
        />
      </div>
      <div className="">
        {confirmed ? (
          <Link
            href={`/rsvp/form?password=${password}`}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 phone:bottom-10 bottom-28"
          >
            <div className="bg-[#f29fb7] px-14 py-4 w-[290px] text-white text-lg font-semibold text-center">
              Click me to RSVP
            </div>
          </Link>
        ) : (
          <div>
            <p className="text-center mt-6 phone:text-base text-xs">
              PLEASE JOIN US FOR THE
            </p>
            <h1 className="font-brittany phone:text-[90px] text-[80px] text-center mt-4">
              Grand
            </h1>
            <h1 className="font-brittany phone:text-[90px] text-[80px] text-center">
              Unveiling
            </h1>
            <p className="text-center mt-8 phone:text-base text-xs">
              OF OUR NEWEST COLLECTIONS
            </p>
            <p className="text-center mt-20">Kindly RSVP below</p>
            <div className="outline-none flex items-center justify-center mt-4">
              <input
                type="text"
                className="w-[150px] border-2 border-[#9BB493] p-2 outline-none rounded-lg mr-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                disabled={loading}
                onClick={passwordHandler}
                className="h-10 w-10 rounded-full bg-[#f29fb7] flex justify-center items-center"
              >
                {loading ? <Spinner /> : <FaArrowRight color={"white"} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
export default RSVP;
