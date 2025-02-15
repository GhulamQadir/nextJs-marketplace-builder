import { OpenSnackT, CartDataSetterT, CloseSnackT } from "@/types/types";

const openSnackBar = ({
  message,
  setSnackBarState,
  snackBarState,
}: OpenSnackT) => {
  setSnackBarState({
    ...snackBarState,
    open: true,
    snackBarMessage: message,
  });
};

const handleCloseSnackBar = ({
  snackBarState,
  setSnackBarState,
}: CloseSnackT) => {
  setSnackBarState({ ...snackBarState, open: false });
};

const handleCart = ({
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
    console.log("newCartData", newCartData);
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

export { handleCart, handleCloseSnackBar };
