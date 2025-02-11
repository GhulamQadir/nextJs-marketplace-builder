"use client";

import { useState } from "react";
import { CartContext } from "../context";
import { SnackBarT, TProduct } from "@/types/types";

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartData, setCartData] = useState<{ [key: string]: TProduct }>({});
  const [snackBarState, setSnackBarState] = useState<SnackBarT>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    snackBarMessage: "Product added to cart!",
  });
  // const openSnackBar = (message: string) => {
  //   setSnackBarState({
  //     ...snackBarState,
  //     open: true,
  //     snackBarMessage: message,
  //   });
  // };
  return (
    <CartContext.Provider
      value={{ cartData, setCartData, snackBarState, setSnackBarState }}
    >
      {children}
    </CartContext.Provider>
  );
}
