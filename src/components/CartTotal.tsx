import { CartTotalT } from "@/types/types";
import Link from "next/link";
import React from "react";

interface MyCartTotalT {
  cartTotal: CartTotalT;
}

function CartTotal({ cartTotal }: MyCartTotalT) {
  const { subTotal, gst, grandTotal } = cartTotal;
  return (
    <div className="flex flex-col justify-end items-end px-2 mt-3">
      <div className="flex w-[70%] lg:w-[20%] justify-between">
        <p className="text-lg font-bold">Subtotal: </p>
        <p className="text-lg font-bold">${subTotal}</p>
      </div>
      <div className="flex w-[70%] lg:w-[20%] justify-between">
        <p className="text-lg font-bold">Sales Tax:</p>
        <p className="text-lg font-bold">${gst}</p>
      </div>
      <div className="flex w-[70%] mt-2 lg:w-[20%] justify-between">
        <p className="text-2xl font-bold">Grand Total</p>
        <p className="text-xl font-bold">${grandTotal}</p>
      </div>
      <div className="w-[70%] lg:w-[20%] flex justify-center mt-4">
        <Link href={"/cart/checkout"}>
          <button className="bg-[#FB2E86] h-[30px] px-2 text-white">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
export default CartTotal;
