import React from "react";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AdtralzaSection from "@/components/sections/AdtralzaSection";
import InfoSection from "@/components/sections/InfoSection";
import VideoSection from "@/components/sections/VideoSection";
import BoxSection from "@/components/sections/BoxSection";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div>
      <SearchBar />
      <Navbar />
      <HeroSection />
      <AdtralzaSection />
      <InfoSection />
      <VideoSection />
      <BoxSection />
      <Footer />
    </div>
  );
};

export default index;
