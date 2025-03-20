import { getItemById } from "@/services/bookService";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import home from "../../../../../public/home.svg";
import bookimg from "../../../../../public/book.svg";
import book2 from "../../../../../public/book2.svg";
import arrow from "../../../../../public/arrow-right.svg";

const BookDetailsPageBookId = () => {
  return (
    <div className="mx-auto px-40">
      <div className="p-4">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="w-full">
            {/* nav */}
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
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
                      src={bookimg}
                      alt="bookimg icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <Link
                      href="/book-categories"
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                    >
                      Book Categories
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
                      src={book2}
                      alt="book2 icon"
                      className="me-2 h-4 w-4"
                    ></Image>
                    <span className="ms-1 text-sm font-medium text-[#C81D25] dark:text-gray-400 md:ms-2">
                      {}
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
            src={""}
            alt=""
          />

          <section className="bg-white mt-48 px-16">
            <header className=" mb-8">
              <h1 className="text-4xl font-bold">{}</h1>
              <p className="text-xl text-gray-600">
                by <span className="text-[#087E8B]">{}</span>{" "}
              </p>
            </header>
            <p className=" leading-[28px]">{}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPageBookId;
