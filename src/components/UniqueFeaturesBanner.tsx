import Image from "next/image";
import SofaImg from "@/assets/sofa.png";

function UniqueFeaturesBanner() {
  return (
    <div className="bg-[#F1F0FF] px-2 py-5 flex justify-center items-center flex-wrap font-josefin gap-x-10 gap-y-5">
      <div className="my-4 bg-[#f7dcfa] px-3 py-1 rounded-full ">
        <div className="w-20 py-1 bg-[#00C1FE] content-center text-center rounded-full absolute md:top-[15px] top-[1px] md:right-[25px] right-[15px]">
          <p className="font-josefin text-white text-2xl">50% off</p>
        </div>
        <Image
          src={SofaImg}
          alt="sofa-img"
          className="lg:h-[450px] lg:w-[450px] h-[330px] w-[350px]"
        />
      </div>
      <div className="lg:w-[40%]">
        <p className="lg:text-[35px] text-3xl font-bold mb-7 text-[#1A0B5B]">
          Unique features of Latest & Trending Products
        </p>
        <div className="flex gap-x-3 mb-6">
          <div className="bg-[#FB2448] w-2 h-2 rounded-full mt-2"></div>
          <p className="text-[#ACABC3]">
            All frames constructed with hardoowd solids and laminates
          </p>
        </div>
        <div className="flex gap-x-3 mb-6">
          <div className="bg-[#2F1AC4] w-2 h-2 rounded-full mt-2"></div>
          <p className="text-[#ACABC3]">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine cells
          </p>
        </div>
        <div className="flex gap-x-3 mb-6">
          <div className="bg-[#05E6B7] w-2 h-2 rounded-full mt-2"></div>
          <p className="text-[#ACABC3]">
            Arms, backs and seats are structurally reinforced
          </p>
        </div>
      </div>
    </div>
  );
}
export default UniqueFeaturesBanner;
