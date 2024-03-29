import React from "react";
import Header from "./Header";
import McCourse from "./MainContainer/McCourse";
import Footer from "./Footer";

const Courses = () => {
  return (
    <div className="">
      <Header />
      <div className="">
        <McCourse />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
