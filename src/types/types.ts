export interface TProduct {
  name: string;
  code: string;
  price: number;
  image: string;
  slug: string;
  quantity: number;
}

export interface SnackBarT {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  snackBarMessage: string;
}
export interface CartSnackT {
  addToCart: (product: TProduct) => void;
  snackBarState: SnackBarT;
  handleClose: () => void;
}

export interface CartTotalT {
  subTotal: number;
  gst: number;
  grandTotal: number;
}
