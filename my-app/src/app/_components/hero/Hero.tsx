import Image from "next/image";
import HeroImg from "./Hero.svg";
import Adtralza from "./Adtralza global 100820.png";

async function Hero() {
  return (
    <section className="md:relative absolute">
      <div className="md:absolute absolute md:ml-16 md:mt-12">
        <Image className="" src={Adtralza} width={100} height={100}></Image>
        <h1 className="md:text-2xl md:max-w-lg md:mt-4 text-white">
          Adtralza® is a new treatment for adult patients with
          moderate-to-severe atopic dermatitis (eczema) who are candidates for
          systemic therapy.
        </h1>
      </div>
      <Image className="" src={HeroImg}></Image>
    </section>
  );
}

export default Hero;
