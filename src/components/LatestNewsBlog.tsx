import Image from "next/image";
import BlogImg from "@/assets/blog-img.png";
function LatestNewsBlog() {
  return (
    <div className="mt-12 mb-6">
      <div className="relative flex flex-col justify-center items-center">
        <Image src={BlogImg} alt="blog-img" className="h-[320px]" />
        <div className="font-josefin absolute top-[28%] text-center lg:w-[40%] mx-2">
          <p className="text-[24px] lg:text-3xl text-[#0D0E43] font-bold">
            Get Latest Update By Subscribe Our NewsLater
          </p>
          <button className="mt-4 px-5 py-2 bg-[#FB2E86] text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsBlog;
