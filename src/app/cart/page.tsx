"use client";
import CartCard from "@/components/CartCard";
import { CartContext } from "@/context";
import { TProduct } from "@/types/types";
import { useContext, useEffect, useMemo } from "react";
function Cart() {
  const { cartData, setCartData } = useContext(CartContext);
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

  const cartTotal = useMemo(() => {
    let total: number = 10;
    const salesTaxRate: number = 10;
    for (const { price, quantity } of Object.values(cartData)) {
      total += price * quantity;
    }
    const gst: number = (total * salesTaxRate) / 100;
    const grandTotal: number = total + gst;
    return { total, gst, grandTotal };
  }, [cartData]);

  return (
    <div className="lg:px-7 my-7">
      {Object.values(cartData)?.map((prod: TProduct) => {
        return (
          <CartCard
            key={prod.slug}
            product={prod}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      })}
      {Object.keys(cartData).length && (
        <div className="flex flex-col justify-end items-end px-2 mt-3">
          <div className="flex w-[70%] lg:w-[20%] justify-between">
            <p className="text-xl font-bold">Subtotal: </p>
            <p className="text-xl font-bold">{cartTotal.total}</p>
          </div>
          <div className="flex w-[70%] lg:w-[20%] justify-between">
            <p className="text-xl font-bold">Sales Tax:</p>
            <p className="text-xl font-bold">{cartTotal.gst}</p>
          </div>
          <div className="flex w-[70%] lg:w-[20%] justify-between">
            <p className="text-xl font-bold">Grand Total</p>
            <p className="text-xl font-bold">{cartTotal.grandTotal}</p>
          </div>
          <div className="w-[70%] lg:w-[20%] flex justify-center mt-4">
            <button className="bg-[#FB2E86] h-[30px] px-2 text-white">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
