import Image from "next/image";
import VideoImg from "./video-thirdsection.png";

async function ThirdSection() {
  return (
    <section className="bg-gray-200 p-4">
      <div className="mx-2 md:mx-8 lg:mx-12">
        <h2 className="text-2xl md:text-3xl max-w-3xl mt-6 md:mt-8">
          Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
          and symptoms.
        </h2>
        <div className="mt-4 md:mt-6">
          <p className="max-w-md">
            By specifically targeting the IL-13 cytokine, Adtralza® inhibits the
            interaction with type II receptors and prevents IL-13-induced
            inflammatory responses in the skin(1,2). Adtralza® selectively
            modulates the dysregulated immune system by(1):
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/2">
              <p className="mt-4 md:mt-0">
                <br /> — Reducing markers of skin inflammation <br /> —
                Improving markers of skin barrier integrity <br /> — Reducing
                epidermal thickness
              </p>
              <div className="mt-4">
                <button className="rounded-full px-4 py-2 bg-fuchsia-600 text-white">
                  Watch the video
                </button>
                <p className="mt-2 md:mt-4 text-sm italic text-gray-500">
                  Duration 2:43
                </p>
              </div>
            </div>
            <Image className="mt-6 md:mt-0 md:w-1/2" src={VideoImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ThirdSection;
