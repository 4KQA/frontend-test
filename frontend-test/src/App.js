import "./App.css";
import MainNavigation from "./components/MainNavigation";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import SecondNav from "./components/SecondNav";
import ThirdNav from "./components/ThirdNav";

function App() {
  const [showSecondNav, setShowSecondNav] = useState(true);
  const [showThirdNav, setShowThirdNav] = useState(true);

  const handleFirstNavClick = () => {
    setShowSecondNav(!showSecondNav);
  };
  const handleSecondNavClick = () => {
    setShowThirdNav(!showThirdNav);
  };
  return (
    <div className="App">
      <SearchBar />
      <MainNavigation handleFirstNavClick={handleFirstNavClick} />
      {showSecondNav && (
        <SecondNav handleSecondNavClick={handleSecondNavClick} />
      )}
      {showThirdNav && <ThirdNav />}
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
