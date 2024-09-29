//

import ShippingPage from "@/components/shipping/ShippingPage";
import React from "react";
import { RxCross2 } from "react-icons/rx";

function Shipping({ showFunc, show }: { showFunc: () => void; show: boolean }) {
  return (
    <div
      className={`fixed bg-white w-full h-screen top-0 z-[2000] ${
        show ? "left-0 opacity-100" : "left-[1500px] opacity-0"
      } transitioncss`}
    >
      <div className="flex justify-end phone:p-10 p-5 phone:mr-10">
        <button
          onClick={showFunc}
          className="text-[18px] right-5 top-3 flex items-center border-[1.8px] border-black p-1 rounded-[50%]"
        >
          <RxCross2 />
        </button>
      </div>
      <ShippingPage />
    </div>
  );
}

export default Shipping;
