"use client";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import CheckOutComp from "@/components/CheckOut";

// if (process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY == undefined) {
//   throw new Error("public key not defined");
// }
function CheckOut() {
  const { user } = useUser();
  const router = useRouter();
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      );
      setStripePromise(stripe);
    };

    initializeStripe();
  }, []);
  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user]);

  const amount: number = 42.33;
  return (
    <div>
      <p className="text-3xl font-bold">Checkout page</p>
      <div className="mt-10">
        <p className="text-3xl">Amount: {amount}</p>
      </div>
      {stripePromise && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: amount * 100,
            currency: "usd",
          }}
        >
          <CheckOutComp amount={amount} />
        </Elements>
      )}
    </div>
  );
}
export default CheckOut;
