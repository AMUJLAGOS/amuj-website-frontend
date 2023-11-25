//
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import React from "react";

function CustomOrders() {
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <section className="text-center w-[650px] m-auto mt-12">
        <h1 className="text-lg font-bold">CUSTOM ORDERS</h1>
        <p className="mt-9 text-sm">
          Most styles can be reproduced with minor adjustments made to existing
          size ranges including bust, waist, hips, and length measurements.
        </p>
        <p className="mt-5 text-sm">
          In order to commission a customised order please email{" "}
          <span className="border-b border-black font-bold">
            info@amujofficial.com
          </span>{" "}
          before making your purchase to confirm that the item you are
          interested in can be customised.
        </p>

        <p className="mt-5 text-sm font-bold">
          Custom orders can take up to 1-2 weeks (excluding delivery time) and
          can not be returned or exchanged. Depending on the customisation
          additional charges may apply.
        </p>
      </section>
      <Spacer height={140} />
      <Footer />
      <Spacer height={100} />
    </main>
  );
}

export default CustomOrders;
