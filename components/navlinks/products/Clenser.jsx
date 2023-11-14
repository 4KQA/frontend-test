import React from "react";
import Link from "next/link";

const Clenser = () => {
  return (
    <>
      <div className=" bg-light-indigo h-12">
        <div className="flex flex-row justify-center gap-x-16 text-xl font-lato pt-2 ">
          <Link href="/">#1</Link>
          <Link href="/">#2</Link>
          <Link href="/">#3</Link>
          <Link href="/">#4</Link>
          <Link href="/">#5</Link>
        </div>
      </div>
    </>
  );
};

export default Clenser;
