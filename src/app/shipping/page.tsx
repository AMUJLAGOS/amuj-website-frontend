/* eslint-disable @next/next/no-img-element */
//
"use client";
import FaqsContainer from "@/components/FaqsContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import { GetRequest } from "@/utils/urlhandler";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Shipping() {
  const [currentOpen, setCurrentOpen]: any = useState(null);
  const [data, setData]: any = useState([]);
  const getData = async () => {
    const response = await GetRequest("shipping_policies");
    console.log(response);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <section className=" md:w-[700px] w-[90%] m-auto mt-12">
        <h1 className="md:text-lg text-sm font-bold text-center">FAQs</h1>
        {/* first */}

        {data?.map((obj: any, index: number) => (
          <FaqsContainer
            key={index}
            id={obj.id}
            currentOpen={currentOpen}
            setCurrentOpen={setCurrentOpen}
            title={obj.title}
          >
            <div
              className="text-xs"
              dangerouslySetInnerHTML={{ __html: obj.answer }}
            ></div>
          </FaqsContainer>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default Shipping;
