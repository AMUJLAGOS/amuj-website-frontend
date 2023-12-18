//
"use client";
import { Currency } from "@/utils/dataType";
import React, { createContext, useContext, useEffect, useState } from "react";

type CurrentContextType = {
  currency: Currency | undefined;
  setCurrency: React.Dispatch<React.SetStateAction<any>>;
};
export const CurrencyContexxt = createContext<CurrentContextType>(
  {} as CurrentContextType
);

const newCurrency: Currency = {
  name: "naira",
  code: "NGN",
  symbol: "₦",
};

function CurrencyContext({ children }: any) {
  const [currency, setCurrency] = useState<Currency>(newCurrency);
  return (
    <CurrencyContexxt.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContexxt.Provider>
  );
}

export default CurrencyContext;

export const useCurrency = () => useContext(CurrencyContexxt);
