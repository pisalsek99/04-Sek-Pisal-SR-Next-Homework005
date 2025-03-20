"use client"
import React from "react";
import { useRouter } from "next/navigation";
const NavbarFilterCartoonComponent = ({cartoonsCategories}) => {
   const router = useRouter();
    const filter = (id) => {
      console.log("id = ", id.target.value);
      router.push(`/old-school-cartoons?genre=${id.target.value}`);
    };
  return (
    <>
      <div>
        <button
          type="button"
          className="absolute left-3 top-3 py-2.5 px-5 me-2 mb-2 text-sm text-[#087E8B] font-medium bg-white rounded-lg border hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Old School Cartoons
        </button>
      
        <select
          className="absolute right-3 top-3 py-2 px-4 rounded-md border border-gray-300 text-gray-900 
              focus:outline-none focus:ring-0"
              onChange={(e) => filter(e)}
        >
          <option value="" className="text-gray-700">
            Filter by category
          </option>
          {cartoonsCategories.map((category, index) => {
            return (
              <option key={index} value={category.id} className="text-gray-700">
                {category.cartoon_genre}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default NavbarFilterCartoonComponent;
