import Image from "next/image";
import { TiTick } from "react-icons/ti";
import ChairImg from "@/assets/chair-discount.png";

function DiscountItem() {
  return (
    <div className="font-josefin my-8 text-center">
      <div>
        <p className="text-3xl text-[#1A0B5B] font-bold">Discount Item</p>
        <ul className="flex justify-center mt-4 gap-x-6">
          <li className="text-[#FB2E86] underline">Wood Chair</li>
          <li>Plastic Chair</li>
          <li>Sofa Collection</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center items-center mt-10">
        <div className="lg:w-[35%] text-start px-2">
          <p className="lg:text-[35px] text-[26px] text-[#1A0B5B] font-bold">
            20% Discount Of All Products
          </p>
          <p className="text-[#FB2E86] mb-4">Eams Sofa Compact</p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            tenetur quae facilis doloremque ea itaque.
          </p>
          <ul className="flex justify-between flex-wrap gap-x-6 gap-y-1 mt-4">
            <li className="flex items-center gap-x-1">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">
                Material Expose like metals
              </p>
            </li>
            <li className="flex items-center">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">
                Clear lines and geomatric figures
              </p>
            </li>
            <li className="flex items-center">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">Simple neutral colours</p>
            </li>
            <li className="flex items-center">
              <TiTick color="purple" />
              <p className="text-[#B7BACB] text-sm">
                Material Expose like metals
              </p>
            </li>
          </ul>
          <button className="mt-6 px-5 py-2 bg-[#FB2E86] text-white">
            Shop Now
          </button>
        </div>
        <div className="bg-[#fcecfe] rounded-full lg:h-[350px] h-[270px]">
          <Image
            src={ChairImg}
            alt="chair-img"
            className="lg:h-[400px] lg:w-[400px] h-[280px] w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
export default DiscountItem;
