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
import { useContext, useEffect } from "react";

export default function Home() {
  const { cartData, setCartData } = useContext(CartContext);

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart") || "{}");
    console.log("getCart", getCart);
    setCartData(getCart);
    console.log("cart data", cartData);
  }, []);
  return (
    <div>
      <HeroComponent />
      <FeaturedProduct />
      <LatestProduct />

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
