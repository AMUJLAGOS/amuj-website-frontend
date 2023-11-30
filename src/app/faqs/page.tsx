/* eslint-disable @next/next/no-img-element */
//
"use client";
import FaqsContainer from "@/components/FaqsContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Faqs() {
  const [currentOpen, setCurrentOpen]: any = useState(null);
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <section className=" md:w-[700px] w-[90%] m-auto mt-12">
        <h1 className="md:text-lg text-sm font-bold text-center">FAQs</h1>
        {/* first */}
        <FaqsContainer
          id={1}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"How do I know if my order has been placed successfully?"}
        >
          <h1>
            You will receive an automatic email letting you know your order has
            been placed and processed. Once your order has been sent to you, you
            will receive an email from the courier company with your tracking
            details to follow up your shipment
          </h1>
        </FaqsContainer>

        {/* second */}
        <FaqsContainer
          id={2}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"Can I fast track my order?"}
        >
          <h1>We offer various delivery options within Nigeria;</h1>
          <h1>Standard delivery, Next day delivery, and Special Delivery.</h1>
          <h1>
            However, you can not fast-track your order after it has been placed.
          </h1>
        </FaqsContainer>

        {/* third */}
        <FaqsContainer
          id={3}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"How do I return an item for refund?"}
        >
          <h1>
            We’re happy to accept returns on items that have been unworn with
            ALL labels still intact, unwashed, and unsoiled. To return any items
            please refer to our{" "}
            <span className="border-b border-black font-medium">
              {" "}
              <Link href={""}>return policy</Link>
            </span>
          </h1>
          <p className="font-bold">
            Please note; Custom orders can not be returned
          </p>
        </FaqsContainer>

        {/* fourth */}
        <FaqsContainer
          id={4}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"Can I change my order and add other products or remove them?"}
        >
          <h1>
            Unfortunately not. Each order is processed automatically and once it
            has been confirmed, it is not possible to modify the order. To
            purchase additional items, you must place a new order. To return any
            items please refer to our
            <span className="border-b border-black font-medium">
              {" "}
              <Link href={""}>return policy</Link>
            </span>
          </h1>
        </FaqsContainer>

        {/* fifth */}
        <FaqsContainer
          id={5}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"Can I place a custom order?"}
        >
          <h1>
            Yes, you can place a{" "}
            <span className="border-b border-black font-medium">
              <Link href={""}>custom</Link>
            </span>{" "}
            order with minor adjustments to the bust, waist, hip, and length
            measurements. Full custom orders and custom adjustments to existing
            products (colour and design) are only made for existing customers
            and exclusive members only.
          </h1>
        </FaqsContainer>

        {/* sixth */}
        <FaqsContainer
          id={6}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"Do you ship internationally?"}
        >
          <h1>
            Yes, you can place a{" "}
            <span className="border-b border-black font-medium">
              <Link href={""}>custom</Link>
            </span>{" "}
            Yes, we ship all over the world. International orders are delivered
            within 7-10 working days, please check the product description for
            delivery rates.
          </h1>
        </FaqsContainer>

        {/* seventh */}
        <FaqsContainer
          id={7}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"What is the amuj community?"}
        >
          <h1>
            Yes, you can place a{" "}
            <span className="border-b border-black font-medium">
              <Link href={""}>custom</Link>
            </span>{" "}
            The AMUJ Community is a community that celebrates the femininities &
            stories of women, emphasising their beauty, confidence, and allure
            through the brand. AMUJ infuses the experiences and essences of
            women to continually make them feel sexy and confident, and the
            Community is where we celebrate this approach.
          </h1>
        </FaqsContainer>

        {/* eighth */}
        <FaqsContainer
          id={8}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"Who can join the community?"}
        >
          <h1>
            Anyone can join the AMUJ Community. AMUJ was born with the goal of
            encouraging women to be more confident and take up space. Anyone who
            shares this ideology is welcome to join!
          </h1>
        </FaqsContainer>

        {/* ninth */}
        <FaqsContainer
          id={9}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"What benefits do members enjoy?"}
        >
          <h1>
            As part of our vibrant community, you learn about the amazing
            stories of AMUJ women while telling yours. You also enjoy a wide
            range of exclusive services, insider gists, exclusive updates,
            events and releases.
          </h1>
        </FaqsContainer>

        {/* tenth */}
        <FaqsContainer
          id={10}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          title={"How do I join the community?"}
        >
          <h1>
            Joining is simple! Click the link in our bio to subscribe and be a
            part of our community!
          </h1>
        </FaqsContainer>
      </section>
      <Spacer height={140} />
      <Footer />
      <Spacer height={100} />
    </main>
  );
}

export default Faqs;
