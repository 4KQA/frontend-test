import adtralza from "../assets/Logo/Adtralza.svg";

function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 grid-rows-1 bg-hero bg-cover bg-center">
        <div className=" max-w-lg row-start-1 row-end-1 col-start-1 col-end-1 z-10 mx-5 p-10 md:p-15 lg:p-20">
          <img className="my-5" src={adtralza} alt="Adtralza logo" />
          <h1 className="text-white text-2xl">Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
