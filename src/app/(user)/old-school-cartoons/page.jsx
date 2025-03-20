import React from "react";
import { getAllCartoons } from "@/services/bookService";
import CardOldSchoolCartoon from "@/components/CardOldSchoolCartoonComponent";
import NavbarFilterCartoonComponent from "@/components/NavbarFilterCartoonComponent";
import SearchCartoonComponent from "@/components/SearchCartoonComponent";

const OldSchollPage = async ({ searchParams }) => {
  const oldSchoolCartoons = await getAllCartoons();
  console.log("oldSchoolCartoons: ", oldSchoolCartoons);

  const searchQuery = searchParams.search || "";
  let cartoonSearchs;

  if (searchQuery) {
    cartoonSearchs = oldSchoolCartoons.filter((cartoon) =>
      cartoon.ct_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("search cartoon results: ", cartoonSearchs);
  } else {
    cartoonSearchs = oldSchoolCartoons;
  }
  return (
    <div className="bg-white w-full">
      <div className="p-4 sm:ml-80">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="w-full">
            <SearchCartoonComponent />
          </div>

          <div className="relative mt-4 flex items-center justify-center h-screen mb-4 rounded-sm  dark:bg-gray-800">
            {/* content */}
            <NavbarFilterCartoonComponent />
            {/* hr */}
            <hr className="absolute w-[98%] top-16  border-[#087E8B] border-1 dark:border-gray-700" />

            <div className="mt-28">
              <CardOldSchoolCartoon
                oldSchoolCartoon={oldSchoolCartoons}
                oldSchoolCartoons={cartoonSearchs}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldSchollPage;
