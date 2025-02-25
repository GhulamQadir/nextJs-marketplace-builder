export interface TProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  quantity: number;
}

export interface TSnackBar {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  snackBarMessage: string;
}

export interface CartTotalT {
  subTotal: number;
  gst: number;
  grandTotal: number;
}

export interface SearchFieldProps {
  searchProduct: (value: string) => void;
}

export interface SearchFuncT {
  searchVal: string;
  products: TProduct[];
  setProducts: React.Dispatch<
    React.SetStateAction<TProduct[] | []>
  >;
}

export interface CartDataSetterT {
  product: TProduct;
  cartData: { [key: string]: TProduct };
  setCartData: React.Dispatch<
    React.SetStateAction<{ [code: string]: TProduct }>
  >;
  snackBarState: TSnackBar;
  setSnackBarState: React.Dispatch<React.SetStateAction<TSnackBar>>;
}

export interface OpenSnackT {
  message: string;
  setSnackBarState: React.Dispatch<React.SetStateAction<TSnackBar>>;
  snackBarState: TSnackBar;
}

export interface CloseSnackT {
  setSnackBarState: React.Dispatch<React.SetStateAction<TSnackBar>>;
  snackBarState: TSnackBar;
}
