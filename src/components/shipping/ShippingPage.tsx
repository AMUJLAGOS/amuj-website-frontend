//

"use client";
import React, { useEffect, useState } from "react";
import { shipping } from "@/utils/shipping_content";
import FaqsContainer from "@/components/FaqsContainer";

function ShippingPage() {
  const [currentOpen, setCurrentOpen]: any = useState(null);
  const [data, setData]: any = useState([]);
  useEffect(() => {
    setData(shipping);
  }, []);
  return (
    <section className=" md:w-[700px] w-[90%] m-auto mt-12">
      <h1 className="md:text-lg text-sm font-bold text-center">
        SHIPPING & RETURNS
      </h1>
      {/* first */}
      <div className="mt-10">
        {data?.map((obj: any, index: number) => (
          <FaqsContainer
            key={index}
            id={obj.id}
            currentOpen={currentOpen}
            setCurrentOpen={setCurrentOpen}
            title={obj.title}
          >
            <div
              className="text-xs leading-[20px]"
              dangerouslySetInnerHTML={{ __html: obj.answer }}
            ></div>
          </FaqsContainer>
        ))}
      </div>
    </section>
  );
}

export default ShippingPage;
