import Image from "next/image";
import MainNavigation from "./_components/navigation/MainNavigation";
import Hero from "./_components/hero/Hero";
import FirstSection from "./_components/first-section/FirstSection";
import SecondSection from "./_components/second-section/SecondSection";
import ThirdSection from "./_components/third-section/ThirdSection";
import FourthSection from "./_components/fourth-section/FourthSection";
import Footer from "./_components/footer/Footer";

export default function Home() {
  return (
    <main className="">
      <MainNavigation></MainNavigation>
      <Hero></Hero>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <Footer></Footer>
    </main>
  );
}
