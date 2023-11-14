import React from "react";
import Link from "next/link";
import { useState } from "react";
import ProductsLink from "./navlinks/ProductsLink";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className=" bg-slate-100 h-12 z-50">
        <div className="flex flex-row justify-center gap-x-16 text-xl font-lato pt-2 ">
          <Link
            className="pb-3"
            href="/"
            onMouseEnter={() => setShowNav(true)}
            onMouseLeave={() => setShowNav(false)}
          >
            Products
          </Link>
          <Link href="/">Stores</Link>
          <Link href="/">Membership</Link>
          <Link href="/">About</Link>
          <Link href="/">FAQ</Link>
        </div>
      </div>
      <div
        className="absolute w-screen"
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
      >
        {showNav && <ProductsLink />}
      </div>
    </>
  );
};

export default Navbar;
