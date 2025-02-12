"use client";

import { useState } from "react";
import { CartContext } from "@/context/CartContext";
import { TSnackBar, TProduct } from "@/types/types";

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartData, setCartData] = useState<{ [key: string]: TProduct }>({});
  const [snackBarState, setSnackBarState] = useState<TSnackBar>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    snackBarMessage: "",
  });

  return (
    <CartContext.Provider
      value={{ cartData, setCartData, snackBarState, setSnackBarState }}
    >
      {children}
    </CartContext.Provider>
  );
}
