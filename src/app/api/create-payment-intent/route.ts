import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);

  try {
    const { amount } = await request.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({clientSecret:paymentIntent.client_secret})
  } catch (error) {
    console.log("Internal server error: ",error)
    return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
  }
}
