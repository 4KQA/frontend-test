import React from "react";
import Image from "next/image";
import Link from "next/link";

const Tools = ({ picture, headline, text, path, linktext }) => {
  return (
    <>
      <div className="flex flex-col w-[30rem]">
        <Image
          alt="Billede til tools component"
          src={picture}
          width={500}
          height={0}
        />
        <div className="flex flex-col font-lato italic bg-neutral-100 gap-6 h-[15rem] p-10">
          <h2 className="text-navy-blue text-3xl">{headline}</h2>
          <p className="text-lg ">{text}</p>
          <Link className="text-dark-indigo" href={path}>
            {linktext}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tools;
