import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { RxCross2 } from "react-icons/rx";
import { useCurrency } from "./CurrencyContext";

function ShowStripe({ close, amount, succesful, payRef }: any) {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

  const { currency } = useCurrency();
  const options: any = {
    mode: "payment",
    amount: Math.round(amount * 100),

    currency: currency?.code.toLocaleLowerCase(),

    appearance: {
      /*...*/
    },
  };

  return (
    <main className=" bg-[#0000006f] w-full h-full top-0 left-0 z-[50] flex justify-center items-center fixed">
      <div className="bg-white flex items-center pt-5 p-10 justify-center w-[500px] relative">
        <button onClick={() => close(false)} className="absolute top-5 right-6">
          <RxCross2 size={20} />
        </button>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm amount={amount} succesful={succesful} payRef={payRef} />
        </Elements>
      </div>
    </main>
  );
}

export default ShowStripe;
