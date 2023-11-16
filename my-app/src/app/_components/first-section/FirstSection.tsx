import Image from "next/image";
import ProductImg from "./product.png";
import Link from "next/link";

async function FirstSection() {
  return (
    <section className="bg-gray-200">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:gap-36">
        <Image
          className="mt-12 mb-12 md:mt-0 md:mb-0 md:order-1"
          src={ProductImg}
        ></Image>
        <div className="max-w-md text-center md:text-left md:mt-12 md:order-2">
          <h3 className="text-2xl mb-6 text-sky-800">
            It is the first and only biologic developed to specifically
            neutralize IL-13, a key driver of atopic dermatitis signs and
            symptoms(1,2)
          </h3>
          <Link href="/" className="italic text-gray-500 block md:inline">
            Learn more about how Adtralza® works and how to use it in treatment.
          </Link>
        </div>
      </div>
    </section>
  );
}
export default FirstSection;
