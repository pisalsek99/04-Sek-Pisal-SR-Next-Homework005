import React from "react";
import CardOldSchoolCartoonComponent from "@/components/CardOldSchoolCartoonComponent";
import {
  getAllCartoons,
  getAllCartoonsCategories,
  getCartoonsCategoryById,
  searchCartoonByTitle,
} from "@/services/bookService";
import SearchCartoonComponent from "@/components/SearchCartoonComponent";
import NavbarFilterCartoonComponent from "@/components/NavbarFilterCartoonComponent";

const OldSchollPage = async ({ searchParams, params }) => {
  const cartoonsCategories = await getAllCartoonsCategories();
  const {genre, search } = await searchParams;
  console.log(genre);
  const cartoons = await getAllCartoons();
  const cartoonsByCate = await getCartoonsCategoryById(genre);
  const cartoonsSearch = await searchCartoonByTitle(search);

  // console.log("Cartons" , cartoons)
  // console.log("Cartons2" , cartoonsByCate)
  console.log("Carton3" , cartoonsSearch)
  return (
    <div className="p-4 sm:ml-80">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="w-full">
          <SearchCartoonComponent />
        </div>
        <div className="relative mt-4 flex items-center justify-center h-screen mb-4  rounded-2xl dark:bg-gray-800">
          {/* Content */} 
          <NavbarFilterCartoonComponent cartoonsCategories={cartoonsCategories} />
          {/* HR */}
          <hr className="absolute w-[98%] top-16 border-[#087E8B] border-1 dark:border-gray-700" />
          <div className="w-full mt-16"> 
            {genre && !search && <CardOldSchoolCartoonComponent cartoons={cartoonsByCate} />}
            {search && !genre && <CardOldSchoolCartoonComponent cartoons={cartoonsSearch} />}
            {!genre && !search && <CardOldSchoolCartoonComponent cartoons={cartoons} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldSchollPage;
