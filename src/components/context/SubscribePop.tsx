//
"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type PopContextType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  closePop: () => void;
};

export const PopContext = createContext<PopContextType>({} as PopContextType);

function SubscribePopProvider({ children }: any) {
  const [show, setShow] = useState<boolean>(false);
  const currentTime: any = new Date().getTime();

  const closePop = () => {
    setShow(false);
    localStorage.setItem("lastPopupShown", currentTime);
  };

  useEffect(() => {
    const lastPopupShown: any = localStorage.getItem("lastPopupShown");

    const oneDayInMillis = 24 * 60 * 60 * 1000;

    if (!lastPopupShown || currentTime - lastPopupShown > oneDayInMillis) {
      setTimeout(() => {
        setShow(true);
      }, 5000);
    }
  }, []);

  return (
    <PopContext.Provider value={{ show, setShow, closePop }}>
      {children}
    </PopContext.Provider>
  );
}

export default SubscribePopProvider;

export const usePop = () => useContext(PopContext);
