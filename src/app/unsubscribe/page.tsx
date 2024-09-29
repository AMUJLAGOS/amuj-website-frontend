//

import Header from "@/components/Header";
import React from "react";

function Unsubscribe() {
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
          type="text"
          className="border border-[#908B8B] w-full h-12 px-3 py-5 input mt-10"
          placeholder="Email"
        />
        <button className="mt-7 bg-black text-white phone:w-auto w-full sm:py-4 phone:px-20 py-5 text-sm phone:text-base">
          No more emails please 😢
        </button>
      </div>
    </div>
  );
}

export default Unsubscribe;
