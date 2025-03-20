import React from "react";
import CardBookComponent from "@/components/CardBookComponent";
import { getAllBooks } from "@/services/bookService";
import SearchComponent from "@/components/SearchComponent";
import NavbarFilterBookComponent from "@/components/NavbarFilterBookComponent";

const BookPage = async ({ searchParams }) => {
  const params = await searchParams;

  const books = await getAllBooks();

  const searchQuery = params.search || "";

  let bookSearchs;
  if (searchQuery) {
    bookSearchs = books.filter((book) =>
      book.book_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("search results: ", bookSearchs);
  } else {
    bookSearchs = books;
  }

  return (
    <div className="p-4 sm:ml-80">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="w-full">
          <SearchComponent />
        </div>
        <div className="relative mt-4 flex items-center justify-center h-screen mb-4 shadow-2xl rounded-2xl dark:bg-gray-800">
          {/* Content */}
          <NavbarFilterBookComponent />

          {/* HR */}
          <hr className="absolute w-[98%] top-16 border-[#087E8B] border-1 dark:border-gray-700" />
          <div className="mt-28">
            <CardBookComponent books={bookSearchs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
