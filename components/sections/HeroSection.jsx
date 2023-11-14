import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="">
        <Image
          alt="Hero image til landing page"
          src="/heroimage.svg"
          width={200}
          height={0}
          className="w-screen h-auto object-fit"
        />
        <div className="flex flex-col absolute top-1/3 pl-28 ">
          <div className="flex flex-col ">
            <Image
              alt="Logo af produkt"
              src="/produkt-billede.png"
              width={150}
              height={0}
              className="pb-6"
            />
          </div>
          <p className=" font-lato italic text-4xl text-navy-blue max-w-3xl">
            Adtralza is a new treatment for adult patients with
            moderate-to-severe atopic dermatitis (eczema) who candidates for
            systemic therapy
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
