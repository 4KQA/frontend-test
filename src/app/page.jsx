import PrimaryNavigation from "./components/PrimaryNavigation";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import Information from "./components/Information";
import ClinicalTools from "./components/ClinicalTools";
import Videos from "./components/Videos";

export default function Home() {
  return (
    <div className="py-10 italic font-thin">
      <PrimaryNavigation />
      <main>
        <Hero />
        <ProductShowcase />
        <Testimonials />
        <Information/>
        <ClinicalTools/>
        <Videos/>
      </main>
    </div>
  );
}
