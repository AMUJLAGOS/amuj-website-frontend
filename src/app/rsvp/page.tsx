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
    <main className="rsvp_bg h-screen">
      <div className="flex items-center justify-center pt-10 gap-5">
        <img
          src="/amuj-logo.svg"
          className="h-10"
          loading="lazy"
          alt="amuj-logo"
        />
        <img src="/seki.png" className="h-10" loading="lazy" alt="amuj-logo" />
        <img
          src="/mc_logo.png"
          className="h-28 w-10 object-cover"
          loading="lazy"
          alt="amuj-logo"
        />
      </div>
      <div className="">
        {confirmed ? (
          <Link
            href={`/rsvp/form?password=${password}`}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 phone:bottom-10 bottom-28"
          >
            <div className="bg-[#f29fb7] px-14 py-4 text-white text-lg font-semibold text-center">
              Click me to RSVP
            </div>
          </Link>
        ) : (
          <div>
            <p className="text-center mt-6">PLEASE JOIN US FOR THE</p>
            <h1 className="font-brittany phone:text-[90px] text-[60px] text-center mt-4">
              Grand
            </h1>
            <h1 className="font-brittany phone:text-[90px] text-[60px] text-center">
              Unveiling
            </h1>
            <p className="text-center mt-8">OF OUR NEWEST COLLECTIONS</p>
            <p className="text-center mt-16">Kindly RSVP below</p>
            <div className="outline-none flex items-center justify-center mt-4">
              <input
                type="text"
                className="text-[#9BB493] border-2 border-[#9BB493] p-2 outline-none rounded-lg mr-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
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
