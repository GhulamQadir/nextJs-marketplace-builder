"use client";

import { useState } from "react";
import { CartContext } from "../context";
import { TProduct } from "@/types/types";

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartData, setCartData] = useState<{ [code: string]: TProduct }>({});

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
}
