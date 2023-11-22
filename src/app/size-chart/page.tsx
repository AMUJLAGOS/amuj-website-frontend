/* eslint-disable @next/next/no-img-element */
//

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import React from "react";

function SizeChart() {
  return (
    <main>
      <Header />
      <section className="text-center w-[650px] m-auto mt-12">
        <h1 className="text-lg font-bold">SIZE CHART</h1>
        <img src="size_chart.png" alt="size chart" className="mt-10" />
      </section>
      <Spacer height={100} />
      <Footer />
      <Spacer height={100} />
    </main>
  );
}

export default SizeChart;
