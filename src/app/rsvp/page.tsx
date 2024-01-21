/* eslint-disable @next/next/no-img-element */
//
"use client";
import Spinner from "@/components/Spinner";
import { PostRequest } from "@/utils/urlhandler";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";

function RSVP() {
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
          hideProgressBar: true,
        });
        setLoading(false);
      }
      // console.log(response);
    } else {
      toast.error("Password cannot be empty", {
        position: "top-center",
        hideProgressBar: true,
      });
    }
  };
  return (
    <main>
      <div className="relative">
        <img
          src="/rsvp.png"
          alt=""
          className="h-[100vh] w-full object-cover phone:block hidden"
        />
        <img
          src="/rsvp_mobile.png"
          alt=""
          className="h-[100vh] w-full object-cover phone:hidden block"
        />
        {confirmed ? (
          <Link
            href={"/rsvp/form"}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 phone:bottom-10 bottom-28"
          >
            <div className="bg-[#9BB493] px-14 py-4 text-white text-lg font-semibold text-center">
              RSVP
            </div>
          </Link>
        ) : (
          <div className="absolute outline-none left-1/2 transform -translate-x-1/2 -translate-y-1/2 phone:bottom-10 bottom-28 flex items-center">
            <input
              type="text"
              className="text-[#9BB493] border-2 border-[#9BB493] p-2 outline-none rounded-lg mr-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={passwordHandler}
              className="h-10 w-10 rounded-full bg-[#9BB493] flex justify-center items-center"
            >
              {loading ? <Spinner /> : <FaArrowRight color={"white"} />}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default RSVP;
