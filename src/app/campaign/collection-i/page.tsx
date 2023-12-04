//

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

function Collection() {
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <div className="relative h-[550px] sm:w-full w-[90%]">
        <Image
          src={"/campaign1.png"}
          alt={""}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative h-[550px] sm:w-full w-[90%]">
        <Image
          src={"/campaign1.png"}
          alt={""}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </main>
  );
}

export default Collection;
