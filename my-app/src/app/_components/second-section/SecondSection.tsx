import Link from "next/link";
import Image from "next/image";
import SafetyImg from "./safety.png";
import DiseaseImg from "./disease.png";

async function SecondSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-center text-center mt-12 gap-8 lg:gap-20 mx-4 lg:mx-8 mb-8 lg:mb-24">
      {/* Bullet 1 */}
      <div className="flex flex-col items-center">
        <h2 className="">
          <span className="text-6xl lg:text-9xl">9</span> <br /> out of 10
        </h2>
        <h3 className="text-lg lg:text-xl mt-4 mb-4">
          Long term sustained improvement
        </h3>
        <p className="mb-2 text-sm lg:text-base">
          9 out of 10 respondents experienced sustained disease control in
          clinical trials 10, providing sustained improvements in the burden of
          disease(1,2, 1, 8*†‡).
        </p>
        <Link href="/" className="text-blue-500 underline">
          See efficacy and trial data
        </Link>
      </div>
      {/* Bullet 2 */}
      <div className="flex flex-col items-center">
        <Image src={DiseaseImg} height={150} />
        <h3 className="text-lg lg:text-xl mt-4 mb-4">
          Improvements in the burden of disease
        </h3>
        <p className="mb-2 text-sm lg:text-base">
          Patients in clinical trials saw an improvement in Quality of Life with
          early symptom relief and sustained improvements in burden of disease
          from week 16 to 32(12,13).
        </p>
        <Link href="/" className="text-blue-500 underline">
          Learn more about quality of life improvements
        </Link>
      </div>
      {/* Bullet 3 */}
      <div className="flex flex-col items-center">
        <Image src={SafetyImg} height={150} />
        <h3 className="text-lg lg:text-xl mt-4 mb-4">Good safety profile</h3>
        <p className="mb-2 text-sm lg:text-base">
          9 out of 10 respondents experienced sustained disease control in
          clinical trials 10, providing sustained improvements in the burden of
          disease(1,2, 1, 8*†‡).
        </p>
        <Link href="/" className="text-blue-500 underline">
          See safety profile
        </Link>
      </div>
    </section>
  );
}
export default SecondSection;
