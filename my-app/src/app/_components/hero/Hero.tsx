import Image from "next/image";
import HeroImg from "./Hero.svg";
import Adtralza from "./Adtralza global 100820.png";

async function Hero() {
  return (
    <div className="md:relative absolute">
      <div className="md:absolute absolute ml-16 mt-12">
        <Image className="" src={Adtralza} width={100} height={100}></Image>
        <h1 className="text-2xl max-w-lg mt-4">
          Adtralza® is a new treatment for adult patients with
          moderate-to-severe atopic dermatitis (eczema) who are candidates for
          systemic therapy.
        </h1>
      </div>
      <Image src={HeroImg}></Image>
    </div>
  );
}

export default Hero;
