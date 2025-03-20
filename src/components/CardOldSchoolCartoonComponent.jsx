"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import eye from "../../public/eye.svg";
import Link from "next/link";

const CardOldSchoolCartoonComponent = ({ oldSchoolCartoons }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(oldSchoolCartoons);
  }, [oldSchoolCartoons]);

  return (
    <div className="flex flex-wrap justify-around h-screen mt-28 gap-10">
      {searchResults.length > 0 ? (
        searchResults.map((items, index) => (
          <div
            key={index}
            className="w-[330px] mb-6 rounded-xl dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/read-full-article/${items.id}/cartoon`}>
              <img
                className="rounded-2xl w-full object-cover h-[404px]"
                src={items.image}
                alt={items.ct_title}
              />
              <div className="py-3 px-1">
                <article className="flex flex-col justify-start items-center">
                  <h5 className="mb-2 font-bold text-[#0B3954] dark:text-white">
                    {items.ct_title}
                  </h5>
                </article>
                <article className="flex justify-around items-center mt-2">
                  <p className="flex gap-2 mb-3 font-normal text-[#087E8B] dark:text-gray-400">
                    <Image className="opacity-90" src={eye} alt="" />
                    {items.view_count} |{" "}
                    {new Date(items.published_year).getFullYear()}
                  </p>
                </article>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No cartoons found.
        </p>
      )}
    </div>
  );
};

export default CardOldSchoolCartoonComponent;
