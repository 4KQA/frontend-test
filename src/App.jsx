import Gray from "./components/Gray";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Clinical from "./components/Clinical";
import Videos from "./components/Videos";

import adtralza from "./assets/adtralza-packshot-gebaut.png";
import rating from "./assets/rating.png";
import improve from "./assets/improvement.png";
import safety from "./assets/safety.png";
import cells from "./assets/cells.png";

function App() {
  return (
    <body className=" font-sans font-thin">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Gray>
          <div className="flex flex-wrap flex-row md:flex-nowrap justify-center items-center p-10">
            <img src={adtralza} alt="The Adtralza product" />
            <div className=" md:max-w-md">
              <h2 className=" text-leoBlue text-2xl my-4">It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</h2>
              <p>Learn more about how Adtralza® works and how to use it in treatment.</p>
            </div>
          </div>
        </Gray>
        <section className=" p-5 md:flex md:flex-row md:content-start md:gap-5 md:px-40">
          <Card image={rating} heading="Long term sustained improvement" text="9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). " link="See efficacy and trial data" alt="Nine out of ten" />
          <Card image={improve} heading="Improvements in the burden of disease" text="Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13)." link="Learn more about quality of life improvements" alt="Improvement" />
          <Card image={safety} heading="Good safety profile" link="See safety profile" alt="Safety" />
        </section>
        <Gray>
          <div className="p-20">
            <h2 className="text-2xl text-leoBlue mb-24 ">Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h2>
            <p className=" mb-5">By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).</p>
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-col items-left justify-between">
                <div>
                  <p>Adtralza® selectively modulates the dysregulated immune system by(1): </p>
                  <ul>
                    <li>- Reducing markers of skin inflammation </li>
                    <li>- Improving markers of skin barrier integrity </li>
                    <li>- Reducing epidermal thickness</li>
                  </ul>
                </div>
                <div>
                  <button className=" text-white w-1/3 rounded-2xl px-3 py-2 bg-leoPink my-5">Watch the video</button>
                  <p>Duration: 2:43</p>
                </div>
              </div>
              <img src={cells} alt="Cells" />
            </div>
          </div>
        </Gray>
        <Clinical />
        <Gray>
          <Videos />
        </Gray>
      </main>
    </body>
  );
}

export default App;
