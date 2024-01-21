//
"use client";
import { PostRequest } from "@/utils/urlhandler";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "react-toastify";

function RSVP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telePhone, setTelephone] = useState("");
  const [diet, setDiet] = useState("");

  const [guest_name, guest_setName] = useState("");
  const [guest_email, guest_setEmail] = useState("");
  const [guest_telePhone, guest_setTelephone] = useState("");
  const [guest_diet, guest_setDiet] = useState("");

  const [guest, setGuest] = useState(false);

  const formData = {
    name: name,
    email: email,
    phone_number: telePhone,
    diet_requirements: diet,
    guest_name: guest_name,
    guest_email: guest_email,
    guest_phone_number: guest_telePhone,
    guest_diet_requirements: guest_diet,
  };

  const submitHandler = async () => {
    const response = await PostRequest("rsvp/form", formData);
    console.log(response);
    if (response.status === 201) {
      toast.success("Data recieved, an email will be sent to you", {
        position: "top-center",
        hideProgressBar: true,
      });
      setName("");
      setEmail("");
      setTelephone("");
      setDiet("");
      guest_setName("");
      guest_setEmail("");
      guest_setTelephone("");
      guest_setDiet("");
    }
  };

  useEffect(() => {
    // const
    // submitHandler();
  }, []);

  return (
    <main className="bg-[#9BB493] min-h-[100vh]">
      <div>
        <div className="text-center text-white tracking-[1px] pt-16">
          <h1 className="text-3xl font-bold">AN EVENING IN SAGE</h1>
          <p className=" text-xl font-bold mt-7">10.02.2024</p>
        </div>

        <div className="sm:w-[600px] w-[95%] m-auto mt-6">
          <div className="flex items-center justify-end text-white">
            <h1 className="font-medium">PLUS ONE</h1>
            <div
              className="w-5 ml-3 h-5 border border-white flex justify-center items-center cursor-pointer"
              onClick={() => {
                setGuest(!guest);
              }}
            >
              {guest && <IoCheckmark />}
            </div>
          </div>
          <div className="flex text-white mt-4 text-lg justify-between">
            <label htmlFor="text">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[90%] outline-none bg-transparent border-white border-b-4 ml-2"
            />
          </div>

          <div className="flex text-white text-lg mt-8 justify-between">
            <label htmlFor="text">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[90%] outline-none bg-transparent border-white border-b-4 ml-2"
            />
          </div>

          <div className="flex text-white text-lg mt-8 justify-between">
            <label htmlFor="text">Tel:</label>
            <input
              type="text"
              value={telePhone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-[90%] outline-none bg-transparent border-white border-b-4 ml-2"
            />
          </div>

          {/* dietary  */}

          <div className="mt-10">
            <h1 className="text-center text-white text-xl font-light">
              Dietary Requirements
            </h1>
            <div className="phone:flex justify-end">
              <textarea
                name=""
                id=""
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                cols={30}
                rows={5}
                className="resize-none mt-2 w-full outline-none p-3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* for guest  */}
      {guest && (
        <div>
          <div className="text-center text-white tracking-[1px] pt-16">
            <h1 className="text-3xl font-bold">AN EVENING IN SAGE</h1>
            <p className=" text-xl font-bold mt-7">10.02.2024</p>
          </div>

          <div className="sm:w-[600px] w-[95%] m-auto mt-6">
            <div className="flex text-white mt-4 text-lg justify-between">
              <label htmlFor="text">Name:</label>
              <input
                type="text"
                value={guest_name}
                onChange={(e) => guest_setName(e.target.value)}
                className="w-[90%] outline-none bg-transparent border-white border-b-4 ml-2"
              />
            </div>

            <div className="flex text-white text-lg mt-8 justify-between">
              <label htmlFor="text">Email:</label>
              <input
                type="text"
                value={guest_email}
                onChange={(e) => guest_setEmail(e.target.value)}
                className="w-[90%] outline-none bg-transparent border-white border-b-4 ml-2"
              />
            </div>

            <div className="flex text-white text-lg mt-8 justify-between">
              <label htmlFor="text">Tel:</label>
              <input
                type="text"
                value={guest_telePhone}
                onChange={(e) => guest_setTelephone(e.target.value)}
                className="w-[90%] outline-none bg-transparent border-white border-b-4 ml-2"
              />
            </div>

            {/* dietary  */}

            <div className="mt-10">
              <h1 className="text-center text-white text-xl font-light">
                Dietary Requirements
              </h1>
              <div className="phone:flex justify-end">
                <textarea
                  name=""
                  id=""
                  value={guest_diet}
                  onChange={(e) => guest_setDiet(e.target.value)}
                  cols={30}
                  rows={5}
                  className="resize-none mt-2 w-full outline-none p-3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-36 mt-10 m-auto pb-10">
        <button className="w-full" onClick={() => submitHandler()}>
          <div className="bg-white py-2 text-[#9BB493] text-lg w-full font-semibold text-center">
            SEND
          </div>
        </button>
      </div>
    </main>
  );
}

export default RSVP;
