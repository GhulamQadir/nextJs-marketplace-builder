import { MdCopyright } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function CopyrightBarFoot() {
  return (
    <div className="bg-[#E7E4F8] flex justify-between md:px-32 px-2 py-3">
      <div className="flex items-center">
        <MdCopyright color="#9DA0AE" />
        <p className="text-[#9DA0AE] text-sm">Webecy - All rights Reserved</p>
      </div>

      <div className="flex gap-x-4">
        <FaFacebookF
          className="px-1 py-1 bg-[#151875] rounded-full"
          color="white"
          size={20}
        />
        <FaInstagram
          className="px-1 py-1 bg-[#151875] rounded-full"
          color="white"
          size={20}
        />
        <FaTwitter
          className="px-1 py-1 bg-[#151875] rounded-full"
          color="white"
          size={20}
        />
      </div>
    </div>
  );
}
export default CopyrightBarFoot;
