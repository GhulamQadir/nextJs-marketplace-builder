import { TProduct } from "@/types/types";

interface CartDataSetterT {
  product: TProduct;
  cartData: { [key: string]: TProduct };
  setCartData: React.Dispatch<
    React.SetStateAction<{ [code: string]: TProduct }>
  >;
  // openSnackBar: (value: string) => void;
}

const add = ({
  product,
  cartData,
  setCartData,
  // openSnackBar,
}: CartDataSetterT) => {
  const newCartData = { ...cartData };
  if (newCartData[product.name]) {
    newCartData[product.name] = {
      ...newCartData[product.name],
      quantity: newCartData[product.name].quantity + 1,
    };
    setCartData(newCartData);
    // openSnackBar("Product Quantity Increased");
  } else {
    newCartData[product.name] = { ...product, quantity: 1 };
    setCartData(newCartData);
    // openSnackBar("Product added to Cart");
  }
  localStorage.setItem("cart", JSON.stringify(newCartData));
};

export default add;
