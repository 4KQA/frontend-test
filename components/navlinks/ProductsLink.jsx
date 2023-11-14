import React from "react";
import Link from "next/link";
import { useState } from "react";
import Clenser from "./products/Clenser";

const ProductsLink = () => {
  const [showClense, setShowClense] = useState(false);

  return (
    <>
      <div className=" bg-light-blue h-12 z-50">
        <div className="flex flex-row justify-center gap-x-16 text-xl font-lato pt-2 ">
          <Link href="/">Cream</Link>
          <Link
            className="pb-3"
            href="/"
            onMouseEnter={() => setShowClense(true)}
            onMouseLeave={() => setShowClense(false)}
          >
            Clenser
          </Link>
          <Link href="/">Vitamins</Link>
          <Link href="/">New</Link>
          <Link href="/"></Link>
        </div>
        <div
          className="absolute w-screen"
          onMouseEnter={() => setShowClense(true)}
          onMouseLeave={() => setShowClense(false)}
        >
          {showClense && <Clenser />}
        </div>
      </div>
    </>
  );
};

export default ProductsLink;
