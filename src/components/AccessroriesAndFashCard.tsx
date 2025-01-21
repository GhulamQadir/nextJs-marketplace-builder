import Image from "next/image";

interface TProduct {
  title: string;
  image: string;
  price: number;
  oldPrice: number;
}

function AccessoriesAndFashionCard({ product }: { product: TProduct }) {
  const { title, image, price, oldPrice } = product;
  return (
    <div className="mb-5 w-[280px] font-josefin">
      <div className=" h-[250px] bg-[#F6F7FB] flex items-center justify-center">
        <Image
          src={image}
          alt="prod-img"
          width={220}
          height={180}
          className="h-[150px] w-[150px]"
        />
      </div>
      <div className="text-center pt-2">
        <p className="text-lg text-[#151875] font-bold">{title}</p>
      </div>
      <div className="flex mt-1 justify-center gap-x-2">
        <div className="bg-[#DE9034] h-[7px] w-[7px] rounded-full"></div>
        <div className="bg-[#EC42A2] h-[7px] w-[7px] rounded-full"></div>
        <div className="bg-[#8568FF] h-[7px] w-[7px] rounded-full"></div>
      </div>
      <div className="flex justify-center gap-x-3 mt-[6px] items-center">
        <p className="text-[#151875]">${price}.00</p>
        <p className="text-[#EC42A2] text-sm line-through">${oldPrice}.00</p>
      </div>
    </div>
  );
}
export default AccessoriesAndFashionCard;
