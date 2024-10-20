import { Search } from "lucide-react";

export default function NavBarSearch() {
  return (
    <div className="w-[588px] h-[38px] flex  items-center gap-1 rounded-[19px] py-[10px] px-4 border-[0.6px] border-[#d5d5d5] bg-[#F5F6FA]">
      <label htmlFor="search">
        <Search size={15} className="opacity-50 mb-1" />
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        className="bg-inherit text-[14px] focus:outline-none w-full"
      />
    </div>
  );
}
