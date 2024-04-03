import React from "react";
import CollegeName from "./CollegeName";
import CollegeImages from "./CollegeImages";
import McAbout from "./McAbout";
import McApproval from "./McApproval";
import McCourse from "./McCourse";
import McFaq from "./McFaq";
import Footer from "../Footer";

const MainContainer = () => {
  return (
    <>
      <div className="flex justify-between">
        <CollegeName />
        {/* <CollegeImages /> */}
      </div>
      <McAbout />
      <McApproval />
      <McCourse />
      <McFaq />
      {/* <Footer/> */}
    </>
  );
};

export default MainContainer;
