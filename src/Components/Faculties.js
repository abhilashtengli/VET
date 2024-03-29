import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { images } from "../../src/Utils/Constants";
import ImageScroller from "./ImageScroller";
const Faculties = () => {
  return (
    <div>
      <Header />
      <ImageScroller />
      <Footer />
    </div>
  );
};

export default Faculties;
