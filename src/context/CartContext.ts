import { TProduct, TSnackBar } from "@/types/types";
import { createContext } from "react";

interface CartContextT {
  cartData: { [key: string]: TProduct };
  setCartData: React.Dispatch<
    React.SetStateAction<{ [key: string]: TProduct }>
  >;
  snackBarState: TSnackBar;
  setSnackBarState: React.Dispatch<React.SetStateAction<TSnackBar>>;
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
