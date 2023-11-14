import React from "react";
import InfoIllustration from "../InfoIllustration";

const InfoSection = () => {
  return (
    <div>
      <div className="flex flex-row pt-20 pb-32 justify-center">
        <InfoIllustration
          picture="/nineoutoften.png"
          headline="Long term sustained improvment"
          description="9 out of 10 respondents experienced sustained disease control in clinical trials. 10 providing sustained improvements in the burden of the disease (1, 2, 1, 8*#). "
          link="See efficacy and trial data"
          headlineStyle={{ paddingBottom: "6px", paddingTop: "7px" }}
        />
        <InfoIllustration
          picture="/heart.png"
          headline="Improvements in the burden of the disease"
          description="Patiens in the clinical trails saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32 (12, 13)"
          link="Learn more about the quality of life improvements"
        />
        <InfoIllustration
          picture="/shield.png"
          headline="Good safety profile "
          description="lorem ipsum dolor sit amet, consectet null a ante et justo consequ velit esse cillum dolore magna. Cum sociis natoque penatibus et justo consequ velit esse cillum dolore magna"
          link="See efficacy and trial data"
          headlineStyle={{ paddingBottom: "40px" }}
        />
      </div>
    </div>
  );
};

export default InfoSection;
