import Image from "next/image";

interface TTrendingProduct {
  title: string;
  image: string;
  price: number;
  oldPrice: number;
}

function TrendingProdCard({ product }: { product: TTrendingProduct }) {
  const { title, image, price, oldPrice } = product;
  return (
    <div className="shadow-md rounded-xl mb-4 font-josefin">
      <div className="h-[180px] w-[220px] bg-[#f2f4f9] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          height={200}
          width={200}
          priority
          className="h-[130px] w-[130px]"
        />
      </div>
      <div className="mt-2 text-center">
        <p className="text-[#0D0E43] text-lg font-bold">{title}</p>
        <div className="flex justify-center items-center gap-x-2">
          <p className="font-josefin text-lg  text-[#0D0E43]">${price}.00</p>
          <p className="font-josefin text-sm text-gray-500 line-through">
            ${oldPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
export default TrendingProdCard;
