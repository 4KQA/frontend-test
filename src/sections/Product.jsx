import hero from "../images/bigphoto.svg";
import adtralzaLogo from "../images/adtralza_logo.svg";
import adtralza from "../images/adtralza.svg";
import nine from "../images/nine.svg";
import burden from "../images/burden.svg";
import safety from "../images/safety.svg";
import molecule from "../images/molecule.svg";
import scrubs from "../images/scrubs.svg";
import injection from "../images/injection.svg";
import Infocard from "../components/Infocard";
import VideoCard from "../components/VideoCard";
import ProductAd from "../components/ProductAd";
import ProductResults from "../components/ProductResults";
import ProductVideo from "../components/ProductVideo";

export default function Product() {
  return (
    <div className="product">
      <ProductAd
        heroSrc={hero}
        heroAlt={"Woman in different stages of Adtralza treatment"}
        logoSrc={adtralzaLogo}
        logoAlt={"Adtralza logo"}
        heroText="Adtralza® is a new treatment for adult patients with
            moderate-to-severe atopic dermatitis (eczema) who are candidates for
            systemic therapy."
        productSrc={adtralza}
        productAlt={"One box of Adtralza"}
        productText="It is the first and only biologic developed to specifically
            neutralize IL-13, a key driver of atopic dermatitis signs and
            symptoms(1,2)"
        linkHref={"#"}
        productName={"Adtralza"}
      />

      <div className="productResults fixedMargin">
        <ProductResults
          imgSrc={nine}
          altText={"9 out of 10 - in a circle - illustrated"}
          heading={"Long term sustained improvement"}
          text="9 out of 10 respondents experienced sustained disease control in
              clinical trials 10, providing sustained improvements in the burden
              of disease(1,2, 1, 8*†‡)."
          linkHref={"/treatments/adtralza/efficacy"}
          linkText={"See efficacy and trial data"}
        />
        <ProductResults
          imgSrc={burden}
          altText={"Heart floating over hand - in a circle - illustrated"}
          heading={"Improvements in the burden of disease"}
          text="Patients in clinical trials saw an improvement in Quality of Life
              with early symptom relief and sustained improvements in burden of
              disease from week 16 to 32(12,13)."
          linkHref={"/treatments/adtralza/quality"}
          linkText={"Learn more about quality of life improvements"}
        />
        <ProductResults
          imgSrc={safety}
          altText={
            "Shield with checkmark floating over hand - in a circle - illustrated"
          }
          heading={"Good safety profile"}
          text=""
          linkHref={"/treatments/adtralza/safety"}
          linkText={"See safety profile"}
        />
      </div>

      <div className="howItWorks">
        <ProductVideo
          heading="Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
          and symptoms."
          text="By specifically targeting the IL-13 cytokine, Adtralza® inhibits
          the interaction with type II receptors and prevents IL-13-induced
          inflammatory responses in the skin(1,2). Adtralza® selectively
          modulates the dysregulated immune system by(1):"
          point1={"Reducing markers of skin inflammation"}
          point2={"Improving markers of skin barrier integrity"}
          point3={"Reducing epidermal thickness"}
          duration={"2:43"}
          placeholderSrc={molecule}
          altText={"Placeholder for video"}
          videoSrc={"#"}
        />
      </div>

      <div className="clinicalTools fixedMargin">
        <h2>Clinical tools - at a glance</h2>
        <div className="cardFlex">
          <Infocard
            imageSrc={scrubs}
            heading="Dosing guide"
            text="Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). "
            linkHref="/treatments/adtralza/dosing"
            linkText="Learn more about application and dosing"
          />
          <Infocard
            imageSrc={injection}
            heading="Patient injection made simple"
            text="This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton."
            linkHref="#"
            linkText="Watch the video"
          />
        </div>
      </div>

      <div className="KOL">
        <div className="fixedMargin">
          <h2>KOL Videos - get expert insights here</h2>
          <p>
            See what Key opinion leaders have to say about their experiences
            with Adtralza®
          </p>
          <div className="videoFlex">
            <VideoCard
              placeholderSrc={molecule}
              videoSrc={"#"}
              title="Video title"
              text="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
            />
            <VideoCard
              placeholderSrc={molecule}
              videoSrc={"#"}
              title="Video title"
              text="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
            />
            <VideoCard
              placeholderSrc={molecule}
              videoSrc={"#"}
              title="Video title"
              text="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
            />
            <VideoCard
              placeholderSrc={molecule}
              videoSrc={"#"}
              title="Video title"
              text="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
