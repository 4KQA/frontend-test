import hero from "../images/bigphoto.svg";
import adtralzaLogo from "../images/adtralza_logo.svg";
import adtralza from "../images/adtralza.svg";
import nine from "../images/nine.svg";
import burden from "../images/burden.svg";
import safety from "../images/safety.svg";

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
    </div>
  );
}
