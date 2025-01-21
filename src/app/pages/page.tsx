import AccessoriesAndFashionCard from "@/components/AccessroriesAndFashCard";
import { accessoriesAndFashion } from "@/data/data";
import { nanoid } from "nanoid";
import { MdOutlineGridView, MdOutlineCalendarViewDay } from "react-icons/md";

function Pages() {
  return (
    <div>
      <div className="bg-[#f4f3fc] w-full lg:h-[320px] h-[270px] font-josefin content-center">
        <div className="lg:pl-[15%] px-2">
          <p className="text-4xl text-[#1A0B5B] font-bold">Shop Grid Default</p>
          <ul className="flex gap-x-2 mt-1">
            <li className="text-[#1A0B5B]">Home .</li>
            <li className="text-[#1A0B5B]">Pages .</li>
            <li className="text-[#FB2E86]">Shop Grid Default</li>
          </ul>
        </div>
      </div>

      <div className="my-20">
        <div className="flex flex-wrap gap-y-4 justify-around px-1 py-2">
          <div>
            <p className="text-[#1A0B5B] lg:text-2xl text-lg font-bold">
              Ecommerce Accessories & Fashion item
            </p>
            <p className="text-[#8A8FB9] text-sm">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
            <div className="flex gap-x-2">
              <p>Per Page:</p>
              <input type="text" className="w-10 h-5 border-[1px]" />
            </div>
            <div className="flex items-center gap-x-2">
              <p>Sort By:</p>
              <select
                name="Best Match"
                className="border-[1px] border-gray-300 p-[2px] text-sm text-gray-400"
              >
                <option value="Best Match">Best Match</option>
              </select>
            </div>
            <div className="flex gap-x-3 items-center">
              <div className="flex gap-x-1 items-center">
                <p>View:</p>
                <MdOutlineGridView />
                <MdOutlineCalendarViewDay size={30} />
              </div>
              <input type="text" className="w-36 h-6 border-[1px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 mt-8 mb-5 lg:px-5 px-1">
          {accessoriesAndFashion.map((prod) => {
            return <AccessoriesAndFashionCard product={prod} key={nanoid()} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Pages;
