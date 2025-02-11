import { SnackFunctionT, CartDataSetterT } from "@/types/types";

const openSnackBar = ({
  message,
  setSnackBarState,
  snackBarState,
}: SnackFunctionT) => {
  setSnackBarState({
    ...snackBarState,
    open: true,
    snackBarMessage: message,
  });
};

const handleCloseSnackBar = ({
  snackBarState,
  setSnackBarState,
}: SnackFunctionT) => {
  setSnackBarState({ ...snackBarState, open: false });
};

const add = ({
  product,
  cartData,
  setCartData,
  snackBarState,
  setSnackBarState,
}: CartDataSetterT) => {
  const newCartData = { ...cartData };
  if (newCartData[product.name]) {
    newCartData[product.name] = {
      ...newCartData[product.name],
      quantity: newCartData[product.name].quantity + 1,
    };
    setCartData(newCartData);
    openSnackBar({
      message: "Product Quantity Increased",
      setSnackBarState,
      snackBarState,
    });
  } else {
    newCartData[product.name] = { ...product, quantity: 1 };
    setCartData(newCartData);
    openSnackBar({
      message: "Product Added to Cart",
      setSnackBarState,
      snackBarState,
    });
  }
  localStorage.setItem("cart", JSON.stringify(newCartData));
};

export { add, handleCloseSnackBar };
