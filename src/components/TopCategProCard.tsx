import Image from "next/image";

interface TTopCategProduct {
  title: string;
  image: string;
  price: number;
}

function TopCategProdCard({ product }: { product: TTopCategProduct }) {
  const { title, image, price } = product;
  return (
    <div className="rounded-xl mb-4 font-josefin">
      <div className="h-[190px] w-[200px] bg-[#f2f4f9] flex items-center justify-center rounded-full">
        <Image
          src={image}
          alt={title}
          height={200}
          width={200}
          priority
          className="h-[130px] w-[130px]"
        />
      </div>
      <div className="mt-2 text-center text-[#0D0E43] ">
        <p className="font-bold">{title}</p>
        <p className="text-sm">${price}.00</p>
      </div>
    </div>
  );
}
export default TopCategProdCard;
