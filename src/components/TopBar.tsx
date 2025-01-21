import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

function TopBar() {
  return (
    <div className="bg-violet-600 w-full flex justify-around flex-wrap sticky top-0 z-10 px-2 py-2 items-center text-white font-josefin font-semibold text-base">
      <div className="flex gap-x-10 items-center lg:mb-0 mb-1">
        <div className="flex md:gap-x-3 gap-x-1 items-center">
          <AiOutlineMail color="white" size={17} />
          <p className="">mhhasanul@gmail.com</p>
        </div>
        <div className="flex md:gap-x-3 gap-x-1 items-center">
          <MdOutlinePhoneInTalk color="white" size={17} />
          <p className="">&#40;12345&#41;67890</p>
        </div>
      </div>
      <div className="flex">
        <ul className="flex md:gap-x-6 gap-x-3  items-center">
          <li className="flex md:gap-x-[3px] gap-x-[2px] items-center">
            <p>English</p>
            <IoChevronDownOutline />
          </li>
          <li className="flex md:gap-x-[3px] gap-x-[2px] items-center">
            <p>USD</p>
            <IoChevronDownOutline />
          </li>
          <li className="flex mdgap-x-[5px] gap-x-[3px] items-center">
            <p>Login</p>
            <FaRegUser size={16} />
          </li>
          <li className="flex md:gap-x-[5px] gap-x-[3px] items-center">
            <p>Wishlist</p>
            <CiHeart size={20} />
          </li>
          <li>
            <FiShoppingCart size={22} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default TopBar;
