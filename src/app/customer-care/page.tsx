/* eslint-disable @next/next/no-img-element */
//

"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import React, { useState } from "react";
import Image from "next/image";
import { PostRequest } from "@/utils/urlhandler";
import { isEmpty, validateEmail } from "@/utils/functionHelper";
import { toast } from "react-toastify";
import { allRoutes } from "@/utils/urlEnums";

function CustomerCare() {
  const [name, setName]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [number, setNumber]: any = useState("");
  const [message, setMessage]: any = useState("");

  const data = {
    name,
    email,
    phone_number: number,
    message,
  };

  // {
  //   "name": "mike",
  //   "email": "mike@gmail.com",
  //   "phone_number": "1234567890",
  //   "message": "my message to amuj",
  // }

  const submitMessage = async () => {
    if (
      isEmpty(email) ||
      isEmpty(name) ||
      isEmpty(number) ||
      isEmpty(message)
    ) {
      toast.error("Fill all the Forms", { position: "top-center" });
    } else if (!validateEmail(email)) {
      toast.error("Enter a valid email", { position: "top-center" });
    } else {
      const response = await PostRequest(`${allRoutes.CONTACT}`, data);
      if (response.status === 201) {
        toast.success("Meaasge sent", { position: "top-center" });
        setEmail("");
        setMessage("");
        setName("");
        setNumber("");
      } else {
        toast.error("Something when wrong!", { position: "top-center" });
      }
    }
  };

  return (
    <main className="box-border overflow-hidden">
      <Header />
      <h1 className="text-lg font-bold sm:hidden block text-center mt-8 mb-5">
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
            <div>
              <div className="mt-4">
                <label htmlFor="text" className="text-sm">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  // placeholder="youremail@email.com"
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
                  value={number}
                  onChange={(e) =>
                    setNumber(e.target.value.replace(/[^0-9.]/g, ""))
                  }
                  placeholder="phone number"
                  className="border border-[#908B8B] text-sm w-full h-10 p-5 mt-1 input"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="text" className="text-sm">
                  Message
                </label>
                <br />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="type your message here"
                  className="border border-[#908B8B] w-full h-[130px] p-3 mt-1 input text-sm resize-none"
                />
              </div>
              <button
                onClick={() => submitMessage()}
                className="text-sm bg-black text-white py-2 phone:w-auto w-full px-10 mt-3"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default CustomerCare;
