"use client";
import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useContext, useState } from "react";
import { addToCart, handleCloseSnackBar } from "../../utils/utils";
import { CartContext } from "@/context/CartContext";
import { TProduct } from "@/types/types";
import SnackBarComponent from "./SnackBar";

interface ViewProductT {
  name: string;
  price: number;
  image: string;
  description: string;
  stockLevel: number;
}

function ViewProduct({ slug }: { slug: string }) {
  const [data, setProdData] = useState<ViewProductT[] | null>(null);
  const { cartData, setCartData, snackBarState, setSnackBarState } =
    useContext(CartContext);

  useEffect(() => {
    const fetchProd = async () => {
      const prodData = await client.fetch(
        `*[_type=="product" && slug.current=="${slug}"]
        { name, "image":image.asset->url, price, description, stockLevel}`
      );
      setProdData(prodData);
    };
    fetchProd();
  }, []);
  if (!data) {
    return <ProductDetailsSkeleton />;
  }
  const { name, image, price, description, stockLevel } = data[0];
  const product: TProduct = {
    name: name,
    image: image,
    price: price,
    description: description,
    slug: slug,
    quantity: 1,
  };
  return (
    <div className="my-8 flex flex-wrap gap-x-4">
      <SnackBarComponent
        snackBarState={snackBarState}
        handleClose={() =>
          handleCloseSnackBar({ snackBarState, setSnackBarState })
        }
      />
      <div>
        <Image
          src={image}
          height={550}
          width={500}
          alt={name}
          priority
          className="lg:w-[450px] lg:h-[500px] md:h-[400px] md:w-[350px] h-[250px] w-[250px]"
        />
      </div>
      <div className="px-1 md:mt-6 mt-3">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">{name}</p>
        <p className="my-2 font-bold text-gray-500">
          $<span className="text-lg md:text-xl text-black">{price}.00</span>
        </p>
        <p className="text-sm my-2">{stockLevel} items left in stock</p>
        {description && <p className="text-lg">{description}</p>}
        <div className="flex justify-center w-full mt-7">
          <button
            className="bg-[#FB2E86] h-[30px] px-[10px] text-white"
            onClick={() =>
              addToCart({
                product ,
                cartData,
                setCartData,
                snackBarState,
                setSnackBarState,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ViewProduct;
