//
import React from "react";
import { usePaystackPayment } from "react-paystack";

const key: any = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
function Paystack({ email, amount, successful, payRef }: any) {
  // payment paystack
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100,
    publicKey: key,
  };

  const onSuccess: any = (reference: any) => {
    console.log(reference);
    successful(true);
    payRef(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => initializePayment(onSuccess, onClose)}
        className="mt-7 bg-black text-white phone:w-auto w-full sm:py-4 phone:px-28 py-5 text-sm phone:text-base"
      >
        Continue to Payment
      </button>
    </div>
  );
}

export default Paystack;
