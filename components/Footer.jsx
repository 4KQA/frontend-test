import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" bg-blue-600 h-80">
        <div className="flex flex-row justify-around pt-14">
          <Image alt="Logo af LEO" src="/leologo.png" height={0} width={140} />
          <div className=" text-slate-300 italic text-lg pt-9">
            <p>Copyright LEO Pharma 2020</p>
            <p className=" w-60">
              LEO and the LEO Lion Design are registered trademarks of LEO
              Pharma
              <br className="text-center" />
              All rights reserved
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center text-slate-300 gap-x-5 pt-10">
          <Link href="/" className=" border-r-2 border-slate-300 pr-3">
            Contact
          </Link>
          <Link href="/" className=" border-r-2 border-slate-300 pr-3">
            Imprint
          </Link>
          <Link href="/" className=" border-r-2 border-slate-300 pr-3">
            Conditions
          </Link>
          <Link href="/" className=" border-r-2 border-slate-300 pr-3">
            Terms of use
          </Link>
          <Link href="/" className=" border-r-2 border-slate-300 pr-3">
            Privacy
          </Link>
          <Link href="/" className=" border-r-2 border-slate-300 pr-3">
            Cookie content
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
