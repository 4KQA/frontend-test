import React from "react";
import Image from "next/image";
import Button from "../Button";

const VideoSection = () => {
  return (
    <>
      <div className=" bg-neutral-100  flex flex-col gap-32 pt-10 pb-28">
        <h2 className="text-4xl text-center text-navy-blue">
          Adtralza neutralizes IL-13, a key driver of Atopic Dermatitis signs
          and symptoms
        </h2>
        <div className="flex flex-row justify-center gap-14 font-lato italic">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl text-navy-blue max-w-xl pb-12">
              By specially By specifically targeting the IL-13 cytokine,
              Adtralza® inhibits the interaction with type II receptors and
              prevents IL-13-induced inflammatory responses in the skin(1,2).
            </p>
            <p className="text-lg">
              Adtralza® selectively modulates the dysregulated immune system
              by(1):
            </p>
            <ul className="list list-disc pl-12 pb-12">
              <li>Reducing markers of skin inflammation</li>
              <li>Improving markers of skin barrier integrity</li>
              <li>Reducing epidermal thickness</li>
            </ul>
            <div className="pl-40">
              <Button content="Watch the video" />
            </div>
          </div>
          <Image
            src="/videosection.png"
            alt="Billede til video section"
            width={600}
            height={0}
          />
        </div>
      </div>
    </>
  );
};

export default VideoSection;
