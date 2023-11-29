import Clinicalcard from "./Clinicalcard";
import doc from "../assets/doc.png";
import thigh from "../assets/thigh.png";

function Clinical() {
  return (
    <section className=" p-10">
      <h2 className="text-2xl text-leoBlue my-10 mx-2 md:mx:10 lg:mx-20">Clinical tools - at a glance</h2>
      <div className="flex flex-row justify-center gap-5 flex-wrap">
        <Clinicalcard image={doc} alt="Nurse" heading="Dosing guide" text="Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). " link="Learn more about application and dosing" />
        <Clinicalcard image={thigh} alt="Needle in thigh" heading="Patient injection made simple" text="This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton." link="Watch the video" />
      </div>
    </section>
  );
}

export default Clinical;
