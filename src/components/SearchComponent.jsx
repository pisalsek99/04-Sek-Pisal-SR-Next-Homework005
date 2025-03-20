"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchComponent = () => {

  const router = useRouter();
  const pathname = usePathname(); 
  const [searchData, setSearchData] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchData);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchData]);

  useEffect(() => {
    if (pathname === "/") return; 

    const newUrl = debouncedSearch.trim()
      ? `/book-categories?search=${encodeURIComponent(debouncedSearch)}`
      : `/book-categories`;

    if (newUrl !== pathname) {
      router.push(newUrl);
    }
  }, [debouncedSearch, router, pathname]);

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
          placeholder="Search assignment here"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 shadow-md border-none outline-none focus:ring-0"
        />
      </form>
    </div>
  );
};

export default SearchComponent;
