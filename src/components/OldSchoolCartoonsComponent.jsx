import React from "react";
import old_school_cartoons from "../../public/old-school-cartoons.png";
import Image from "next/image";
import tag from "../../public/tag-2.svg";
import Link from "next/link";

const OldSchoolCartoonsComponent = () => {
  return (
    <div>
      {/* card 2 */}
      <Link href="/old-school-cartoons">
        <div className=" group relative w-72 h-96 rounded-4xl shadow-lg bg-black">
          <Image
            src={old_school_cartoons}
            alt="old_school_cartoons"
            className="absolute rounded-4xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative flex justify-center items-center p-4 sm:p-6 lg:p-8">
            <div className="absolute flex gap-2 top-3 left-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
              <Image src={tag} alt="tag" />
              Cartoon
            </div>

            <div className="mt-64 sm:mt-32">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <h1 className="text-2xl text-white w-[100px] font-bold">
                  View All Available Cartoons
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OldSchoolCartoonsComponent;
