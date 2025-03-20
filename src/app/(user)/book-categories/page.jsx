import React from "react";
import CardBookComponent from "@/components/CardBookComponent";
import {
  getAllBookCategories,
  getAllBooks,
  getBooksByCategoryId,
  searchBookByTitle,
} from "@/services/bookService";
import SearchComponent from "@/components/SearchComponent";
import NavbarFilterBookComponent from "@/components/NavbarFilterBookComponent";

const BookPage = async ({ searchParams, params }) => {
  const bookCategories = await getAllBookCategories();
  const { query, search } = await searchParams;
  console.log(query);
  const books = await getAllBooks();
  const bookByCate = await getBooksByCategoryId(query);
  const bookSearch = await searchBookByTitle(search);

  return (
    <div className="p-4 sm:ml-80">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="w-full">
          <SearchComponent />
        </div>
        <div className="relative mt-4 flex items-center justify-center h-screen mb-4  rounded-2xl dark:bg-gray-800">
          {/* Content */} 
          <NavbarFilterBookComponent bookCategory={bookCategories} />
          {/* HR */}
          <hr className="absolute w-[98%] top-16 border-[#087E8B] border-1 dark:border-gray-700" />
          <div className="w-full mt-16"> 
            {query && !search && <CardBookComponent books={bookByCate} />}
            {search && !query && <CardBookComponent books={bookSearch} />}
            {!query && !search && <CardBookComponent books={books} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
