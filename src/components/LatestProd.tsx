"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { AddToCartProdT, TProduct } from "@/types/types";
import { client } from "../sanity/lib/client";
import { nanoid } from "nanoid";
import { useUser } from "@clerk/clerk-react";
import Link from "next/link";
import LoadingSkeleton from "./LoadingSkeleton";
import SnackBarComponent from "./SnackBar";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { handleCart, handleCloseSnackBar } from "../../utils/utils";
import SearchField from "./SearchField";

function LatestProduct() {
  const [latestProducts, setLatestProducts] = useState<TProduct[] | null>(null);
  const [products, setProducts] = useState<TProduct[] | []>([]);

  const [isLoading, setLoading] = useState(true);
  const { cartData, setCartData, snackBarState, setSnackBarState } =
    useContext(CartContext);
  const router = useRouter();
  const { user } = useUser();
  const userName = user?.fullName;

  const addToCart = ({ userName, product }: AddToCartProdT) => {
    if (userName) {
      handleCart({
        userName,
        product,
        cartData,
        setCartData,
        snackBarState,
        setSnackBarState,
      });
    } else {
      router.push("/sign-in");
    }
  };

  const searchProduct = (value: string) => {
    const searchedVal = value.trim().toLowerCase();
    console.log("featued=>>", latestProducts);
    const filterProducts = products.filter((prod) => {
      const prodName = prod.name.toLowerCase();
      return prodName.startsWith(searchedVal);
    });
    setLatestProducts(filterProducts);
  };

  useEffect(() => {
    setLoading(true);
    const fetchLatestProducts = async () => {
      const data = await client.fetch(
        `*[_type == 'product' && isLatestProduct]{name, price, description, "slug":slug.current, "image": image.asset->url,}`
      );
      setLatestProducts(data);
      setProducts(data);
      setLoading(false);
    };
    fetchLatestProducts();
  }, []);
  return (
    <div>
      <SnackBarComponent
        snackBarState={snackBarState}
        handleClose={() =>
          handleCloseSnackBar({ snackBarState, setSnackBarState })
        }
      />
      <div className="mb-5 flex justify-center items-center gap-x-10">
        <p className="text-3xl text-[#1A0B5B] font-bold font-josefin">
          Latest Products
        </p>
        <SearchField searchProduct={searchProduct} />
      </div>

      <ul className="flex justify-center md:gap-x-10 gap-x-5 font-lato md:text-lg text-base mt-4 lg:mb-5">
        <li className="text-[#FB2E86] underline md:text-base text-sm">
          New Arrival
        </li>
        <li className="text-[#1A0B5B] md:text-base text-sm">Best Seller</li>
        <li className="text-[#1A0B5B] md:text-base text-sm">Special Offer</li>
        <li className="text-[#1A0B5B] md:text-base text-sm">Featured</li>
      </ul>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="flex flex-wrap justify-center gap-x-6 mt-5 lg:w-[80%] lg:m-auto">
          {latestProducts?.map((product: TProduct) => {
            const { image, name, price, slug } = product;
            return (
              <div className="mb-8" key={nanoid()}>
                <Link href={`products/${slug}`}>
                  <div className="relative h-[200px] w-[250px] lg:h-[250px] lg:w-[320px] bg-[#f2f4f9] flex items-center justify-center">
                    <Image
                      src={image}
                      alt={name}
                      height={200}
                      width={200}
                      className="h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] "
                    />
                  </div>
                  <div className="font-josefin mt-2">
                    <div>
                      <p className="text-[#1A0B5B]">{name}</p>
                    </div>
                    <div className="flex gap-x-2 items-center justify-center mt-1">
                      <p className="text-[#1A0B5B]">${price}.00</p>
                      <p className="text-xs text-[#FB2E86] line-through">
                        ${price - 24}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-center w-full">
                  <button
                    onClick={() =>
                      addToCart({
                        userName,
                        product,
                      })
                    }
                    className="bg-[#FB2E86] h-[30px] px-[10px] my-1 text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default LatestProduct;
