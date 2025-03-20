"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NavbarFilterBookComponent = ({ bookCategory }) => {
  //  console.log("book",bookCategory)
  const router = useRouter();
  const filter = (id) => {
    console.log("id = ", id.target.value);
  router.push(`/book-categories?query=${id.target.value}`)
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm text-[#087E8B] font-medium bg-white rounded-lg border  hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          All Books
        </button>

        <select
          className="absolute right-3 top-3 py-2 px-4 rounded-md border border-gray-300 text-gray-900 
              focus:outline-none focus:ring-0"
          onChange={(e) => filter(e)}
        >
          <option value="" className="text-gray-700">
            Filter by category
          </option>
          {bookCategory.map((category, index) => (
            <option key={index} value={category.id} className="text-gray-700">
              {category.book_cate_name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default NavbarFilterBookComponent;
