import { FaqContainer } from "@/utils/dataType";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FaqsContainer({
  id,
  currentOpen,
  setCurrentOpen,
  children,
  title,
}: FaqContainer) {
  const isVisible = currentOpen === id;
  const toggleVisibility = () => {
    setCurrentOpen(isVisible ? null : id);
  };
  return (
    <div
      className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.09)] p-5 text-sm mt-7"
      onClick={toggleVisibility}
    >
      <div className="flex justify-between cursor-pointer font-semibold">
        <h1 className="font-bold text-xs uppercase">{title}</h1>
        <button>
          {!isVisible ? (
            <AiOutlinePlus size={17} />
          ) : (
            <AiOutlineMinus size={17} />
          )}
        </button>
      </div>
      {isVisible && <div className="mt-5 font-light">{children}</div>}
    </div>
  );
}

export default FaqsContainer;
