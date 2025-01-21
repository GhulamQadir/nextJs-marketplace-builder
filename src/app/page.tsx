import HeroComponent from "../components/HeroComponent";
import {
  featuredProducts,
  latestProducts,
  topCategories,
  trendingProducts,
} from "../data/data";
import FeaturedProduct from "../components/FeaturedProduct";
import { nanoid } from "nanoid";
import LatestProduct from "@/components/LatestProd";
import WhatWeOffer from "@/components/WhatWeOffer";
import UniqueFeaturesBanner from "@/components/UniqueFeaturesBanner";
import TrendingProdCard from "@/components/TrendingProdCard";
import DiscountItem from "@/components/DiscountItem";
import TopCategProdCard from "@/components/TopCategProCard";
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
      <div className="mt-10">
        <div className="mb-5 text-center">
          <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
            Trending Products
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 mt-5">
          {trendingProducts.map((prod) => {
            return <TrendingProdCard key={nanoid()} product={prod} />;
          })}
        </div>
      </div>
      <DiscountItem />
      <div className="mt-10">
        <div className="mb-5 text-center">
          <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
            Top Categories
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 mt-8 mb-5">
          {topCategories.map((prod) => {
            return <TopCategProdCard key={nanoid()} product={prod} />;
          })}
        </div>
        <div className="flex justify-center gap-x-3 mb-4">
          <div className="bg-[#FB2E86] w-2 h-2 rounded-full"></div>
          <div className="border-2 border-[#FB2E86] w-2 h-2 rounded-full"></div>
          <div className="border-2 border-[#FB2E86] w-2 h-2 rounded-full"></div>
        </div>
      </div>
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
