import Image from "next/image";
import MainNavigation from "./_components/navigation/MainNavigation";
import Hero from "./_components/hero/Hero";
import FirstSection from "./_components/first-section/FirstSection";
import SecondSection from "./_components/second-section/SecondSection";

export default function Home() {
  return (
    <main className="">
      <MainNavigation></MainNavigation>
      <Hero></Hero>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
    </main>
  );
}
