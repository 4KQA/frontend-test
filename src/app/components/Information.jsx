import DnaImage from "src/app/assets/image/dna-image.jpg";
import Image from "next/image";

function Information() {
  return (
    <section className="bg-dermaGrey px-4 lg:px-60 py-16">
      <h2 className="text-2xl text-dermaPrimary mb-16">Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h2>
      <p className="mb-6">By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).</p>
      <div className="lg:flex lg:gap-10">
        <div className="flex flex-col place-self-start gap-16">
          <p className="">Adtralza® selectively modulates the dysregulated immune system by(1):</p>
          <ul>
            <li>- Reducing markers of skin inflammation</li>
            <li>- Improving markers of skin barrier integrity</li>
            <li>- Reducing epidermal thickness</li>
          </ul>
          <div>
            <a href="#" className="px-8 py-4 bg-dermaSecondary w-fit text-white rounded-full">
              Watch the video
            </a>
            <p className="my-6">Duration: 2:43</p>
          </div>
        </div>
        <Image style={{ objectFit: "cover" }} src={DnaImage} alt="Image of DNA strings" width={712} height={400}></Image>
      </div>
    </section>
  );
}

export default Information;
