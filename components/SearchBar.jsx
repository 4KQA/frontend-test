import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-row justify-around gap-x-28">
        <Image
          alt="Logo af virksomheden Derma"
          src="/logo.png"
          width={200}
          height={0}
          className="h-auto"
        />
        <div className="relative items-center flex">
          <input
            type="text"
            placeholder="Search"
            className="border-2 rounded-xl p-2 w-80 h-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 absolute ml-72 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
