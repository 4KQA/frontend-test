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

export default function Product() {
  return (
    <div className="product">
      <div className="productAd">
        <img
          src={hero}
          alt="Woman in different stages of Adtralza treatment"
          className="hero"
        />
        <div className="heroText fixedMargin">
          <img src={adtralzaLogo} alt="Adtralza logo" className="productLogo" />

          <h2 className="productAdText">
            Adtralza® is a new treatment for adult patients with
            moderate-to-severe atopic dermatitis (eczema) who are candidates for
            systemic therapy.
          </h2>
        </div>
      </div>

      <div className="productPresentation">
        <div className="productPackaging fixedMargin">
          <img
            src={adtralza}
            alt="One package of Adtralza"
            className="productBox"
          />
          <div className="productPackagingText">
            <h2>
              It is the first and only biologic developed to specifically
              neutralize IL-13, a key driver of atopic dermatitis signs and
              symptoms(1,2)
            </h2>

            <a href="#">
              Learn more about how Adtralza® works and how to use it in
              treatment.
            </a>
          </div>
        </div>
      </div>
      <div className="productResults fixedMargin">
        <div className="resultsColumn">
          <img src={nine} alt="9 out of 10 - in a circle - illustrated" />
          <div className="resultsText">
            <h3>Long term sustained improvement</h3>
            <p>
              9 out of 10 respondents experienced sustained disease control in
              clinical trials 10, providing sustained improvements in the burden
              of disease(1,2, 1, 8*†‡).{" "}
            </p>
            <a href="#">See efficacy and trial data</a>
          </div>
        </div>
        <div className="resultsColumn">
          <img
            src={burden}
            alt="Heart floating over hand - in a circle - illustrated"
          />
          <div className="resultsText">
            <h3>Improvements in the burden of disease</h3>
            <p>
              Patients in clinical trials saw an improvement in Quality of Life
              with early symptom relief and sustained improvements in burden of
              disease from week 16 to 32(12,13).
            </p>
            <a href="#">Learn more about quality of life improvements</a>
          </div>
        </div>
        <div className="resultsColumn">
          <img
            src={safety}
            alt="Shield with checkmark floating over hand - in a circle - illustrated"
          />
          <div className="resultsText">
            <h3>Good safety profile</h3>
            <p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
            <a href="#">See safety profile </a>
          </div>
        </div>
      </div>

      <div className="howItWorks">
        <h2 className="fixedMargin">
          Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
          and symptoms.
        </h2>
        <div className="howItWorksFlex fixedMargin">
          <div className="howItWorksText">
            <p>
              By specifically targeting the IL-13 cytokine, Adtralza® inhibits
              the interaction with type II receptors and prevents IL-13-induced
              inflammatory responses in the skin(1,2). Adtralza® selectively
              modulates the dysregulated immune system by(1):
            </p>
            <p>— Reducing markers of skin inflammation</p>
            <p>— Improving markers of skin barrier integrity</p>
            <p>— Reducing epidermal thickness</p>
            <button className="watchBtn">Watch the video</button>
            <br />
            <h7>Duration: 2:43</h7>
          </div>
          <div className="howItWorksVideo">
            <img src={molecule} alt="Placeholder for video" />
          </div>
        </div>
      </div>

      <div className="clinicalTools fixedMargin">
        <h2>Clinical tools - at a glance</h2>
        <div className="cardFlex">
          <Infocard
            imageSrc={scrubs}
            heading="Dosing guide"
            text="Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). "
            linkHref="#"
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

      <div className="KOL fixedMargin">
        <h2>KOL Videos - get expert insights here</h2>
        <p>
          See what Key opinion leaders have to say about their experiences with
          Adtralza®
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
  );
}
