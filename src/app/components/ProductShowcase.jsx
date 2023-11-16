import Image from "next/image";
import ProductImage from "src/app/assets/image/adtralza-packshot.png";

function ProductShowcase() {
  return (
    <section className="px-4 lg:px-60 lg:grid grid-cols-2 bg-dermaGrey place-items-center italic py-16">
      <Image src={ProductImage} alt="adtralza packshot" width={500} height={500}></Image>
      <div className="py-8">
        <h2 className="text-2xl text-dermaPrimary mb-4">It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</h2>
        <p className="text-l">Learn more about how Adtralza® works and how to use it in treatment.</p>
      </div>
    </section>
  );
}

export default ProductShowcase;
