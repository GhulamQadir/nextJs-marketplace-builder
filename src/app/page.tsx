import HeroComponent from "../components/HeroComponent";
import FeaturedProduct from "../components/FeaturedProduct";
import { nanoid } from "nanoid";
import LatestProduct from "@/components/LatestProd";
import WhatWeOffer from "@/components/WhatWeOffer";
import UniqueFeaturesBanner from "@/components/UniqueFeaturesBanner";
import DiscountItem from "@/components/DiscountItem";
import LatestNewsBlog from "@/components/LatestNewsBlog";
import Image from "next/image";
import BrandsImg from "@/assets/brands.png";

export default function Home() {
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
