/* eslint-disable @next/next/no-img-element */
//
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import React from "react";
import Image from "next/image";

function CustomerCare() {
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <h1 className="text-xl font-bold sm:hidden block text-center mt-8 mb-5">
        CONTACT US
      </h1>
      <div className="relative sm:hidden block h-[350px] w-[85%] m-auto">
        <Image
          src={"/care-phone.png"}
          alt={"customer"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <section className="flex items-center md:justify-normal justify-center">
        <div className="relative h-[700px] w-full sm:block hidden">
          <Image
            src={"/customercare.png"}
            alt={"customer"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <img src="/customercare.png" alt="" /> */}
        <div className="bg-white h-[650px] md:left-36  phone:w-[500px] w-[90%] sm:absolute phone:p-10">
          <div>
            <h1 className="text-xl font-extrabold sm:block hidden">
              CONTACT US
            </h1>
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
              <button className="text-sm bg-black text-white py-2 phone:w-auto w-full px-10 mt-3">
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
