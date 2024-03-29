import React from "react";
import McCourse from "./MainContainer/McCourse";
import Header from "./Header";
import McAbout from "./MainContainer/McAbout";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <McAbout/>
      <McCourse />
      <Footer/>
    </div>
  );
};

export default AboutUs;
