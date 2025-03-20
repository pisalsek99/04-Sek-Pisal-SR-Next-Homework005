import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardComponent({ book }) {
  return (
    <Link href={`/view-book-details/${book?.id}`}>
      <div className="relative space-y-4">
        <Image
          src={
            "https://i.pinimg.com/736x/bf/67/73/bf6773ba023c70afe6caf83e88744d61.jpg"
          }
          alt="book cover"
          width={300}
          height={400}
          className="rounded-3xl"
        />

        {/* book title */}
        <div>
          <h2 className="text-2xl font-semibold text-steel-blue">
            {book?.bookTitle}
          </h2>
          <p className="text-teal text-lg">{book?.description}</p>
        </div>

        {/* date */}
        <div className="absolute top-3 bg-white p-3 rounded-3xl font-medium text-teal right-4">
          <p>{formatDate(book?.createdAt)}</p>
        </div>
      </div>
    </Link>
  );
}
