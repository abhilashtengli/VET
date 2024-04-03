import React from "react";
import ImageSlider from "../ChildComponent/ImageSlider";
import { image } from "../../Utils/Constants";

const CollegeImages = () => {
  return (
    <div className="w-screen md:w-[60%] px-5 md:p-5">
      <div className="w-full p-2  md:p-2  bg-gray-200 rounded-lg">
        <ImageSlider images={image} interval={2000} />
      </div>
    </div>
  );
};

export default CollegeImages;
