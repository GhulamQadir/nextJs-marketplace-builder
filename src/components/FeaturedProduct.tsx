"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { nanoid } from "nanoid";
import Link from "next/link";
import { TProduct } from "@/types/types";
import LoadingSkeleton from "./LoadingSkeleton";
import { useContext } from "react";
import { CartContext } from "@/context";
function FeaturedProduct() {
  const { cartData, setCartData } = useContext(CartContext);
  const [featuredProducts, setFeaturedProducts] = useState<TProduct[] | []>([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const data = await client.fetch(
        `*[_type == 'product' && isFeaturedProduct]{name, price, description, "slug":slug.current, "image": image.asset->url,}`
      );
      setFeaturedProducts(data);
      setLoading(false);
    };
    fetchFeaturedProducts();
  }, []);

  const addToCart = (product: TProduct) => {
    const prevCartData = { ...cartData };
    if (prevCartData[product.name]) {
      prevCartData[product.name] = {
        ...prevCartData[product.name],
        quantity: prevCartData[product.name].quantity + 1,
      };
      setCartData(prevCartData);
    } else {
      prevCartData[product.name] = { ...product, quantity: 1 };
      setCartData(prevCartData);
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  return (
    <div className="text-center my-12">
      <div className="mb-3">
        <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
          Featured Products
        </p>
      </div>

      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="flex flex-wrap justify-center gap-x-4 mt-5 lg:w-3/4 m-auto">
          {featuredProducts?.map((prod: TProduct) => {
            const { name, price, image, slug } = prod;
            return (
              <div key={nanoid()} className="shadow-lg rounded-xl mb-6">
                <Link href={`products/${slug}`}>
                  <div className="h-[180px] w-[260px] bg-[#f2f4f9] flex items-center justify-center">
                    <Image
                      src={image}
                      alt={name}
                      height={200}
                      width={200}
                      priority
                      className="h-[130px] w-[130px]"
                    />
                  </div>
                  <div className="mt-1 py-1">
                    <p className="text-[#FB2E86] text-lg">{name}</p>
                    <div className="flex justify-center gap-x-2 mt-2">
                      <div className="w-4 h-[5px] bg-[#05E6B7] rounded-lg"></div>
                      <div className="w-3 h-[5px] bg-[#FB2E86] rounded-lg"></div>
                      <div className="w-3 h-[5px] bg-[#00009D] rounded-lg"></div>
                    </div>
                    <p className="font-josefin mt-1">${price}.00</p>
                  </div>
                </Link>
                <button
                  onClick={() => addToCart(prod)}
                  className="bg-[#FB2E86] h-[30px] px-[10px] my-1 text-white"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default FeaturedProduct;
