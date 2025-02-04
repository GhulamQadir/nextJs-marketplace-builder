"use client";
import { CartContext } from "@/context";
import { TProduct } from "@/types/types";
import Image from "next/image";
import { useContext, useEffect } from "react";
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
  };

  const decreaseQuantity = (prodKey: string) => {
    if (cartData[prodKey].quantity > 1) {
      const newCartData = { ...cartData };
      newCartData[prodKey] = {
        ...newCartData[prodKey],
        quantity: newCartData[prodKey].quantity - 1,
      };
      setCartData(newCartData);
    } else if (cartData[prodKey].quantity > 0) {
      const newCartData = { ...cartData };
      delete newCartData[prodKey];
      setCartData(newCartData);
    }
  };
  return (
    <div className="lg:px-7 my-7">
      {Object.values(cartData).map((prod: TProduct) => {
        const { name, price, image, slug, quantity } = prod;
        return (
          <div className="flex flex-wrap items-center justify-around my-4 border-t-[1px] border-gray-300 py-4">
            <div className="w-[300px] flex items-center gap-x-2">
              <Image src={image} height={80} width={120} alt={slug} />
              <p className="font-bold">{name}</p>
            </div>
            <div className="w-[80px]">
              <p className="font-bold">${price}</p>
            </div>
            <div className="w-[150px] flex justify-center items-center gap-x-2">
              <button
                onClick={() => decreaseQuantity(name)}
                className="border-[2px] border-red-400 rounded-full px-[5px] h-[19px] font-bold flex items-center"
              >
                -
              </button>
              <p className="text-sm">{quantity}</p>
              <button
                onClick={() => increaseQuantity(name)}
                className="border-[2px] border-green-800 rounded-full px-[5px] h-[19px] font-bold flex items-center"
              >
                +
              </button>
            </div>
            <div className="w-[90px]">
              <p className="font-bold">${price * quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
