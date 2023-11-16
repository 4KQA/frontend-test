import Image from "next/image";
import MainNavigation from "./_components/navigation/MainNavigation";
import Hero from "./_components/hero/Hero";

export default function Home() {
  return (
    <main className="">
      <MainNavigation></MainNavigation>
      <Hero></Hero>
    </main>
  );
}
