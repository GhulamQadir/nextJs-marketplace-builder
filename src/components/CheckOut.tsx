import { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function CheckOutComp({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(process.env.STRIPE_SECRET_KEY);

  useEffect(() => {
    // fetch("/api/create-payment-intent", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ amount: amount * 100 }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data=>", data);
    //     setClientSecret(data.clientSecret);
    //   });
    async function createPaymentIntent() {
      try {
        setLoading(true);
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: Math.round(amount * 100) }), // Ensure amount is integer
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
        setErrorMessage(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }
    createPaymentIntent();
  }, [amount]);
  return (
    <div className="w-[60%] mx-auto">
      {clientSecret && <PaymentElement />}
      <button className="text-white bg-black p-2">Pay now</button>
    </div>
  );
}
export default CheckOutComp;
