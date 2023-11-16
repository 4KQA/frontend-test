import Image from "next/image";
import EmployeeImage from "src/app/assets/image/employee.jpg";
import InjectionImage from "src/app/assets/image/injection.jpg";
import styles from "./ClinicalTools.module.css";

function ClinicalTools() {
  return (
    <section className="px-4 lg:px-60 py-16">
      <h2 className="text-2xl text-dermaPrimary mb-10">Clinical tools - at a glance</h2>
      <div className="mx-auto flex flex-col lg:flex-row gap-10">
        <div className="bg-dermaGrey flex flex-col gap-10 mb-10">
          <Image src={EmployeeImage} alt="Employee" width={1000} height={500}></Image>
          <h3 className="px-4 text-2xl text-dermaPrimary">Dosing guide</h3>
          <p className="px-4">Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1)</p>
          <a href="#" className="px-4 mb-10 text-dermaSecondary">
            Learn more about application and dosing
          </a>
        </div>
        <div className="bg-dermaGrey flex flex-col gap-10 mb-10">
          <Image src={InjectionImage} alt="Injection" width={1000} height={500}></Image>
          <h3 className="px-4 text-2xl text-dermaPrimary">Dosing guide</h3>
          <p className="px-4">Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1)</p>
          <a href="#" className="px-4 mb-10 text-dermaSecondary">
            Learn more about application and dosing
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClinicalTools;
