import { TProduct } from "@/types/types";
import Image from "next/image";

interface CartCardT {
  product: TProduct;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
}

function CartCard({ product, increaseQuantity, decreaseQuantity }: CartCardT) {
  const { name, price, image, slug, quantity } = product;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-around my-4 border-t-[1px] border-gray-300 py-4">
        <div className="w-[300px] flex items-center gap-x-2">
          <Image src={image} height={80} width={120} alt={slug} />
          <p className="font-bold">{name}</p>
        </div>
        <div className="w-[80px]">
          <p className="font-bold">${price}</p>
        </div>
        <div className="w-[150px] flex justify-center items-center gap-x-2">
          <button
            onClick={() => decreaseQuantity(name)}
            className="border-[2px] border-red-400 rounded-full px-[5px] h-[19px] font-bold flex items-center"
          >
            -
          </button>
          <p className="text-sm">{quantity}</p>
          <button
            onClick={() => increaseQuantity(name)}
            className="border-[2px] border-green-800 rounded-full px-[5px] h-[19px] font-bold flex items-center"
          >
            +
          </button>
        </div>
        <div className="w-[90px]">
          <p className="font-bold">${price * quantity}</p>
        </div>
      </div>
    </div>
  );
}
export default CartCard;
