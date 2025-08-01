import { useState } from "react";
import Header from "./components/Header/Header";
import LowerHeader from "./components/Header/LowerHeader";
import CarouselEffect from "./components/Carousal/CarousalEffect";
import Catagory from "./components/catagory/Catagory";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <LowerHeader />
      <CarouselEffect />
      <Catagory />
      <Footer />
    </>
  );
}

export default App;
