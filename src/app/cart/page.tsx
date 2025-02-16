"use client";
import CartCard from "@/components/CartCard";
import { useUser } from "@clerk/clerk-react";
import { CartContext } from "@/context/CartContext";
import { CartTotalT, TProduct } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartTotal from "@/components/CartTotal";

function Cart() {
  const { cartData, setCartData } = useContext(CartContext);
  const { user } = useUser();
  const [totals, setTotals] = useState<CartTotalT>({
    subTotal: 0,
    gst: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const cartTotal = calculateCartTotal();
    setTotals(cartTotal);
  }, [cartData]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("cart") || "{}");
    setCartData(getData);
  }, []);

  const increaseQuantity = (prodKey: string) => {
    const newCartData = { ...cartData };
    newCartData[prodKey] = {
      ...newCartData[prodKey],
      quantity: newCartData[prodKey].quantity + 1,
    };
    setCartData(newCartData);
    localStorage.setItem("cart", JSON.stringify(newCartData));
  };

  if (!user)
    return (
      <div className="flex justify-center my-36">
        <p className="text-2xl">
          Please Sign in to start shopping{" "}
          <Link href={"/sign-in"} className="text-blue-800 underline">
            Sign In
          </Link>
        </p>
      </div>
    );

  const decreaseQuantity = (prodKey: string) => {
    if (cartData[prodKey].quantity > 1) {
      const newCartData = { ...cartData };
      newCartData[prodKey] = {
        ...newCartData[prodKey],
        quantity: newCartData[prodKey].quantity - 1,
      };
      setCartData(newCartData);
      localStorage.setItem("cart", JSON.stringify(newCartData));
    } else if (cartData[prodKey].quantity > 0) {
      const newCartData = { ...cartData };
      delete newCartData[prodKey];
      setCartData(newCartData);
      localStorage.setItem("cart", JSON.stringify(newCartData));
    }
  };

  const calculateCartTotal = (): CartTotalT => {
    let subTotal: number = 0;
    const salesTaxRate: number = 10;
    for (const { price, quantity } of Object.values(cartData)) {
      subTotal += price * quantity;
    }
    const gst: number = (subTotal * salesTaxRate) / 100;
    const grandTotal: number = subTotal + gst;
    return { subTotal, gst, grandTotal };
  };

  return (
    <div className="lg:px-7 my-7">
      {Object.values(cartData)?.length > 0 ? (
        Object.values(cartData).map((prod: TProduct) => {
          return (
            <CartCard
              key={prod.slug}
              product={prod}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center my-36">
          <p className="text-3xl font-bold">
            Your Cart is Empty{" "}
            <Link
              href="/"
              className="text-2xl font-medium text-blue-900 underline"
            >
              Start Shopping
            </Link>
          </p>
          <MdOutlineRemoveShoppingCart className="mt-4" size={100} />
        </div>
      )}
      {Object.keys(cartData).length > 0 && <CartTotal cartTotal={totals} />}
    </div>
  );
}
export default Cart;
