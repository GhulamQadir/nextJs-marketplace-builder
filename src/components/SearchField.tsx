import { SearchFieldProps } from "@/types/types";
import { IoSearch } from "react-icons/io5";

function SearchField({ searchProduct }: SearchFieldProps) {
  return (
    <div>
      <input
        type="text"
        className="w-56 pl-1 border-[#E7E6EF] border-2 h-8 m-0"
        onChange={(e) => searchProduct(e.target.value)}
        placeholder="Search"
      />
      <button className="bg-[#FB2E86] py-[11px] h-8 px-2 ">
        <IoSearch color="white" />
      </button>
    </div>
  );
}
export default SearchField;
