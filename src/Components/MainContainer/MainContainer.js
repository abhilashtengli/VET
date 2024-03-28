import React from "react";
import CollegeName from "./CollegeName";
import CollegeImages from "./CollegeImages";
import McAbout from "./McAbout";
import McApproval from "./McApproval";
import McCourse from "./McCourse";
import McFaq from "./McFaq";

const MainContainer = () => {
  return (
    <>
      <div className="flex">
        <CollegeName />
        <CollegeImages />
      </div>
      <McAbout />
      <McApproval />
      <McCourse />
      <McFaq />
    </>
  );
};

export default MainContainer;
