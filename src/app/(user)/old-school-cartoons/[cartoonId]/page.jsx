import { getBookById, getOldSchoolCartoonById } from "@/services/bookService";
import Link from "next/link";
import React from "react";
import eye from "../../../../../public/eye.svg";
import home from "../../../../../public/home.svg";
import emoji from "../../../../../public/emoji-happy.svg";
import Image from "next/image";
import play_circle from "../../../../../public/play-circle.svg";
import arrow from "../../../../../public/arrow-right.svg";

const OldSchoolCaroonsPage = async ({ params }) => {
  const { cartoonId } = params;
  console.log("cartoonId : ", cartoonId);
  const oldSchoolCartoon = await getOldSchoolCartoonById(cartoonId);
  console.log("oldSchoolCartoon : ", oldSchoolCartoon);

  return (
    <div className="mx-auto px-40">
      <div className="p-4">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="w-full">
            {/* nav */}
            <nav className="mb-4 flex " aria-label="Breadcrumb">
              <ol className="inline-flex items-center  space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Image
                      src={home}
                      alt="home icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    Home
                    <Image
                      src={arrow}
                      alt="arrow icon"
                      className="me-2 ml-3 h-4 w-4"
                    ></Image>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <Image
                      src={emoji}
                      alt="emoji icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <Link
                      href="/old-school-cartoons"
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                    >
                      Old-School Cartoons
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <Image
                      src={arrow}
                      alt="arrow icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <Image
                      src={play_circle}
                      alt="play_circle icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <span className="ms-1 text-sm font-medium text-[#C81D25] dark:text-gray-400 md:ms-2">
                      {oldSchoolCartoon.ct_title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="relative mt-20 flex justify-center items-center  rounded-4xl shadow-2xl">
        <div className="flex flex-col justify-start items-start px-4 py-8">
          <img
            className="absolute -top-32 right-16 w-[301px] h-[407px] rounded-4xl shadow-2xl "
            src={oldSchoolCartoon.image}
            alt=""
          />

          <section className="bg-white mt-48 px-16">
            <header className=" mb-8">
              <h1 className="text-4xl font-bold">
                {oldSchoolCartoon.ct_title}
              </h1>
              <p className="text-xl text-gray-600">
                by{" "}
                <span className="text-[#087E8B]">
                  {oldSchoolCartoon.ct_creator}
                </span>
              </p>
              <p className="flex gap-2 mb-3 font-normal text-[#087E8B] dark:text-gray-400">
                <Image className="opacity-90" src={eye} alt="" />
                {oldSchoolCartoon.view_count} |{" "}
                {oldSchoolCartoon.published_year}
              </p>
            </header>
            <p className=" leading-[28px]">{oldSchoolCartoon.ct_description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OldSchoolCaroonsPage;
