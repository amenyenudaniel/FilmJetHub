import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[400px] flex relative items-center justify-center">
      <input
        className="w-full h-[40px] pl-3 outline-none border border-red bg-transparent rounded-[10px] text-white text-[18px]"
        type="text"
        placeholder="Search..."
      />
      <Image
        src={"/search.svg"}
        width={30}
        height={30}
        alt="search-icon"
        className="cursor-pointer absolute right-[8px]"
      />
    </div>
  );
};

export default SearchBar;
