"use client";
import Link from "next/link";

const CardBookComponent = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-around h-screen mt-28 gap-10">
      {  
        books.map((book, index) => (
          <div
            key={index}
            className="relative w-[527px] bg-[#F5F7F8] h-[210px] mt-20 rounded-xl shadow-md py-4 px-8 flex space-x-6"
          >
            <div className="flex flex-col justify-between">
              <img
                src={book.image}
                alt="Book Cover"
                className="absolute object-cover -top-20 w-[176px] h-[221px] shadow-md rounded-lg"
              />
              <Link href={`/read-full-article/${book.id}/book`}>
                <button
                  className="mt-36 cursor-pointer w-[176px] py-2 bg-blue-100 text-[#0B3954] text-[14px] font-semibold rounded-3xl 
                hover:bg-blue-500 hover:text-white"
                >
                  READ FULL ARTICLE
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[24px] line-clamp-1 font-semibold text-gray-900">
                  {book.book_title}
                </h2>
                <p className="text-[18px] line-clamp-5 text-gray-600 leading-[28px]">
                  {book.description}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardBookComponent;
