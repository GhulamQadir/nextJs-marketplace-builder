import { TProduct } from "@/types/types";
import { createContext } from "react";

interface CartContextT {
  cartData: { [key: string]: TProduct };
  setCartData: React.Dispatch<
    React.SetStateAction<{ [code: string]: TProduct }>
  >;
}

export const CartContext = createContext<CartContextT>({
  cartData: {}, 
  setCartData: () => {},
});
