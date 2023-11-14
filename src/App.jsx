import React from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Product />
    </>
  );
}

export default App;
