import React from "react";
import CollegeImages from "./CollegeImages";
import McAbout from "./McAbout";
import McApproval from "./McApproval";
import McCourse from "./McCourse";
import McFaq from "./McFaq";
import Footer from "../Footer";
import CollegeName from "./CollegeName";
import CollegeVision from "./CollegeVision";

const MainContainer = () => {
  return (
    <>
      <CollegeName />
      <div className="flex-col-reverse lg:flex-row flex lg:justify-between">
        <CollegeVision />
        <CollegeImages />
      </div>
      <McAbout />
      <McApproval />
      <McCourse />
      <McFaq />
      <Footer />
    </>
  );
};

export default MainContainer;
