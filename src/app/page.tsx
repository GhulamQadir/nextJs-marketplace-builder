"use client";
import HeroComponent from "../components/HeroComponent";
import FeaturedProduct from "../components/FeaturedProduct";
import LatestProduct from "@/components/LatestProd";
import WhatWeOffer from "@/components/WhatWeOffer";
import UniqueFeaturesBanner from "@/components/UniqueFeaturesBanner";
import DiscountItem from "@/components/DiscountItem";
import LatestNewsBlog from "@/components/LatestNewsBlog";
import Image from "next/image";
import BrandsImg from "@/assets/brands.png";
import { CartContext } from "@/context";
import { useContext, useState, useEffect } from "react";
import { TProduct, SnackBarT } from "@/types/types";

export default function Home() {
  const { cartData, setCartData } = useContext(CartContext);
  const [snackBarState, setSnackBarState] = useState<SnackBarT>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    snackBarMessage: "Product added to cart!",
  });

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart") || "{}");
    setCartData(getCart);
  }, []);

  const openSnackBar = (message: string) => {
    setSnackBarState({
      ...snackBarState,
      open: true,
      snackBarMessage: message,
    });
  };

  const addToCart = (product: TProduct) => {
    const newCartData = { ...cartData };
    if (newCartData[product.name]) {
      newCartData[product.name] = {
        ...newCartData[product.name],
        quantity: newCartData[product.name].quantity + 1,
      };
      setCartData(newCartData);
      openSnackBar("Product Quantity Increased");
    } else {
      newCartData[product.name] = { ...product, quantity: 1 };
      setCartData(newCartData);
      openSnackBar("Product added to Cart");
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const handleCloseSnackBar = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  return (
    <div>
      <HeroComponent />
      <FeaturedProduct
        addToCart={addToCart}
        snackBarState={snackBarState}
        handleClose={handleCloseSnackBar}
      />
      <LatestProduct
        addToCart={addToCart}
        snackBarState={snackBarState}
        handleClose={handleCloseSnackBar}
      />

      <WhatWeOffer />
      <UniqueFeaturesBanner />

      <DiscountItem />

      <LatestNewsBlog />
      <div className="flex justify-center">
        <Image
          src={BrandsImg}
          alt="brands-img"
          className="lg:w-[70%] w-[97%] h-[80px]"
        />
      </div>
    </div>
  );
}
