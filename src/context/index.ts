import { TProduct } from "@/types/types";
import { createContext } from "react";

interface SnackBarT {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  snackBarMessage: string;
}
interface CartContextT {
  cartData: { [key: string]: TProduct };
  setCartData: React.Dispatch<
    React.SetStateAction<{ [key: string]: TProduct }>
  >;
  snackBarState: SnackBarT;
  setSnackBarState: React.Dispatch<React.SetStateAction<SnackBarT>>;
}

export const CartContext = createContext<CartContextT>({
  cartData: {},
  setCartData: () => {},
  snackBarState: {
    open: false,
    vertical: "bottom",
    horizontal: "right",
    snackBarMessage: "Product added to cart!",
  },
  setSnackBarState: () => {},
});
