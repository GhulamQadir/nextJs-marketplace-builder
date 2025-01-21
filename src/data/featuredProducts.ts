"use client";
import { client } from "../sanity/lib/client";

interface TProduct {
  title: string;
  code: string;
  price: number;
  image: string;
}

export const fetchFeaturedProd = async () => {
  const data: any = await client.fetch(
    `*[_type == 'product' && isFeaturedProduct]{
      name,
      price,
      description,  
      "image": image.asset->url,
    }`
  );
  return data;
};
