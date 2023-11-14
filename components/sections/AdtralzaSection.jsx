import React from "react";
import Image from "next/image";

const Adtralza = () => {
  return (
    <>
      <div className=" bg-neutral-100 pt-20 pl-8">
        <div className="flex flex-row justify-center gap-32">
          <Image
            alt="Billede af produkt"
            src="/adtralza.png"
            width={420}
            height={0}
          />
          <div className=" font-lato italic pt-14">
            <h2 className=" text-blue-700 text-4xl max-w-2xl">
              It is the first and only biologic developed to specifically
              neutralize IL-13, a key driver of a atopic dermatitis signs and
              symptoms(1,2)
            </h2>
            <p className="pt-3 text-lg">
              Learn more about how Adtralza works and how to use it in treatment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adtralza;
