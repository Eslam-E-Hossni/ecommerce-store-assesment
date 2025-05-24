"use client";
import { Icon } from "@/components/ui";
import { useFilterActions } from "@/features/products/hooks/useFilter";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchTerm: updateSearchTerm } = useFilterActions();

  useEffect(() => {
    const timer = setTimeout(() => {
      updateSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, updateSearchTerm]);
  return (
    <div>
      <div className="lg:w-[280px] bg-gray-100 py-[10px] px-6 flex items-center gap-x-2 rounded-full">
        <Icon name="search" color="gray" size={16} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent outline-none text-black_02 placeholder-black_02 font-heading-font text-sm"
          aria-label="search about product"
        />
        {searchTerm && (
          <button
            className="font-heading-font text-lg leading-none"
            onClick={() => {
              setSearchTerm("");
              updateSearchTerm("");
            }}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
