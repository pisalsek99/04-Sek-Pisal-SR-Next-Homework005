"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchCartoonComponent = () => {
  const router = useRouter();
  const [searchData, setSearchData] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchData);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchData]);
  useEffect(() => {
    if (debouncedSearch.trim()) {
      router.push(`/old-school-cartoons?search=${encodeURIComponent(debouncedSearch)}`);
    } else {
      router.push(`/old-school-cartoons`);
    }
  }, [debouncedSearch, router]);

  return (
    <div>
      <form className="relative w-full">
       
        <button type="button" className="cursor-pointer absolute top-3 left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary-text"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <input
          id="searchInput"
          name="default-search"
          type="text"
          placeholder="Search cartoons here"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none shadow-md focus:ring-0"
        />
      </form>
    </div>
  );
};

export default SearchCartoonComponent;
