//
"use client";
import Header from "@/components/Header";
import { validateEmail } from "@/utils/functionHelper";
import { PostRequest } from "@/utils/urlhandler";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const unsubscribe = async () => {
    setLoading(true);
    try {
      if (!validateEmail(email)) {
        throw new Error("Email must not be empty");
      }
      const response = await PostRequest("unsubscribe", { email: email });
      if (response.status === 202) {
        toast.success(response.data.message, { position: "top-center" });
        setEmail("");
      } else {
        toast.error(response.data.error, { position: "top-center" });
      }
    } catch (e: any) {
      toast.error(e.message, { position: "top-center" });
    }
    setLoading(false);
  };
  return (
    <div>
      <Header />
      <div className="sm:w-[500px] w-[90%] items-center flex justify-center flex-col m-auto mt-12">
        <h1 className="font-bold text-3xl">Unsubscribe</h1>
        <p className="text-center mt-2">
          We are sorry to see you go, please confirm the email address below
          would like to unsubscribe
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          className="border border-[#908B8B] w-full h-12 px-3 py-5 input mt-10"
          placeholder="Email"
        />
        <button
          onClick={!loading ? () => unsubscribe() : () => {}}
          className="mt-7 bg-black text-white phone:w-auto w-full sm:py-4 phone:px-20 py-5 text-sm phone:text-base"
        >
          No more emails please
        </button>
      </div>
    </div>
  );
}

export default Unsubscribe;
