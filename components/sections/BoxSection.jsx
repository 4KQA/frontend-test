import React from "react";
import Tools from "../Tools";

const BoxSection = () => {
  return (
    <div>
      <div className=" flex flex-row justify-center gap-32 p-28">
        <Tools
          picture="/nurse.png"
          headline="Dosing guide"
          text="Adtralza has a straightforward dosing regimen, with 150 mg prefilled syringes (1)"
          path="/"
          linktext="Learn more about application and dosing"
        />
        <Tools
          picture="/suringe.png"
          headline="Patient injection made simple"
          text="This step by step video guide shows the patient how to self inject using the two syringes that come in the Adratlza carton"
          path="/"
          linktext="Watch the video"
        />
      </div>
    </div>
  );
};

export default BoxSection;
