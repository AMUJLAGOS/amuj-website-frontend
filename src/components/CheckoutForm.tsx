//

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PostRequest } from "@/utils/urlhandler";
import { useCurrency } from "./CurrencyContext";

function CheckoutForm({ amount, succesful, payRef }: any) {
  const stripe: any = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage]: any = useState(null);
  const { currency } = useCurrency();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const res = await PostRequest("create-intent", {
      amount: Math.round(amount * 100),
      currency: currency?.code.toLocaleLowerCase(),
    });
    // console.log(res.data);
    const { client_secret: clientSecret } = res.data;

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // return_url: "http://localhost:3333/checkout",
        return_url: "https://example.com",
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      succesful(true);
      payRef(paymentIntent.created);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        className="mt-7 bg-black text-white w-full py-4"
        disabled={!stripe || !elements}
      >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && (
        <div className="text-red-600 text-center">{errorMessage}</div>
      )}
    </form>
  );
}

export default CheckoutForm;
