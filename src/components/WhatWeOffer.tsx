import { FaTruckFast } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { FaMedal } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";

function WhatWeOffer() {
  return (
    <div className="text-center mt-16 mb-16">
      <div>
        <p className="text-[#1A0B5B] font-josefin text-3xl font-bold">
          What Shopex Offer!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 items-center gap-y-3 mt-10 font-josefin">
        <div className="w-[240px] h-[230px] flex flex-col justify-center items-center shadow-md py-4">
          <FaTruckFast color="red" size={40} />
          <p className="mt-3 text-[#1A0B5B] font-bold">24/7 Support</p>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            similique magni consequatur.
          </p>
        </div>
        <div className="w-[240px] h-[230px] flex flex-col justify-center items-center shadow-md py-4">
          <FcCustomerSupport size={40} />
          <p className="mt-3 text-[#1A0B5B] font-bold">24/7 Support</p>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            similique magni consequatur.
          </p>
        </div>
        <div className="w-[240px] h-[230px] flex flex-col justify-center items-center shadow-md py-4">
          <FaMedal size={30} color="orange" />
          <p className="mt-3 text-[#1A0B5B] font-bold">24/7 Support</p>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            similique magni consequatur.
          </p>
        </div>
        <div className="w-[240px] h-[230px] flex flex-col justify-center items-center shadow-md py-4">
          <Ri24HoursFill size={35} />
          <p className="mt-3 text-[#1A0B5B] font-bold">24/7 Support</p>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            similique magni consequatur.
          </p>
        </div>
      </div>
    </div>
  );
}
export default WhatWeOffer;
