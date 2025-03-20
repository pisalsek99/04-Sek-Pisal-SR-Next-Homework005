import React from "react";
import Image from "next/image";
import book_categories from "../../public/book-categories.png";
import tag from "../../public/tag-2.svg";
import Link from "next/link";

const BookCategoriesComponent = () => {
  return (
    <div>
      {/* card 1 */}
      <Link href="/book-categories">
        <div className=" group relative w-72 h-96 rounded-4xl shadow-lg bg-black">
          <Image
            src={book_categories}
            alt="book_categories"
            className="absolute rounded-4xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative flex justify-center items-center p-4 sm:p-6 lg:p-8">
            <div className="absolute flex gap-2 top-3 left-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
              <Image src={tag} alt="tag" />
              Book
            </div>

            <div className="mt-64 sm:mt-32">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <h1 className="text-2xl text-white w-[100px] font-bold">
                  View All Available Books
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCategoriesComponent;
