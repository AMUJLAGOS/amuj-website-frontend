/* eslint-disable @next/next/no-img-element */
//
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import React from "react";

function CustomerCare() {
  return (
    <main>
      <Header />
      <section className="flex items-center">
        <img src="/customercare.png" alt="" />
        <div className="bg-white h-[650px] left-36 w-[500px] absolute p-10">
          <div>
            <h1 className="text-xl font-extrabold">CONTACT US</h1>
            <p className="text-[#5E5959] text-sm tracking-[1px] mt-3">
              For any inquiries please email help@amujofficial.com. For any
              order-related questions please include your order number in the
              subject.
            </p>
            <form action="">
              <div className="mt-4">
                <label htmlFor="text" className="text-sm">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="type in your name"
                  className="border border-[#908B8B] text-sm w-full h-10 p-5 mt-1 input"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="text" className="text-sm">
                  Email
                </label>
                <br />
                <input
                  type="text"
                  placeholder="youremail@email.com"
                  className="border border-[#908B8B] text-sm w-full h-10 p-5 mt-1 input"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="text" className="text-sm">
                  Phone Number
                </label>
                <br />
                <input
                  type="text"
                  placeholder="input phone number"
                  className="border border-[#908B8B] text-sm w-full h-10 p-5 mt-1 input"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="text" className="text-sm">
                  Message
                </label>
                <br />
                <textarea
                  placeholder="type your message here"
                  className="border border-[#908B8B] w-full h-[130px] p-3 mt-1 input text-sm resize-none"
                />
              </div>
              <button className="text-sm bg-black text-white py-2 px-10 mt-3">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
      <Spacer height={100} />
      <Footer />
      <Spacer height={100} />
    </main>
  );
}

export default CustomerCare;
