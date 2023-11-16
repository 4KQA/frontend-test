import Image from "next/image";
import ProductImg from "./product.png";
import Link from "next/link";

async function FirstSection() {
  return (
    <section className="bg-gray-200 ">
      <div className="flex justify-center gap-36">
        <Image className="mt-12" src={ProductImg}></Image>
        <div className="max-w-md justify-center mt-24">
          <h3 className="text-2xl mb-2">
            It is the first and only biologic developed to specifically
            neutralize IL-13, a key driver of atopic dermatitis signs and
            symptoms(1,2)
          </h3>
          <Link href="/" className="mt-2">
            Learn more about how Adtralza® works and how to use it in treatment.
          </Link>
        </div>
      </div>
    </section>
  );
}
export default FirstSection;
