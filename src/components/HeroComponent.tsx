import LampImg from "@/assets/lamp.png";
import Image from "next/image";
import ChairImg from "@/assets/chair.png";

function HeroComponent() {
  return (
    <div className="bg-[#F2F0FF] w-full flex flex-wrap justify-center pb-5 px-2 relative">
      <div className="flex lg:w-[50%] w-full lg:flex-nowrap flex-wrap text-center lg:text-start justify-center">
        <Image
          src={LampImg}
          alt="lamp-img"
          className="lg:h-[350px] lg:w-[300px] h-[300px] w-[250px]"
        />
        <div className="content-center">
          <p className="text-[#FB2E86]">Best Furniture For Your Castle....</p>
          <p className="text-[30px] md:text-[50px] font-bold font-josefin mt-3">
            New Furniture Collection Trends in 2020
          </p>
        </div>
      </div>
      <div>
        <div className="my-4 bg-[#f7dcfa] px-3 py-5 rounded-full relative">
          <div className="w-20 py-1 bg-[#00C1FE] content-center text-center rounded-full absolute md:top-[15px] top-[1px] md:right-[25px] right-[15px]">
            <p className="font-josefin text-white text-2xl">50% off</p>
          </div>
          <Image
            src={ChairImg}
            alt="chair-img"
            className="lg:h-[450px] lg:w-[450px] h-[330px] w-[350px]"
          />
        </div>
      </div>
      <div className="absolute bottom-4 flex gap-x-3">
        <div className="w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-full bg-[#FB2E86]"></div>
        <div className="w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-full bg-white"></div>
        <div className="w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-full"></div>
      </div>
    </div>
  );
}
export default HeroComponent;
