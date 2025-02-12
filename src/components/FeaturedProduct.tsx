"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { nanoid } from "nanoid";
import Link from "next/link";
import { TProduct, TSnackBar } from "@/types/types";
import LoadingSkeleton from "./LoadingSkeleton";
import SnackBarComponent from "./SnackBar";
import { CartContext } from "@/context/CartContext";
import { addToCart, handleCloseSnackBar } from "../../utils/utils";

function FeaturedProduct() {
  const [featuredProducts, setFeaturedProducts] = useState<TProduct[] | []>([]);
  const { cartData, setCartData } = useContext(CartContext);
  const [snackBarState, setSnackBarState] = useState<TSnackBar>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    snackBarMessage: "Product added to cart!",
  });

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

  return (
    <div className="text-center my-12">
      <SnackBarComponent
        snackBarState={snackBarState}
        handleClose={() =>
          handleCloseSnackBar({ snackBarState, setSnackBarState })
        }
      />
      <div className="mb-3">
        <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
          Featured Products
        </p>
      </div>

      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="flex flex-wrap justify-center gap-x-4 mt-5 lg:w-3/4 m-auto">
          {featuredProducts?.map((product: TProduct) => {
            const { name, price, image, slug } = product;
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
                  onClick={() =>
                    addToCart({
                      product,
                      cartData,
                      setCartData,
                      snackBarState,
                      setSnackBarState,
                    })
                  }
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
