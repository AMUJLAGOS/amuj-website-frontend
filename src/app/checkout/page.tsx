/* eslint-disable @next/next/no-img-element */
//
import Link from "next/link";
import React from "react";

function CheckOut() {
  return (
    <main>
      <div className="flex justify-center mt-14">
        <Link href={"/"}>
          <img
            src={`/amuj-logo-b.svg`}
            alt="amuj logo"
            className="phone:h-[40px] tablet:h-[50px] h-[35px]"
          />
        </Link>
      </div>

      <section className="w-[1200px] m-auto mt-10">
        <aside className="w-[45%]">
          <div className="flex items-center">
            {/* step 2  */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="border-b border-black w-20"></div>
                <div className="w-6 h-6 bg-black rounded-full text-white flex justify-center items-center text-sm">
                  1
                </div>
                <div className="border-b border-black w-20"></div>
              </div>
              <p className="font-semibold text-sm mt-2">Contact Information</p>
            </div>
            {/* step 2  */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="border-b border-black w-20"></div>
                <div className="w-6 h-6 bg-black rounded-full text-white flex justify-center items-center text-sm">
                  2
                </div>
                <div className="border-b border-black w-20"></div>
              </div>
              <p className="font-semibold text-sm mt-2">Shipping</p>
            </div>
            {/* step 3  */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="border-b border-black w-20"></div>
                <div className="w-6 h-6 bg-black rounded-full text-white flex justify-center items-center text-sm">
                  3
                </div>
                <div className="border-b border-black w-20"></div>
              </div>
              <p className="font-semibold text-sm mt-2">Payment</p>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <input
                type="text"
                value={""}
                placeholder="email"
                className="border border-[#908B8B] text-sm w-full h-10 px-3 py-5 mt-1 input"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <input
                type="text"
                value={""}
                placeholder="First Name"
                className="border border-[#908B8B] text-sm w-[49%] h-10 px-3 py-5 mt-1 input"
              />
              <input
                type="text"
                value={""}
                placeholder="Last Name"
                className="border border-[#908B8B] text-sm w-[49%] h-10 px-3 py-5 mt-1 input"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={""}
                placeholder="Phone Number"
                className="border border-[#908B8B] text-sm w-full h-10 px-3 py-5 mt-1 input"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={""}
                placeholder="Address"
                className="border border-[#908B8B] text-sm w-full h-10 px-3 py-5 mt-1 input"
              />
            </div>

            <div className="mt-4">
              <input
                type="text"
                value={""}
                placeholder="City"
                className="border border-[#908B8B] text-sm w-full h-10 px-3 py-5 mt-1 input"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <input
                type="text"
                value={""}
                placeholder="Select a country"
                className="border border-[#908B8B] text-sm w-[49%] h-10 px-3 py-5 mt-1 input"
              />
              <input
                type="text"
                value={""}
                placeholder="Postal Code"
                className="border border-[#908B8B] text-sm w-[49%] h-10 px-3 py-5 mt-1 input"
              />
            </div>
          </div>
        </aside>
        <aside></aside>
      </section>
    </main>
  );
}

export default CheckOut;
